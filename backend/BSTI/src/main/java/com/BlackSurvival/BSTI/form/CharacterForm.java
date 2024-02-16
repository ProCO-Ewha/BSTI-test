package com.BlackSurvival.BSTI.form;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.net.URL;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CharacterForm {

    @Id
    private String name;
    @NotEmpty
    private URL image;
    @NotEmpty
    private String description;
    @NotEmpty
    private String mainQuote;

}
