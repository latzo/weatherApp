package com.dp.weatherapp.web.rest;

import com.dp.weatherapp.service.FileService;
import com.dp.weatherapp.service.dto.FileRequestModel;
import com.dp.weatherapp.service.dto.GetFileBase64Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST controller for managing the current user's account.
 */
@RestController
@RequestMapping("/api/file-reader")
public class FileResource {

    @Autowired
    FileService fileService;

    public FileResource(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping("/")
    public GetFileBase64Response GetFileAsBase64String(FileRequestModel model) {
        //TODO
        return new GetFileBase64Response();
    }
}
