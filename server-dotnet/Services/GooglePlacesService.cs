using System.Text.Json;
using VoyagoApi.Models.Responses;

namespace VoyagoApi.Services;

public class GooglePlacesService : IGooglePlacesService
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;

    public GooglePlacesService(HttpClient httpClient, IConfiguration config)
    {
        _httpClient = httpClient;
        _apiKey = config["Google:ApiKey"] ?? throw new ArgumentNullException("Google:ApiKey not configured");
    }

    public async Task<PlaceResponse?> FindPlaceAsync(string name, CancellationToken ct = default)
    {
        var encoded = Uri.EscapeDataString(name);
        var url = $"/maps/api/place/findplacefromtext/json?input={encoded}&inputtype=textquery&fields=name,geometry&key={_apiKey}";

        var response = await _httpClient.GetAsync(url, ct);
        response.EnsureSuccessStatusCode();

        using var doc = await JsonDocument.ParseAsync(
            await response.Content.ReadAsStreamAsync(ct), cancellationToken: ct);

        var candidates = doc.RootElement.GetProperty("candidates");
        if (candidates.GetArrayLength() > 0)
        {
            var first = candidates[0];
            var location = first.GetProperty("geometry").GetProperty("location");
            var lat = location.GetProperty("lat").GetDouble();
            var lng = location.GetProperty("lng").GetDouble();
            var officialName = first.GetProperty("name").GetString() ?? name;

            return new PlaceResponse { Lat = lat, Lng = lng, Name = officialName };
        }

        return null;
    }
}
