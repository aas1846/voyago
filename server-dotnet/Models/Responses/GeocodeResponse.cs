using System.Text.Json.Serialization;

namespace VoyagoApi.Models.Responses;

public class GeocodeResponse
{
    [JsonPropertyName("lat")]
    public double? Lat { get; set; }

    [JsonPropertyName("lng")]
    public double? Lng { get; set; }

    [JsonPropertyName("place")]
    public string? Place { get; set; }
}
