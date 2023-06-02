/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uide.modelo;

/**
 *
 * @author Usuario iTC
 */
public class Silla extends Mobiliario {
    
    protected int numeroPatas;
    
    public Silla(String nombre, String descripcion, int[] dimensiones) {
        super(nombre, descripcion, dimensiones);
    }
    
    // Getters y setters

    public int getNumeroPatas() {
        return numeroPatas;
    }

    public void setNumeroPatas(int numeroPatas) {
        this.numeroPatas = numeroPatas;
    }

    @Override
    public void asignaraProfesor(String profesor) {
        System.out.println("Silla asignada a "+ profesor);
    }
    
    
    
    
    
    
}
