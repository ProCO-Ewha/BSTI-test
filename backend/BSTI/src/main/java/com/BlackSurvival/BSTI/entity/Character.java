package com.BlackSurvival.BSTI.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.net.URL;

@Data
@AllArgsConstructor
public class Character {

    @Id
    private String id;
    private String name;
    private URL image;
    private String description;
    private String mainQuote;
}