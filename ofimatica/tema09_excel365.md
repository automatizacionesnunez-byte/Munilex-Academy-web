# Tema 9. Hojas de Cálculo: Microsoft Excel 365

---

## 1. Introducción a la Hoja de Cálculo

### 1.1 Concepto y Función
Una **hoja de cálculo** es una aplicación informática que organiza datos en una cuadrícula bidimensional de filas y columnas, permitiendo realizar cálculos matemáticos, estadísticos y lógicos mediante fórmulas y funciones, así como generar gráficos y analizar grandes volúmenes de información.

**Microsoft Excel 365** es la hoja de cálculo estándar de la suite Microsoft 365. Su formato de archivo predeterminado es **`.xlsx`** (Office Open XML). Es, junto con Word, la herramienta ofimática más intensamente preguntada en pruebas selectivas del Estado.

### 1.2 Otros Formatos de Archivo de Excel
| Extensión | Descripción |
|---|---|
| `.xlsx` | Libro de Excel actual (sin macros) |
| `.xlsm` | Libro de Excel con macros VBA habilitadas |
| `.xls` | Libro de Excel 97-2003 (formato binario antiguo) |
| `.xltx` | Plantilla de Excel (sin macros) |
| `.xltm` | Plantilla de Excel con macros |
| `.csv` | Valores separados por comas (texto plano, intercambio universal) |
| `.xlsb` | Libro binario de Excel (menor tamaño de archivo) |

---

## 2. Estructura del Entorno de Trabajo

### 2.1 Libro, Hoja y Celda
- **Libro (Workbook)**: El archivo completo de Excel. Puede contener múltiples hojas.
- **Hoja de cálculo (Worksheet / Sheet)**: Cada pestaña del libro. Un libro nuevo en Excel 365 se crea con **una sola hoja** por defecto (en versiones anteriores se creaban 3). Se pueden añadir hojas ilimitadas haciendo clic en el botón (+) junto a las pestañas de hojas. Las hojas se pueden renombrar (doble clic en la pestaña), reordenar (arrastrar), copiar (clic derecho > Mover o copiar), colorear (clic derecho > Color de etiqueta) y eliminar.
- **Celda (Cell)**: La unidad fundamental de trabajo. Es la intersección de una columna y una fila, identificada por su **referencia** o coordenada: la letra de la columna seguida del número de fila (ejemplo: **B4** = columna B, fila 4).

### 2.2 Dimensiones de la Hoja
- **Columnas**: Identificadas por letras de la A a la XFD. Total: **16.384 columnas**.
- **Filas**: Identificadas por números del 1 al **1.048.576** (2^20).
- **Celdas totales por hoja**: 16.384 × 1.048.576 = más de **17.000 millones** de celdas.

### 2.3 Componentes de la Interfaz
- **Cuadro de nombres**: Situado a la izquierda de la barra de fórmulas. Muestra la referencia de la celda activa (ej: `A1`). También permite navegar: escribir una referencia o nombre y pulsar Enter para saltar directamente a esa celda o rango.
- **Barra de fórmulas**: Franja horizontal que muestra el contenido real de la celda activa (el texto, el valor numérico o la fórmula subyacente). Aquí se edita el contenido. Es más amplia y legible que la propia celda para fórmulas extensas.
- **Cinta de opciones (Ribbon)**: Pestañas: Archivo, Inicio, Insertar, Disposición de página, Fórmulas, Datos, Revisar, Vista.
- **Pestañas de hojas**: Franja inferior que muestra las pestañas de las hojas del libro activo.
- **Barra de estado**: Muestra información contextual. **Dato importante para examen**: Cuando se selecciona un rango de celdas con valores numéricos, la barra de estado muestra automáticamente el **Promedio**, el **Recuento** y la **Suma** de las celdas seleccionadas, sin necesidad de insertar ninguna fórmula.

---

## 3. Introducción y Tipos de Datos

