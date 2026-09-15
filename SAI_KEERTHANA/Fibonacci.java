import java.util.*;
public class Fibonacci{
    static void generate_Fibonacci(int N){
        int a = 0; // first term
        int b = 1; // second term
        for(int i=0;i<N;i++){
            System.out.print(a+" ");
            int c = a+b; //third term is the sum of first two terms
            a=b; //second term becomes the first term
            b=c; //third term becomes the second term
        }
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of terms: ");
        int N = sc.nextInt();
        System.out.println("Fibonacci Series: ");
        generate_Fibonacci(N);
    }
}