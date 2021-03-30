package com.igor.estudo.clientes.model.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Supply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "id_customer")
    private Customer customer;

    @Column
    private BigDecimal price;
}
