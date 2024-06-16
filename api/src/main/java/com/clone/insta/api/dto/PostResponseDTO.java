package com.clone.insta.api.dto;

import com.clone.insta.api.model.Post;

public class PostResponseDTO {
    private Long id;
    private String autor;
    private byte[] imagem;

    public PostResponseDTO() {
    }

    public PostResponseDTO(Post post) {
        this.id = post.getId();
        this.autor = post.getAutor();
        this.imagem = post.getImagem();
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

    public byte[] getImagem() {
        return imagem;
    }

    public void setImagem(byte[] imagem) {
        this.imagem = imagem;
    }
}
