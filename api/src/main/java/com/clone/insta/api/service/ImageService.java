package com.clone.insta.api.service;

import com.clone.insta.api.exception.FileNotFoundException;
import com.clone.insta.api.exception.MissingFileException;
import com.clone.insta.api.exception.NotFoundException;
import com.clone.insta.api.model.Image;
import com.clone.insta.api.model.Post;
import com.clone.insta.api.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public void saveFile(Post post, MultipartFile file) throws IOException {

        if(file.isEmpty()) throw new MissingFileException();

        Image image = new Image();
        image.setName(file.getName());
        image.setType(file.getContentType());
        image.setContent(file.getBytes());
        image.setPost(post);

        imageRepository.save(image);
    }

    @Transactional
    public void updateFile(Post post, MultipartFile file) throws IOException {
        Optional<Image> imageOpt = imageRepository.findByPost(post);

        if(file.isEmpty()) throw new MissingFileException();
        if(imageOpt.isEmpty()) throw new FileNotFoundException();

        Image image = new Image();
        image.setId(imageOpt.get().getId());
        image.setName(file.getName());
        image.setType(file.getContentType());
        image.setContent(file.getBytes());
        image.setPost(post);

        imageRepository.save(image);
    }

    @Transactional
    public Image findImageByPostId(Long id) {
        Optional<Image> imageOpt = imageRepository.findByPost(new Post(id));

        if (imageOpt.isEmpty()) throw new NotFoundException();

        return imageOpt.get();
    }
}
