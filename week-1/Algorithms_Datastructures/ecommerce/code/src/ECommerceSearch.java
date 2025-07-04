import java.util.Arrays;
import java.util.Comparator;

public class ECommerceSearch {

    // Linear Search
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(targetName)) {
                return p;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int compare = products[mid].productName.compareToIgnoreCase(targetName);
            if (compare == 0)
                return products[mid];
            else if (compare < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Fashion"),
            new Product(3, "Book", "Education"),
            new Product(4, "Phone", "Electronics"),
            new Product(5, "T-shirt", "Fashion")
        };

        // Linear Search
        System.out.println("🔍 Linear Search:");
        Product result1 = linearSearch(products, "Phone");
        System.out.println(result1 != null ? "Found: " + result1.productName : "Not found");

        // Sort for Binary Search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        // Binary Search
        System.out.println("🔍 Binary Search:");
        Product result2 = binarySearch(products, "Phone");
        System.out.println(result2 != null ? "Found: " + result2.productName : "Not found");
    }
}

