package com.igor.estudo.clientes.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SupplyDTO {
    private String description;
    private String price;
    private String date;
    private  Integer idCustomer;

}
