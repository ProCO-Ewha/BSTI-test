package com.BlackSurvival.BSTI.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.net.URL;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class BS_Character {

    @Id
    private String id;
    private String name;
    private String eng_name;
    private String description;
    private String main_quote;
}