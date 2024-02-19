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
public class BSCharacter {

    @Id
    private String id;
    private String name;
    private String description;
    private String mainQuote;
}
