using System.Text.Json;
using VoyagoApi.Models.Responses;

namespace VoyagoApi.Services;

public class MapboxService : IMapboxService
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;

    public MapboxService(HttpClient httpClient, IConfiguration config)
    {
        _httpClient = httpClient;
        _apiKey = config["Mapbox:ApiKey"] ?? throw new ArgumentNullException("Mapbox:ApiKey not configured");
    }

    public async Task<GeocodeResponse> GeocodeAsync(string placeName, CancellationToken ct = default)
    {
        var encoded = Uri.EscapeDataString(placeName);
        var url = $"/geocoding/v5/mapbox.places/{encoded}.json?access_token={_apiKey}&limit=1";

        var response = await _httpClient.GetAsync(url, ct);
        response.EnsureSuccessStatusCode();

        using var doc = await JsonDocument.ParseAsync(
            await response.Content.ReadAsStreamAsync(ct), cancellationToken: ct);

        var features = doc.RootElement.GetProperty("features");
        if (features.GetArrayLength() > 0)
        {
            var center = features[0].GetProperty("center");
            if (center.GetArrayLength() == 2)
            {
                var lng = center[0].GetDouble();
                var lat = center[1].GetDouble();
                return new GeocodeResponse { Lat = lat, Lng = lng, Place = placeName };
            }
        }

        return new GeocodeResponse { Lat = null, Lng = null, Place = placeName };
    }
}
