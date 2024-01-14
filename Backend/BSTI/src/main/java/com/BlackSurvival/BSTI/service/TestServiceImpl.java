package com.BlackSurvival.BSTI.service;

import com.BlackSurvival.BSTI.entity.Test;
import com.BlackSurvival.BSTI.repository.TestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class TestServiceImpl implements TestService{

    private final TestRepository repository;

    @Override
    public Optional<Test> selectById(Integer id) {
        return repository.findById(id);
    }
}
