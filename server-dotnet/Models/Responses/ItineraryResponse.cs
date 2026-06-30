using System.Text.Json.Serialization;

namespace VoyagoApi.Models.Responses;

public class ItineraryResponse
{
    [JsonPropertyName("itineraryText")]
    public string ItineraryText { get; set; } = string.Empty;
}
