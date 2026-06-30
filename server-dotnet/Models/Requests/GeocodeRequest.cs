using System.Text.Json.Serialization;

namespace VoyagoApi.Models.Requests;

public class GeocodeRequest
{
    [JsonPropertyName("name")]
    public string? Name { get; set; }
}
