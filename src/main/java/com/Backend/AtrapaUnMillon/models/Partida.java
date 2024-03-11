package com.Backend.AtrapaUnMillon.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "partida")
public class Partida {
    @Id
    private String id;
    @Column (name = "titulo")
    private String titulo;
    @Column (name = "numRondas")
    private int numRondas;
    @Column(name = "numVidas")
    private int numVidas;
    @OneToMany(mappedBy = "partida", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Jugador> jugadores;
    @ManyToMany
    @JoinTable(
            name = "partida_pregunta",
            joinColumns = @JoinColumn(name = "partida_id"),
            inverseJoinColumns = @JoinColumn(name = "pregunta_id")
    )
    @JsonManagedReference
    private Set<Pregunta> preguntas;
    @ManyToMany(mappedBy = "partidas")
    @JsonBackReference
    private Set<Admin> admins;
}
