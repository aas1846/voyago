using VoyagoApi.Models.Responses;

namespace VoyagoApi.Services;

public interface IMapboxService
{
    Task<GeocodeResponse> GeocodeAsync(string placeName, CancellationToken ct = default);
}
