package com.BlackSurvival.BSTI.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Comment {

    @Id
    private int id;
    private String writer;
    private String time;
    private String detail;
}
