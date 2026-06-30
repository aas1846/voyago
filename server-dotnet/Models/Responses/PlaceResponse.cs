using System.Text.Json.Serialization;

namespace VoyagoApi.Models.Responses;

public class PlaceResponse
{
    [JsonPropertyName("lat")]
    public double Lat { get; set; }

    [JsonPropertyName("lng")]
    public double Lng { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;
}
