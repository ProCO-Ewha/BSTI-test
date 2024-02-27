package com.BlackSurvival.BSTI.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentForm {
    private int id;
    private String writer;
    private String time;
    private String detail;
}
