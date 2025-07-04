public class FinancialForecasting {

    // Recursive method to calculate future value
    public static double futureValueRecursive(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue; // base case
        }
        return (1 + rate) * futureValueRecursive(presentValue, rate, years - 1);
    }

    public static void main(String[] args) {
        double presentValue = 10000; // Rs. 10,000
        double rate = 0.08;          // 8% annual growth
        int years = 5;

        double futureValue = futureValueRecursive(presentValue, rate, years);
        System.out.printf("📈 Future Value after %d years: ₹%.2f%n", years, futureValue);
    }
}
