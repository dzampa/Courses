package com.dzsystem.firstspringdata.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dzsystem.firstspringdata.entity.Students;

public interface StudentsRepository extends MongoRepository<Students, String>{
	
	public List<Students> findByNameLikeIgnoreCase(String name);

}