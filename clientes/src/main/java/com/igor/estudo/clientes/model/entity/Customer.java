package com.igor.estudo.clientes.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(nullable = false, length = 11)
    private String cpf;

    @Column(name = "register_date", updatable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate registerDate;

    @PrePersist
    public void prePersist() {
        setRegisterDate(LocalDate.now());
    }
}
