package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Payment;

@Repository
public interface Paymentrepository extends JpaRepository<Payment,Integer> {

}
