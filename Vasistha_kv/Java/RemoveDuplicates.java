import java.util.HashSet;
import java.util.Set;

public class RemoveDuplicates {
    public static void main(String[] args) {

        int[] numbers = {10, 20, 10, 30, 20, 40, 30};

        Set<Integer> set = new HashSet<>();

        for (int i = 0; i < numbers.length; i++) {
            set.add(numbers[i]);
        }

        System.out.println("Array after removing duplicates:");

        for (int number : set) {
            System.out.print(number + " ");
        }
    }
}
