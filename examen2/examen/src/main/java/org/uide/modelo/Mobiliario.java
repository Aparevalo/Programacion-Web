/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uide.modelo;

/**
 *
 * @author Usuario iTC
 */
public class Mobiliario extends Elemento {
    
    protected int[] dimensiones;
    
    public Mobiliario(String nombre, String descripcion, int[] dimensiones) {
        super(nombre, descripcion);
        this.dimensiones=dimensiones;
    }
    
    // Getters y setters

    public int[] getDimensiones() {
        return dimensiones;
    }

    public void setDimensiones(int[] dimensiones) {
        this.dimensiones = dimensiones;
    }

    @Override
    public void asignaraProfesor(String profesor ) {
        System.out.println("Mobiliario asigando a "+profesor); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/OverriddenMethodBody
    }

    
    
    
}
