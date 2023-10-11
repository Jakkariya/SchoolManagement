package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Register {
	 @Id
	 @GeneratedValue(strategy = GenerationType.SEQUENCE)
	 private long id;
	 private String name;
	 private int age;
	 private String course;
	 private double contact;
	 private String address;
	public Register() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Register(long id, String name, int age, String course, double contact, String address) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.course = course;
		this.contact = contact;
		this.address = address;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public double getContact() {
		return contact;
	}
	public void setContact(double contact) {
		this.contact = contact;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	 
	 

}
