# Proyecto Final Fundación Adogtame

Este proyecto es la presentación final del curso de Angular realizado en Escalab y para su elaboración, se tuvo en cuenta ciertas pautas establecidas por parte del instructor.
Es una fundación para adopción de perros, en donde se podrá buscar por raza y desplegar una información detallada de cada uno. Además cuenta con un login, para acceder al contenido de la app. 

## Datos de acceso
URL: https://elegant-pike-5831fd.netlify.app/

user: adogtame01@gmail.com
pass:123456

## Datos de la API

La API utilizada para extraer la información de los perros se encuentra en: https://docs.thedogapi.com/
Esta contiene imagenes de una gran cantidad de razas de perros e información de cada una como, tamaño, origen, altura, peso, etc.
De estos solo se tomó la imagen y el nombre de la raza.

## Información detallada

Para la autenticación del login, se usó la plataforma de Firebase que facilita la administración de los datos del usuario. 
Se realizó la instalación y se importó en el servicio "Login.service". En este se encuentra implementado el guard "CanActivate" que otorga seguridad y verifica si los datos son correctos para poder visualizar la información que se encuentra en la ruta raíz.

## Ruta Novedades

Se implementó el guard "CanDeactivate" en la ruta "Novedades" para que el usuario confirme si desea cambiar de ruta antes de enviar sus datos. En este mismo formulario, se puede verificar cuando el usuario esté digitando erróneamente su correo por medio del "ReactiveForm".

## LazyLoad
Se implementó "lazyload" para la ruta "home".

## Pipes
Se utilizaron dos pipes en el template de fundacion-buscar: Uno personalizado para poner el texto en negrilla y el otro para visualizar el título en mayúscula.

## Comunicación entre componentes
Por medio del @Input se obtienen las imágenes, nombre y razas del componente padre "home" al componente hijo "resultados".

## Hooks

Se utilizó el hook "onInit" y "onDestroy" en componente del home para la subscripción del servicio "perrosService".

## Nombres aleatorios 

Para asignar nombres a cada perro, se creó un servicio que contiene un arreglo de nombres de perros aleatorios, luego se importó el servicio en el componente "home" y se asoció a la cantidad de razas que contiene la API.





