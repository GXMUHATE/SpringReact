package com.tsutsuma.tsutsuma_react_spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tsutsuma.tsutsuma_react_spring.entities.Sale;
import com.tsutsuma.tsutsuma_react_spring.repositories.SaleRepository;

@Service
public class SalesService {
	
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		
		return repository.findAll();
		
	}

}
