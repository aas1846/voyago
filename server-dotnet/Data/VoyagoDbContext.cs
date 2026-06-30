using Microsoft.EntityFrameworkCore;
using VoyagoApi.Entities;

namespace VoyagoApi.Data;

public class VoyagoDbContext : DbContext
{
    public VoyagoDbContext(DbContextOptions<VoyagoDbContext> options) : base(options) { }

    public DbSet<Location> Locations => Set<Location>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Location>(entity =>
        {
            entity.ToTable("Location");
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).HasMaxLength(30);
            entity.Property(e => e.Name).IsRequired();
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("NOW()");
        });
    }
}
