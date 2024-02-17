package com.BlackSurvival.BSTI.controller;

import com.BlackSurvival.BSTI.entity.Test;
import com.BlackSurvival.BSTI.form.TestForm;
import com.BlackSurvival.BSTI.service.TestService;
import com.amazonaws.services.s3.AmazonS3;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.net.URL;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping("/test")
public class TestController {

    private final TestService service;
    private final AmazonS3 s3;

    @GetMapping("show/{id}")
    //@ResponseBody
    public String getTest(@PathVariable Integer id, Model model){
        Optional<Test> testOpt = service.selectById(id);

        if(testOpt.isPresent()){
            model.addAttribute("data", testOpt.get());
            //URL url = s3.getUrl("bsti-imageserver", "1");
            //String urlTest = ""+url;
            //model.addAttribute("img1", urlTest);
        }
        else{
            model.addAttribute("data", new Test(id, "Why you are here?"));
        }

        return "test";
    }

    @GetMapping("{id}")
    @ResponseBody
    public Test getTest(@PathVariable Integer id){
        Optional<Test> testOpt = service.selectById(id);

        if(testOpt.isPresent()){
            return testOpt.get();
        }
        else{
            return new Test(id, "Why you are here?");
        }
    }
}
