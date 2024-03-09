package com.BlackSurvival.BSTI.service;


import com.BlackSurvival.BSTI.entity.BS_Character;
import com.BlackSurvival.BSTI.repository.CharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CharacterServiceImpl implements CharacterService {

    private final CharacterRepository repository;
    public Optional<BS_Character> selectById(String id){
        return repository.findById(id);
    }

    @Override
    public void insertCharacter(BS_Character character){
        repository.save(character);
    }

    @Override
    public void updateCharacter(BS_Character character){
        repository.save(character);
    }
}
