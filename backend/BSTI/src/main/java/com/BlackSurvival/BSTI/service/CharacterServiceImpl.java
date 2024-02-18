package com.BlackSurvival.BSTI.service;


import com.BlackSurvival.BSTI.entity.Character;
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
    public Optional<Character> selectById(String id){
        return repository.findById(id);
    }

    @Override
    public void insertCharacter(Character character){
        repository.save(character);
    }

    @Override
    public void updateCharacter(Character character){
        repository.save(character);
    }
}
