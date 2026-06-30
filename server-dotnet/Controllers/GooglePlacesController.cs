using Microsoft.AspNetCore.Mvc;
using VoyagoApi.Models.Requests;
using VoyagoApi.Services;

namespace VoyagoApi.Controllers;

[ApiController]
[Route("api/google")]
public class GooglePlacesController : ControllerBase
{
    private readonly IGooglePlacesService _places;
    private readonly ILogger<GooglePlacesController> _logger;

    public GooglePlacesController(IGooglePlacesService places, ILogger<GooglePlacesController> logger)
    {
        _places = places;
        _logger = logger;
    }

    [HttpPost("place")]
    public async Task<IActionResult> FetchPlace(
        [FromBody] PlaceRequest request,
        CancellationToken ct = default)
    {
        if (string.IsNullOrEmpty(request?.Name))
            return BadRequest(new { error = "Missing place name" });

        try
        {
            var result = await _places.FindPlaceAsync(request.Name, ct);

            if (result == null)
                return NotFound(new { error = "Place not found" });

            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Google Places error for: {Name}", request.Name);
            return StatusCode(500, new { error = "Internal server error" });
        }
    }
}