### 3.1 Tipos de Datos en Celdas
- **Texto (Cadena)**: Valores alfanuméricos que Excel no puede interpretar como número ni fecha. Se alinean a la **izquierda** por defecto. Si un número debe tratarse como texto (ej: un código postal "08001"), se puede forzar precediendo con apóstrofo (`'08001`) o aplicando formato "Texto" antes de escribir.
- **Números**: Valores numéricos puros (enteros o decimales). Se alinean a la **derecha** por defecto. Excel utiliza la coma (,) como separador decimal en versiones configuradas en español.
- **Fechas y horas**: Excel almacena internamente las fechas como números consecutivos (1 = 1 de enero de 1900) y las horas como fracciones decimales del día. Esto permite realizar operaciones aritméticas con fechas (restar dos fechas devuelve los días transcurridos entre ellas).
- **Valores lógicos**: `VERDADERO` y `FALSO` (booleanos).
- **Fórmulas**: Expresiones que comienzan obligatoriamente con el signo **`=`** y devuelven un resultado calculado.
- **Errores**: Resultados que indican un problema en la fórmula: `#¡VALOR!`, `#¡REF!`, `#¡DIV/0!`, `#N/A`, `#¿NOMBRE?`, `#¡NUM!`, `#¡NULO!`.

### 3.2 Formato de Celdas (Ctrl + 1)
El formato define cómo se **muestra** un dato en la celda, sin alterar su valor real interno.

| Categoría | Ejemplo de visualización | Valor interno |
|---|---|---|
| General | 1234.5 | 1234.5 |
| Número (2 decimales) | 1.234,50 | 1234.5 |
| Moneda | 1.234,50 € | 1234.5 |
| Contabilidad | 1.234,50 € (alineado con símbolo fijo) | 1234.5 |
| Fecha corta | 15/04/2024 | 45397 |
| Fecha larga | lunes, 15 de abril de 2024 | 45397 |
| Hora | 14:30:00 | 0,604166... |
| Porcentaje | 75,00% | 0.75 |
| Fracción | 3/4 | 0.75 |
| Científica | 1,23E+03 | 1234.5 |
| Texto | 08001 | "08001" |
| Personalizado | Usuario define el patrón | Variable |

### 3.3 Autorrellenado (Series de Relleno)
**Función esencial para examen.** El **controlador de relleno** es el pequeño cuadrado negro en la esquina inferior derecha de la celda o rango seleccionado. Al arrastrarlo:
- Excel completa automáticamente **series lógicas**: Lunes → Martes → Miércoles; Enero → Febrero → Marzo; 1 → 2 → 3; 2, 4 → 6, 8 (detecta el patrón e incrementa).
- Si se arrastra una sola celda con un número, Excel **copia** el valor (no crea serie). Para forzar una serie numérica ascendente, se deben seleccionar al menos dos celdas con los dos primeros valores de la serie antes de arrastrar, o usar `Ctrl` mientras se arrastra.
- Listas de relleno personalizadas: Se pueden crear desde Archivo > Opciones > Avanzadas > Listas personalizadas.

---

## 4. Fórmulas y Operadores

### 4.1 Regla Fundamental
Toda fórmula en Excel **comienza obligatoriamente con el signo igual (`=`)**. Si se omite, Excel interpretará la expresión como texto, no como fórmula.

### 4.2 Operadores Aritméticos
| Operador | Operación | Ejemplo | Resultado |
|---|---|---|---|
| `+` | Suma | `=5+3` | 8 |
| `-` | Resta | `=10-4` | 6 |
| `*` | Multiplicación | `=6*7` | 42 |
| `/` | División | `=20/4` | 5 |
| `^` | Exponenciación (potencia) | `=2^10` | 1024 |
| `%` | Porcentaje | `=50%` | 0,5 |

### 4.3 Operadores de Comparación (Devuelven VERDADERO o FALSO)
| Operador | Significado | Ejemplo |
|---|---|---|
| `=` | Igual a | `=A1=B1` |
| `<>` | Distinto de | `=A1<>B1` |
| `>` | Mayor que | `=A1>100` |
| `<` | Menor que | `=A1<100` |
| `>=` | Mayor o igual que | `=A1>=18` |
| `<=` | Menor o igual que | `=A1<=65` |

### 4.4 Operador de Concatenación de Texto
- **`&`** (ampersand): Une cadenas de texto. Ejemplo: `=A1&" "&B1` si A1="Juan" y B1="Pérez" devuelve "Juan Pérez".

