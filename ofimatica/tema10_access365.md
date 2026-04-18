# Tema 10. Bases de Datos: Microsoft Access 365

---

## 1. Fundamentos Teóricos de Bases de Datos

### 1.1 Concepto de Base de Datos
Una **base de datos (BD)** es un conjunto organizado y estructurado de datos almacenados electrónicamente, diseñado para permitir su consulta, actualización, gestión y administración de manera eficiente, segura y con integridad garantizada. A diferencia de un simple fichero de datos (como una hoja Excel), una base de datos implementa mecanismos formales de control de redundancia, consistencia, integridad referencial y acceso concurrente multiusuario.

### 1.2 Sistema Gestor de Bases de Datos (SGBD)
Un **SGBD** es el software intermediario que actúa como interfaz entre los usuarios o aplicaciones y los datos almacenados físicamente. Sus funciones principales son:
- **Definición de datos (DDL)**: Crear, modificar y eliminar la estructura de tablas, campos, índices y relaciones.
- **Manipulación de datos (DML)**: Insertar, consultar, actualizar y eliminar registros.
- **Control de acceso y seguridad**: Gestionar permisos de lectura, escritura y administración por usuario.
- **Control de concurrencia**: Gestionar accesos simultáneos de múltiples usuarios sin conflictos.
- **Recuperación ante fallos**: Mantener transacciones atómicas (todo o nada) y registros de log para restaurar la BD a un estado consistente tras un fallo del sistema.

**Tipos de SGBD por modelo de datos:**
- **Relacional (RDBMS)**: Organiza los datos en tablas bidimensionales relacionadas entre sí. Es el modelo predominante. Ejemplos: Microsoft Access, MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, MariaDB.
- **Jerárquico**: Estructura en forma de árbol con relaciones padre-hijo (obsoleto; ejemplo histórico: IMS de IBM).
- **En red (CODASYL)**: Similar al jerárquico pero con relaciones muchos-a-muchos (obsoleto).
- **Orientado a objetos**: Almacena los datos como objetos con atributos y métodos (usado en nichos especializados).
- **NoSQL**: Bases de datos no relacionales diseñadas para grandes volúmenes de datos no estructurados (MongoDB, Cassandra, Redis). Fuera del temario de oposiciones.

### 1.3 El Modelo Relacional (E.F. Codd, 1970)
Formulado por el matemático Edgar Frank Codd de IBM. Postula que todos los datos de una base de datos pueden representarse como **relaciones** (tablas bidimensionales) sujetas a reglas matemáticas de la teoría de conjuntos y el álgebra relacional.

**Terminología fundamental:**
| Concepto formal | Equivalente práctico en Access |
|---|---|
| **Relación** | Tabla |
| **Tupla** | Registro (fila) |
| **Atributo** | Campo (columna) |
| **Dominio** | Tipo de dato permitido en un atributo |
| **Cardinalidad** | Número de registros (filas) de una tabla |
| **Grado** | Número de campos (columnas) de una tabla |
| **Clave primaria** | Campo o combinación de campos que identifica unívocamente cada registro |
| **Clave foránea (ajena)** | Campo que referencia la clave primaria de otra tabla |

### 1.4 Normalización de Bases de Datos
Proceso de diseño que organiza las tablas y sus relaciones para minimizar la **redundancia** (datos duplicados innecesariamente) y las **anomalías** de inserción, actualización y eliminación. Los niveles principales son:
- **Primera Forma Normal (1FN)**: Cada celda contiene un solo valor atómico (no listas ni conjuntos). Existe una clave primaria definida.
- **Segunda Forma Normal (2FN)**: Cumple 1FN y todos los campos no clave dependen completamente de TODA la clave primaria (no solo de una parte, en caso de clave compuesta).
- **Tercera Forma Normal (3FN)**: Cumple 2FN y ningún campo no clave depende de otro campo no clave (elimina dependencias transitivas). Ejemplo: Si tenemos Código Postal y Ciudad, la Ciudad depende funcionalmente del Código Postal (no de la clave primaria directamente), por lo que debería separarse en otra tabla.

---

## 2. Microsoft Access 365: El Entorno de Trabajo

### 2.1 Características Generales
- Access es un SGBD relacional de escritorio orientado a bases de datos de pequeño y mediano tamaño (límite práctico: ~2 GB por archivo).
- El archivo de base de datos tiene extensión **`.accdb`** (Access Database, desde Access 2007). El formato anterior era `.mdb` (Microsoft Database, Access 97-2003).
- A diferencia de los SGBD de servidor (MySQL, SQL Server), Access almacena todo (datos, estructura, formularios, consultas, informes, macros y módulos VBA) en **un único archivo monolítico**.
- No requiere instalación de un servidor de bases de datos: funciona directamente en el equipo local del usuario.

