package com.dp.weatherapp.service.dto;

public class ApiReponse {

    private ApiResponseEnum ResponseCode;
    private String ResponseMessage;

    public ApiResponseEnum getResponseCode() {
        return ResponseCode;
    }

    public void setResponseCode(ApiResponseEnum responseCode) {
        ResponseCode = responseCode;
    }

    public String getResponseMessage() {
        return ResponseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        ResponseMessage = responseMessage;
    }
}
