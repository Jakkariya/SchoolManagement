package com.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Students 
{
	@Id
	private int rollno;
	private String name;
	private String course;
	private double contact;
	private String address;

	

	public Students() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Students(int rollno, String name, String course, double contact, String address) {
		super();
		this.rollno = rollno;
		this.name = name;
		this.course = course;
		this.contact = contact;
		this.address = address;
	}
	public int getRollno() {
		return rollno;
	}
	public void setRollno(int rollno) {
		this.rollno = rollno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