### 2.2 Tipos de Datos Disponibles en Campos de Access 365
| Tipo de dato | Descripción | Capacidad |
|---|---|---|
| **Texto corto** | Cadenas alfanuméricas de longitud fija | Hasta 255 caracteres |
| **Texto largo** (Memo) | Textos extensos | Hasta ~1 GB de caracteres |
| **Número** | Valores numéricos: Byte (0-255), Entero (-32.768 a 32.767), Entero largo (-2.147M a 2.147M), Simple (decimal 4 bytes), Doble (decimal 8 bytes) | Variable según subtipo |
| **Número grande** | Enteros de 8 bytes | Rango amplísimo |
| **Fecha/Hora** | Fechas y horas | 01/01/100 a 31/12/9999 |
| **Moneda** | Valores monetarios con 4 decimales fijos | Precisión para cálculos financieros |
| **Autonumeración** | Número secuencial automático incremental o aleatorio | Asigna automáticamente un ID único a cada nuevo registro |
| **Sí/No** | Valor booleano | Verdadero/Falso, Sí/No, Activado/Desactivado |
| **Objeto OLE** | Objetos incrustados | Imágenes, documentos Word, hojas Excel empotradas |
| **Hipervínculo** | Direcciones URL o rutas UNC | Enlaces web o a archivos |
| **Datos adjuntos** | Archivos adjuntados al registro | Múltiples archivos por campo |
| **Calculado** | Resultado de una expresión basada en otros campos | Fórmula definida por el usuario |

### 2.3 Propiedades de los Campos
Cada campo de una tabla tiene propiedades configurables en la Vista Diseño:
- **Tamaño del campo**: Longitud máxima para texto o subtipo numérico.
- **Formato**: Presentación visual del dato (ej: Fecha corta, Moneda, Porcentaje).
- **Máscara de entrada**: Patrón de escritura que restringe el formato de entrada. Ejemplo: para un teléfono `(999) 000-0000` donde 9 = dígito opcional y 0 = dígito obligatorio.
- **Título**: Etiqueta alternativa que se muestra en columnas de hojas de datos y formularios.
- **Valor predeterminado**: Valor que se rellena automáticamente al crear un nuevo registro.
- **Regla de validación**: Expresión lógica que los datos deben cumplir. Ejemplo: `>=0 Y <=120` para un campo Edad.
- **Texto de validación**: Mensaje de error que se muestra si se viola la regla de validación.
- **Requerido**: Sí/No. Si es Sí, el campo no puede dejarse vacío (equivale a NOT NULL en SQL).
- **Permitir longitud cero**: Permite cadenas vacías ("") en campos de texto.
- **Indexado**: Sí (Con duplicados) / Sí (Sin duplicados) / No. Los índices aceleran las búsquedas y consultas sobre ese campo. Un índice sin duplicados garantiza valores únicos.

---

## 3. Los Cuatro Objetos Fundamentales de Access

### 3.1 Tablas — El Almacén de Datos
Las tablas son el fundamento de toda base de datos. Almacenan la información en filas (registros) y columnas (campos).

**Dos vistas de trabajo:**
- **Vista Hoja de datos** (Datasheet View): Muestra los datos en formato de cuadrícula tabular, similar a una hoja Excel. Permite introducir, editar y visualizar registros directamente.
- **Vista Diseño** (Design View): Permite definir y modificar la estructura de la tabla: nombre de los campos, tipos de datos, propiedades, clave primaria. No muestra los datos.

**La Clave Primaria (Primary Key):**
- Es el campo (o combinación de campos) que identifica de forma **única e irrepetible** cada registro de la tabla.
- **No puede contener valores duplicados** ni **valores nulos (vacíos)**.
- Por convención se suele usar un campo Autonumeración como clave primaria (ID autoincremental), aunque cualquier campo con valores únicos puede servir (DNI, NIF, matrícula).
- Se designa visualmente con un icono de llave (🔑) en la Vista Diseño.
- Puede ser **simple** (un solo campo) o **compuesta** (combinación de varios campos cuya unión es única).

**La Clave Foránea (Foreign Key, Clave Ajena):**
- Es un campo de una tabla que contiene valores que coinciden con la clave primaria de otra tabla, estableciendo así el vínculo entre ambas.
- No tiene icono especial en la Vista Diseño; su función relacional se define en la ventana de Relaciones.