### 4.5 Operadores de Referencia
- **`:`** (dos puntos): Define un rango continuo. `A1:C5` abarca todas las celdas desde A1 hasta C5.
- **`;`** (punto y coma): Separa argumentos de funciones (en versión española). `=SUMA(A1:A5;C1:C5)`.
- **Espacio** (intersección): Devuelve la celda común a dos rangos que se cruzan.

### 4.6 Orden de Precedencia de Operadores
Excel evalúa las fórmulas siguiendo un orden jerárquico estricto (de mayor a menor prioridad):
1. Paréntesis `( )`
2. Negación `-` (signo negativo)
3. Porcentaje `%`
4. Exponenciación `^`
5. Multiplicación `*` y División `/`
6. Suma `+` y Resta `-`
7. Concatenación `&`
8. Comparación `=`, `<>`, `<`, `>`, `<=`, `>=`

---

## 5. Referencias de Celdas (Concepto Capital de Examen)

### 5.1 Referencia Relativa (Ej: `A1`)
Es el tipo predeterminado. Cuando se copia o arrastra una fórmula a otra celda, las referencias se **ajustan automáticamente** en proporción al desplazamiento.
- Ejemplo: Si la celda C1 contiene `=A1+B1` y se copia a C2, la fórmula se convierte automáticamente en `=A2+B2`.

### 5.2 Referencia Absoluta (Ej: `$A$1`)
El signo dólar ($) **bloquea** la referencia. Al copiar la fórmula, la referencia NO se mueve.
- `$A$1`: Ni la columna A ni la fila 1 cambian nunca.
- **Caso de uso típico**: Multiplicar un rango de precios por un porcentaje de IVA fijo almacenado en una sola celda. Si el IVA está en F1, la fórmula en la columna C sería `=B2*$F$1`, y al arrastrarla hacia abajo, B2 avanzará a B3, B4... pero $F$1 permanecerá fijo.
- **Atajo imprescindible**: La tecla **`F4`** alterna cíclicamente entre los cuatro tipos de referencia al editar una fórmula: `A1` → `$A$1` → `A$1` → `$A1` → `A1`.

### 5.3 Referencia Mixta (Ej: `$A1` o `A$1`)
Solo una coordenada está fija:
- `$A1`: La columna A está bloqueada; la fila varía al copiar verticalmente.
- `A$1`: La fila 1 está bloqueada; la columna varía al copiar horizontalmente.
- Uso típico: Tablas de multiplicar, matrices de cálculo cruzadas.

### 5.4 Referencias a Otras Hojas y Otros Libros
- **A otra hoja del mismo libro**: `=Hoja2!A1` o `='Nombre de Hoja con Espacios'!A1`.
- **A otro libro abierto**: `=[NombreLibro.xlsx]Hoja1!A1`.

---

## 6. Las Funciones Principales de Oposición

### 6.1 Sintaxis General
`=NOMBRE_FUNCIÓN(argumento1; argumento2; ...)`

Los argumentos se separan con **punto y coma (;)** en la versión española de Excel (en inglés se usa la coma).

### 6.2 Funciones Matemáticas y Estadísticas
| Función | Sintaxis | Descripción |
|---|---|---|
| `SUMA` | `=SUMA(A1:A10)` | Suma todos los valores del rango |
| `PROMEDIO` | `=PROMEDIO(A1:A10)` | Media aritmética de los valores |
| `MAX` | `=MAX(A1:A10)` | Devuelve el valor máximo del rango |
| `MIN` | `=MIN(A1:A10)` | Devuelve el valor mínimo del rango |
| `CONTAR` | `=CONTAR(A1:A10)` | Cuenta las celdas que contienen números |
| `CONTARA` | `=CONTARA(A1:A10)` | Cuenta las celdas no vacías (cualquier tipo de dato) |
| `CONTAR.BLANCO` | `=CONTAR.BLANCO(A1:A10)` | Cuenta las celdas vacías |
| `REDONDEAR` | `=REDONDEAR(A1;2)` | Redondea el valor a 2 decimales |
| `ENTERO` | `=ENTERO(7,8)` | Devuelve 7 (parte entera truncada) |
| `ABS` | `=ABS(-15)` | Devuelve 15 (valor absoluto) |
| `PRODUCTO` | `=PRODUCTO(A1:A5)` | Multiplica todos los valores del rango |
| `RESIDUO` | `=RESIDUO(10;3)` | Devuelve 1 (resto de la división 10/3) |
| `POTENCIA` | `=POTENCIA(2;10)` | Devuelve 1024 (2 elevado a 10) |
| `RAIZ` | `=RAIZ(144)` | Devuelve 12 (raíz cuadrada) |

