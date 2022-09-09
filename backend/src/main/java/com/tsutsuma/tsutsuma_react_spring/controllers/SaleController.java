package com.tsutsuma.tsutsuma_react_spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tsutsuma.tsutsuma_react_spring.entities.Sale;
import com.tsutsuma.tsutsuma_react_spring.services.SalesService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SalesService service;
	
	@GetMapping
	public Page<Sale> findSales(
			@RequestParam(value="minDate", defaultValue="") String minDate, 
			@RequestParam(value="maxDate", defaultValue="") String maxDate, 
			Pageable pageable) {
		return service.findSales(minDate, maxDate, pageable);
	}
}
