package com.demo.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import javax.persistence.criteria.Path;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.demo.model.Payment;
import com.demo.model.Register;
import com.demo.model.Students;
import com.demo.model.Teachers;
import com.demo.repository.Paymentrepository;
import com.demo.repository.Registerrepository;
import com.demo.repository.Studentrepository;
import com.demo.repository.Teacherrepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Schoolcontroller 
{

	
	@Autowired
	private Studentrepository srepo;
	
	@Autowired
	private Teacherrepository trepo;
	
	@Autowired 
	private Paymentrepository prepo;
	
	@Autowired
	private Registerrepository rrepo;
	
	
	//service
	
	//photo geting from admin
	public static String uploadDirectory=System.getProperty("user.dir")+"/src/main/java/imagedata";
	
	//VIEWS
	
	@CrossOrigin(origins="http://localhost:4200")				//Student View API
	@GetMapping("/studentview")
	public List<Students> studentview()
	{
		return this.srepo.findAll();
	}
	
	
	
	
	
	
	@CrossOrigin(origins="http://localhost:4200")				//Teacher View API
	@GetMapping("/teacherview")
	public List<Teachers> teacherview()
	{
		return this.trepo.findAll();
	}
	
	@CrossOrigin(origins="http://localhost:4200")				//Payment View API
	@GetMapping("/paymentview")
	public List<Payment> paymentview()
	{
		return this.prepo.findAll();
	}
	
	
	@CrossOrigin(origins="http://localhost:4200")				//Register View API
	@GetMapping("/registerview")
	public List<Register> registerview()
	{
		return this.rrepo.findAll();
	}
	
	
	//INSERTS
	
	@CrossOrigin(origins="http://localhost:4200")				//Student Insert API
	@PostMapping("/studentinsert")
	public Students studentinsert(@RequestBody Students s) {
		
		return this.srepo.save(s);
	}
	
	
	@CrossOrigin(origins="http://localhost:4200")				//Teacher Insert API
	@PostMapping("/teacherinsert")
	public Teachers teacherinsert(@RequestBody Teachers t)
	{
		return this.trepo.save(t);
	}
	
	@CrossOrigin(origins="http://localhost:4200")				//Payment Insert API
	@PostMapping("/paymentinsert")
	public Payment paymentinsert(@RequestBody Payment p)
	{
		return this.prepo.save(p);
	}
	
	@CrossOrigin(origins="http://localhost:4200")				//Register Insert API
	@PostMapping("/register")
	public Register register(@RequestBody Register r) {
		
		return this.rrepo.save(r);
	}
	
	
	//DELETES
	
	@CrossOrigin(origins="http://localhost:4200")				//Student Delete API 
	@PostMapping("/studentdelete")
	public void studentdelte(@RequestBody Students s)
	{
		this.srepo.delete(s);
	}
	
	@CrossOrigin(origins="http://localhost:4200")				//Teacher Delete API 
	@PostMapping("/teacherdelete")
	public void teacherdelte(@RequestBody Teachers t)
	{
		this.trepo.delete(t);
	}
	
	@CrossOrigin(origins="http://localhost:4200")				//Payment Delete API 
	@PostMapping("/paymentdelete")
	public void paymentdelte(@RequestBody Payment p)
	{
		this.prepo.delete(p);
	}
	
	@CrossOrigin(origins="http://localhost:4200")				//Payment Delete API 
	@PostMapping("/registerdelete")
	public void registerdelte(@RequestBody Register r)
	{
		this.rrepo.delete(r);
	}
	
	
	
	@CrossOrigin(origins="http://localhost:4200")						//count of total students
	@GetMapping("/countstudent")
    public ResponseEntity<Long> countstudent() {
        long count = srepo.count();
        return ResponseEntity.ok(count);
    }
	
	@CrossOrigin(origins="http://localhost:4200")						//count of total teachers
	@GetMapping("/countteacher")
    public ResponseEntity<Long> countteacher() {
        long count = trepo.count();
        return ResponseEntity.ok(count);
    }
	
	
	
	//updates
	
	@CrossOrigin(origins="http://localhost:4200")				//Payment Delete API 
	@PostMapping("/studentupdate")
	public Students studentupdate(@RequestBody Students s)
	{
		Integer rollno=s.getRollno();
		Students std=srepo.findById(rollno).get();
		std.setName(s.getName());
		std.setCourse(s.getCourse());
		std.setContact(s.getContact());
		std.setAddress(s.getAddress());
		
		return this.srepo.save(std);
		
	}
	
	@CrossOrigin(origins="http://localhost:4200")				//Payment Delete API 
	@PostMapping("/teacherupdate")
	public Teachers teacherupdate(@RequestBody Teachers t)
	{
		Integer id=t.getId();
		Teachers t1=trepo.findById(id).get();
		t1.setName(t.getName());
		t1.setRoll(t.getRoll());
		t1.setContact(t.getContact()); 
		t1.setSalary(t.getSalary());
		
		return this.trepo.save(t1);
		
	}
	
}
