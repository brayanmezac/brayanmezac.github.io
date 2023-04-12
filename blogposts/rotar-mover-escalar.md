---
title: 'Rotar, Mover y escalar objetos 3D en escenas de Spark AR'
date: '2023-04-05'
--- 
---
Permitir a los usuarios mover objetos en una experiencia de realidad aumentada puede ser muy útil para experiencias de marketing, educación y entretenimiento, ya que esto les da a los usuarios un mayor control y la posibilidad de personalizar su experiencia. Además, esto puede mejorar la interactividad y la inmersión en la experiencia, lo que es beneficioso para una variedad de casos de uso.

### Paso 1: Agrega el plane Tracker a la escena.
Cuando añadimos el "plane tracker" en la escena de Spark AR, podemos utilizar la cámara trasera de nuestro dispositivo para buscar superficies planas en el mundo real. De esta forma, podemos agregar objetos virtuales en una experiencia de realidad aumentada que se ajusten a la superficie detectada.
![Spark AR](https://i.imgur.com/whBZlE1.png)
### Paso 2: prepara la escena.
En este paso, importaremos los objetos y activos que utilizaremos en nuestra experiencia de realidad aumentada. En el caso de que no tengamos objetos propios, podemos utilizar los objetos disponibles en la librería de Spark AR, los cuales son *gratuitos* y nos permiten crear experiencias impresionantes en poco tiempo. Al agregar estos objetos a nuestra escena.
![Spark AR](https://i.imgur.com/hs2JEtj.png)
Perfecto, ya que tenemos nuestros objetos en Spark AR, ahora los podemos importar al **"plane tracker"** para que se reflejen en nuestra escena de realidad aumentada. Para hacer esto, podemos arrastrar y soltar nuestros objetos en la ventana de "Assets" en Spark AR y luego arrastrarlos desde la ventana de "Assets" hasta la jerarquía de objetos en el **"plane tracker"**. De esta manera, los objetos se ajustarán a las superficies planas detectadas por el "plane tracker" y podrán ser visualizados en la experiencia de RA.
![Spark AR](https://i.imgur.com/gBQvHZX.png)
### paso 3: agrega los activos al null object
Después de haber acomodado todos nuestros activos en la escena, podemos indicar qué objetos queremos que el usuario pueda mover y luego agruparlos dentro de un objeto nulo **("null object")**. El objeto nulo nos permite agrupar objetos para que se muevan juntos y mantener organizada la jerarquía de objetos en nuestra escena. Luego, podemos aplicar las transformaciones ***(rotación, escalado y traslación)*** al objeto nulo, lo que permitirá al usuario mover todo el grupo de objetos al mismo tiempo en la experiencia de realidad aumentada.
![Spark AR](https://i.imgur.com/PN7WS8V.png)
### Paso 4: agregar parche Object Control
Ahora, en la librería de Spark AR, podemos buscar un parche llamado "Object Control". Este parche contiene una lógica predefinida que nos permite detectar los gestos del usuario en la pantalla y traducirlos en la modificación de los valores de los vectores de escala, rotación y traslación de los objetos en nuestra escena de realidad aumentada. Al utilizar este parche, podemos agregar interactividad a nuestra experiencia de RA y permitir que el usuario controle el movimiento de los objetos en la pantalla utilizando gestos intuitivos.
![Spark AR](https://i.imgur.com/OYGdcoI.png)
primero debemos seleccionar el objeto nulo que contiene nuestros objetos. Luego, colocamos el cursor del mouse sobre la flecha que se encuentra al lado derecho del objeto en la ventana de **"Scene"** de Spark AR. Cuando la flecha se vuelva amarilla, hacemos clic izquierdo en ella para abrir el parche editor. En el parche editor, podemos ver que nuestros vectores de escala, rotación y posición ya han sido importados y están listos para ser conectados a los parámetros del parche **"Object Control"**. 
![Spark AR](https://i.imgur.com/vHXQlsR.png)
Una vez que hemos importado nuestros vectores de escala, rotación y posición al parche editor, podemos arrastrar el parche "Object Control" desde la librería de Spark AR y soltarlo dentro del parche editor.
![Spark AR](https://i.imgur.com/Fsj6vKJ.png)
De esta manera, podemos conectar los parámetros del parche "Object Control" con nuestros vectores y permitir que el usuario controle el movimiento de nuestros objetos en la experiencia de realidad aumentada utilizando gestos intuitivos.
![Spark AR](https://i.imgur.com/jh1QGYM.png)

> ***Nota:*** Si damos doble clic en el parche "Object Control", podremos ver que en su interior hay una lógica programada. Al comprender esta lógica, podemos tener un mayor control sobre nuestra experiencia de realidad aumentada y crear experiencias más personalizadas e innovadoras.
![Spark AR](https://i.imgur.com/OTzyBMY.png)
También podemos hacer integraciones o modificaciones en el parche para adaptarlo a las necesidades específicas de nuestra experiencia de RA. Con un mayor conocimiento sobre la lógica de los parches en Spark AR, podemos ser más creativos y obtener resultados más precisos y efectivos.

