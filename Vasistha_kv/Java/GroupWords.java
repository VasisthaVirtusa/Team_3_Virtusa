import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class GroupWords {
    public static void main(String[] args) {

        String[] words = {"apple", "ant", "ball", "bat", "cat"};

        Map<Character, ArrayList<String>> map = new HashMap<>();

        for (String word : words) {

            char firstCharacter = word.charAt(0);

            if (!map.containsKey(firstCharacter)) {
                map.put(firstCharacter, new ArrayList<String>());
            }

            map.get(firstCharacter).add(word);
        }

        for (Character key : map.keySet()) {
            System.out.println(key + " = " + map.get(key));
        }
    }
}