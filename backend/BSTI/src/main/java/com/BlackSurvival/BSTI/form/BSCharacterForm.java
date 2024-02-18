package com.BlackSurvival.BSTI.form;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BSCharacterForm {

    @Id
    private String name;
    @NotEmpty
    private String image;
    @NotEmpty
    private String description;
    @NotEmpty
    private String mainQuote;
}
