/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uide.modelo;

/**
 *
 * @author Usuario iTC
 */
abstract class Elemento {
    protected String nombre;
    protected String descripcion;
    protected String color;
  
    public Elemento(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
  
    // Getters y setters

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
  
    
    
    public String getNombre() {
        return nombre;
    }
  
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
  
    public String getDescripcion() {
        return descripcion;
    }
  
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
    public void asignaraProfesor(String profesor ){}
}
