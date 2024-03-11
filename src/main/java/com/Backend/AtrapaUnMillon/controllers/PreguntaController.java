package com.Backend.AtrapaUnMillon.controllers;


import com.Backend.AtrapaUnMillon.exceptions.AdminBadRequestException;
import com.Backend.AtrapaUnMillon.models.Admin;
import com.Backend.AtrapaUnMillon.models.Pregunta;
import com.Backend.AtrapaUnMillon.services.AdminService;
import com.Backend.AtrapaUnMillon.services.PreguntaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class PreguntaController {
    @Autowired
    private PreguntaService preguntaService;

    @Operation(summary = "Obtiene todas ls preguntas", tags = {"preguntas"})
    @ApiResponse(responseCode = "200", description = "Listado de pregunntas")
    @ApiResponse(responseCode = "404", description = "No hay preguntas")
    @GetMapping("/preguntas")
    public List<Pregunta> getAllPreguntas(){
        return preguntaService.getAllPreguntas();
    }

    @Operation(summary = "Crea una pregunta", tags = {"preguntas"})
    @ApiResponse(responseCode = "201", description = "Pregunta creada")
    @ApiResponse(responseCode = "400", description = "Error al crear pregunta")
    @PostMapping("/pregunta")
    public ResponseEntity<Pregunta> createPregunta(@RequestParam String pregunta,
                                                   @RequestParam String respuestaCorrecta,
                                                   @RequestParam String respuesta1,
                                                   @RequestParam String respuesta2,
                                                   @RequestParam String respuesta3,
                                                   @RequestParam String nivel,
                                                   @RequestParam String dificultad,
                                                   @RequestParam String asignatura,
                                                   @RequestParam int tiempo,
                                                   @RequestParam Long idAdmin){
       Pregunta nueva_pregunta = preguntaService.createPregunta(pregunta, respuestaCorrecta, respuesta1,
               respuesta2, respuesta3, nivel,
               dificultad, asignatura, tiempo, null, idAdmin);
       if(nueva_pregunta != null){
           return new ResponseEntity<>(nueva_pregunta, HttpStatus.CREATED);
       }else{
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
    }

}
