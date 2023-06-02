/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uide.modelo;

import org.uide.modelo.Equipo;

/**
 *
 * @author Usuario iTC
 */
public class Computadora extends Equipo {
   protected String capacidadDeAlmacenamiento ;

    public Computadora(String capacidadDeAlmacenamiento, float consumoEnergetico, String marca, String nombre, String descripcion) {
        super(consumoEnergetico, marca, nombre, descripcion);
        this.capacidadDeAlmacenamiento = capacidadDeAlmacenamiento;
    }

    public String getCapacidadDeAlmacenamiento() {
        return capacidadDeAlmacenamiento;
    }

    public void setCapacidadDeAlmacenamiento(String capacidadDeAlmacenamiento) {
        this.capacidadDeAlmacenamiento = capacidadDeAlmacenamiento;
    }

    @Override
    public void asignaraProfesor(String profesor) {
        System.out.println("Computadora asignada a"+profesor);
    }
    
    

   
   
   
}
