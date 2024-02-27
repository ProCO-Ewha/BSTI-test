package com.BlackSurvival.BSTI.service;

import com.BlackSurvival.BSTI.entity.BS_Character;
import com.BlackSurvival.BSTI.entity.Comment;

import java.util.List;

public interface CommentService {
    void post_comment(Comment comment);
    List<Comment> get_comments();
}
