package com.clone.insta.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
public class Post {

    /* Atributos */

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String titulo;

    @Column
    private String legenda;

    @Column
    private String autor;

    @Column
    private LocalDateTime createdAt;

    /* Relações */

    @OneToOne(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Image image;

    /* Funções */

    public Post() {
    }

    public Post(Long id) {
        this.id = id;
    }

    public Post(Long id, String titulo, String legenda, String autor, LocalDateTime createdAt, Image image) {
        this.id = id;
        this.titulo = titulo;
        this.legenda = legenda;
        this.autor = autor;
        this.createdAt = createdAt;
        this.image = image;
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createadAt) {
        this.createdAt = createadAt;
    }

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return Objects.equals(id, post.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", legenda='" + legenda + '\'' +
                ", autor='" + autor + '\'' +
                ", createadAt=" + createdAt +
                ", image=" + image +
                '}';
    }
}
