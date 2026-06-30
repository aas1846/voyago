using System.Text.Json.Serialization;

namespace VoyagoApi.Models.Requests;

public class PlaceRequest
{
    [JsonPropertyName("name")]
    public string? Name { get; set; }
}