### 6.3 Funciones Lógicas (Muy Preguntadas)
**`SI`** — La función condicional por excelencia:
`=SI(prueba_lógica; valor_si_verdadero; valor_si_falso)`

Ejemplo: `=SI(A1>=18;"Mayor de edad";"Menor de edad")`

**SI anidados**: Se pueden encadenar múltiples condiciones:
`=SI(A1>=90;"Sobresaliente";SI(A1>=70;"Notable";SI(A1>=50;"Aprobado";"Suspenso")))`

**`Y` (AND)**: Devuelve VERDADERO solo si TODAS las condiciones son verdaderas.
`=Y(A1>0; A1<100)` → VERDADERO solo si A1 está entre 1 y 99.

**`O` (OR)**: Devuelve VERDADERO si AL MENOS UNA condición es verdadera.
`=O(A1="Madrid"; A1="Barcelona")` → VERDADERO si es Madrid o Barcelona.

**Combinación SI + Y / O**:
`=SI(Y(A1>=18; B1="España");"Apto";"No apto")` → Solo "Apto" si tiene 18+ años Y es de España.

**`SI.ERROR`**: Devuelve un valor alternativo si la fórmula produce un error.
`=SI.ERROR(A1/B1;"Error: División por cero")` → Evita mostrar `#¡DIV/0!`.

### 6.4 Funciones Condicionales de Agregación
| Función | Sintaxis | Descripción |
|---|---|---|
| `CONTAR.SI` | `=CONTAR.SI(A1:A100;"Madrid")` | Cuenta las celdas del rango que contienen "Madrid" |
| `CONTAR.SI.CONJUNTO` | `=CONTAR.SI.CONJUNTO(A:A;"Madrid";B:B;">30")` | Cuenta con múltiples criterios simultáneos |
| `SUMAR.SI` | `=SUMAR.SI(A1:A100;"Madrid";B1:B100)` | Suma los valores de columna B donde columna A = "Madrid" |
| `SUMAR.SI.CONJUNTO` | `=SUMAR.SI.CONJUNTO(C:C;A:A;"Madrid";B:B;">2023")` | Suma con múltiples criterios |
| `PROMEDIO.SI` | `=PROMEDIO.SI(A:A;"Madrid";B:B)` | Promedia con criterio |

### 6.5 Funciones de Búsqueda y Referencia (CLAVE de Examen)
**`BUSCARV` (VLOOKUP)** — Búsqueda Vertical:
`=BUSCARV(valor_buscado; matriz_tabla; indicador_columna; [tipo_coincidencia])`

- `valor_buscado`: El dato que se busca (debe estar en la primera columna de la matriz).
- `matriz_tabla`: El rango de celdas donde buscar.
- `indicador_columna`: Número de la columna de la matriz de la que extraer el resultado (1 = primera columna de la matriz, 2 = segunda, etc.).
- `tipo_coincidencia`: `0` o `FALSO` = coincidencia exacta (LO MÁS HABITUAL); `1` o `VERDADERO` = coincidencia aproximada.

Ejemplo: `=BUSCARV(D2;A:C;3;0)` — Busca el valor de D2 en la columna A, y devuelve el valor correspondiente de la columna C.

**`BUSCARH` (HLOOKUP)** — Búsqueda Horizontal: Igual que BUSCARV pero busca en la primera FILA de un rango horizontal.

**`BUSCARX` (XLOOKUP)** — Función moderna (Excel 365):
`=BUSCARX(valor_buscado; matriz_buscada; matriz_devuelta; [si_no_encontrado]; [modo_coincidencia])`
- Ventajas sobre BUSCARV: No requiere que la columna buscada sea la primera; permite búsqueda inversa (de derecha a izquierda); acepta un valor por defecto si no encuentra resultado.

