package com.dzsystem.firstspringdata.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Students {
	
	@Id
	private String _Id;
	private String name;
	private int age;	
	
	public String get_Id() {
		return _Id;
	}
	public void set_Id(String _Id) {
		this._Id = _Id;
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
	
	
	
}
