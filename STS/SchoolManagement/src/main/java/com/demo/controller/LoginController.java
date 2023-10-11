package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Login;
import com.demo.repository.Loginrepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class LoginController {

	@Autowired
	private Loginrepository lrepo;
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Login l1 )
	{
		Login l2=l1;
		String first=l2.getUid();
		String second=l2.getUpswd();
		Login l4=lrepo.getOne(first);
		boolean flag= lrepo.existsById(first);
		if(flag)
		{
			if(second.equals(l4.getUpswd()))
				return ResponseEntity.ok(l2);	
		}
		return(ResponseEntity<Login>) ResponseEntity.internalServerError();
	}
}
