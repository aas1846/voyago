using System.Net.Http.Json;
using VoyagoApi.Models;
using VoyagoApi.Models.Responses;

namespace VoyagoApi.Services;

public class OllamaService : IOllamaService
{
    private readonly HttpClient _httpClient;
    private readonly string _model;

    public OllamaService(HttpClient httpClient, IConfiguration config)
    {
        _httpClient = httpClient;
        _model = config.GetValue<string>("Ollama:Model") ?? "llama3";
    }

    public async Task<OllamaRawResponse> GenerateAsync(string prompt, CancellationToken ct = default)
    {
        var request = new OllamaGenerateRequest
        {
            Model = _model,
            Prompt = prompt,
            Format = "json",
            Stream = false
        };

        var response = await _httpClient.PostAsJsonAsync("/api/generate", request, ct);
        response.EnsureSuccessStatusCode();

        var result = await response.Content.ReadFromJsonAsync<OllamaRawResponse>(cancellationToken: ct);
        return result ?? throw new InvalidOperationException("Null response from Ollama");
    }
}
