package com.dp.weatherapp.service.dto;

public class GetFileBase64Response extends ApiReponse {

    private String FileString64;

    public String getFileString64() {
        return FileString64;
    }

    public void setFileString64(String fileString64) {
        FileString64 = fileString64;
    }
}
