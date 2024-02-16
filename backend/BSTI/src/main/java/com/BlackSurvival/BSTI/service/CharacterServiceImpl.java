package com.BlackSurvival.BSTI.service;


import com.BlackSurvival.BSTI.entity.Character;
import com.BlackSurvival.BSTI.repository.CharacterRepository;
import com.BlackSurvival.BSTI.repository.TestRepository;
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
}