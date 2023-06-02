/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uide.modelo;

/**
 *
 * @author Usuario iTC
 */
public class Lapiz extends Utensilio {
    private String tipo;

    public Lapiz(String tipo, String marca, String nombre, String descripcion) {
        super(marca, nombre, descripcion);
        this.tipo = tipo;
    }

  
    // Getters y setters
    public String getTipo() {
        return tipo;
    }
  
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    @Override
    public void asignaraProfesor(String profesor) {
        System.out.println("Lapiz asignado a"+profesor);
    }
    
    
}

