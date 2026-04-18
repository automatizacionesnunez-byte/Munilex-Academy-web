# Tema 7. El Explorador de Archivos de Windows 11

---

## 1. Concepto y Función del Explorador de Archivos (File Explorer)

### 1.1 Definición
El **Explorador de Archivos** (File Explorer) es la herramienta nativa e integrada de Windows para la gestión visual y completa del sistema de archivos del ordenador. Permite al usuario navegar por la estructura jerárquica de unidades, carpetas y archivos; crear, copiar, mover, eliminar y renombrar elementos; modificar atributos y permisos; buscar ficheros; y acceder a recursos de red compartidos.

Es la aplicación que se abre al hacer doble clic sobre "Este equipo", al pulsar el icono de carpeta en la barra de tareas o mediante el atajo **`Win + E`**.

### 1.2 Diferencias clave entre Windows 10 y Windows 11
El Explorador de Windows 11 introdujo cambios sustanciales respecto a su predecesor:
- **Eliminación del Ribbon clásico**: La gruesa banda de herramientas organizada en pestañas (Inicio, Compartir, Vista) que dominaba el Explorador de Windows 8/8.1/10 desaparece por completo.
- **Nueva barra de comandos minimalista**: Una fina franja de iconos planos reemplaza al Ribbon, mostrando solo las acciones esenciales contextuales.
- **Navegación por pestañas (Tabs)**: Funcionalidad largamente demandada durante décadas, introducida en la actualización 22H2 (octubre 2022). Permite abrir múltiples carpetas o ubicaciones en pestañas dentro de la misma ventana del Explorador, similar a un navegador web.
- **Menú contextual rediseñado**: Al hacer clic derecho, aparece un menú simplificado con iconos de Cortar, Copiar, Pegar, Renombrar y Eliminar en la parte superior. Para acceder al menú contextual completo heredado de Windows 10, se debe pulsar "Mostrar más opciones" o el atajo `Shift + F10`.
- **Esquinas redondeadas y diseño Fluent**: Coherente con el lenguaje de diseño general de Windows 11 (material Mica, sombras sutiles, animaciones de transición suaves).

---

## 2. Anatomía Detallada de la Interfaz del Explorador de Windows 11

### 2.1 La Barra de Título y Pestañas
Franja superior que muestra el nombre de la ubicación actual y permite gestionar las pestañas abiertas:
- **Pestañas (Tabs)**: Cada pestaña muestra una ubicación diferente del sistema de archivos. Se pueden abrir múltiples pestañas simultáneamente, arrastrar pestañas para reordenarlas o separarlas en ventanas independientes.
  - Abrir nueva pestaña: `Ctrl + T`.
  - Cerrar pestaña actual: `Ctrl + W`.
  - Cambiar entre pestañas: `Ctrl + Tab` (siguiente) o `Ctrl + Shift + Tab` (anterior).
  - Abrir cualquier carpeta con clic central del ratón: Abre esa carpeta en nueva pestaña.
- **Botones de control de ventana**: Minimizar, Maximizar (con Snap Layouts al posicionar el cursor sobre él), Cerrar.

### 2.2 La Barra de Herramientas (Command Bar)
Franja fina con iconos contextuales que cambian según el tipo de archivo o carpeta seleccionado:
- **Iconos permanentes**: Nuevo (crear carpeta/archivo), Cortar (✂), Copiar (📋), Pegar (📋→), Renombrar (✏), Compartir, Eliminar (🗑), Ordenar, Ver.
- **Botón de tres puntos (⋯)**: Menú desplegable con opciones adicionales: Seleccionar todo, No seleccionar nada, Invertir selección, Opciones de carpeta, Propiedades.
- **Iconos contextuales**: Al seleccionar imágenes aparece "Girar"; al seleccionar archivos comprimidos aparece "Extraer todo"; al seleccionar documentos Office puede aparecer "Abrir con".

