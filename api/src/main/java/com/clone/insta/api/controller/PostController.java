package com.clone.insta.api.controller;

import com.clone.insta.api.dto.PostResponseDTO;
import com.clone.insta.api.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public ResponseEntity<List<PostResponseDTO>> findAll() {
        return ResponseEntity.ok(postService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostResponseDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(postService.findById(id));
    }
}