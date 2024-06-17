package com.clone.insta.api.model;

import jakarta.persistence.*;
import java.util.Objects;

@Entity
public class Image {

    /* Atributos */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Lob
    @Column
    private byte[] content;

    @Column
    private String type;

    @Column
    private String name;

    /* Relações */

    @OneToOne
    @JoinColumn(name = "fk_post")
    private Post post;

    /* Funções */

    public Image() {
    }

    public Image(Long id, byte[] content, String type, String name, Post post) {
        this.id = id;
        this.content = content;
        this.type = type;
        this.name = name;
        this.post = post;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Image image = (Image) o;
        return Objects.equals(id, image.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
