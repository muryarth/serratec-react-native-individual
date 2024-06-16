package com.clone.insta.api.model;

import jakarta.persistence.*;

import java.util.Arrays;
import java.util.Objects;

@Entity
public class Post {

    /* Atributos */

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String autor;

    @Lob
    @Column
    private byte[] imagem;

    /* Funções */

    public Post() {
    }

    public Post(Long id, String autor, byte[] imagem) {
        this.id = id;
        this.autor = autor;
        this.imagem = imagem;
    }

    public Long getId() {
        return id;
    }

    public String getAutor() {
        return autor;
    }

    public byte[] getImagem() {
        return imagem;
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
                ", autor='" + autor + '\'' +
                ", imagem=" + Arrays.toString(imagem) +
                '}';
    }
}
