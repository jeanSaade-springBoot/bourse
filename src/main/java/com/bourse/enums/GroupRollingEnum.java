package com.bourse.enums;

import lombok.Getter;

@Getter
public enum GroupRollingEnum {

    BUNDS(52L, 61L),
    BOBLS(53L, 62L),
    SHATZ(54L, 63L),
    BUXL(55L, 64L),
    OAT(56L, 65L),
    BTP(57L, 67L),
    GILTS(58L, 68L),
    T_NOTES(59L, 69L),
    T_BONDS(60L, 70L);

    private final Long baseGroupId;
    private final Long rollingGroupId;

    GroupRollingEnum(Long baseGroupId, Long rollingGroupId) {
        this.baseGroupId = baseGroupId;
        this.rollingGroupId = rollingGroupId;
    }

    /** base → rolling */
    public static Long getRollingGroupId(Long baseGroupId) {
        if (baseGroupId == null) return null;

        for (GroupRollingEnum g : values()) {
            if (g.baseGroupId.equals(baseGroupId)) {
                return g.rollingGroupId;
            }
        }
        return null;
    }

    /** check if group is base (52–60) */
    public static boolean isBaseGroup(Long groupId) {
        if (groupId == null) return false;

        for (GroupRollingEnum g : values()) {
            if (g.baseGroupId.equals(groupId)) {
                return true;
            }
        }
        return false;
    }

    /** rolling → base (optional) */
    public static Long getBaseGroupId(Long rollingGroupId) {
        if (rollingGroupId == null) return null;

        for (GroupRollingEnum g : values()) {
            if (g.rollingGroupId.equals(rollingGroupId)) {
                return g.baseGroupId;
            }
        }
        return null;
    }
    public static GroupRollingEnum fromBaseGroupId(Long baseGroupId) {
        if (baseGroupId == null) return null;

        for (GroupRollingEnum g : values()) {
            if (g.baseGroupId.equals(baseGroupId)) {
                return g;
            }
        }
        return null;
    }
}
