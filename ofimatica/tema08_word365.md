# Tema 8. Procesadores de Texto: Microsoft Word 365

---

## 1. Introducción al Procesador de Textos

### 1.1 Concepto y Función
Un **procesador de textos** es una aplicación informática diseñada para la creación, edición, formateo e impresión de documentos de texto con capacidades avanzadas de maquetación. A diferencia de un editor de texto plano (como el Bloc de notas, que solo maneja caracteres sin formato), un procesador de textos permite aplicar estilos tipográficos, insertar elementos gráficos, tablas, encabezados, pies de página, índices automáticos y gestionar documentos complejos multipágina.

**Microsoft Word 365** (componente de la suite Microsoft 365, anteriormente Office 365) es el procesador de textos estándar de referencia en la Administración General del Estado y el más preguntado en oposiciones. Su formato de archivo predeterminado es **`.docx`**, basado en el estándar abierto **Office Open XML (OOXML)**, que consiste internamente en una colección de archivos XML empaquetados en un contenedor ZIP.

### 1.2 Otros Formatos de Archivo de Word
| Extensión | Tipo | Descripción |
|---|---|---|
| `.docx` | Documento Word | Formato predeterminado actual (desde Word 2007) |
| `.docm` | Documento con macros | Permite ejecutar código VBA embebido |
| `.dotx` | Plantilla de Word | Modelo reutilizable para crear documentos con formato predefinido |
| `.dotm` | Plantilla con macros | Plantilla que incluye macros VBA |
| `.doc` | Documento Word 97-2003 | Formato binario antiguo, compatible con versiones anteriores |
| `.pdf` | PDF | Word puede guardar directamente en formato PDF |
| `.rtf` | Texto enriquecido | Formato universal con formato básico, compatible multiplataforma |
| `.odt` | OpenDocument Text | Formato estándar abierto de LibreOffice/OpenOffice |
| `.txt` | Texto plano | Solo texto sin ningún formato |

---

## 2. La Interfaz de Microsoft Word 365

### 2.1 Componentes Principales de la Ventana
- **Barra de título**: Muestra el nombre del documento activo y la indicación de guardado automático (si está vinculado a OneDrive).
- **Barra de herramientas de Acceso Rápido (QAT - Quick Access Toolbar)**: Pequeña franja personalizable que por defecto incluye los botones Autoguardar, Deshacer (`Ctrl + Z`) y Rehacer (`Ctrl + Y`). Se puede personalizar añadiendo cualquier comando de Word (Guardar, Impresión rápida, Nuevo, etc.) haciendo clic en la flecha desplegable.
- **Cinta de opciones (Ribbon)**: Sistema de pestañas y grupos que organiza todas las herramientas de Word. Cada pestaña contiene grupos lógicos de comandos relacionados. Se puede contraer/expandir con `Ctrl + F1`.
- **Barra de fórmulas / Campo de búsqueda ("Tell me")**: Campo de búsqueda inteligente en la parte superior que permite buscar cualquier función por nombre y ejecutarla directamente.
- **Regla horizontal y vertical**: Muestra las dimensiones de la página, los márgenes, las sangrías y las tabulaciones. Se puede ocultar/mostrar desde Vista > Regla.
- **Área de trabajo del documento**: Zona central de escritura y edición.
- **Barra de estado** (parte inferior): Muestra: número de página actual / total de páginas, número de palabras del documento, idioma de revisión activo, modo de vista activo y control deslizante de **zoom**.
- **Barras de desplazamiento**: Vertical (principal) y horizontal (si el documento es más ancho que la ventana).

### 2.2 Las Pestañas del Ribbon (Cinta de Opciones)

