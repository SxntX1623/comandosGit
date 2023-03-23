# comandosGit
**Trabajo de clase 9-15/marzo/23** ------- **Santiago Londoño Loaiza 10-1**
## **30 ETIQUETAS HTML --->**
![html](https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/html-tagst.jpg)
### **Etiquetas de raiz:**
1. **html y /html:** Etiqueta que indica que lo que viene a continuación es un documento HTML.

![HTML :(](https://codelearn.io/Upload/Blog/html-la-gi-no-co-quan-trong-khong-63715266434.3958.jpg)

### **Datos del documento:**
2. **title:** Para agregar el titulo a un documento en HTML.
3. **link:** Se usa para enlazar externos al documento en HTML.
4. **style:** Se usa para introducir el codigo css en el documento de HTML.

![img](https://www.tutorialstonight.com/assets/html/html-head.png)

### **Estructura del HTML:**
5. **main:** De usa para definir el contenido principal del documento
6. **h1, h2, h3, h4, h5 Y h6:** Ya que son muy usadas para jerarquizar el contenido de la pagina son muy importantes.
7. **header y /header:** Es usada para poner la cabezera de la pagina, **Ejemplo ------>** Logotipo, Menu de nav, ETC.
8. **body y /body:** Es el contenido que se mostrara a la web.

![img](https://flaviomuniz.com.br/wp-content/uploads/2018/06/O-que-sao-h1-h2-e-h3.png)

### **Agrupación del contenido:**
9. **p y /p:**  Se usa para escribir parrafos de texto.
10. **li y /li:** Recoge el contenido de un elemento de una lista, **Sea ordenada o no**.
11. **div y /div:** Se usa para crear un contenedor generico.

![img](https://i.stack.imgur.com/ZXuO0.png)

### **Para texto:**
12. **a y /a:** Se utiliza para crear hiperenlaces en el documento HTML.
13. **br:** Se utiliza para crear un salto de linea.
```
<h2>CANCIÓN ÚLTIMA<h2>
<p>Pintada, no vacía: <br>
pintada está mi casa <br>
del color de las grandes <br>
pasiones y desgracias.</p>
<p>Regresará del llanto <br>
adonde fue llevada <br>
con su desierta mesa, <br>
con su ruinosa cama.</p>
```
### **Para insertar contenido:**
14. **img:** Para "pintar" una imagen en la web
15. **video y /video:**  Se usa para reproducir video en la página web junto a sus archivos de audio.
16. **audio y /audio:** Usada para cargar en una web un archivo de audio.
17. **color:** Selecciona el valor de color de primer plano del contenido de elemento de texto y decoraciones de texto.
18. **background-color:** Define el color de fondo de un elemento.

![img](https://fronty.com/static/uploads/1.12-1.01/css%20image/linear1-02.png)

### **Para la creación de tablas:**
19. **table y /table:** Etiquetas de apertura y cierre de una tabla. El resto de etiquetas de la tabla han de ir siempre recogidas entre estas dos etiquetas.
20. **caption y /caption:** Usada para indicar el título de la tabla.
21. **tbody y /tbody:** Usada para describir los datos concretos de una tabla.
22. **td y /td:** Usada para definir una celda de una tabla.
23. **thead y /thead:** Indica el bloque de filas que describen las etiquetas de las columnas de la tabla.
24. **colgroup y /colgroup:** Etiqueta utilizada para agrupar dos o más columnas de una tabla.

![img](https://www.simplilearn.com/ice9/free_resources_article_thumb/defining_html_tables-html_tables.PNG)

### **Para la creación de formularios:**
25. **form y /form:** Etiqueta de apertura y cierre de un formulario de una página web.
26. **label y /label:** Se usa para definir el nombre o título de un control del formulario.
27. **input:** Pinta un campo de introducción de datos para el usuario.
28. **button y /button:** Etiqueta utilizada para representar un botón en el formulario.
29. **option y /option:**  Etiqueta ligada a <select>. Permite añadir diferentes opciones al <select>.
30. **textarea y /textarea:**  Añade un campo al usuario para que pueda introducir texto en unas líneas máximas de texto que el desarrollador puede definir.

![img](https://softuni.org/wp-content/uploads/2022/06/HTML-Forms-Structure-e1656488599535.png)
## **30 ETIQUETAS CSS --->**
![img](https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png)
1. **font-size:**
2. **font-family:**
3. **font-style:**
4. **font-weight**

![img](http://www.asmarterwaytolearn.com/pro-html-css/images/illus-expert-font-weight-control-2.png)

5. **line-height:**
6. **text-decoration:**
7. **text-align:**
8. **border-left-width:**
9. **border-right-width:**
10. **border-top-width:**
11. **border-bottom-width:**
12. **border-width:**
13. **border-left-style:**
14. **border-right-style:**
15. **border-top-style:**
16. **border-bottom-style:**
17. **border-style:**
18. **border-left-color:**
19. **border-right-color:**
20. **border-top-color:**
21. **border-bottom-color:**
22. **border-color:**

![img](https://i.stack.imgur.com/EHwMi.png)

23. **margin-left:**
24. **margin-right:**
25. **margin-top:**
26. **margin-bottom:**
27. **margin:**

![img](https://lh4.googleusercontent.com/-1Piq3Ia65ws/UjHz7CeKS1I/AAAAAAAAAS0/rdDu26tLuho/s406/CU01028D_1.png)

28. **padding-left:**
29. **padding-right:**
30. **padding-top:**
31. **padding-bottom:**
32. **padding:**

![img](https://cdn.educba.com/academy/wp-content/uploads/2020/02/HTML-Padding.jpg)

## **DISPLAY CSS:BLOCK --->**
El valor block en la propiedad display en CSS representa un elemento como un bloque y es uno de los tipos de display css. Una forma de entender esto es pensar en los bloques como elementos que van de lado a lado de la pantalla, como sería un párrafo. Cuando usamos este valor, el elemento empezará en una nueva línea al lado izquierdo de nuestro viewport y ocupará hacia la derecha, en el eje horizontal, tanto espacio como sea posible. Este bloque seguirá creciendo hacia abajo cuanto sea necesario y siempre intentará ocupar el ancho máximo de su contenedor, que en la mayoría de casos es el mismo viewport (espacio visible de la página web en pantalla).
por ejemplo, un párrafo en una pantalla de 800 pixeles de ancho, el párrafo funcionará como un bloque y ocupará 800 pixeles de ancho. Puedes encontrar un pequeño margen entre el bloque y la pantalla, pero esto realmente es el margen del elemento body. Si le das un margen 0 a este elemento, los elementos de bloque ocuparán el total del ancho sin necesidad de especificar su tamaño.

## **DISPLAY CSS:INLINE --->**
El valor inline en la propiedad display en CSS representa elementos que continúan en la misma línea que el resto del contenido y es otro de los tipos de display css. Los elementos inline pueden verse como una letra dentro de la propia línea del flujo del texto en vez de un bloque aparte. Estos elementos no respetan ni márgenes ni paddings top/bottom ni propiedades de width y height. Es decir, si les aplicas un relleno o margen, solo afectarán a los lados del elemento, no su espaciado arriba y abajo. Esto se vería como un gran espacio a la izquierda y derecha del texto que no afecta el alto de la línea, pues su prioridad es mantenerla.

## **DISPLAY CSS:BLOCK-INLINE --->**
Hay una opción que está en medio de los dos niveles de propiedad display en css anteriores. El inline-block se comporta igual que un elemento inline, ya que sigue el flujo de la línea del texto a la hora de situarse. Sin embargo, esta variedad se comporta como un elemento block, porque respeta las propiedades de width y height, así como los márgenes y paddings a cualquier lado del bloque Si quieres que un elemento esté en línea pero siga nuestros requerimientos de margen, relleno, alto y ancho, lo más fácil es cambiar el propiedad display en css del elemento a inline-block. A diferencia de los otros niveles, este no es un nivel por defecto, por lo que debes especificarlo en tu código.
![img](https://res.cloudinary.com/practicaldev/image/fetch/s--lT1mgYzG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h0y0cf2fj9m16wpv7y2n.jpg)

## **EVENTOS JAVA-SCRIPT --->**
Los eventos son acciones o sucesos que se generan en aplicaciones gráficas definidas en los componentes y ocasionado por los usuarios, como presionar un botón , ingresar un texto, cambiar de color, etc.

Los eventos le corresponden a las interacciones del usuario con los componentes.
Los componentes están asociados a distintos tipos de eventos.
Un evento será un objeto que representa un mensaje asíncrono que tiene otro objeto como destinatario.

### **TIPOS DE EVENTOS JAVA --->**
ActionEvent : generado por activación de componentes.
AdjustmentEvent : generado por  ajuste de  componentes  ajustables como  barras de desplazamiento.
ContainerEvent :  generado  cuando los  componentes  se  agregan  o se quitan  de un contenedor.
FocusEvent : generado cuando un componente entra o sale del foco.
ItemEvent : generado  cuando un artículo  se  selecciona  de una lista,  opción, o caja de  chequeo.
KeyEvent : generado por actividad del teclado.
ouseEvent : generado por actividad del ratón.
PaintEvent : generado cuando un componente se pinta.
TextEvent : generado cuando un componente del texto se modifica.
WindowEvent : generado por actividad de la ventana (como cerrar, abrir,minimizar).

![img](https://es.wikieducator.org/images/f/fd/Java_evento1.jpg.png)

## **TIPOS DE SELECTORES CSS --->**
### **Selector simple:**
Un selector simple es aquel que está formado sólo por una única cadena textual, sin ningún combinador.

### **Selector compuesto:**
El Selector compuesto es una cadena de selectores simples sin combinadores (el espacio en blanco también queda excluido porque es un combinador)

![img](https://lh3.googleusercontent.com/FENV9lfxBux02iDrJjWNAwoetDYO5ehyC1YXO9prr1jLfPQFYGBQu6UNHDJ8hMTsTl7Q_3ETlz3lfe5pR1aE1kUNaPak16pzSgnU1Fh4mIjozVoxZBQ-blcpr9iNIGhMEPrC9jiXwQ=w2400)
