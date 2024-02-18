package com.BlackSurvival.BSTI.service;


import com.BlackSurvival.BSTI.entity.BSCharacter;
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
    public Optional<BSCharacter> selectById(String id){
        return repository.findById(id);
    }

    @Override
    public void insertCharacter(BSCharacter character){
        repository.save(character);
    }

    @Override
    public void updateCharacter(BSCharacter character){
        repository.save(character);
    }
}
