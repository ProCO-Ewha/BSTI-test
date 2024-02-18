package com.BlackSurvival.BSTI.controller;

import com.BlackSurvival.BSTI.entity.Character;
import com.BlackSurvival.BSTI.service.CharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequiredArgsConstructor
@RequestMapping("/crud")
public class DataController {

    @Autowired
    CharacterService service;

    @GetMapping()
    public String show(){
        return "crud";
    }

    @PostMapping("/insert")
    public void insert(@Validated Character character, BindingResult bindingResult, Model model, RedirectAttributes redirectAttributes){

        if(!bindingResult.hasErrors()){
            service.insertCharacter(character);
            redirectAttributes.addFlashAttribute("complete", "등록이 완료되었습니다. ");
        }
    }
}
