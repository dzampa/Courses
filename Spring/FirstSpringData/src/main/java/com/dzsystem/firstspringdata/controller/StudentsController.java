package com.dzsystem.firstspringdata.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dzsystem.firstspringdata.entity.Students;
import com.dzsystem.firstspringdata.repository.StudentsRepository;

@RestController
@RequestMapping("/student")
public class StudentsController {
	
	@Autowired
	StudentsRepository studentRepository;
	
	@GetMapping
	public List<Students> listStudent(){
		return this.studentRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Students> findById(@PathVariable String id){
				
		Optional<Students> student = studentRepository.findById(id);
		
		if (student.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(student.get());
		
	}	
	
	@GetMapping("/{name}/name")
	public ResponseEntity<List<Students>> findByName(@PathVariable String name){
		
		List<Students> student = studentRepository.findByNameLikeIgnoreCase(name);
		
		if (student.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(student);
		
	}	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Students saveStudent(@RequestBody Students student) {		
		
		return studentRepository.save(student);
	}
	
	
	
}
