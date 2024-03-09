package com.BlackSurvival.BSTI.repository;

import com.BlackSurvival.BSTI.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface TestRepository extends JpaRepository<Test, Integer> {
}
