using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreDbContext: DbContext
    {
        public StoreDbContext(DbContextOptions dbContextOptions): base(dbContextOptions)
        {
        }
        
        public DbSet<Product> Products { get; set; }
    }
}
