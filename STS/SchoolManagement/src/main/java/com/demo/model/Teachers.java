package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Teachers 	
{
	@Id
	private int Id;
	private String name;
	private String roll;
	private double contact;
	private int salary;
	public Teachers() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Teachers(int id, String name, String roll, double contact, int salary) {
		super();
		Id = id;
		this.name = name;
		this.roll = roll;
		this.contact = contact;
		this.salary = salary;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRoll() {
		return roll;
	}
	public void setRoll(String roll) {
		this.roll = roll;
	}
	public double getContact() {
		return contact;
	}
	public void setContact(double contact) {
		this.contact = contact;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	
	
	
	

}
