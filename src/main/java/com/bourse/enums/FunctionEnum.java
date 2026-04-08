package com.bourse.enums;

import java.util.HashMap;
import java.util.Map;

public enum FunctionEnum {

    ONE_HUNDRED_DAY_MOVING_AVERAGE(1,"100D","100D moving average"),
    TWO_HUNDRED_DAY_MOVING_AVERAGE(2,"200D","200D moving average"),
    DAILY_CHANGE_IN_PERCENTAGE(3,"DCP","Daily Change In %"),
    DAILY_CHANGE_INCREMENT(4,"DCI","Daily Change Increment"),
    WEEKLY_CHANGE_IN_PERCENTAGE(5,"WCP","Weekly Change In %"),
    WEEKLY_CHANGE_INCREMENT(6,"WCI","Weekly Change Increment"),
    TEN_YR_PERCENTILE(7,"10YP","10 Yr Percentile"),
    TWENTY_YR_PERCENTILE(8,"20YP","20 Yr Percentile"),
    CENTURY_PERCENTILE(9,"CP","Century Percentile"),
    MONTHLY_CHANGE_IN_PERCENTAGE(10,"MCP","Monthly Change In %"),
    MONTHLY_CHANGE_INCREMENT(11,"MCI","Monthly Change Increment"),
    QUARTERLY_CHANGE_IN_PERCENTAGE(12,"QCP","Quarterly Change In %"),
    QUARTERLY_CHANGE_INCREMENT(13,"QCI","Quarterly Change Increment"),
    YEARLY_CHANGE_IN_PERCENTAGE(14,"YCP","Yearly Change In %"),
    YEARLY_CHANGE_INCREMENT(15,"YCI","Yearly Change Increment"),
    SIXTH_MONTH_MOVING_AVERAGE(16,"6MA","6M moving average"),
    EIGHTEEN_MONTH_MOVING_AVERAGE(17,"18MA","18M moving average"),
    ONE_YEAR_MOVING_AVERAGE(18,"12MA","1yr moving average"),
    TWO_YEAR_MOVING_AVERAGE(19,"24MA","2yr moving average"),

    FIVE_DAY_WEIGHTED_MOVING_AVERAGE(20,"5DWM","5-days weighted MovAvg"),
    SIX_DAY_WEIGHTED_MOVING_AVERAGE(21,"6DWM","6-days weighted MovAvg"),
    SEVEN_DAY_WEIGHTED_MOVING_AVERAGE(22,"7DWM","7-days weighted MovAvg"),
    NINE_DAY_WEIGHTED_MOVING_AVERAGE(23,"9DWM","9-days weighted MovAvg"),
    EIGHTEEN_DAY_WEIGHTED_MOVING_AVERAGE(24,"18DWM","18-days weighted MovAvg"),
    TWENTYONE_DAY_WEIGHTED_MOVING_AVERAGE(25,"21DWM","21-days weighted MovAvg"),
    TWENTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE(26,"25DWM","25-days weighted MovAvg"),
    THIRTY_DAY_WEIGHTED_MOVING_AVERAGE(27,"30DWM","30-days weighted MovAvg"),
    FOURTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE(28,"45DWM","45-days weighted MovAvg"),
    SIXTYTHREE_DAY_WEIGHTED_MOVING_AVERAGE(29,"63DWM","63-days weighted MovAvg"),

    DIFF_FIVE_SIX_DAY_WEIGHTED_MOVING_AVERAGE(30,"5DWM6DWM","5DWM - 6DWM"),
    DIFF_FIVE_SEVEN_DAY_WEIGHTED_MOVING_AVERAGE(31,"5DWM7DWM","5DWM - 7DWM"),
    DIFF_FIVE_NINE_DAY_WEIGHTED_MOVING_AVERAGE(32,"5DWM9DWM","5DWM - 9DWM"),
    DIFF_EIGHTEEN_TWENTYONE_DAY_WEIGHTED_MOVING_AVERAGE(33,"18DWM21DWM","18DWM - 21DWM"),
    DIFF_EIGHTEEN_TWENTYFIVE_DAY_WEIGHTED_MOVING_AVERAGE(34,"18DWM25DWM","18DWM - 25DWM"),
    DIFF_EIGHTEEN_THIRTY_DAY_WEIGHTED_MOVING_AVERAGE(35,"18DWM30DWM","18DWM - 30DWM"),
    DIFF_FOURTYFIVE_SIXTYTHREE_DAY_WEIGHTED_MOVING_AVERAGE(36,"45DWM63DWM","45DWM - 63DWM"),

