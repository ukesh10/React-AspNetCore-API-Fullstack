namespace API.Models
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public List<BasketItem> BasketItems { get; set; } = new();

        public void AddBasketItem(Product product, int quantity)
        {
            if (BasketItems.All(basketItem =>  basketItem.Id != product.Id))
            {
                BasketItems.Add(new BasketItem { Product = product, Quantity = quantity });
            }

            var existingItem = BasketItems.FirstOrDefault(basketItem => basketItem.ProductId == product.Id);
            if (existingItem != null) existingItem.Quantity += quantity;
        }

        public void RemoveBasketItem(int productId, int quantity)
        {
            var basketItem = BasketItems.FirstOrDefault(item => item.ProductId == productId);
            if (basketItem == null) return;
            basketItem.Quantity -= quantity;
            if (basketItem.Quantity <= 0 ) BasketItems.Remove(basketItem);
        }
    }
}
