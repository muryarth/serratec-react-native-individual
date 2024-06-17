package com.clone.insta.api.repository;

import com.clone.insta.api.model.Image;
import com.clone.insta.api.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface ImageRepository extends JpaRepository<Image, Long> {
    public Optional<Image> findByPost(Post post);
}