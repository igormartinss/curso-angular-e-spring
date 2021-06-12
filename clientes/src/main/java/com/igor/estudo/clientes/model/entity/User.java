package com.igor.estudo.clientes.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    @NotEmpty(message = "Login não pode estar vazio")
    private String username;

    @Column
    @NotEmpty(message = "Senha não pode estar vazia")
    @Size(min = 6, message = "Tamanho mínimo da senha é de 6 caracteres")
    private String password;
}