    OBB_FIVE_DAY(37,"OBB5D","Open Band 5d"),
    OBB_NINE_DAY(38,"OBB9D","Open Band 9d"),
    OBB_EIGHTEEN_DAY(39,"OBB18D","Open Band 18d"),
    OBB_THIRTY_DAY(40,"OBB30D","Open Band 30d"),

    OBS_FIVE_DAY(41,"OBS5D","Open Sell Band 5d"),
    OBS_NINE_DAY(42,"OBS9D","Open Sell Band 9d"),
    OBS_EIGHTEEN_DAY(43,"OBS18D","Open Sell Band 18d"),
    OBS_THIRTY_DAY(44,"OBS30D","Open Sell Band 30d"),

    ELASTIC_BAND_BUY_NINE_DAY(45,"EB9D","Elastic Band Buy 9d"),
    ELASTIC_BAND_BUY_TWENTYONE_DAY(46,"EB21D","Elastic Band Buy 21d"),
    ELASTIC_BAND_SELL_NINE_DAY(47,"ES9D","Elastic Band Sell 9d"),
    ELASTIC_BAND_SELL_TWENTYONE_DAY(48,"ES21D","Elastic Band Sell 21d"),

    BOLLINGER_POSITIVE_TEN_DAY(49,"BOLP10D","Bollinger Upper 10d"),
    BOLLINGER_POSITIVE_TWENTY_DAY(50,"BOLP20D","Bollinger Upper 20d"),
    BOLLINGER_NEGATIVE_TEN_DAY(51,"BOLM10D","Bollinger Lower 10d"),
    BOLLINGER_NEGATIVE_TWENTY_DAY(52,"BOLM20D","Bollinger Lower 20d"),

    DAILY_TRUE_RANGE(53,"TR1","TRUE RANGE"),

    FIVE_DAY_REALIZED_VOL(54,"RV5","5d REALIZED VOL"),
    TEN_DAY_REALIZED_VOL(55,"RV10","10d REALIZED VOL"),
    FIFTEEN_DAY_REALIZED_VOL(56,"RV15","15d REALIZED VOL"),
    TWENTYTWO_DAY_REALIZED_VOL(57,"RV22","22d REALIZED VOL"),
    FIFTY_DAY_REALIZED_VOL(58,"RV50","50d REALIZED VOL"),

    FIVE_DAY_SPAN(59,"SPAN5","5d SPAN"),
    TEN_DAY_SPAN(60,"SPAN10","10d SPAN"),
    FIFTEEN_DAY_SPAN(61,"SPAN15","15d SPAN"),
    TWENTYTWO_DAY_SPAN(62,"SPAN22","22d SPAN"),
    FIFTY_DAY_SPAN(63,"SPAN50","50d SPAN"),
    
    OTHER(0,"OTHER","");

    private final int id;
    private final String function;
    private final String description;

    private static final Map<Integer, FunctionEnum> BY_ID = new HashMap<>();
    private static final Map<String, FunctionEnum> BY_CODE = new HashMap<>();
    private static final Map<String, FunctionEnum> BY_DESCRIPTION = new HashMap<>();
    static {
        for (FunctionEnum e : values()) {
            BY_ID.put(e.id, e);
            BY_CODE.put(e.function, e);
            BY_DESCRIPTION.put(e.description, e);
        }
    }

    FunctionEnum(int id, String function, String description) {
        this.id = id;
        this.function = function;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public String getFunction() {
        return function;
    }

    public String getDescription() {
        return description;
    }

    public static String getFunctionByID(int id) {
        return BY_ID.getOrDefault(id, OTHER).function;
    }
    
    public static int getFunctionIdByDesc(String function) {
        return BY_DESCRIPTION.getOrDefault(function, OTHER).id;
    }

    public static int getFunctionIdByCode(String code) {
        return BY_CODE.getOrDefault(code, OTHER).id;
    }

    public static String getFunctionDescriptionByID(int id) {
        return BY_ID.getOrDefault(id, OTHER).description;
    }
}
