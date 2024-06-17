package com.clone.insta.api.dto;

import com.clone.insta.api.model.Post;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;

public class PostResponseDTO {

    /* Atributops */

    private Long id;
    private String autor;
    private String titulo;
    private String legenda;
    private String url;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private LocalDateTime createdAt;

    /* Funções */

    public PostResponseDTO() {
    }

    public PostResponseDTO(Long id, String autor, String titulo, String legenda, String url, LocalDateTime createdAt) {
        this.id = id;
        this.autor = autor;
        this.titulo = titulo;
        this.legenda = legenda;
        this.url = url;
        this.createdAt = createdAt;
    }

    public PostResponseDTO(Post post) {
        this.id = post.getId();
        this.autor = post.getAutor();
        this.titulo = post.getTitulo();
        this.legenda = post.getLegenda();
        this.createdAt = post.getCreatedAt();
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

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getLegenda() {
        return legenda;
    }

    public void setLegenda(String legenda) {
        this.legenda = legenda;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