### 6.6 Funciones de Texto
| Función | Ejemplo | Resultado |
|---|---|---|
| `CONCATENAR` / `CONCAT` | `=CONCATENAR(A1;" ";B1)` | "Juan Pérez" |
| `IZQUIERDA` | `=IZQUIERDA("Informática";4)` | "Info" |
| `DERECHA` | `=DERECHA("Informática";4)` | "tica" |
| `EXTRAE` | `=EXTRAE("Informática";3;4)` | "form" |
| `LARGO` | `=LARGO("Hola")` | 4 |
| `MAYUSC` | `=MAYUSC("hola")` | "HOLA" |
| `MINUSC` | `=MINUSC("HOLA")` | "hola" |
| `NOMPROPIO` | `=NOMPROPIO("juan pérez")` | "Juan Pérez" |
| `ESPACIOS` | `=ESPACIOS(" hola  ")` | "hola" |
| `SUSTITUIR` | `=SUSTITUIR(A1;"viejo";"nuevo")` | Reemplaza texto |

### 6.7 Funciones de Fecha y Hora
| Función | Descripción |
|---|---|
| `HOY()` | Devuelve la fecha actual (se actualiza al recalcular) |
| `AHORA()` | Devuelve fecha y hora actuales |
| `AÑO(fecha)` | Extrae el año |
| `MES(fecha)` | Extrae el mes (1-12) |
| `DIA(fecha)` | Extrae el día del mes (1-31) |
| `DIASEM(fecha;2)` | Día de la semana (1=lunes a 7=domingo con tipo 2) |
| `DIAS(fecha_fin;fecha_inicio)` | Días entre dos fechas |
| `FECHA(año;mes;día)` | Construye una fecha a partir de componentes |

---

## 7. Gestión de Datos

### 7.1 Ordenar
- **Ordenar de A a Z** (ascendente) u **Ordenar de Z a A** (descendente) por una columna.
- **Orden personalizado** (Datos > Ordenar): Permite establecer múltiples niveles de ordenación. Ejemplo: Ordenar primero por Departamento (A-Z), luego por Apellido (A-Z), luego por Fecha (más reciente primero).

### 7.2 Filtrar (Autofiltro)
- Al activar el filtro (`Ctrl + Shift + L` o Datos > Filtro), aparecen **flechas desplegables** en los encabezados de cada columna.
- Cada flecha permite: Ordenar, Filtrar por valores específicos (marcar/desmarcar casillas), Filtros de texto (contiene, empieza por, termina en), Filtros de número (mayor que, entre, top 10), Filtros de fecha (hoy, esta semana, este mes, trimestre, año).
- Los filtros se acumulan: filtrar por una columna Y luego por otra estrecha progresivamente los resultados.
- Las filas que no cumplen los criterios se **ocultan** (no se eliminan). Los números de fila de las filas ocultas aparecen en azul.

### 7.3 Formato Condicional
Aplica formato visual (colores de fondo, fuente, barras, iconos) automáticamente según reglas basadas en el valor de cada celda:
- **Reglas de resaltado de celdas**: Mayor que, menor que, entre, igual a, texto que contiene, fechas, duplicados.
- **Reglas de arriba/abajo**: 10 superiores, 10 inferiores, por encima del promedio.
- **Barras de datos**: Barras horizontales proporcionales al valor dentro de la celda.
- **Escalas de color**: Gradientes de color (rojo-amarillo-verde) que representan rangos de valores.
- **Conjuntos de iconos**: Flechas, semáforos, estrellas, banderas que categorizan valores.

---

## 8. Gráficos en Excel

### 8.1 Proceso de Creación
1. Seleccionar el rango de datos (incluyendo encabezados).
2. Insertar > Gráfico > Seleccionar tipo.
3. Personalizar con las pestañas contextuales "Diseño de gráfico" y "Formato".

