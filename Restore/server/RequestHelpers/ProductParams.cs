namespace API.RequestHelpers
{
    public class ProductParams : PaginationParams
    {
        public string? OrderBY { get; set; }
        public string? SearchTerm { get; set; }
        public string? Brands { get; set; }
        public string? Types { get; set; }
    }
}