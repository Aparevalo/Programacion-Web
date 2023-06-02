/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uide.modelo;

/**
 *
 * @author Usuario iTC
 */
public class Utensilio extends Elemento {
   protected String marca;

    public Utensilio(String marca, String nombre, String descripcion) {
        super(nombre, descripcion);
        this.marca = marca;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    @Override
    public void asignaraProfesor(String profesor) {
        System.out.println("Utensilio asignado a "+profesor);
    }
    
   
}
