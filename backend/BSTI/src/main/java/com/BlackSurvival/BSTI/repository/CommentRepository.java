package com.BlackSurvival.BSTI.repository;

import com.BlackSurvival.BSTI.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