#### Pestaña ARCHIVO (Backstage View)
No es una pestaña convencional sino una vista de pantalla completa para operaciones globales del documento:
- **Nuevo**: Crear documento en blanco o desde plantilla.
- **Abrir**: Acceder a documentos locales, recientes o en OneDrive/SharePoint.
- **Guardar** (`Ctrl + G` o `Ctrl + S`): Sobrescribe el archivo actual en su ubicación.
- **Guardar como** (`F12`): Permite elegir una nueva ubicación, nombre y formato de guardado.
- **Imprimir** (`Ctrl + P`): Vista previa de impresión integrada con configuración de impresora, número de copias, páginas específicas, impresión a doble cara, orientación y tamaño de papel.
- **Exportar**: Crear PDF/XPS directamente.
- **Compartir**: Enviar el documento por correo electrónico o generar un enlace de OneDrive.
- **Información**: Propiedades del documento (autor, título, etiquetas), permisos (proteger documento con contraseña, restringir edición, cifrar), gestión de versiones y compatibilidad.
- **Opciones**: Configuración avanzada global de Word (ortografía, guardado automático, idioma, complementos, personalización del Ribbon).

#### Pestaña INICIO
La más utilizada. Contiene los grupos fundamentales de formato:

**Grupo Portapapeles:**
- Pegar (`Ctrl + V`): Con opciones especiales (Pegado especial: mantener formato, solo texto, formato de destino, pegar como imagen).
- Cortar (`Ctrl + X`), Copiar (`Ctrl + C`).
- Copiar formato (brocha): Copia el formato de un texto seleccionado y lo aplica a otro. Doble clic en la brocha permite aplicar el formato múltiples veces.

**Grupo Fuente:**
- Tipo de fuente (familia tipográfica): Times New Roman, Arial, Calibri (predeterminada en Word), Segoe UI.
- Tamaño de fuente: Medido en puntos tipográficos (1 punto = 1/72 de pulgada). Rango habitual: 8-72 pt. El tamaño estándar para documentos administrativos es 12 pt.
- **Estilos de carácter**:
  - Negrita: `Ctrl + N` (o `Ctrl + B` en teclado inglés).
  - Cursiva: `Ctrl + K` (o `Ctrl + I`).
  - Subrayado: `Ctrl + S` (o `Ctrl + U`).
  - Tachado: Línea horizontal que cruza el texto.
  - Subíndice: `Ctrl + =`. Ejemplo: H₂O.
  - Superíndice: `Ctrl + Shift + +`. Ejemplo: m².
- Color de fuente, color de resaltado (marcador).
- Efectos: Sombra, contorno, relieve, versalitas (`Ctrl + Shift + L`), MAYÚSCULAS/minúsculas (`Shift + F3`).
- Borrar todo el formato: Devuelve el texto a formato Normal predeterminado.

**Grupo Párrafo:**
- **Alineaciones** (aplicadas al párrafo completo):
  - Izquierda: `Ctrl + Q` (predeterminada).
  - Centrada: `Ctrl + T`.
  - Derecha: `Ctrl + D`.
  - Justificada: `Ctrl + J` (estira el texto para alinearlo con ambos márgenes simultáneamente, insertando espaciado adicional entre palabras). Es la alineación estándar en documentos administrativos oficiales.
- **Sangrías**: Desplazamiento horizontal del texto respecto al margen.
  - Sangría izquierda: Desplaza todo el párrafo hacia la derecha.
  - Sangría derecha: Acerca el borde derecho del texto hacia el centro.
  - Sangría especial de **Primera línea**: Solo la primera línea del párrafo se desplaza hacia la derecha (estilo clásico de inicio de párrafo en narrativa).
  - Sangría especial **Francesa**: Todas las líneas del párrafo excepto la primera se desplazan hacia la derecha (se usa en bibliografías APA y listas con etiquetas colgantes).
- **Interlineado**: Distancia vertical entre las líneas de un mismo párrafo. Valores: Sencillo (1,0), 1,15 (predeterminado en Word 365), 1,5 líneas, Doble (2,0), Exacto (puntos fijos), Mínimo.
- **Espaciado anterior y posterior**: Espacio vertical añadido antes y después de cada párrafo (no entre líneas dentro del párrafo). Predeterminado: 0 pt anterior, 8 pt posterior.
- **Viñetas**: Listas con marcadores gráficos (puntos, cuadrados, flechas).
- **Numeración**: Listas con secuencia numérica, alfabética o romana.
- **Lista multinivel**: Combinación de numeración y sub-numeración jerárquica (1, 1.1, 1.1.1).
- **Marcas de párrafo y caracteres ocultos** (`Ctrl + Shift + 8` o botón ¶): Muestra las marcas invisibles del documento: retornos de párrafo (¶), espacios (·), tabulaciones (→), saltos de sección.
- **Bordes y sombreado**: Líneas decorativas y colores de fondo del párrafo.

