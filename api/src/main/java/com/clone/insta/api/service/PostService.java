package com.clone.insta.api.service;

import com.clone.insta.api.dto.PostResponseDTO;
import com.clone.insta.api.exception.NotFoundException;
import com.clone.insta.api.model.Post;
import com.clone.insta.api.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private ImageService imageService;

    public List<PostResponseDTO> findAll() {
        List<Post> posts = postRepository.findAll();
        return posts.stream().map(this::addImageUrl).toList();
    }

    public PostResponseDTO findById(Long id) {
        Optional<Post> postOpt = postRepository.findById(id);
        if (postOpt.isEmpty()) throw new NotFoundException();
        return addImageUrl(postOpt.get());
    }

    public PostResponseDTO save(Post post, MultipartFile file) throws IOException {

        post.setCreatedAt(LocalDateTime.now());
        postRepository.save(post);
        imageService.saveFile(post, file);
        return addImageUrl(post);
    }

    public PostResponseDTO update(Long id, Post updatedPost, MultipartFile file) throws IOException {
        Optional<Post> postOpt = postRepository.findById(id);

        if(file.isEmpty()) throw new FileNotFoundException();
        if(postOpt.isEmpty()) throw new NotFoundException();

        updatedPost.setId(postOpt.get().getId());
        updatedPost.setCreatedAt(postOpt.get().getCreatedAt());
        updatedPost.setImage(postOpt.get().getImage());
        postRepository.save(updatedPost);
        imageService.updateFile(updatedPost, file);

        return addImageUrl(updatedPost);
    }

    public void deleteById(Long id) throws IOException {
        Optional<Post> postOpt = postRepository.findById(id);
        if(postOpt.isEmpty()) throw new NotFoundException();
        postRepository.deleteById(id);
    }

    private PostResponseDTO addImageUrl(Post post){
        URI uri = ServletUriComponentsBuilder
            .fromCurrentContextPath()
            .path("/posts/{id}/image")
            .buildAndExpand(post.getId())
            .toUri();

        PostResponseDTO postResponseDTO = new PostResponseDTO(post);
        postResponseDTO.setUrl(uri.toString());

        return postResponseDTO;
    }
}