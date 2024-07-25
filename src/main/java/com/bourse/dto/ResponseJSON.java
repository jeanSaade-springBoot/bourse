package com.bourse.dto;

public class ResponseJSON {
    private String message;

    public ResponseJSON(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
