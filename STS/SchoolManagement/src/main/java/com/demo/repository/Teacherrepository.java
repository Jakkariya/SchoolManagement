package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Teachers;

@Repository
public interface Teacherrepository extends JpaRepository<Teachers,Integer> {

}
