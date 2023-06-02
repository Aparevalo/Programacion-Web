/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package org.uide.examen;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.Scanner;

/**
 *
 * @author Usuario iTC
 */
public class General {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese el nombre de la clase (o 'fin' para terminar):");
        String nombreClase = scanner.nextLine();

        while (!nombreClase.equalsIgnoreCase("fin")) {
            try {
                Class<?> clase = Class.forName(nombreClase);
                Object objeto = crearObjeto(clase, scanner);

                if (objeto != null) {
                    System.out.println("Se creó un nuevo objeto: " + objeto);
                }
            } catch (ClassNotFoundException e) {
                System.out.println("La clase especificada no existe.");
            }

            System.out.println("Ingrese el nombre de la clase (o 'fin' para terminar):");
            nombreClase = scanner.nextLine();
        }

        scanner.close();
    }

    public static Object crearObjeto(Class<?> clase, Scanner scanner) {
        try {
            // Obtener los constructores de la clase
            Constructor<?>[] constructores = clase.getConstructors();

            // Mostrar los parámetros de cada constructor
            for (Constructor<?> constructor : constructores) {
                Class<?>[] tiposParametros = constructor.getParameterTypes();
                System.out.print("Parámetros del constructor (" + constructor.getName() + "): ");

                for (Class<?> tipo : tiposParametros) {
                    System.out.print(tipo.getSimpleName() + " ");
                }

                System.out.println();
            }

            // Solicitar los valores de los atributos para el constructor seleccionado
            System.out.println("Ingrese los valores de los atributos:");
            Object[] valoresAtributos = new Object[constructores[0].getParameterCount()];

            for (int i = 0; i < valoresAtributos.length; i++) {
                System.out.print("Valor del atributo " + (i + 1) + ": ");
                String valor = scanner.nextLine();
                valoresAtributos[i] = parseValor(valor, constructores[0].getParameterTypes()[i]);
            }

            // Crear una instancia del objeto utilizando el constructor y los valores proporcionados
            return constructores[0].newInstance(valoresAtributos);
        } catch (InstantiationException | IllegalAccessException |
                InvocationTargetException e) {
            e.printStackTrace();
        }

        return null;
    }

    public static Object parseValor(String valor, Class<?> tipo) {
        if (tipo == int.class || tipo == Integer.class) {
            return Integer.parseInt(valor);
        } else if (tipo == double.class || tipo == Double.class) {
            return Double.parseDouble(valor);
        } else if (tipo == boolean.class || tipo == Boolean.class) {
            return Boolean.parseBoolean(valor);
        } else if (tipo == String.class) {
            return valor;
        }

        return null;
    }
}

    


