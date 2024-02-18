package com.BlackSurvival.BSTI.repository;

import com.BlackSurvival.BSTI.entity.BSCharacter;
import org.springframework.data.repository.CrudRepository;

public interface CharacterRepository extends CrudRepository<BSCharacter, String> {
}
