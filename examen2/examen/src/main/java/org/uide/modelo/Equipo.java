/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uide.modelo;

/**
 *
 * @author Usuario iTC
 */
public class Equipo extends Elemento{
    protected float consumoEnergetico;
    protected String marca;
   
    public Equipo(float consumoEnergetico, String marca, String nombre, String descripcion) {
        super(nombre, descripcion);
        this.consumoEnergetico = consumoEnergetico;
        this.marca=marca;
    }

    public float getConsumoEnergetico() {
        return consumoEnergetico;
    }

    public void setConsumoEnergetico(float consumoEnergetico) {
        this.consumoEnergetico = consumoEnergetico;
    }

    @Override
    public void asignaraProfesor(String profesor) {
        System.out.println("Equipo asignada a "+profesor);
    }
    
    
}
