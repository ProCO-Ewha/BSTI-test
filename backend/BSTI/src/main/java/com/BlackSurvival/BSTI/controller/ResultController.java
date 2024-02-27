package com.BlackSurvival.BSTI.controller;

import com.BlackSurvival.BSTI.entity.BS_Character;
import com.BlackSurvival.BSTI.form.BS_CharacterForm;
import com.BlackSurvival.BSTI.form.ResultForm;
import com.BlackSurvival.BSTI.service.CharacterService;
import com.amazonaws.services.s3.AmazonS3;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URL;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping("/bsti")
public class ResultController {

    private final CharacterService service;
    private final AmazonS3 s3Client;

    @ResponseBody
    @PostMapping("/result")
    public BS_CharacterForm getResult(@RequestBody ResultForm result){
        //로직처리

        String bsti = "";

        bsti += (result.getCountA() > result.getCountD()) ? "A" : "D";
        bsti += (result.getCountE() > result.getCountL()) ? "E" : "L";
        bsti += (result.getCountT() > result.getCountS()) ? "T" : "S";
        bsti += (result.getCountN() > result.getCountF()) ? "N" : "F";

        //결과(CharacterForm) 생성
        Optional<BS_Character> characterOpt = service.selectById(bsti);
        BS_CharacterForm form = new BS_CharacterForm();
        if(characterOpt.isPresent())
            form = makeCharacterForm(characterOpt.get());

        //결과(Character) 전송
        return form;
    }


    private BS_CharacterForm makeCharacterForm(BS_Character entity){
        BS_CharacterForm form = new BS_CharacterForm();

        URL url = s3Client.getUrl("bsti-imageserver", entity.getEng_name());

        form.setName(entity.getName());
        form.setImage_url(""+url);
        form.setDescription(entity.getDescription());
        form.setMain_quote(entity.getMain_quote());

        return form;
    }
}
