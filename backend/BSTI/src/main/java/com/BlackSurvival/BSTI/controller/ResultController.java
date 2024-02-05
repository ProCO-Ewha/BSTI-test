package com.BlackSurvival.BSTI.controller;

import com.BlackSurvival.BSTI.entity.object.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class ResultController {

    @ResponseBody
    @RequestMapping(value = "/result", method = RequestMethod.POST)
    public void getResult(@RequestBody Result result){
        //결과(Character) 전송

    }
}
