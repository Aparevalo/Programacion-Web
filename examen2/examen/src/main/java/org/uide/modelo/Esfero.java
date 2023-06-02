/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.uide.modelo;

/**
 *
 * @author Usuario iTC
 */
public class Esfero extends Utensilio {
    private String colorTinta;

    public Esfero(String colorTinta, String marca, String nombre, String descripcion) {
        super(marca, nombre, descripcion);
        this.colorTinta = colorTinta;
    }

    public String getColorTinta() {
        return colorTinta;
    }

    public void setColorTinta(String colorTinta) {
        this.colorTinta = colorTinta;
    }

    @Override
    public void asignaraProfesor(String profesor) {
        System.out.println("Esferp asignado a"+profesor);
    }
    
    

}
