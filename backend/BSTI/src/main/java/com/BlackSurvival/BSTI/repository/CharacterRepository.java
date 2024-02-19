package com.BlackSurvival.BSTI.repository;

import com.BlackSurvival.BSTI.entity.BS_Character;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterRepository extends JpaRepository<BS_Character, String> {
}
