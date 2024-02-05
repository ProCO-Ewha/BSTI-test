package com.BlackSurvival.BSTI.form;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CharacterForm {

    @Id
    private String id;
    @NotEmpty
    private String name;
    @NotEmpty
    private String comment;
}
