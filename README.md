# Estrategias de persistencia y recuperación

Ejemplo de persistencia y recuperación de datos

### Prerrequisitos

El código se compone de tres artefactos (producer, consumer, service) node.js. Es necesario tener una instalación moderna de node.js (https://nodejs.org/) para poder ejecutarlos

La infraestructura requiere de una instalación de [couchbase community edition](https://www.couchbase.com/downloads) como almacén de datos y de [apache kafka](https://kafka.apache.org/downloads) como bus de eventos en localhost. En ambos casos las instalaciones por defecto son más que suficientes. 

En el caso de couchbase, las aplicaciones asumen que existe un bucket de nombre _test_ con permisos de acceso _Application access_ para un usuario _test_ con contraseña _12345678__. Esto se gestiona desde la pestaña _security_ de couchbase. Apache kafka no requiere de ninguna configuración inicial. 

### Instalación

Para cada uno de los artefactos, es necesario lanzar el comando _npm install_ desde la carpeta principal. Esto importará las librerías necesarias del repositorio NPM.

## Ejecución

Desde la carpeta correspondiente es necesario lanzar el artefacto con _node index.js_. No importa el orden de lanzamiento, los tres artefactos son independientes.

## Versioning

Se adapta semver como sistema de versionado. Las versiones son individuales por artefacto y se detallan en su package.json correspondiente

## Autor

* **David Pardo ([@dei_biz](https://twitter.com/dei_biz))** - *Trabajo inicial* - [Corunet](https://coru.net)

PRs are welcome

## Licencia

Todos los archivos se distribuyen bajo licencia MIT. Consulta el archivo [LICENSE.md](LICENSE.md) para ver los detalles

## Agradecimientos

* Laura M. Castro por hacerme un hueco. Eternamente agradecido
* Iago Elizechea por acordarse de mi. 