### 3.2 Consultas (Queries) — El Motor de Extracción
Las consultas permiten interrogar la base de datos para extraer, filtrar, calcular, agrupar y transformar datos de una o varias tablas simultáneamente.

**Dos modos de creación:**
- **Vista Diseño de consultas (QBE - Query By Example)**: Interfaz gráfica con cuadrícula. Se arrastran las tablas, se seleccionan los campos, se definen criterios de filtrado y ordenación sin escribir código. Es el modo más usado por usuarios no programadores.
- **Vista SQL**: Editor de código SQL puro. Permite escribir sentencias SQL directamente. Toda consulta creada en Vista Diseño genera internamente código SQL equivalente que puede ser visualizado y editado.

**Tipos de consultas:**
| Tipo | Función | SQL equivalente |
|---|---|---|
| **Selección** | Extrae y muestra datos sin modificarlos. La más común | `SELECT ... FROM ... WHERE` |
| **Parámetros** | Solicita un valor al usuario al ejecutarse (cuadro de diálogo emergente). Ej: "Introduzca el departamento" | `SELECT ... WHERE campo = [Introduzca valor]` |
| **Totales (Agrupación)** | Agrupa registros y aplica funciones de agregado: Suma, Promedio, Cuenta, Máx, Mín | `SELECT ... GROUP BY ... HAVING` |
| **Creación de tabla** | Crea una nueva tabla con los resultados de la consulta | `SELECT ... INTO nueva_tabla` |
| **Actualización** | Modifica masivamente valores de campos existentes | `UPDATE tabla SET campo = valor WHERE condición` |
| **Datos anexados (Append)** | Añade registros de una tabla/consulta a otra tabla existente | `INSERT INTO tabla SELECT ...` |
| **Eliminación** | Borra masivamente registros que cumplen un criterio | `DELETE FROM tabla WHERE condición` |
| **De referencias cruzadas** | Genera una tabla dinámica tipo Excel (datos en filas y columnas cruzadas) | `TRANSFORM ... PIVOT` |

**Operadores y comodines en criterios de consultas:**
| Operador / Comodín | Significado | Ejemplo |
|---|---|---|
| `=`, `<>`, `>`, `<`, `>=`, `<=` | Comparación | `>=18` |
| `Como` (Like) | Coincidencia con patrón | `Como "Ma*"` (empieza por "Ma") |
| `*` (asterisco) | Comodín: cualquier número de caracteres | `Como "*ez"` (termina en "ez") |
| `?` (interrogación) | Comodín: un solo carácter | `Como "Garc?a"` |
| `#` (almohadilla) | Comodín: un solo dígito | `Como "28###"` |
| `Entre...Y` | Rango inclusivo | `Entre 18 Y 65` |
| `Es Nulo` / `Es No Nulo` | Verifica si el campo está vacío o no | `Es No Nulo` (solo registros con dato) |
| `En(...)` | Lista de valores permitidos | `En("Madrid";"Barcelona";"Sevilla")` |
| `No` | Negación | `No Como "Ma*"` |
| `Y` / `O` | Lógicos AND / OR | `>=18 Y <65` |

### 3.3 Formularios (Forms) — La Interfaz de Usuario
Los formularios son pantallas de interfaz gráfica diseñadas para que los usuarios introduzcan, editen y visualicen datos de forma amigable, sin interactuar directamente con la rejilla cruda de la tabla.

**Características:**
- Pueden incluir cuadros de texto (vinculados a campos de la tabla), etiquetas descriptivas, botones de comando, listas desplegables (cuadros combinados), casillas de verificación, imágenes, pestañas y subformularios.
- **Subformularios**: Formularios anidados dentro de otro formulario principal, típicamente para mostrar los registros relacionados (ej: un formulario de Cliente con un subformulario que muestra sus Pedidos — relación 1:N).
- **Controles vinculados**: Están conectados a un campo de la tabla y muestran/editan su valor.
- **Controles no vinculados**: No están conectados a datos (etiquetas decorativas, botones de navegación, imágenes de fondo).
- **Controles calculados**: Muestran el resultado de una expresión (ej: un cuadro de texto con origen `=Precio*Cantidad`).

**Vistas del formulario:**
- *Vista Formulario*: Vista funcional para introducir y editar datos.
- *Vista Hoja de datos*: Muestra los registros en formato tabular.
- *Vista Presentación*: Permite modificar el diseño del formulario mientras se visualizan datos reales.
- *Vista Diseño*: Permite diseñar y personalizar la estructura completa del formulario (arrastrar controles, establecer propiedades, definir eventos VBA/macros).