**Grupo Estilos:**
Los **Estilos** son conjuntos predefinidos de formato (fuente, tamaño, color, espaciado, sangría) que se aplican con un solo clic. Son absolutamente fundamentales porque:
- Garantizan **uniformidad visual** en todo el documento.
- Permiten generar **Tablas de Contenido automáticas** (los Estilos "Título 1", "Título 2", etc. definen la estructura jerárquica del documento).
- Facilitan la **actualización global**: Modificar un estilo actualiza automáticamente todos los párrafos que lo tengan asignado.
- Estilos principales: Normal (texto base), Título 1, Título 2, Título 3, Cita, Cita destacada, Sin espaciado.

#### Pestaña INSERTAR
Permite introducir elementos no textuales y componentes especiales:
- **Páginas**: Portada prediseñada, Página en blanco, Salto de página (`Ctrl + Enter`).
- **Tablas**: Crear tablas especificando filas × columnas, insertar tablas de Excel, dibujar tablas a mano. Una vez creada, aparecen las pestañas contextuales "Diseño de tabla" (estilos, sombreado, bordes) y "Disposición" (insertar/eliminar filas y columnas, combinar celdas, dividir celdas, distribuir uniformemente, fórmulas básicas de tabla, convertir texto en tabla y viceversa).
- **Ilustraciones**: Imágenes (locales, en línea, capturas de pantalla), Formas geométricas y flechas, SmartArt (diagramas profesionales: listas, procesos, ciclos, jerarquías, relaciones, matrices, pirámides), Gráficos (integración con Excel), Modelos 3D.
- **Complementos**: Insertar aplicaciones de terceros desde la tienda de Office.
- **Vínculos**: Hipervínculos (`Ctrl + Alt + K` o `Ctrl + K`), Marcadores (puntos de referencia con nombre dentro del documento), Referencias cruzadas (enlaces internos a títulos, figuras o tablas con actualización automática).
- **Encabezado y pie de página**: Zonas de texto que se repiten en la parte superior e inferior de cada página. Permiten insertar número de página, fecha, nombre de archivo, logotipos. **Concepto clave de examen**: Se pueden crear encabezados y pies DIFERENTES para la primera página, para páginas pares e impares, y para cada sección del documento (usando saltos de sección y desactivando la opción "Vincular al anterior").
- **Texto**: Cuadro de texto (marco flotante para texto posicionable), WordArt (texto decorativo artístico), Letra capital (primera letra grande que abarca varias líneas, como en libros antiguos), Fecha y hora (inserción con actualización automática), Objeto OLE.
- **Símbolos**: Caracteres especiales no disponibles en el teclado (©, ®, ™, €, ñ, flechas, letras griegas). Ecuaciones matemáticas con editor integrado.

#### Pestaña DISEÑO
Define la apariencia global del documento:
- **Temas**: Conjuntos coordinados de colores, fuentes y efectos que se aplican al documento completo.
- **Colores del tema**, **Fuentes del tema**, **Efectos del tema**: Personalizables individualmente.
- **Formato del documento**: Establece la combinación de Estilos rápidos del panel Inicio.
- **Fondo de página**: Marca de agua (texto diagonal semitransparente como "BORRADOR", "CONFIDENCIAL"), Color de página, Bordes de página.

