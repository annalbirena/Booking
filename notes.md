# Proyecto Hoteles

## Condiciones de entrega

El proyecto deberá ser entregado en un sandbox (debes entregar la URL que te lleva allí). 
Podrás construir el proyecto local y luego subirlo a Code Sandbox, pero la entrega es una URL apuntando al sandbox.

El proyecto deberá ser sólo construido con React, y componentes funcionales, con hooks.

## Requerimientos minimos

    ### Funcionalidades

        a. Al iniciar la aplicacion, todos los hoteles deberan ser mostrados en la intterfaz grafica, ningun filtro debe estar aplicadio previamente.

        b. Filtros: 
            Fecha inicio reserva
            FEcha final reserva
            Pais
            Tamaño hotel
            Costo Hotel
        
        c. La lista de hoteles se debe renderizar a medida que se apliquen los filtros.

        d. Debera actualizarse en la seleccion de cada filtro, excepto en el de fechas. Se deben seleccionar ambas fechas para presentar la lista.

        e. La aplicacion debera mostrar en lenguaje natural los filtros aplicados

        f. La aplicacion debera mostrar un mensaje explicativo cuando no existe disponibilidad de hoteles.

        g. Se debe poder resetear los filtros.

    ### Componentes

        a. Debe existir un componente <Header /> donde se encontraran el componente de filtros

        b. Debe existir un componente <Filtros /> donde se encentran los filtros

        c. Debe existir un componente que se encargue de mostrar la lista de hoteles. Instanciar dinamicamente la coleccion de hoteles

        d. Cada hotel debe ser un componente <Hotel />

## Requerimientos adicionales

Agregar boton de RESERVAR el hotel, que este incluido en el componente.

Manejar la experiencia de la persona usuario al intentar introducir una fecha de salida menor a la fecha de entrada. a traves de un mensaje explicativo o validacion de input de fecha.

## Criterios de Aceptacion

    ### Funcionalidades

        a. Sin filtros, se deben ver la totalidad de hoteles de la base de datos.

        b. No mostrar console.log o mensajes adicionales en consola.

        c. No debe arrojar errores por consola durante su funcionamiento.

        d. Los datos para cada filtro, excepto las fechas, deberán de ser los siguientes:
        
            País: Argentina, Chile, Uruguay y Brasil

            Tamaño de hotel:
                “pequeño”. para hoteles con hasta 10 camas
                “mediano”: para hoteles con más de 10 camas y menos de 20.
                “grande”: para hoteles con más de 20 camas en adelante.

            Costo del hotel:
                “económico”: para hoteles cuyo valor de precio sea “1” en la base de datos.
                “confort”: para hoteles con valor de precio “2”.
                “lujos”: para hoteles con valor de precio “3”.
                “magnífico”: para hoteles con valor de precio “4”.

    ### Componentes

    * Deberás manejar el estado global de la aplicación en el componente . Los valores y funciones actualizadoras deberán ser distribuidos a los componentes que los necesiten. Te sugerimos utilizar React hooks.

    * Deberás mostrar todos los filtros seleccionados, en lenguaje natural, en el componente de cabecera. Cuando hablamos de lenguaje natural nos referimos a mostrar una fecha en formato legible como “23 de Marzo de 2021” en vez de mostrar “23-03-2021”.



