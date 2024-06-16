package com.clone.insta.api.service;

import com.clone.insta.api.dto.PostResponseDTO;
import com.clone.insta.api.exception.NotFoundException;
import com.clone.insta.api.model.Post;
import com.clone.insta.api.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<PostResponseDTO> findAll() {
        List<Post> posts = postRepository.findAll();
        return posts.stream().map(PostResponseDTO::new).toList();
    }

    public PostResponseDTO findById(Long id) {
        Optional<Post> postOpt = postRepository.findById(id);
        if (postOpt.isEmpty()) throw new NotFoundException();
        return new PostResponseDTO(postOpt.get());
    }

}