### 2.3 La Barra de Direcciones (Address Bar)
Muestra la ruta de la ubicación actual en formato de migas de pan (*breadcrumb navigation*):
- Cada nivel de la ruta es **clicable**: Al hacer clic en "Documentos" dentro de la ruta `Este equipo > C: > Usuarios > Nombre > Documentos`, se navega directamente a esa carpeta.
- Las **flechas (>)** entre niveles son desplegables: Al hacer clic en una flecha, aparece la lista de subcarpetas de ese nivel, permitiendo navegar rápidamente sin retroceder.
- Se puede **escribir directamente una ruta** haciendo clic en la zona vacía de la barra de direcciones o pulsando `Ctrl + L` o `Alt + D` o `F4`. Esto convierte la barra en un campo de texto donde se puede teclear una ruta completa (por ejemplo, `C:\Windows\System32`) o una dirección web.
- **Botones de navegación** (izquierda de la barra): Flechas de retroceso (←), avance (→) y subir un nivel (↑) en la jerarquía de carpetas.

### 2.4 El Panel de Navegación (Navigation Pane)
Columna lateral izquierda que proporciona acceso rápido a ubicaciones clave del sistema:

- **Inicio (Home)**: Pantalla de bienvenida que agrupa "Acceso rápido" (carpetas frecuentes y ancladas), "Favoritos" (archivos marcados como favoritos) y "Recientes" (archivos abiertos recientemente).
- **Galería**: Nueva sección introducida en actualizaciones recientes que muestra imágenes del equipo y de OneDrive en formato visual.
- **OneDrive - Personal / Empresa**: Carpetas sincronizadas con el servicio de almacenamiento en la nube de Microsoft. Los archivos se descargan bajo demanda (icono de nube) o se mantienen siempre disponibles (icono de verificación verde). Estados de sincronización indicados por iconos superpuestos.
- **Este equipo**: Equivalente al antiguo "Mi PC". Muestra:
  - *Carpetas del usuario*: Escritorio, Documentos, Descargas, Imágenes, Música, Vídeos.
  - *Dispositivos y unidades*: Disco local (C:), unidades extraíbles (D:, E:, etc.), unidades de red asignadas.
- **Red**: Muestra los equipos, servidores y recursos compartidos detectados en la red local (LAN). Permite acceder a carpetas compartidas de otros ordenadores del grupo de trabajo o dominio.

### 2.5 El Área de Contenido (Content Area)
Zona central principal donde se visualizan los archivos y carpetas de la ubicación activa. Los **modos de visualización** disponibles (accesibles desde el menú "Ver" de la barra de herramientas) son:

| Modo de vista | Descripción |
|---|---|
| **Iconos extra grandes** | Miniaturas enormes con vista previa del contenido (ideal para fotos) |
| **Iconos grandes** | Miniaturas con vista previa, tamaño medio |
| **Iconos medianos** | Iconos con vista previa reducida |
| **Iconos pequeños** | Solo iconos sin vista previa, lista compacta |
| **Lista** | Nombres de archivo en columna única sin detalles |
| **Detalles** | **El modo más completo**: columnas con Nombre, Fecha de modificación, Tipo, Tamaño. Las columnas son ordenables (clic en el encabezado) y filtrables (flecha desplegable en el encabezado) |
| **Mosaicos** | Iconos con información resumida junto a cada uno |
| **Contenido** | Fila extendida con datos de tamaño, tipo y fecha |

### 2.6 El Panel de Detalles y el Panel de Vista Previa
Paneles opcionales que se activan desde el menú Ver:
- **Panel de Vista Previa**: Muestra una vista previa del archivo seleccionado sin abrirlo (funciona con imágenes, PDFs, documentos Office, archivos de texto). Se activa con `Alt + P`.
- **Panel de Detalles**: Muestra metadatos del archivo seleccionado (título, autores, etiquetas, fecha de creación, dimensiones para imágenes). Permite editar algunos metadatos directamente.

---

## 3. Conceptos Fundamentales de Archivos y Carpetas

### 3.1 Archivo (Fichero)
Unidad lógica de almacenamiento de información en un soporte digital. Todo archivo posee:
- **Nombre**: Identificador asignado por el usuario o el sistema. En NTFS admite hasta 255 caracteres Unicode, incluyendo espacios.
- **Extensión**: Sufijo separado por un punto (.) que identifica el tipo de archivo y la aplicación asociada para abrirlo. Windows 11 **oculta las extensiones por defecto** (opción criticada por seguridad, ya que un archivo malicioso `factura.pdf.exe` aparecería como `factura.pdf`). Se desenmascarar desde: Explorador > Ver > Mostrar > Extensiones de nombre de archivo.
- **Tamaño**: Espacio en disco que ocupa, medido en bytes y sus múltiplos.
- **Atributos**: Propiedades del archivo (ver sección 5).
- **Metadatos**: Información adicional como fecha de creación, fecha de última modificación, fecha de último acceso, autor y propietario.

