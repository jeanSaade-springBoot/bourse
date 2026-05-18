package com.bourse.enums;

public enum PreciousSubGroupEnum {

    CLOSEGOLD(1, "CLOSEGOLD", "CLOSE_GOLD", "CLOSE-GOLD"),
    CLOSESILVER(2, "CLOSESILVER", "CLOSE_SILVER", "CLOSE-SILVER"),

    PLATINUM(3, "PLATINUM", "PLATINUM", "PLATINUM"),

    PLATGOLD(4, "PLATGOLD", "PLATINUM_GOLD", "PLATINUM-GOLD"),
    GOLDSILV(5, "GOLDSILV", "GOLD_SILVER", "GOLD-SILVER"),

    OPENGOLD(6, "OPENGOLD", "OPEN_GOLD", "OPEN-GOLD"),
    HIGHGOLD(7, "HIGHGOLD", "HIGH_GOLD", "HIGH-GOLD"),
    LOWGOLD(8, "LOWGOLD", "LOW_GOLD", "LOW-GOLD"),

    OPENSILVER(9, "OPENSILVER", "OPEN_SILVER", "OPEN-SILVER"),
    HIGHSILVER(10, "HIGHSILVER", "HIGH_SILVER", "HIGH-SILVER"),
    LOWSILVER(11, "LOWSILVER", "LOW_SILVER", "LOW-SILVER"),

    OTHER(0, "OTHER", "OTHER", "OTHER");

    public int id;
    public String code;
    public String name;
    public String description;

    PreciousSubGroupEnum(int id, String code, String name, String description) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
    }

    public static String getCountryByCode(String code) {

        switch (code) {

            case "CLOSEGOLD":
                return CLOSEGOLD.name;

            case "CLOSESILVER":
                return CLOSESILVER.name;

            case "PLATINUM":
                return PLATINUM.name;

            case "PLATGOLD":
                return PLATGOLD.name;

            case "GOLDSILV":
                return GOLDSILV.name;

            case "OPENGOLD":
                return OPENGOLD.name;

            case "HIGHGOLD":
                return HIGHGOLD.name;

            case "LOWGOLD":
                return LOWGOLD.name;

            case "OPENSILVER":
                return OPENSILVER.name;

            case "HIGHSILVER":
                return HIGHSILVER.name;

            case "LOWSILVER":
                return LOWSILVER.name;
        }

        return OTHER.name;
    }

    public static String getCountryBySubGroupID(int id) {

        switch (id) {

            case 1:
                return CLOSEGOLD.name;

            case 2:
                return CLOSESILVER.name;

            case 3:
                return PLATINUM.name;

            case 4:
                return PLATGOLD.name;

            case 5:
                return GOLDSILV.name;

            case 6:
                return OPENGOLD.name;

            case 7:
                return HIGHGOLD.name;

            case 8:
                return LOWGOLD.name;

            case 9:
                return OPENSILVER.name;

            case 10:
                return HIGHSILVER.name;

            case 11:
                return LOWSILVER.name;
        }

        return OTHER.name;
    }
}