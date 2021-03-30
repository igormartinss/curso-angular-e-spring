package com.igor.estudo.clientes.controller;

import com.igor.estudo.clientes.model.entity.Customer;
import com.igor.estudo.clientes.model.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Customer save(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @GetMapping("{id}")
    public Customer getById(@PathVariable Integer id) {
        return customerRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Integer id) {
        customerRepository.findById(id)
            .map( customer -> {
                customerRepository.delete(customer);
                return customer;
            })
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("{id}")
    public void update(@PathVariable Integer id, @RequestBody Customer customerUpdated) {
        customerRepository.findById(id)
            .map( customer -> {
                customer.setName(customerUpdated.getName());
                customer.setCpf(customerUpdated.getCpf());
                return customerRepository.save(customerUpdated);
            })
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
