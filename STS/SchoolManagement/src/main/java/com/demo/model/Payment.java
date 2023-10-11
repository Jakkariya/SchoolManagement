package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Payment {
	@Id
	private int rollno;
	private String name;
	private String course;
	private float fees;
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Payment(int rollno, String name, String course, float fees) {
		super();
		this.rollno = rollno;
		this.name = name;
		this.course = course;
		this.fees = fees;
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
	public float getFees() {
		return fees;
	}
	public void setFees(float fees) {
		this.fees = fees;
	}
	
	
	
}
