package com.dzsystem.comercial.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.dzsystem.comercial.model.Oportunidade;
import com.dzsystem.comercial.repository.OportunidadeRepository;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/oportunidades")
public class OportunidadeController {

	@Autowired
	private OportunidadeRepository oportunidades;
	
	@GetMapping
	public List<Oportunidade> listar() {
		return oportunidades.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Oportunidade> buscar(@PathVariable Long id) {
		Optional<Oportunidade> oportunidade = oportunidades.findById(id);
		
		if (oportunidade.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(oportunidade.get());
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Oportunidade adicionar(@Valid @RequestBody Oportunidade oportunidade) {
		
		Optional<Oportunidade> oportunidadeExistente = oportunidades
				.findByDescricaoAndNomeProspecto(oportunidade.getDescricao(), oportunidade.getNomeProspecto());
		if (oportunidadeExistente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Já existe uma oportunidade para este prospecto com a mesma descrição");
		}
		return oportunidades.save(oportunidade);
	}
	
	@PutMapping("/{id}")
	public @Valid ResponseEntity<Object> atualizar(@PathVariable Long id,  @Valid @RequestBody Oportunidade oportunidadeAtual) {
		
		Optional<Oportunidade> oportunidade = oportunidades.findById(id);
		
		if (oportunidade.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		oportunidadeAtual.setId(id);
		
		return ResponseEntity.ok(oportunidades.save(oportunidadeAtual));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Oportunidade> excuirById(@PathVariable Long id) {
		try {
			oportunidades.deleteById(id);	
			 return ResponseEntity.noContent().build();
		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}
	}
	
}
