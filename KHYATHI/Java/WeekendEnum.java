package Java;

enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

public class WeekendEnum {
    public static void main(String[] args) {
        Day day = Day.SATURDAY;
        System.out.println("Day: " + day);
        if (day == Day.SATURDAY || day == Day.SUNDAY) {
            System.out.println("It is a weekend.");
        } else {
            System.out.println("It is a weekday.");
        }
    }
}