package com.clone.insta.api.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ControllerExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(NotFoundException.class)
    protected ResponseEntity<Void> handleNotFoundException(NotFoundException ex) {
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(MissingFileException.class)
    protected ResponseEntity<Void> handleMissingFileException(MissingFileException ex) {
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(FileNotFoundException.class)
    protected ResponseEntity<Void> handleFileNotFoundException(FileNotFoundException ex) {
        return ResponseEntity.notFound().build();
    }
}