### 3.4 Informes (Reports) — La Salida Impresa
Los informes son documentos de solo lectura diseñados para presentar, resumir y agrupar datos de forma profesional para su impresión o exportación a PDF.

**Características:**
- No permiten la edición de datos (solo visualización y exportación).
- Incorporan **secciones** de agrupamiento:
  - *Encabezado del informe*: Aparece una sola vez al inicio (portada, título, logotipo).
  - *Encabezado de página*: Se repite en cada página impresa (títulos de columna).
  - *Encabezado de grupo*: Aparece al inicio de cada grupo de registros agrupados (ej: al cambiar de departamento).
  - *Detalle*: Se repite una vez por cada registro.
  - *Pie de grupo*: Al final de cada grupo (subtotales: `=Suma([Importe])`, contar registros del grupo).
  - *Pie de página*: Se repite en cada página (número de página: `=Página`, fecha).
  - *Pie del informe*: Aparece una sola vez al final (totales generales, resumen ejecutivo).
- Pueden generarse mediante asistente o en Vista Diseño completa.

---

## 4. Relaciones entre Tablas e Integridad Referencial

### 4.1 La Ventana de Relaciones
Acceso: Herramientas de base de datos > Relaciones. Muestra un diagrama visual con las tablas y las líneas de relación entre ellas. Aquí se definen, modifican y eliminan las relaciones.

**Para crear una relación:**
1. Agregar las tablas al diagrama.
2. Arrastrar el campo de clave primaria de una tabla hasta el campo de clave foránea correspondiente de la otra tabla.
3. En el cuadro de diálogo que aparece, configurar las opciones de integridad referencial.

### 4.2 Tipos de Relaciones
| Tipo | Notación | Descripción | Ejemplo |
|---|---|---|---|
| **Uno a Uno (1:1)** | 1 ↔ 1 | Cada registro de la Tabla A se relaciona con exactamente un registro de la Tabla B, y viceversa | Empleado ↔ Plaza de aparcamiento asignada |
| **Uno a Varios (1:N)** | 1 ↔ ∞ | Un registro de la Tabla A puede relacionarse con muchos registros de la Tabla B, pero cada registro de B se relaciona con un solo registro de A | Un Departamento tiene muchos Empleados; cada Empleado pertenece a un solo Departamento |
| **Varios a Varios (N:M)** | ∞ ↔ ∞ | Cada registro de A puede relacionarse con muchos de B, y viceversa | Un Alumno cursa varias Asignaturas; una Asignatura tiene varios Alumnos. **Se resuelve creando una tabla intermedia** (tabla puente o de enlace) que contiene las claves foráneas de ambas tablas |

La relación **1:N (Uno a Varios)** es, con diferencia, la más frecuente y la más preguntada en exámenes.

### 4.3 Integridad Referencial
Mecanismo que garantiza la coherencia de las relaciones entre tablas:
- **Regla básica**: No se puede introducir un valor en el campo de clave foránea de la tabla hija si ese valor no existe como clave primaria en la tabla padre. Esto evita **registros huérfanos** (un pedido sin cliente válido).
- **Actualización en cascada**: Si se modifica el valor de la clave primaria en la tabla padre, el cambio se propaga automáticamente a todos los registros relacionados de la tabla hija.
- **Eliminación en cascada**: Si se borra un registro de la tabla padre, se borran automáticamente todos los registros relacionados de la tabla hija. **Precaución**: Puede causar pérdida masiva de datos involuntaria si no se usa con cuidado.

### 4.4 Lenguaje SQL en Access
Access soporta un subconjunto del estándar SQL. Las sentencias fundamentales:

```sql
-- Consulta de selección
SELECT Nombre, Apellido, Departamento
FROM Empleados
WHERE Departamento = "Informática"
ORDER BY Apellido ASC;

-- Consulta de inserción
INSERT INTO Empleados (Nombre, Apellido, Departamento)
VALUES ("Ana", "García", "RRHH");

-- Consulta de actualización
UPDATE Empleados
SET Departamento = "Dirección"
WHERE IdEmpleado = 42;

-- Consulta de eliminación
DELETE FROM Empleados
WHERE FechaBaja IS NOT NULL;

-- Consulta de agrupación con funciones agregadas
SELECT Departamento, COUNT(*) AS TotalEmpleados, AVG(Salario) AS SalarioMedio
FROM Empleados
GROUP BY Departamento
HAVING COUNT(*) > 5;
```
