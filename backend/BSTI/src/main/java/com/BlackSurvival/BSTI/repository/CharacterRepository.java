package com.BlackSurvival.BSTI.repository;

import com.BlackSurvival.BSTI.entity.BSCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CharacterRepository extends JpaRepository<BSCharacter, String> {
}
