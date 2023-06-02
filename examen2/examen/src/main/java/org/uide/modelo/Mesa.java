/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uide.modelo;

/**
 *
 * @author Usuario iTC
 */
public class Mesa extends Mobiliario{
    
    private String material;

    public Mesa(String material, String nombre, String descripcion, int[] dimensiones) {
        super(nombre, descripcion, dimensiones);
        this.material = material;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    @Override
    public void asignaraProfesor(String profesor) {
        System.out.println("Asignar mesa a "+profesor);
    }
    
    
    
}