#### Pestaña DISPOSICIÓN (Formato de Página)
Controla la configuración física del papel y la disposición del texto:
- **Márgenes**: Distancia entre el texto y los bordes del papel. Predeterminados: Normal (2,5 cm todos), Estrecho (1,27 cm), Moderado, Ancho, Reflejado (para encuadernación a doble cara). Personalizable en milímetros o centímetros.
- **Orientación**: Vertical (retrato, predeterminada, el lado corto arriba) u Horizontal (apaisada/paisaje, el lado largo arriba). Se pueden combinar ambas orientaciones en un mismo documento usando saltos de sección.
- **Tamaño de papel**: A4 (210 × 297 mm, estándar europeo y administrativo), Carta (216 × 279 mm, estándar estadounidense), Oficio, Sobre, Personalizado.
- **Columnas**: Dividir el texto en 2, 3 o más columnas periodísticas. Una columna es el predeterminado.
- **Saltos** (elemento crucial de examen):
  - *Salto de página*: Fuerza el inicio del texto siguiente en una nueva página (`Ctrl + Enter`). Sigue dentro de la misma sección.
  - *Salto de sección (página siguiente)*: Inicia una nueva sección en la página siguiente. Permite tener encabezados, pies, orientación, márgenes y numeración de páginas DIFERENTES en cada sección.
  - *Salto de sección (continuo)*: Nueva sección sin saltar de página. Útil para cambiar el número de columnas en medio de una página.
  - *Salto de sección (página par/impar)*: Inicia la nueva sección en la próxima página par o impar.
  - *Salto de columna*: Fuerza el texto a la siguiente columna.
- **Números de línea**: Numeración secuencial visible en el margen izquierdo.
- **Guiones**: Partición automática de palabras al final de línea para mejorar la justificación.

#### Pestaña REFERENCIAS
Herramientas académicas y documentales:
- **Tabla de contenido (TDC)**: Genera automáticamente el índice del documento basándose en los párrafos formateados con los Estilos Título 1, 2, 3, etc. Se actualiza con clic derecho > "Actualizar campo" > "Actualizar toda la tabla". **Pregunta de examen**: La TDC funciona correctamente solo si se han aplicado los Estilos de Título; no funciona con texto simplemente formateado en negrita o mayor tamaño sin asignar estilo.
- **Notas al pie y notas al final**: Notas al pie aparecen al fondo de la misma página; notas al final se agrupan al final del documento o de la sección.
- **Citas y bibliografía**: Gestión de fuentes bibliográficas con formato APA, ISO 690, MLA, Chicago. Insertar cita, administrar fuentes, generar bibliografía automática.
- **Títulos (Rótulos)**: Etiquetar figuras, tablas e ilustraciones con numeración automática secuencial ("Figura 1", "Tabla 2"). Permite generar una Tabla de ilustraciones o Tabla de figuras.
- **Índice alfabético**: Generar un índice de términos al final del documento, marcando las entradas en el texto.

#### Pestaña CORRESPONDENCIA (Combinar Correspondencia — Mail Merge)
**Tema altamente preguntado en oposiciones C1/C2.** Permite generar documentos masivos personalizados (cartas, sobres, etiquetas, correos) que combinan un documento modelo con datos procedentes de una fuente de datos externa.

**Los 5 pasos del proceso de Combinar Correspondencia:**
1. **Seleccionar tipo de documento**: Cartas, mensajes de correo electrónico, sobres, etiquetas o directorio.
2. **Seleccionar el documento inicial**: Usar el documento actual, crear uno nuevo o partir de una plantilla.
3. **Seleccionar destinatarios / Origen de datos**: La fuente de datos puede ser una tabla de Excel, una tabla de Access, una lista de contactos de Outlook, un archivo CSV o una nueva lista creada manualmente en Word. Cada fila representa un destinatario y cada columna un campo (Nombre, Apellido, Dirección, CP, Ciudad...).
4. **Insertar campos de combinación**: Colocar campos-marcador en el documento modelo (<<Nombre>>, <<Apellido>>, <<Dirección>>) que se sustituirán por los datos reales de cada registro.
5. **Vista previa y finalizar**: Revisar el resultado antes de imprimir o generar los documentos individuales. Opciones de finalización: Editar documentos individuales, Imprimir documentos, Enviar mensajes de correo electrónico.

#### Pestaña REVISAR
- **Ortografía y gramática** (`F7`): Revisión completa del documento, sugiriendo correcciones.
- **Sinónimos/Tesauro** (`Shift + F7`): Busca sinónimos de la palabra seleccionada.
- **Contar palabras**: Muestra estadísticas detalladas (palabras, caracteres con/sin espacios, párrafos, líneas, páginas).
- **Idioma**: Establecer el idioma de revisión del documento o de un fragmento seleccionado.
- **Comentarios**: Insertar notas de revisión en el margen sin modificar el texto principal.
- **Control de cambios** (`Ctrl + Shift + E`): **Función esencial en entornos burocráticos**. Registra todas las modificaciones realizadas (inserciones, eliminaciones, cambios de formato) con identificación del autor, fecha y hora. Las modificaciones se muestran en colores (rojo para eliminaciones, subrayado para inserciones) con globos en el margen. Cada cambio puede ser individualmente Aceptado o Rechazado. Permite Aceptar/Rechazar todos los cambios de una vez.
- **Comparar**: Confrontar dos versiones de un documento para identificar diferencias.
- **Proteger documento**: Restringir edición (solo comentarios, solo rellenar formularios, solo lectura), requerir contraseña.