### 8.2 Tipos de Gráfico Principales (Preguntados en Examen)
| Tipo | Uso recomendado |
|---|---|
| **Columnas (barras verticales)** | Comparar magnitudes entre categorías distintas |
| **Barras (horizontales)** | Similar a columnas, útil cuando los nombres de categoría son largos |
| **Líneas** | Mostrar tendencias o evoluciones en el tiempo (series temporales) |
| **Circular (Sectores / Quesito)** | Mostrar la proporción de cada parte respecto al total (solo una serie de datos). Los valores deben sumar 100% |
| **Dispersión (XY)** | Mostrar la correlación o relación entre dos variables numéricas continuas |
| **Área** | Similar a líneas pero con la zona bajo la línea rellena de color |
| **Combinado** | Mezcla de columnas y líneas en un mismo gráfico (ej: ventas en barras + objetivo en línea) |

### 8.3 Elementos del Gráfico
- **Título del gráfico**: Texto descriptivo principal.
- **Leyenda**: Identificación por colores de cada serie de datos.
- **Ejes**: Eje horizontal (categorías) y eje vertical (valores).
- **Títulos de ejes**: Etiquetas descriptivas para cada eje.
- **Etiquetas de datos**: Valores numéricos mostrados directamente sobre cada elemento del gráfico.
- **Líneas de cuadrícula**: Ayudas visuales para la lectura de valores.
- **Tabla de datos**: Tabla numérica integrada debajo del gráfico.

---

## 9. Otras Herramientas Avanzadas

### 9.1 Validación de Datos
Menú Datos > Validación de datos. Permite restringir los valores que un usuario puede introducir en una celda o rango:
- Solo números enteros, solo decimales, solo fechas.
- Valores entre un mínimo y un máximo.
- **Lista desplegable**: Crea una lista cerrada de valores permitidos (muy útil para formularios). La celda muestra una flecha desplegable con las opciones predefinidas.
- Mensaje de entrada: Texto informativo que aparece al seleccionar la celda.
- Mensaje de error: Alerta personalizada si el usuario introduce un valor no válido.

### 9.2 Inmovilizar Paneles
Vista > Inmovilizar paneles. Fija filas superiores o columnas izquierdas para que permanezcan visibles al desplazarse por hojas con muchos datos:
- **Inmovilizar fila superior**: La fila de encabezados permanece visible al hacer scroll vertical.
- **Inmovilizar primera columna**: La columna de etiquetas permanece visible al hacer scroll horizontal.
- **Inmovilizar paneles**: Fija todo lo que queda por encima y a la izquierda de la celda activa actualmente.

### 9.3 Protección
- **Proteger hoja** (Revisar > Proteger hoja): Impide la edición de las celdas bloqueadas (por defecto todas). Se puede establecer contraseña y seleccionar qué acciones se permiten (seleccionar celdas, dar formato, insertar filas, ordenar, usar filtro).
- **Proteger libro**: Impide cambios estructurales (añadir, eliminar, renombrar, mover hojas).
- **Bloquear/desbloquear celdas**: Formato de celdas > Protección > Bloqueada. Para proteger solo ciertas celdas: desbloquear las celdas editables, dejar bloqueadas las celdas con fórmulas, y luego activar la protección de hoja.

### 9.4 Comentarios y Notas
- **Comentarios** (hilos de discusión): Permiten conversaciones colaborativas encadenadas sobre una celda (orientados a colaboración en la nube).
- **Notas** (post-it): Anotaciones clásicas individuales asociadas a celdas (triángulo rojo en esquina superior derecha).

### 9.5 Impresión en Excel
Configuración crítica para oposiciones:
- **Área de impresión**: Seleccionar un rango > Disposición de página > Área de impresión > Establecer. Solo se imprimirá ese rango seleccionado.
- **Saltos de página**: Vista > Vista previa de salto de página. Permite arrastrar las líneas azules para ajustar dónde se divide la impresión entre páginas.
- **Repetir títulos**: Disposición de página > Imprimir títulos. Permite que las filas de encabezado se repitan en cada página impresa. Campo "Filas que se repiten en extremo superior" (ej: `$1:$1`).
- **Orientación y márgenes**: Igual que en Word.
- **Ajustar a**: Escalar el contenido para que quepa en un número determinado de páginas de ancho y de alto (ej: "1 página de ancho por 2 de alto").
