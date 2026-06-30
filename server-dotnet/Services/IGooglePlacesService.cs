using VoyagoApi.Models.Responses;

namespace VoyagoApi.Services;

public interface IGooglePlacesService
{
    Task<PlaceResponse?> FindPlaceAsync(string name, CancellationToken ct = default);
}