**Caracteres prohibidos en nombres de archivos y carpetas en Windows:**
Los siguientes 9 caracteres están reservados por el sistema operativo y no pueden usarse en nombres:

`\ / : * ? " < > |`

Además, los nombres no pueden terminar en punto (.) ni en espacio, y existen nombres reservados del sistema como `CON`, `PRN`, `AUX`, `NUL`, `COM1-COM9`, `LPT1-LPT9`.

### 3.2 Carpeta (Directorio)
Contenedor lógico que agrupa archivos y otras subcarpetas, organizando el almacenamiento en una estructura jerárquica en forma de **árbol invertido**. La carpeta de nivel superior es la **raíz de la unidad** (ejemplos: `C:\`, `D:\`).

### 3.3 Rutas de Acceso (Paths)
- **Ruta absoluta**: Describe la ubicación completa e inequívoca de un archivo desde la raíz de la unidad. Ejemplo: `C:\Users\Administrativo\Documents\Informe.docx`.
- **Ruta relativa**: Describe la ubicación en relación a la posición actual del usuario en el árbol de directorios. Si estamos en `C:\Users\Administrativo`, la ruta relativa al mismo archivo sería `Documents\Informe.docx`.
- **UNC (Universal Naming Convention)**: Formato para rutas de red compartida: `\\NombreServidor\RecursoCompartido\Carpeta\Archivo.ext`. Ejemplo: `\\SERVIDOR-AGE\Compartido\Actas\Acta_2024.pdf`.

### 3.4 Extensiones de Archivo Más Relevantes para Oposiciones

| Categoría | Extensiones |
|---|---|
| **Documentos Word** | `.doc` (formato antiguo), `.docx` (formato XML comprimido actual), `.docm` (con macros habilitadas), `.dot`/`.dotx` (plantillas) |
| **Hojas de cálculo Excel** | `.xls` (antiguo), `.xlsx` (actual), `.xlsm` (con macros), `.csv` (valores separados por comas) |
| **Presentaciones PowerPoint** | `.ppt` (antiguo), `.pptx` (actual), `.ppsx` (presentación de solo lectura que arranca directamente) |
| **Bases de datos Access** | `.accdb` (actual), `.mdb` (antiguo formato), `.accde` (solo ejecución, sin editar diseño) |
| **Documentos PDF** | `.pdf` (Portable Document Format de Adobe) |
| **Texto plano** | `.txt` (sin formato), `.rtf` (texto enriquecido básico), `.xml`, `.html` |
| **Imágenes** | `.jpg`/`.jpeg` (con compresión y pérdida), `.png` (sin pérdida, soporta transparencia), `.gif` (animaciones), `.bmp` (mapa de bits sin compresión), `.svg` (vectorial), `.webp` (formato moderno Google) |
| **Audio** | `.mp3` (comprimido con pérdida), `.wav` (sin compresión), `.flac` (sin pérdida), `.aac` |
| **Vídeo** | `.mp4` (estándar universal), `.avi`, `.mkv`, `.mov` (Apple), `.wmv` (Microsoft) |
| **Comprimidos** | `.zip` (integrado nativamente en Windows), `.rar`, `.7z`, `.tar.gz` |
| **Ejecutables** | `.exe` (programa ejecutable), `.msi` (instalador Windows), `.bat`/`.cmd` (scripts por lotes), `.ps1` (scripts PowerShell) |
| **Librerías** | `.dll` (Dynamic Link Library, biblioteca de funciones compartida) |
| **Sistema** | `.sys` (archivos de sistema y drivers), `.ini` (configuración), `.log` (registros) |

---

## 4. Operaciones con Archivos y Carpetas (Gestión Integral)

### 4.1 Crear
- **Nueva carpeta**: Clic derecho > Nuevo > Carpeta, o `Ctrl + Shift + N`.
- **Nuevo archivo**: Clic derecho > Nuevo > Seleccionar tipo (Documento de texto, Documento de Word, Hoja de Excel, etc.). La lista de tipos disponibles depende de los programas instalados.

### 4.2 Seleccionar (Imprescindible para Examen)
- **Un elemento**: Clic izquierdo sobre él.
- **Selección continua (rango adyacente)**: Clic en el primer elemento + **`Shift` + Clic** en el último. Todos los elementos intermedios quedan seleccionados.
- **Selección discontinua (elementos sueltos)**: Mantener pulsada la tecla **`Ctrl`** mientras se hace clic en cada elemento deseado. Solo se seleccionan los elementos clicados, sin afectar a los intermedios.
- **Seleccionar todo**: `Ctrl + A`.
- **Invertir selección**: Desde el botón de tres puntos (⋯) > "Invertir selección". Selecciona todo lo que no estaba seleccionado y deselecciona lo que sí lo estaba.
- **Selección por lazo (arrastre)**: Clic sostenido y arrastrar el ratón para trazar un rectángulo de selección que englobe varios archivos.

### 4.3 Copiar, Cortar y Pegar
- **Copiar**: `Ctrl + C`. Duplica el elemento en el portapapeles, manteniendo el original intacto.
- **Cortar**: `Ctrl + X`. Mueve el elemento al portapapeles, eliminándolo de la ubicación de origen tras pegarlo en el destino.
- **Pegar**: `Ctrl + V`. Deposita el contenido del portapapeles en la ubicación actual.
- **Historial del portapapeles**: `Win + V`. Muestra un historial de los últimos elementos copiados (textos, imágenes, archivos), permitiendo pegar elementos anteriores, no solo el último.

### 4.4 Reglas de Arrastrar y Soltar (Drag & Drop) — MUY PREGUNTADO
El resultado de arrastrar un archivo con el ratón de una ubicación a otra depende de si el origen y el destino están en la **misma unidad** o en **unidades distintas**:

| Acción | Misma unidad (ej: C: a C:) | Diferente unidad (ej: C: a USB D:) |
|---|---|---|
| **Arrastrar (botón izquierdo)** | **MOVER** (cortar y pegar) | **COPIAR** (clonar) |
| **Arrastrar + `Ctrl`** | COPIAR (forzar) | COPIAR (confirmar) |
| **Arrastrar + `Shift`** | MOVER (confirmar) | MOVER (forzar) |
| **Arrastrar + `Alt`** | Crear acceso directo | Crear acceso directo |
| **Arrastrar con botón derecho** | Menú contextual: ofrece Copiar, Mover o Crear acceso directo | Menú contextual: ofrece Copiar, Mover o Crear acceso directo |

**Regla mnemotécnica**: Dentro de la misma unidad se mueve (traslado interno económico); entre unidades diferentes se copia (protección ante pérdida al sacar datos fuera del disco).

### 4.5 Renombrar
- Seleccionar archivo > Pulsar `F2` > Escribir nuevo nombre > Enter.
- Clic derecho > Renombrar.
- Hacer dos clics lentos (separados en el tiempo, no doble clic rápido) sobre el nombre del archivo.
- **Renombrado en lote**: Seleccionar múltiples archivos > F2 > Escribir nombre base. Windows los renombra automáticamente añadiendo un número secuencial entre paréntesis: `Informe (1)`, `Informe (2)`, `Informe (3)`.

### 4.6 Eliminar
- **Eliminación a Papelera**: Seleccionar + tecla `Supr` (Delete) o clic derecho > Eliminar. El archivo se traslada a la **Papelera de Reciclaje**, desde donde puede restaurarse a su ubicación original o vaciarse definitivamente.
- **Eliminación permanente (sin pasar por Papelera)**: `Shift + Supr`. **Atención examen**: Este método elimina el archivo de forma inmediata, sin posibilidad de restauración desde la Papelera. El sistema solicita confirmación: "¿Está seguro de que desea eliminar permanentemente este archivo?".

---

## 5. Propiedades y Atributos de Archivos

### 5.1 Acceder a Propiedades
Seleccionar archivo o carpeta > Clic derecho > Propiedades, o `Alt + Enter`.

### 5.2 Pestañas de la Ventana de Propiedades
- **General**: Nombre, tipo de archivo, aplicación asociada ("Abrir con"), ubicación, tamaño en disco, fechas de creación/modificación/acceso, y **Atributos** (casillas de verificación).
- **Seguridad**: Permisos NTFS por usuario y grupo (Control total, Modificar, Lectura y ejecución, Lectura, Escritura, Permisos especiales). Solo disponible en unidades formateadas con NTFS.
- **Detalles**: Metadatos extendidos (autores, título, etiquetas, comentarios, dimensiones para imágenes, duración para audio/vídeo).
- **Versiones anteriores**: Si está habilitada la protección del sistema (Restaurar sistema o copias shadow), muestra instantáneas anteriores del archivo que pueden restaurarse.

### 5.3 Atributos de Archivo (Conceptos de Examen)
| Atributo | Letra | Significado |
|---|---|---|
| **Solo lectura (Read Only)** | R | Impide la modificación accidental del contenido del archivo. El usuario puede abrir y visualizar pero no sobrescribir. No es medida de seguridad real contra amenazas. |
| **Oculto (Hidden)** | H | El archivo no se muestra en el Explorador a menos que se active la opción "Mostrar archivos ocultos" (Ver > Mostrar > Elementos ocultos). Utilizado para archivos de configuración del sistema. |
| **Sistema (System)** | S | Marca archivos críticos del sistema operativo. Suelen estar ocultos y protegidos adicionalmente. |
| **Archivo (Archive)** | A | Indica que el archivo ha sido modificado desde la última copia de seguridad. Las utilidades de backup lo utilizan para identificar archivos que necesitan respaldarse (backup incremental). |

---

## 6. Sistemas de Archivos en Windows

### 6.1 NTFS (New Technology File System)
Sistema de archivos estándar de Windows desde Windows NT/2000. Características:
- Soporte para archivos y particiones de tamaño prácticamente ilimitado (hasta 16 Exabytes teóricos).
- **Permisos de seguridad** granulares por usuario y grupo (ACL - Lista de Control de Acceso).
- **Cifrado de archivos** mediante EFS (Encrypting File System).
- **Compresión nativa** de archivos y carpetas.
- **Cuotas de disco**: Limitar el espacio que cada usuario puede consumir.
- **Journaling** (registro transaccional): Protege la integridad del sistema de archivos ante apagones o cuelgues, registrando las operaciones pendientes y completándolas o deshciéndolas al reiniciar.
- **Nombres de archivo largos**: Hasta 255 caracteres Unicode.

### 6.2 FAT32 (File Allocation Table 32)
Sistema de archivos antiguo, heredado de Windows 95 OSR2. Limitaciones importantes:
- Tamaño máximo de archivo: **4 GB** (no puede almacenar archivos individuales de más de 4 GB, como imágenes ISO de DVDs o vídeos de alta definición).
- Tamaño máximo de partición: 2 TB (en teoría 8 TB, pero Windows limita a 32 GB en el formateado nativo).
- Sin permisos de seguridad ni cifrado.
- Uso actual: Pendrives USB y tarjetas SD de pequeña capacidad, por su compatibilidad universal con cualquier dispositivo (cámaras, consolas, televisores).

### 6.3 exFAT (Extended File Allocation Table)
Diseñado por Microsoft como evolución de FAT32 para medios extraíbles:
- Sin límite práctico de tamaño de archivo (teórico de 16 Exabytes).
- Compatible con Windows, macOS y Linux moderno.
- Sin permisos de seguridad ni journaling.
- Uso ideal: Pendrives, tarjetas SD y discos externos que necesiten almacenar archivos de más de 4 GB y ser leídos en múltiples sistemas operativos.

---

## 7. La Papelera de Reciclaje

### 7.1 Funcionamiento
- Al eliminar un archivo normalmente (`Supr`), este se traslada a la Papelera de Reciclaje, una carpeta especial del sistema ubicada en la raíz de cada unidad (`$Recycle.Bin`).
- Los archivos en la Papelera conservan su ruta original, permitiendo su **restauración** exacta a la ubicación de donde fueron eliminados.
- **Excepción importante**: Los archivos eliminados de medios extraíbles (pendrives USB, tarjetas de memoria) **no pasan por la Papelera**; se eliminan directamente y de forma permanente.

### 7.2 Configuración de la Papelera
Clic derecho sobre el icono de la Papelera en el Escritorio > Propiedades:
- **Tamaño personalizado**: Se puede asignar un porcentaje o cantidad fija del espacio del disco para la Papelera. Cuando se supera este límite, los archivos más antiguos se eliminan automáticamente para hacer espacio.
- **No mover archivos a la Papelera**: Si se marca esta opción, todos los archivos se eliminan permanentemente al pulsar Supr (equivalente a `Shift + Supr` siempre).
- **Mostrar diálogo de confirmación de eliminación**: Por defecto desactivado en Windows 11.

### 7.3 Operaciones en la Papelera
- **Restaurar**: Devuelve el archivo a su ubicación original exacta.
- **Vaciar Papelera de reciclaje**: Elimina permanentemente todo el contenido de la Papelera, liberando el espacio en disco que ocupaban esos archivos.

---

## 8. Búsqueda Avanzada de Archivos

### 8.1 Campo de Búsqueda del Explorador
Situado en la esquina superior derecha de la ventana del Explorador. Al escribir texto, busca en la carpeta actual y sus subcarpetas.

### 8.2 Operadores y Filtros de Búsqueda Avanzada
Windows permite refinar las búsquedas mediante operadores especiales:
- **Por nombre**: Escribir directamente el nombre o parte del nombre del archivo.
- **Por extensión**: `*.pdf` (todos los PDFs), `informe*.docx` (documentos Word que empiezan por "informe").
- **Comodín `*`**: Sustituye cualquier secuencia de caracteres. `foto*` encuentra `foto1.jpg`, `fotografía.png`, `fotos2024`.
- **Comodín `?`**: Sustituye un solo carácter. `informe_?.docx` encuentra `informe_1.docx`, `informe_A.docx`.
- **Por fecha**: `fecha: hoy`, `fecha: esta semana`, `fecha: el mes pasado`, `fechamodificación: 15/03/2024`.
- **Por tamaño**: `tamaño: grande` (1-128 MB), `tamaño: enorme` (>128 MB), `tamaño: >10MB`.
- **Por tipo**: `tipo: documento`, `tipo: imagen`, `tipo: música`.
- **Operadores booleanos**: `AND` (ambos términos), `OR` (cualquiera de los términos), `NOT` (excluir término).
- **Comillas para frase exacta**: `"acta de reunión"` busca esa secuencia exacta de palabras.

### 8.3 Indexación de Búsqueda
Windows mantiene un **índice de búsqueda** (servicio Windows Search) que cataloga el contenido y los metadatos de archivos en ubicaciones frecuentes para acelerar las búsquedas. Las ubicaciones indexadas se configuran desde Configuración > Privacidad y seguridad > Buscar en Windows > Opciones de indexación.

---

## 9. Accesos Directos

### 9.1 Concepto
Un **acceso directo** es un archivo especial de pequeño tamaño (extensión `.lnk`) que actúa como puntero o enlace hacia otro archivo, carpeta, programa o ubicación de red. No contiene los datos del elemento original, sino solo la ruta hacia él. Se identifican visualmente por una **flecha pequeña superpuesta** en la esquina inferior izquierda de su icono.

### 9.2 Creación
- Clic derecho sobre el elemento > Enviar a > Escritorio (crear acceso directo).
- Clic derecho en el escritorio o carpeta destino > Nuevo > Acceso directo > Indicar la ruta del programa o archivo de destino.
- Arrastrar el archivo con la tecla **`Alt`** pulsada al destino (crea acceso directo en cualquier unidad).

### 9.3 Propiedades del Acceso Directo
- **Destino**: Ruta completa al archivo o programa original enlazado.
- **Iniciar en**: Directorio de trabajo cuando se ejecuta el programa.
- **Tecla de método abreviado**: Permite asignar un atajo de teclado personalizado (`Ctrl + Alt + [tecla]`) para abrir ese acceso directo desde cualquier lugar.
- **Ejecutar**: Ventana normal, minimizada o maximizada.
- **Icono**: Se puede personalizar el icono mostrado seleccionando de una biblioteca (`shell32.dll`, `imageres.dll`).
