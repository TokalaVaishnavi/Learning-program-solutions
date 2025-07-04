public class LinearSearch {
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName.equals(targetName)) {
                return product;
            }
        }
        return null;
    }
}

