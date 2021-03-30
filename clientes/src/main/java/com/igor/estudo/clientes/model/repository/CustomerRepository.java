package com.igor.estudo.clientes.model.repository;

import com.igor.estudo.clientes.model.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
