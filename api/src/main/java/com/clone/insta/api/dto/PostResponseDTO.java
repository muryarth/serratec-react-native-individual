package com.clone.insta.api.dto;

import com.clone.insta.api.model.Post;

public class PostResponseDTO {
    private Long id;
    private String autor;
    private String url;

    public PostResponseDTO() {
    }

    public PostResponseDTO(Long id, String autor, String url) {
        this.id = id;
        this.autor = autor;
        this.url = url;
    }

    public PostResponseDTO(Post post) {
        this.id = post.getId();
        this.autor = post.getAutor();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
