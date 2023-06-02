/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package org.uide.examen;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.util.Scanner;
import org.uide.modelo.Computadora;
import org.uide.modelo.Esfero;
import org.uide.modelo.Lapiz;

/**
 *
 * @author Usuario iTC
 */
public class Examen {


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese colorTinta,marca,nombre,descripcion");
        String datosEsfera = scanner.nextLine();
        String[] parametros = datosEsfera.split(",");

        if (parametros.length == 4) {
            String tinta = parametros[0].trim();
            String marca = (parametros[1].trim());
            String nombre = parametros[2].trim();
            String descripcion = parametros[3].trim();

         Esfero esf = new Esfero(tinta, marca, nombre, descripcion);
         cambiarColor(esf,"rojo"); 
            System.out.println(esf.getColor());   
        }
        
        
        
        
    }
public static void cambiarColor(Object objeto, String nuevoColor) {
        if (objeto instanceof Computadora) {
            Computadora com = (Computadora) objeto;
            com.setColor(nuevoColor);
        }else if (objeto instanceof Esfero) {
            Esfero es = (Esfero) objeto;
            es.setColor(nuevoColor);
    }
    }
  }