#### Pestaña VISTA
- **Modos de vista**:
  - *Diseño de impresión*: Modo predeterminado que muestra el documento tal como se imprimirá, con márgenes, encabezados y pies visibles.
  - *Modo de lectura*: Optimizado para leer en pantalla, oculta herramientas de edición.
  - *Diseño web*: Muestra cómo se vería el documento como página web.
  - *Esquema*: Muestra la estructura jerárquica del documento basada en los Estilos de título. Permite reorganizar secciones arrastrándolas.
  - *Borrador*: Vista simplificada sin márgenes ni elementos gráficos, centrada en el texto puro. Más rápida para documentos extensos.
- **Regla**: Muestra/oculta las reglas horizontal y vertical.
- **Líneas de la cuadrícula**: Cuadrícula visual para alinear objetos gráficos.
- **Panel de navegación** (`Ctrl + F` también abre la búsqueda aquí): Muestra la estructura de títulos del documento como un árbol, permitiendo saltar directamente a cualquier sección. También tiene pestañas para buscar por páginas o por resultados de búsqueda.
- **Zoom**: Controles para ajustar el nivel de ampliación (25% - 500%). Opciones rápidas: 100%, una página, dos páginas, ancho de página.
- **Ventanas**: Dividir la ventana para ver dos partes del mismo documento simultáneamente. Ver en paralelo dos documentos diferentes.

---

## 3. Tabulaciones

### 3.1 Concepto
Las **tabulaciones** son posiciones fijas en la regla horizontal donde el cursor se desplaza al pulsar la tecla Tab. Permiten alinear texto en columnas sin usar tablas, de forma precisa.

### 3.2 Tipos de Tabulación
- **Izquierda** (predeterminada): El texto se alinea por su borde izquierdo respecto a la marca.
- **Centrada**: El texto se centra sobre la posición de la marca.
- **Derecha**: El texto se alinea por su borde derecho.
- **Decimal**: Alinea los números por el separador decimal (coma o punto). Ideal para columnas de cifras monetarias.
- **Barra**: Inserta una línea vertical en la posición indicada, sin desplazar el texto.

### 3.3 Establecer Tabulaciones
- Haciendo clic en la posición deseada de la regla horizontal (el selector de tipo de tabulación está en el extremo izquierdo de la regla).
- Desde el cuadro de diálogo: Inicio > Párrafo > Tabulaciones. Aquí se puede establecer posición exacta, alineación y **relleno** (ninguno, puntos, guiones, subrayado) que conecta visualmente las columnas tabuladas.

---

## 4. Configuración de Impresión

### 4.1 Acceso
`Ctrl + P` o Archivo > Imprimir. Se abre el panel de impresión con vista previa integrada.

### 4.2 Opciones Principales
- **Selección de impresora**: Local (USB), en red (compartida), virtual (Microsoft Print to PDF, XPS Writer).
- **Páginas**: Todas, página actual, selección de texto, rango personalizado (ej: `1-5, 8, 12-15`), solo páginas pares u solo impares (para impresión a doble cara manual).
- **Copias**: Número de ejemplares con opción de intercalar.
- **Orientación**: Vertical/Horizontal.
- **Tamaño de papel**: A4, Carta, etc.
- **Márgenes**: Normales, estrechos, anchos.
- **Páginas por hoja**: 1, 2, 4, 6, 8 ó 16 páginas miniaturizadas por cada hoja física (para ahorro de papel).
- **Impresión a doble cara (Dúplex)**: Automática (si la impresora lo soporta) o manual (imprime las impares, solicita girar el papel, imprime las pares).
