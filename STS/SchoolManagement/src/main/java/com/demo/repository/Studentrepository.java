package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.demo.model.Students;

@Repository
public interface Studentrepository extends JpaRepository<Students, Integer>{



}
