using Microsoft.AspNetCore.Mvc;
using VoyagoApi.Models.Requests;
using VoyagoApi.Services;

namespace VoyagoApi.Controllers;

[ApiController]
[Route("api/geocode")]
public class GeocodeController : ControllerBase
{
    private readonly IMapboxService _mapbox;
    private readonly ILogger<GeocodeController> _logger;

    public GeocodeController(IMapboxService mapbox, ILogger<GeocodeController> logger)
    {
        _mapbox = mapbox;
        _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> Geocode(
        [FromBody] GeocodeRequest request,
        CancellationToken ct = default)
    {
        if (string.IsNullOrEmpty(request?.Name))
            return BadRequest(new { error = "Name is required" });

        try
        {
            var result = await _mapbox.GeocodeAsync(request.Name, ct);
            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Geocoding failed for: {Name}", request.Name);
            return StatusCode(500, new { error = "Geocoding failed" });
        }
    }
}
