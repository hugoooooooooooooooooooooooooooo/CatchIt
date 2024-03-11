package com.Backend.AtrapaUnMillon.services;

import com.Backend.AtrapaUnMillon.models.Admin;
import com.Backend.AtrapaUnMillon.models.Pregunta;
import com.Backend.AtrapaUnMillon.repositories.AdminRepository;
import com.Backend.AtrapaUnMillon.repositories.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PreguntaService {

    @Autowired
    private PreguntaRepository preguntaRepository;

    @Autowired
    private AdminRepository adminRepository;

    public List<Pregunta> getAllPreguntas(){
        return preguntaRepository.findAll();
    }

    public Pregunta createPregunta(String pregunta, String respuestaCorrecta, String respuesta1,
                               String respuesta2, String respuesta3, String nivel,
                               String dificultad, String asignatura, int tiempo,
                               byte[] imagen, Long idAdmin){
        Optional<Admin> optionalAdmin = adminRepository.findById(idAdmin);
        if(optionalAdmin.isPresent()){
            Admin admin = optionalAdmin.get();
            Pregunta new_pregunta = new Pregunta(pregunta, respuestaCorrecta, respuesta1, respuesta2,
                    respuesta3, nivel, dificultad, asignatura, tiempo, imagen, admin);
            preguntaRepository.save(new_pregunta);
            return new_pregunta;
        }else{
            return null;
            //Crear excepción
        }
    }
}
