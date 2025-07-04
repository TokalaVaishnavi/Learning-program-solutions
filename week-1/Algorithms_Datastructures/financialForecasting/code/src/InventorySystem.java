import java.util.HashMap;
import java.util.Scanner;

class Product {
    int productId;
    String productName;
    int quantity;
    double price;

    Product(int id, String name, int qty, double price) {
        this.productId = id;
        this.productName = name;
        this.quantity = qty;
        this.price = price;
    }

    @Override
    public String toString() {
        return "ProductID: " + productId + ", Name: " + productName +
               ", Quantity: " + quantity + ", Price: ₹" + price;
    }
}

public class InventorySystem {
    static HashMap<Integer, Product> inventory = new HashMap<>();

    public static void addProduct(Product p) {
        inventory.put(p.productId, p);
        System.out.println("✅ Product added.");
    }

    public static void updateProduct(int id, int qty, double price) {
        if (inventory.containsKey(id)) {
            Product p = inventory.get(id);
            p.quantity = qty;
            p.price = price;
            System.out.println("✅ Product updated.");
        } else {
            System.out.println("❌ Product not found.");
        }
    }

    public static void deleteProduct(int id) {
        if (inventory.remove(id) != null)
            System.out.println("🗑️ Product deleted.");
        else
            System.out.println("❌ Product not found.");
    }

    public static void main(String[] args) {
        addProduct(new Product(101, "Mouse", 50, 499.99));
        addProduct(new Product(102, "Keyboard", 30, 899.50));
        updateProduct(101, 45, 479.99);
        deleteProduct(102);

        // Display inventory
        System.out.println("\n📦 Inventory List:");
        for (Product p : inventory.values()) {
            System.out.println(p);
        }
    }
}

