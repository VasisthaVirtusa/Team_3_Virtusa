import java.io.*;
public class WordCount {
    public static void main(String[] args){
        String inputFile = "input.txt";
        String outputFile = "output.txt";
        int count = 0;
        try{
            //Reads data from file
            BufferedReader reader = new BufferedReader(new FileReader(inputFile));
            String line;
            while((line = reader.readLine()) != null){
                //Remove extra spaces & split line into words
                String[] words = line.trim().split("\\s+");
                if(!line.trim().isEmpty()){
                    count += words.length;
                }
            }
            reader.close();

            //Writing result to output file
            BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile)); 
            writer.write("Total word count: " + count);
            writer.close();
            System.out.println("Word count completed successfully.");
            System.out.println("Result written to " + outputFile);
        }catch (IOException e){
            System.out.println("An error occured: "+e.getMessage());
        }
    }
}