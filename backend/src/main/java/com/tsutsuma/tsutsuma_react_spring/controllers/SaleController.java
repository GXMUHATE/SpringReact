package com.tsutsuma.tsutsuma_react_spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tsutsuma.tsutsuma_react_spring.entities.Sale;
import com.tsutsuma.tsutsuma_react_spring.services.SalesService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SalesService service;
	
	@GetMapping
	public List<Sale> findSales() {
		return service.findSales();
	}
}
