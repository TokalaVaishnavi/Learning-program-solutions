import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Notebook", "Stationery"),
            new Product(3, "Headphones", "Electronics"),
            new Product(4, "T-shirt", "Clothing"),
            new Product(5, "Coffee Mug", "Kitchen")
        };

        // Linear Search
        Product foundLinear = LinearSearch.linearSearch(products, "Notebook");
        System.out.println("Linear Search Result: " + foundLinear);

        // Sort before binary search
        Arrays.sort(products, (a, b) -> a.productName.compareTo(b.productName));

        // Binary Search
        Product foundBinary = BinarySearch.binarySearch(products, "Notebook");
        System.out.println("Binary Search Result: " + foundBinary);
    }
}

