package com.BlackSurvival.BSTI.controller;

import com.BlackSurvival.BSTI.entity.BSCharacter;
import com.BlackSurvival.BSTI.form.BSCharacterForm;
import com.BlackSurvival.BSTI.form.ResultForm;
import com.BlackSurvival.BSTI.service.CharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class ResultController {

    private final CharacterService service;

    //트랜젝션 적용할 것
    @ResponseBody
    @PostMapping("/result")
    public BSCharacterForm getResult(@RequestBody ResultForm result){
        //로직처리

        String bsti = "";

        bsti += (result.getCountA() > result.getCountD()) ? "A" : "D";
        bsti += (result.getCountE() > result.getCountL()) ? "E" : "L";
        bsti += (result.getCountT() > result.getCountS()) ? "T" : "S";
        bsti += (result.getCountN() > result.getCountF()) ? "N" : "F";

        //결과(CharacterForm) 생성
        Optional<BSCharacter> characterOpt = service.selectById(bsti);
        BSCharacterForm form = new BSCharacterForm();
        if(characterOpt.isPresent())
            form = makeCharacterForm(characterOpt.get());

        //결과(Character) 전송
        return form;
    }


    private BSCharacterForm makeCharacterForm(BSCharacter entity){
        BSCharacterForm form = new BSCharacterForm();

        form.setName(entity.getName());
        form.setImage(""); //추후 S3 연결 후 URL 채워넣기
        form.setDescription(entity.getDescription());
        form.setMainQuote(entity.getMainQuote());

        return form;
    }
}
