package com.BlackSurvival.BSTI.service;

import com.BlackSurvival.BSTI.entity.Comment;
import com.BlackSurvival.BSTI.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.DialectOverride;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService{
    CommentRepository repository;
    @Override
    public void post_comment(Comment comment){
        repository.save(comment);
    }

    @Override
    public List<Comment> get_comments(){
        return repository.findAll();
    }

}
