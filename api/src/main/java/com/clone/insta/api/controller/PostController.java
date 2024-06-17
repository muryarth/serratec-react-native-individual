package com.clone.insta.api.controller;

import com.clone.insta.api.dto.PostResponseDTO;
import com.clone.insta.api.model.Image;
import com.clone.insta.api.model.Post;
import com.clone.insta.api.service.ImageService;
import com.clone.insta.api.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/posts")
@CrossOrigin
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private ImageService imageService;

    @GetMapping
    public ResponseEntity<List<PostResponseDTO>> findAll() {
        return ResponseEntity.ok(postService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostResponseDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(postService.findById(id));
    }

    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<PostResponseDTO> findById(
            @RequestPart("post") Post post,
            @RequestPart("imagem") MultipartFile imagem) throws IOException {

        PostResponseDTO postResponseDTO = postService.save(post, imagem);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(postResponseDTO.getId())
                .toUri();

        return ResponseEntity.created(uri).body(postResponseDTO);
    }

    @PutMapping(value = "/{id}", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<PostResponseDTO> update(
            @PathVariable Long id,
            @RequestPart("post") Post updatedPost,
            @RequestPart("imagem") MultipartFile imagem) throws IOException {
        PostResponseDTO postResponseDTO = postService.update(id, updatedPost, imagem);
        return ResponseEntity.ok(postResponseDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) throws IOException {
        postService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    /* Obter imagem */

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> findImageByPostId(@PathVariable Long id) {
        Image image = imageService.findImageByPostId(id);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", image.getType());
        headers.add("Content-length", String.valueOf(image.getContent().length));

        return new ResponseEntity<>(image.getContent(), headers, HttpStatus.OK);
    }
}