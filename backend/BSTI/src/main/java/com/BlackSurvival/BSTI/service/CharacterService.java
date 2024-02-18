package com.BlackSurvival.BSTI.service;

import com.BlackSurvival.BSTI.entity.Character;

import java.util.Optional;

public interface CharacterService {
    Optional<Character> selectById(String id);
    void insertCharacter(Character character);
    void updateCharacter(Character character);
}
