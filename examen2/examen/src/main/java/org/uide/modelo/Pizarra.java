/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uide.modelo;

/**
 *
 * @author Usuario iTC
 */
public class Pizarra extends Mobiliario {
    
    private int[] dimensiones;
    private String tipo;

    public Pizarra(String tipo, String nombre, String descripcion, int[] dimensiones) {
        super(nombre, descripcion, dimensiones);
        this.tipo = tipo;
    }
    
    // Getters y setters

    public int[] getDimensiones() {
        return dimensiones;
    }

    public void setDimensiones(int[] dimensiones) {
        this.dimensiones = dimensiones;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    @Override
    public void asignaraProfesor(String profesor) {
        System.out.println("Pizarra asignada a "+profesor);
    }
    
    
    
    
}
