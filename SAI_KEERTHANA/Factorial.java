import java.util.*;

public class Factorial{

    //Factorial using Recursion
    static int factorialRecursion(int n){
        if(n ==1 || n == 0){
            return 1;
        }else{
            return n * factorialRecursion(n-1);
        }
    }

    //Factorial using Iteration
    static int factorialIteration(int n){
        int fact =1;
        for(int i=1;i<=n;i++){
            fact = fact* i;
        }
        return fact;
    }
    public static void main(String[] args){
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter number: ");
        int n = sc.nextInt();
        
         //Handling negative numbers
        if(n<0){
        System.out.println("Factorial cannot be defined for negative numbers");
        }else{
            System.out.println("Factorial using Recursion: "+factorialRecursion(n));
            System.out.println("Factorial using Iteration: "+factorialIteration(n));
        }
    }
}