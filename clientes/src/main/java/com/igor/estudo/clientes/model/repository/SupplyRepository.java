package com.igor.estudo.clientes.model.repository;

import com.igor.estudo.clientes.model.entity.Supply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplyRepository extends JpaRepository<Supply, Integer> {
}
