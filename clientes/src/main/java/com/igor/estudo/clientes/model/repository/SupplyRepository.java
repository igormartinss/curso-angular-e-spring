package com.igor.estudo.clientes.model.repository;

import com.igor.estudo.clientes.model.entity.Supply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SupplyRepository extends JpaRepository<Supply, Integer> {
    @Query("select s from Supply s join s.customer c where upper(c.name) like upper(:name)")
    List<Supply> findByCustomerName(@Param("name") String name);
}
