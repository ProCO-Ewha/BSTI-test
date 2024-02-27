package com.BlackSurvival.BSTI.controller;

import com.BlackSurvival.BSTI.entity.BS_Character;
import com.BlackSurvival.BSTI.entity.Comment;
import com.BlackSurvival.BSTI.form.BS_CharacterForm;
import com.BlackSurvival.BSTI.form.CommentForm;
import com.BlackSurvival.BSTI.form.ResultForm;
import com.BlackSurvival.BSTI.service.CharacterService;
import com.BlackSurvival.BSTI.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URL;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/guestbook")
public class GuestbookController {


    private final CommentService service;

    @ResponseBody
    @PostMapping("/comment")
    public void post_comment(@RequestBody CommentForm commentForm){
        service.post_comment(makeComment(commentForm));
    }

    @ResponseBody
    @GetMapping("/all-comments")
    public List<Comment> get_comments(){
        return service.get_comments();
    }

    private Comment makeComment(CommentForm form){
        Comment entity = new Comment();

        entity.setId(form.getId());
        entity.setWriter(form.getWriter());
        entity.setTime(form.getTime());
        entity.setDetail(form.getDetail());

        return entity;
    }
}
