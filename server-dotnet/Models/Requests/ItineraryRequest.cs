using System.Text.Json.Serialization;

namespace VoyagoApi.Models.Requests;

public class ItineraryRequest
{
    [JsonPropertyName("city")]
    public string? City { get; set; }

    [JsonPropertyName("time")]
    public object? Time { get; set; }

    [JsonPropertyName("commute")]
    public string? Commute { get; set; }

    [JsonPropertyName("group")]
    public string? Group { get; set; }

    [JsonPropertyName("spots")]
    public List<SpotInfo>? Spots { get; set; }

    [JsonPropertyName("interests")]
    public string? Interests { get; set; }
}

public class SpotInfo
{
    [JsonPropertyName("lat")]
    public double Lat { get; set; }

    [JsonPropertyName("lng")]
    public double Lng { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;
}
