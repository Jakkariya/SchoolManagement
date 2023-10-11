package com.demo;

import java.io.File;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.demo.controller.Schoolcontroller;

@SpringBootApplication
public class SchoolManagementApplication {

	public static void main(String[] args) {
		
		new File(Schoolcontroller.uploadDirectory).mkdir();
		
		SpringApplication.run(SchoolManagementApplication.class, args);
	}

}
