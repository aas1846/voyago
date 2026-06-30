using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using VoyagoApi.Data;
using VoyagoApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Controllers + JSON configuration
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
        options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.Never;
    });

// CORS - allow all origins (matches Express cors() default)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// HttpClient registrations via IHttpClientFactory
builder.Services.AddHttpClient<IOllamaService, OllamaService>(client =>
{
    var baseUrl = builder.Configuration["Ollama:BaseUrl"] ?? "http://localhost:11434";
    client.BaseAddress = new Uri(baseUrl);
    client.Timeout = TimeSpan.FromSeconds(120);
});

builder.Services.AddHttpClient<IMapboxService, MapboxService>(client =>
{
    client.BaseAddress = new Uri("https://api.mapbox.com");
});

builder.Services.AddHttpClient<IGooglePlacesService, GooglePlacesService>(client =>
{
    client.BaseAddress = new Uri("https://maps.googleapis.com");
});

// Entity Framework Core - PostgreSQL
builder.Services.AddDbContext<VoyagoDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

app.UseCors();
app.MapControllers();

app.Run();
