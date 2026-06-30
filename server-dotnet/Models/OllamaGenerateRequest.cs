using System.Text.Json.Serialization;

namespace VoyagoApi.Models;

public class OllamaGenerateRequest
{
    [JsonPropertyName("model")]
    public string Model { get; set; } = "llama3";

    [JsonPropertyName("prompt")]
    public string Prompt { get; set; } = string.Empty;

    [JsonPropertyName("format")]
    public string Format { get; set; } = "json";

    [JsonPropertyName("stream")]
    public bool Stream { get; set; } = false;
}
