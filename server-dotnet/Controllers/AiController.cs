using Microsoft.AspNetCore.Mvc;
using VoyagoApi.Models.Requests;
using VoyagoApi.Models.Responses;
using VoyagoApi.Services;

namespace VoyagoApi.Controllers;

[ApiController]
[Route("api/ai")]
public class AiController : ControllerBase
{
    private readonly IOllamaService _ollama;
    private readonly ILogger<AiController> _logger;

    public AiController(IOllamaService ollama, ILogger<AiController> logger)
    {
        _ollama = ollama;
        _logger = logger;
    }

    [HttpGet("locations")]
    public async Task<IActionResult> GetLocations(
        [FromQuery] string city = "New York City",
        [FromQuery] string interests = "",
        CancellationToken ct = default)
    {
        var interestsLine = string.IsNullOrWhiteSpace(interests)
            ? ""
            : $"The traveler is especially interested in: {interests}.";

        var prompt = $@"You are a travel agent AI. Recommend 8-12 highly-rated spots in {city} for tourists.
{interestsLine}
Include both popular tourist attractions and lesser-known local favorites (hidden gems).
Respond ONLY with a raw JSON array of place names as strings.
Example: [""Central Park"", ""Times Square""]".Trim();

        try
        {
            var ollamaResponse = await _ollama.GenerateAsync(prompt, ct);
            return Ok(ollamaResponse);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Ollama error");
            return StatusCode(500, new { error = "Failed to get AI suggestions" });
        }
    }

    [HttpPost("itinerary")]
    public async Task<IActionResult> GetItinerary(
        [FromBody] ItineraryRequest request,
        CancellationToken ct = default)
    {
        if (request.Time == null ||
            string.IsNullOrEmpty(request.Commute) ||
            string.IsNullOrEmpty(request.Group) ||
            request.Spots == null || request.Spots.Count == 0)
        {
            return BadRequest(new { error = "missing query or invalid spots" });
        }

        var spotsList = string.Join(", ", request.Spots.Select(s => s.Name));
        var destination = string.IsNullOrEmpty(request.City) ? "New York City" : request.City;
        var time = request.Time?.ToString() ?? "1";

        var interestsLine = string.IsNullOrWhiteSpace(request.Interests)
            ? ""
            : $"- Interests: {request.Interests}";

        var prompt = $@"You are a travel assistant AI. Create a detailed {time}-day itinerary for {destination}.

Traveler preferences:
- Commute style: {request.Commute}
- Traveling with: {request.Group}
{interestsLine}
- Must-visit spots: {spotsList}

Respond ONLY with valid JSON in this exact format:
{{
  ""days"": [
    {{
      ""dayNumber"": 1,
      ""title"": ""A short title for this day"",
      ""activities"": [
        {{
          ""time"": ""9:00 AM"",
          ""name"": ""Place Name"",
          ""description"": ""Brief description of what to do here"",
          ""location"": ""Address or area name""
        }}
      ]
    }}
  ]
}}

Include 4-6 activities per day. Make times realistic with travel time between spots.".Trim();

        try
        {
            var ollamaResponse = await _ollama.GenerateAsync(prompt, ct);
            var itineraryText = ollamaResponse.Response?.Trim() ?? "";
            return Ok(new ItineraryResponse { ItineraryText = itineraryText });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Ollama error");
            return StatusCode(500, new { error = "Failed to get detailed itinerary" });
        }
    }
}
