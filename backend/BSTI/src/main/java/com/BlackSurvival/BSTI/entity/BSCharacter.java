package com.BlackSurvival.BSTI.entity;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

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
