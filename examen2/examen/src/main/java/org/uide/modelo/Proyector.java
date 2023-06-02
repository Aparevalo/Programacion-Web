/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uide.modelo;

/**
 *
 * @author Usuario iTC
 */
public class Proyector extends Equipo {
    protected String resolución;

    public Proyector(String resolución, float consumoEnergetico, String marca, String nombre, String descripcion) {
        super(consumoEnergetico, marca, nombre, descripcion);
        this.resolución = resolución;
    }

    public String getResolución() {
        return resolución;
    }

    public void setResolución(String resolución) {
        this.resolución = resolución;
    }

    @Override
    public void asignaraProfesor(String profesor) {
        System.out.println("Proyecto asignado a "+profesor);
    }
    
    
    
}
