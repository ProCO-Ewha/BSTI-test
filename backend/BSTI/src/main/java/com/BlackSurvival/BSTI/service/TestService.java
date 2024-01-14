package com.BlackSurvival.BSTI.service;

import com.BlackSurvival.BSTI.entity.Test;

import java.util.Optional;

public interface TestService {

    Optional<Test> selectById(Integer id);
}
