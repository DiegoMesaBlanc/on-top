### ON - TOP
El proyecto fue estructurado de la siguiente forma ya que es mas fácil  de manipular componentes
y servicios dentro del proyecto simplemente copiando y pegando, y realizandolo una unica vez.

Tenemos la estructura a continuación:
* **Common** : Esta carpeta alojara los archivos "Utilities" para logicas y centralización de negocio. Adicional,
tendra nuestro archivo de alertas que seran utilizadas para informar al usuario sobre procesos y un store de información
que nos ayudará a tener un contenedor siempre disponible con todos los datos de la aplicación; esto porque normalmente, en una aplicación Angular tenemos varios servicios para mantener los datos, cuando la aplicación crece puede hacerse difícil conocer qué servicio es el que está realizando determinados cambios.

* **Components** : Esta carpeta alojará todos los componentes globales que se utilizaran como el navbar, el footer, etc.

* **Directives** : Dentro guardaremos las directivas del proyecto.

* **Guards** : Esta carpeta tendrá los guardianes dependiendo el proceso requerido.

* **Models** : Acá guardaremos todos los modelos que se necesiten para interactuar con la aplicación y los servicios que
se vayan a consumir.

* **Modules** : Dentro de esta carpeta se crearan cada una de las vistas de negocio dependiendo del menu lateral o navbar
el cual nos brindara la estructura de esta carpeta. Se crea una carpeta por cada opcion del menu; con su respectivo routing
y module; esto puesto que mejora la interacción del usuario con cada vista. El routing dentro de cada uno es para una comunicación mas rápida y fácil de entender cuando un proyecto crece bastante. Por ultimo tendremos un modulo global que alojará todos los componentes hijos que se repetiran más de lo normal dentro del proyecto y tendremos que utilizarlos en varias vistas.

* **Style.scss** : Antes de iniciar cada proyecto, este se debe configurar, minimo, para la paleta de colores que se utilizará dependiendo del usuario en cuestion.

* **Assets** : Tendrá todas las fuentes, imagenes, iconos, etc; que el proyecto requiera

* **Environments** : Alojará todas nuestras uris para cada ambiente de despliegue.

* **Angular.js** : Dentro de este configuraremos cada sistema de despliegue dependiendo el ambiente, se agregará el framework con el que se desee trabajar y adicional, podremos cambiar el puerto por defecto (4201).



### Pre-requisitos 📋

**Debera tener instalado:**
* **Angular (Angular CLI)** : ^8.2.2
* **Angular Framework**     : ^8.2.2
* **NodeJS**                : v12.16.3
* **npm**                   : 6.4.1


### Instalación 🔧

Al momento de tener nuestro ambiente configurado y clonar nuestro codigo, ejecutamos en una ventana
de comandos **npm install** para descargar nuestras dependencias. El portal despliegara por el puerto 4201.


## Autores ✒️

* **Diego Mesa** - *Desarrollo Front-end*


## Expresiones de Gratitud 🎁

* Invita una cerveza 🍺 a alguien del equipo.
