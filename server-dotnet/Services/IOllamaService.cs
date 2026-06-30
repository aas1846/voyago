using VoyagoApi.Models.Responses;

namespace VoyagoApi.Services;

public interface IOllamaService
{
    Task<OllamaRawResponse> GenerateAsync(string prompt, CancellationToken ct = default);
}
