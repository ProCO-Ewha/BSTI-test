package com.BlackSurvival.BSTI.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
public class Character {

    @Id
    private String id;
    private String name;
    private String description;
    private String mainQuote;
}
