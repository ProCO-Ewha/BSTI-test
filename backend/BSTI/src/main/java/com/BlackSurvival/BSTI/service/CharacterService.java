package com.BlackSurvival.BSTI.service;

import com.BlackSurvival.BSTI.entity.BS_Character;

import java.util.Optional;

public interface CharacterService {
    Optional<BS_Character> selectById(String id);
    void insertCharacter(BS_Character character);
    void updateCharacter(BS_Character character);
}
