## Reglas de entrega

1. Documenta la resolución de tu problema en un un archivo BITACORA.md, además, indica detalladamente cómo instalar las dependencias o archivos necesarios para correr tu aplicación.

2. Es necesario que garantices que tu aplicación pueda correr en la máquina de otra persona.

3. Sube tu respuesta a un repositorio en una cuenta tuya de GitHub, GitLab o BitBucket y da acceso a `lideres-tecnicos-front@ecomsur.com` y posiblemente a otros correos que te pida RRHH


# BITÁCORA

En esta bitácora se documentan los requerimientos mínimos, instalación, dependencias y estructura de carpetas del proyecto, así como las acciones de los reducers utilizados en la aplicación.


## REQUERIMIENTOS MÍNIMOS

- Node 14.15.0

## INSTALACIÓN

Para instalar el backend (API) y la aplicación frontend de React, sigue estos pasos:

1. En la carpeta raíz de la aplicación, ejecuta el siguiente comando:
   `npm install`
2. Navega al directorio `front` y ejecuta nuevamente el comando:
   `npm install`
3. Regresa al directorio raíz con el comando cd ...

>La aplicación se compone de un servidor Express y una instalación básica de Create-React-App (CRA), todo configurado para ejecutarse con un solo comando:
   `npm run dev`
Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.



npx create-react-app

> Configurar Redux: En la carpeta src, creamos una archivo llamada store

> utilizamos el middleware Redux Thunk para manejar acciones asincrónicas, creamos un reducer para manejar el estado de los productos.

> configuramos las rutas utilizando React-Router-DOM.

> proveer el store de Redux a la aplicación.

> los componentes Products y Cart




## DEPENDENCIAS

- __font awesome:__ se utiliza este conjunto de paquetes para extraer iconos y para mostrar las estrellas de los productos.
- __react-router-dom:__ se utiliza este paquete para asignar las rutas de nuestras pantallas.
- __redux:__ se utiliza para manejar el estado global de la aplicación y así mantener el carrito de compras durante todas las pantallas.
- __react-redux:__ se utiliza para poder usar los hooks y para integrarlo con React.
- __redux toolkit:__ se utiliza el set de herramientas RTK ya que facilita la configuración de Redux, permite configurar los reducers y acciones en un solo archivo, y evita el código repetitivo.
- __sass:__ se utiliza el preprocesador Sass para seccionar nuestro CSS, agregar variables y usar sus funciones para colores.

## ESTRUCTURA DE LAS CARPETAS

- __src:__ carpeta que contiene el código fuente.
- __components:__ carpeta que contiene todos los componentes de React. En ella se encuentra una carpeta especial llamada pages, que muestra las pantallas finales. Las demás carpetas contienen componentes más pequeños.
- __helpers:__ carpeta que contiene funciones, sean de mera ayuda o llamadas a endpoints.
- __hooks:__ carpeta que contiene todos los custom hooks.
- __redux__ carpeta en la que se hacen las configuraciones del store, en donde se alojan los datos de la aplicación, y las slices en donde están configuradas las acciones junto con los reducers.
- __styles:__ carpeta que contiene todos nuestros partials y nuestro archivo principal de Sass. Está dividida en estilos de las páginas (pages), componentes (components) y un archivo de configuración de colores (_colors.scss).

## ACCIONES DE LOS REDUCERS

### cartSlice

 - __addPoduct:__ agrega un producto al carrito. Si ya hay una instancia de este producto, agrega uno a su contador. Si rebasa el stock, muestra una alerta.
 - __removePoduct:__ elimina 1 elemento del carrito. Si este tiene más instancias, descuenta la cantidad en 1 unidad. Si el contador llega a 0, se remueve el producto del carrito.

### productSlice

 - __fetchProducts:__ Realiza una petición asíncrona para recuperar todos los productos y cambia el estado a su respectivo estado del fetching.
 - __fetchProductByID:__ Realiza una petición asíncrona para recuperar un productos por ID y cambia el estado a su respectivo estado del fetching.