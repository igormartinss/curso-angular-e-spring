package com.igor.estudo.clientes.controller;

import com.igor.estudo.clientes.model.dto.SupplyDTO;
import com.igor.estudo.clientes.model.entity.Customer;
import com.igor.estudo.clientes.model.entity.Supply;
import com.igor.estudo.clientes.model.repository.CustomerRepository;
import com.igor.estudo.clientes.model.repository.SupplyRepository;
import com.igor.estudo.clientes.util.BigDecimalConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/supplies")
public class SupplyController {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private SupplyRepository supplyRepository;

    @Autowired
    private BigDecimalConverter bigDecimalConverter;


    @PostMapping
    public Supply save(@RequestBody SupplyDTO supplyDTO){
        Supply supply;
        supply = new Supply();


        Customer customer = customerRepository.findById(supplyDTO.getIdCustomer()).
                orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente inexistente"));

        supply.setDescription(supplyDTO.getDescription());
        supply.setDate(LocalDate.parse(supplyDTO.getDate(), DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        supply.setCustomer(customer);
        supply.setPrice(bigDecimalConverter.convert(supplyDTO.getPrice()));

        return supplyRepository.save(supply);
    }

    @GetMapping
    public List<Supply> getSupply(@RequestParam(value = "name", defaultValue = "")String name){

        return supplyRepository.findByCustomerName("%" + name + "%");
    }
}
