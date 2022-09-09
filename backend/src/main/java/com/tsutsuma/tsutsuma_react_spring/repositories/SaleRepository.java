package com.tsutsuma.tsutsuma_react_spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tsutsuma.tsutsuma_react_spring.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
