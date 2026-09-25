package Java;

import java.util.ArrayList;

public class ArrayListOperations {
    public static void main(String[] args) {

        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Mango");
        fruits.add("Orange");

        System.out.println("After adding elements:");
        System.out.println(fruits);
        fruits.remove("Banana");
        System.out.println("\nAfter removing Banana:");
        System.out.println(fruits);
        if (fruits.contains("Mango")) {
            System.out.println("\nMango is present in the list.");
        } else {
            System.out.println("\nMango is not present in the list.");
        }
    }
}