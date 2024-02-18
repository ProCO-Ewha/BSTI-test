package com.BlackSurvival.BSTI.service;

import com.BlackSurvival.BSTI.entity.BSCharacter;

import java.util.Optional;

public interface CharacterService {
    Optional<BSCharacter> selectById(String id);
    void insertCharacter(BSCharacter character);
    void updateCharacter(BSCharacter character);
}
