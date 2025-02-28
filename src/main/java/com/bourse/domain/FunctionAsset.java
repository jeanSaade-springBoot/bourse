package com.bourse.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import groovy.transform.builder.Builder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Entity
@Table(name = "function_asset")
public class FunctionAsset {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "function_id", nullable = false)
    private String functionId;

    @Column(name = "asset_class_id", nullable = false)
    private String assetClassId;
    
    @Column(name = "is_hidden", nullable = false)
    private boolean isHidden = false;
}
