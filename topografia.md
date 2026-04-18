# Tema: Topografía — Cartografía y Orientación

---

## 1. Definición, Objeto y Divisiones de la Topografía

### 1.1 Concepto y definición
La **Topografía** es la ciencia y la técnica que estudia el conjunto de procedimientos necesarios para determinar la posición de puntos sobre la superficie terrestre y representarlos gráficamente a escala sobre una superficie plana (mapa o plano). La palabra proviene del griego *topos* (lugar) y *graphein* (describir).

A diferencia de la Geodesia (que estudia la forma global de la Tierra), la Topografía trabaja en extensiones limitadas y asume la superficie terrestre como plana (sin curvatura apreciable). Para superficies de hasta 25-30 km de radio, la curvatura terrestre es despreciable a efectos prácticos.

### 1.2 La forma de la Tierra
La Tierra no es una esfera perfecta. Su forma real se aproxima mediante tres modelos:
- **Geoide**: La forma real de la Tierra, definida como la superficie equipotencial del campo gravitatorio que coincide con el nivel medio del mar en reposo y su prolongación imaginaria bajo los continentes. Es irregular, con abultamientos y depresiones.
- **Elipsoide de revolución**: Modelo matemático simplificado (una esfera ligeramente achatada por los polos y ensanchada en el ecuador). Cada país adopta un elipsoide de referencia. España usa el **Elipsoide GRS80** (asociado al sistema ETRS89) desde 2007 para cartografía oficial, sustituyendo al anterior Elipsoide Internacional de Hayford (1924).
- **Esfera**: Aproximación más simple, útil para cálculos generales. Radio medio terrestre ≈ 6.371 km.

**Dato de examen**: La diferencia entre el radio ecuatorial y el polar es de aproximadamente 21 km (achatamiento polar). El radio ecuatorial es de 6.378 km y el polar de 6.357 km.

### 1.3 Divisiones de la Topografía
La ciencia topográfica se divide en tres ramas operativas complementarias:

| Rama | Objeto de estudio | Variables | Resultado |
|------|-------------------|-----------|-----------|
| **Planimetría** | Proyección horizontal del terreno (planta) | Coordenadas X e Y (distancias y ángulos horizontales) | Plano planimétrico (vista aérea sin alturas) |
| **Altimetría** (o Hipsometría) | Diferencias de nivel y elevaciones del terreno | Coordenada Z (alturas, cotas, desniveles) | Perfil longitudinal del terreno |
| **Taquimetría** (o Topografía completa) | Combina planimetría y altimetría simultáneamente | X, Y, Z | **Plano topográfico** completo con curvas de nivel |

---

## 2. Coordenadas Geográficas

### 2.1 Elementos de referencia terrestres

**Eje terrestre o de rotación**: Línea imaginaria alrededor de la cual gira la Tierra. Sus extremos definen el **Polo Norte** (o Polo Ártico) y el **Polo Sur** (o Polo Antártico).

**Ecuador**: Circunferencia máxima perpendicular al eje terrestre que divide la Tierra en dos mitades iguales:
- **Hemisferio Norte** (Boreal o Septentrional).
- **Hemisferio Sur** (Austral o Meridional).
El Ecuador tiene una longitud aproximada de 40.075 km y se sitúa a 0° de latitud.

**Paralelos**: Círculos menores imaginarios paralelos al Ecuador. Cada paralelo define un grado de latitud. Paralelos notables:
- **Trópico de Cáncer**: 23° 26' N (límite norte de la zona tropical).
- **Trópico de Capricornio**: 23° 26' S (límite sur de la zona tropical).
- **Círculo Polar Ártico**: 66° 33' N.
- **Círculo Polar Antártico**: 66° 33' S.

**Meridianos**: Semicírculos imaginarios que unen ambos polos, perpendiculares al Ecuador. El **Meridiano de Greenwich** (o Meridiano Cero) pasa por el Real Observatorio de Greenwich en Londres y se estableció como referencia internacional en 1884 (Conferencia Internacional del Meridiano, Washington). Divide la Tierra en:
- **Hemisferio Oriental** (Este/Este).
- **Hemisferio Occidental** (Oeste/West).
El **Antimeridiano** (180°) es la línea diametralmente opuesta a Greenwich y sirve como base para la **Línea Internacional del Cambio de Fecha**.

### 2.2 Latitud y Longitud

| Coordenada | Definición | Rango | Medición | Referencia |
|-----------|-----------|-------|----------|------------|
| **Latitud (φ)** | Distancia angular entre un punto y el Ecuador, medida sobre el meridiano que pasa por dicho punto | 0° a 90° N o S | Vertical (norte-sur) | Ecuador (0°) |
| **Longitud (λ)** | Distancia angular entre un punto y el Meridiano de Greenwich, medida sobre el paralelo que pasa por dicho punto | 0° a 180° E u O | Horizontal (este-oeste) | Greenwich (0°) |

**Expresión**: Las coordenadas se expresan en grados (°), minutos (') y segundos (''). Ejemplo: Madrid → 40° 25' 08'' N, 3° 42' 36'' O.

**Regla mnemotécnica**: **La**titud = **La**do (norte-sur, como los lados de una escalera). **Lo**ngitud = **Lo**ndon (referencia Greenwich, este-oeste).

### 2.3 Coordenadas UTM
El sistema **Universal Transverse Mercator** (UTM) es un sistema cartográfico de coordenadas planas que divide la Tierra en 60 **husos** (zonas verticales de 6° de longitud cada uno) numerados del 1 al 60 desde el antimeridiano hacia el este. Cada huso se subdivide en 20 **bandas** horizontales de latitud designadas con letras de la C a la X (omitiendo I y O para evitar confusión con 1 y 0).

**España peninsular** se encuentra principalmente en los husos **29, 30 y 31**, bandas S y T.

Las coordenadas UTM se expresan en metros:
- **Easting** (X): Distancia al meridiano central del huso (al que se asigna un valor de 500.000 m para evitar valores negativos).
- **Northing** (Y): Distancia al Ecuador (0 m en el Ecuador para el hemisferio norte; 10.000.000 m en el Ecuador para el hemisferio sur, para evitar negativos).

---

## 3. Direcciones y Tipologías del Norte

La orientación en el terreno requiere distinguir entre tres tipos de norte, cuya diferenciación es fundamental para la navegación y la patrulla:

### 3.1 Norte Verdadero o Geográfico (N.V. / N.G.)
Es el punto donde el eje de rotación de la Tierra intersecta con la superficie terrestre en el hemisferio norte (Polo Norte Geográfico). Es un punto fijo e invariable. Los meridianos convergen hacia este punto. Es la referencia absoluta para cualquier cálculo de orientación.

### 3.2 Norte Magnético (N.M.)
Es el punto hacia el que se orienta la aguja imantada de una brújula. **No coincide con el Norte Geográfico** porque el campo magnético terrestre está generado por corrientes de convección en el núcleo exterior líquido de hierro fundido, cuyo eje no se alinea perfectamente con el eje de rotación. Además, el polo magnético se desplaza lentamente (actualmente migra hacia Siberia a unos 55 km/año).

### 3.3 Norte de la Cuadrícula o de Red (N.C.)
Es la dirección hacia arriba de las líneas verticales de la cuadrícula (retícula) de un mapa. Se define por la proyección cartográfica utilizada. En los mapas UTM, las líneas verticales son paralelas al meridiano central de cada huso, pero no coinciden exactamente con los meridianos geográficos (que convergen hacia los polos).

### 3.4 Ángulos entre nortes

| Ángulo | Definición | Signo |
|--------|-----------|-------|
| **Declinación magnética (δ)** | Ángulo entre el Norte Verdadero y el Norte Magnético | Positiva al Este, negativa al Oeste |
| **Convergencia de cuadrícula (γ)** | Ángulo entre el Norte Verdadero y el Norte de Cuadrícula | Positiva al Este, negativa al Oeste |

La declinación magnética varía con la ubicación y el tiempo. Los mapas topográficos indican su valor en la leyenda con la fecha de referencia y la variación anual, lo que permite calcular su valor actualizado.

---

## 4. Ángulos de Dirección: Azimut y Rumbo

### 4.1 Azimut
El **azimut** es el ángulo horizontal medido en el sentido de las agujas del reloj desde la dirección norte hasta la dirección del punto observado.

| Característica | Valor |
|----------------|-------|
| Origen | Norte (0° / 360°) |
| Sentido de medición | Horario (dextrógiro) |
| Rango | 0° a 360° |
| Unidades | Grados sexagesimales (°), centesimales (g) o milésimas (mil) |

**Tipos de azimut**:
- **Azimut geográfico o verdadero**: Medido desde el Norte Verdadero.
- **Azimut magnético**: Medido desde el Norte Magnético (el que da la brújula directamente).
- **Azimut de cuadrícula**: Medido desde el Norte de la Cuadrícula en el mapa.

**Relación**: Azimut Verdadero = Azimut Magnético + Declinación Magnética. Azimut de Cuadrícula = Azimut Verdadero - Convergencia de Cuadrícula.

**Azimut inverso o recíproco**: Es el azimut en sentido contrario (de B a A, en lugar de A a B). Se calcula sumando o restando 180°: *Az. inverso = Az. directo ± 180°*.

### 4.2 Rumbo
El **rumbo** es una forma alternativa de expresar una dirección horizontal. Se mide desde el Norte o el Sur hacia el Este o el Oeste.

| Característica | Valor |
|----------------|-------|
| Origen | Norte (N) o Sur (S) |
| Sentido de medición | Hacia el Este (E) o el Oeste (W/O) |
| Rango | 0° a 90° por cuadrante |
| Formato | N X° E / N X° W / S X° E / S X° W |

**Tabla de conversión Azimut → Rumbo**:

| Cuadrante | Rango de Azimut | Rumbo | Ejemplo |
|-----------|----------------|-------|---------|
| I (NE) | 0° – 90° | N (azimut)° E | Az. 35° → N 35° E |
| II (SE) | 90° – 180° | S (180° - azimut)° E | Az. 150° → S 30° E |
| III (SO) | 180° – 270° | S (azimut - 180°)° W | Az. 210° → S 30° W |
| IV (NO) | 270° – 360° | N (360° - azimut)° W | Az. 315° → N 45° W |

### 4.3 La Rosa de los Vientos
La rosa de los vientos divide el horizonte en 4 puntos cardinales, 4 laterales y 8 colaterales:
- **Cardinales**: Norte (N/0°), Este (E/90°), Sur (S/180°), Oeste (O o W/270°).
- **Laterales**: Noreste (NE/45°), Sureste (SE/135°), Suroeste (SO/225°), Noroeste (NO/315°).
- **Colaterales**: NNE (22,5°), ENE (67,5°), ESE (112,5°), SSE (157,5°), SSO (202,5°), OSO (247,5°), ONO (292,5°), NNO (337,5°).

---

## 5. La Escala Cartográfica

### 5.1 Definición
La **escala** es la relación constante entre las dimensiones en el mapa (plano) y las dimensiones reales en el terreno. Expresa cuántas veces se ha reducido la realidad para representarla en papel.

**Fórmula fundamental**: **E = d / D** (Escala = distancia en el mapa / distancia real en el terreno).

Se expresa habitualmente como fracción unitaria: **1 : X** (donde X es el denominador de la escala). Ejemplo: **1:50.000** significa que 1 cm en el mapa equivale a 50.000 cm en el terreno (= 500 metros reales).

### 5.2 Tipos de escala

| Tipo | Representación | Ejemplo |
|------|---------------|---------|
| **Escala numérica** | Fracción 1:X | 1:25.000 |
| **Escala gráfica** | Barra graduada dibujada en el mapa | Segmento dividido en tramos |
| **Escala verbal** | Texto descriptivo | "1 cm equivale a 500 metros" |

La **escala gráfica** tiene la ventaja de que mantiene su proporción aunque el mapa se amplíe o se reduzca fotográficamente (la barra se amplía o reduce proporcionalmente con el mapa).

### 5.3 Gran escala vs. Pequeña escala

| Concepto | Denominador | Detalle | Extensión | Uso típico |
|----------|-------------|---------|-----------|-----------|
| **Gran escala** | Denominador **pequeño** (1:5.000, 1:10.000, 1:25.000) | Mucho detalle | Poco territorio | Planos urbanos, parcelas catastrales, patrullas locales |
| **Pequeña escala** | Denominador **grande** (1:500.000, 1:1.000.000) | Poco detalle | Mucho territorio | Mapas nacionales, continentales, atlas |

**⚠️ Trampa de examen**: Concepto contraintuitivo. "Gran escala" NO significa un mapa que abarque "mucho terreno", sino todo lo contrario: mucho detalle y poco terreno. La fracción 1/5.000 es matemáticamente mayor que 1/1.000.000, por eso se llama "gran escala".

### 5.4 Cálculos prácticos con escala

**Problema tipo 1**: ¿Cuántos metros reales son 3 cm en un mapa a escala 1:50.000?
- 3 cm × 50.000 = 150.000 cm = **1.500 m = 1,5 km**.

**Problema tipo 2**: ¿Cuántos cm en el mapa representan 2 km reales a escala 1:25.000?
- 2 km = 200.000 cm. → 200.000 / 25.000 = **8 cm en el mapa**.

**Tabla de equivalencias rápidas (1 cm en mapa =)**:

| Escala | 1 cm en mapa = | metros reales | km reales |
|--------|----------------|---------------|-----------|
| 1:5.000 | 5.000 cm | 50 m | 0,05 km |
| 1:10.000 | 10.000 cm | 100 m | 0,1 km |
| 1:25.000 | 25.000 cm | 250 m | 0,25 km |
| 1:50.000 | 50.000 cm | 500 m | 0,5 km |
| 1:100.000 | 100.000 cm | 1.000 m | 1 km |
| 1:200.000 | 200.000 cm | 2.000 m | 2 km |

---

## 6. Curvas de Nivel y Representación del Relieve

### 6.1 Definición
Las **curvas de nivel** (también llamadas **isohipsas**) son líneas que unen todos los puntos del terreno que tienen la misma altitud (cota) respecto al nivel medio del mar.

**Datum altimétrico en España**: El nivel medio del mar se determina mediante un **Mareógrafo**. En España peninsular, la referencia es el **Mareógrafo de Alicante** (cota 0 metros). Para Canarias se utiliza como referencia altimétrica el nivel medio del mar local.

### 6.2 Propiedades de las curvas de nivel
1. **Son líneas cerradas**: Siempre se cierran sobre sí mismas (aunque a veces el cierre quede fuera del marco del mapa).
2. **Nunca se cruzan ni se bifurcan**: Dos curvas de nivel nunca se cortan (salvo en caso teórico de un desplome vertical o cueva).
3. **La equidistancia es constante**: La diferencia de altitud entre dos curvas de nivel consecutivas es siempre la misma dentro de un mismo mapa. Este valor se indica en la leyenda del mapa.
4. **Cuanto más juntas estén, más pendiente**: Curvas de nivel muy próximas indican una pendiente fuerte (terreno escarpado). Curvas muy separadas indican pendiente suave (terreno llano).
5. **Las curvas que cortan un río forman una V apuntando aguas arriba** (hacia la cota más alta).

### 6.3 Tipos de curvas de nivel

| Tipo | Descripción | Representación |
|------|------------|----------------|
| **Curvas directoras o maestras** | Cada 4 o 5 curvas normales, se dibuja una más gruesa y rotulada con su cota | Trazo continuo grueso con cota |
| **Curvas normales o finas** | Curvas entre las directoras | Trazo continuo fino sin cota |
| **Curvas auxiliares o intercalares** | Se usan en zonas llanas donde las normales están muy separadas (equidistancia mitad) | Trazo discontinuo fino |

### 6.4 Equidistancia
La **equidistancia** es la diferencia de altitud constante entre dos curvas de nivel consecutivas. Depende de la escala del mapa:

| Escala del mapa | Equidistancia típica |
|-----------------|---------------------|
| 1:5.000 | 1 m o 2 m |
| 1:10.000 | 5 m |
| 1:25.000 | 10 m |
| 1:50.000 | 20 m |
| 1:100.000 | 40 m o 50 m |

### 6.5 Formas del terreno representadas por curvas de nivel

| Forma del terreno | Representación en curvas de nivel | Descripción |
|-------------------|-----------------------------------|-------------|
| **Colina o cerro** | Curvas concéntricas cerradas, la cota más alta en el centro | Elevación aislada respecto al terreno circundante |
| **Depresión o dolina** | Curvas concéntricas con pequeñas marcas (hachuras) apuntando hacia dentro | Zona hundida respecto al entorno |
| **Vaguada o valle** | Curvas en forma de V o U apuntando hacia las cotas más altas | Zona baja entre dos laderas por donde discurre o puede discurrir agua |
| **Divisoria o cresta** | Curvas en forma de V o U apuntando hacia las cotas más bajas | Línea de cumbres que separa dos vertientes |
| **Collado o puerto** | Dos elevaciones cercanas separadas por una zona más baja con curvas en forma de reloj de arena | Punto bajo entre dos cimas, paso natural entre valles |
| **Escarpe o acantilado** | Curvas extremadamente juntas (casi superpuestas) | Pendiente muy pronunciada, casi vertical |
| **Llanura o meseta** | Curvas muy separadas con cotas similares | Terreno plano o con pendiente muy suave |

### 6.6 Cálculo de pendiente
La **pendiente** se calcula como la relación entre el desnivel (diferencia de cotas) y la distancia horizontal recorrida:

**Pendiente (%) = (Desnivel / Distancia horizontal) × 100**

Ejemplo: Si entre dos puntos hay 100 m de desnivel y 500 m de distancia horizontal → Pendiente = (100/500) × 100 = **20%**.

**Pendiente en grados**: tan(α) = Desnivel / Distancia horizontal → α = arctan(100/500) = 11,3°.

---

## 7. Instrumentos de Orientación

### 7.1 La Brújula
Instrumento basado en una aguja imantada que se orienta según el campo magnético terrestre, señalando el **Norte Magnético**. Componentes:
- **Aguja magnética**: Elemento principal. Se orienta libremente hacia el Norte Magnético.
- **Limbo o esfera graduada**: Disco graduado de 0° a 360° (o de 0 a 400 grados centesimales).
- **Flecha de dirección**: Indica la dirección de marcha seleccionada.
- **Líneas de referencia**: Para alinear con el mapa.
- **Cápsula de aceite**: Amortigua las oscilaciones de la aguja.

**Precauciones**: Mantener alejada de objetos metálicos, imanes, dispositivos electrónicos y líneas de alta tensión. Colocarla siempre en posición horizontal para que la aguja gire libremente.

### 7.2 El GPS (Global Positioning System)
Sistema de posicionamiento global basado en una constelación de satélites. Proporciona coordenadas geográficas y UTM con alta precisión.
- **Constelación**: 24 satélites (mínimo) orbitando a unos 20.200 km de altura en 6 planos orbitales.
- **Precisión civil**: ±3-5 metros (GPS estándar), centimétrica con correcciones diferenciales (DGPS, RTK).
- **Principio**: Trilateración. El receptor necesita señal de al menos **4 satélites** para calcular las tres coordenadas (X, Y, Z) más el error del reloj.
- **Otros sistemas**: GLONASS (Rusia), Galileo (Unión Europea), BeiDou (China).

### 7.3 El Altímetro Barométrico
Mide la altitud basándose en la relación entre presión atmosférica y altitud. A mayor altitud, menor presión atmosférica. Requiere calibración frecuente debido a las variaciones meteorológicas.

---

## 8. Proyecciones Cartográficas

### 8.1 Concepto
Una **proyección cartográfica** es un procedimiento matemático para representar la superficie curva de la Tierra (3D) sobre una superficie plana (2D). Toda proyección implica inevitablemente algún tipo de deformación (en distancias, ángulos, superficies o formas).

### 8.2 Clasificación según la superficie de proyección

| Tipo | Superficie auxiliar | Características | Uso |
|------|---------------------|-----------------|-----|
| **Cilíndrica** | Cilindro | Deforma poco en la zona de contacto (tangencia). Gran deformación en los polos | Mapamundis, navegación |
| **Cónica** | Cono | Deforma poco en latitudes medias | Mapas de países en latitudes medias (España) |
| **Azimutal o cenital** | Plano tangente | Deforma poco en el punto de tangencia | Mapas polares, mapas locales |

### 8.3 Clasificación según propiedades conservadas

| Propiedad | Nombre | Conserva | Deforma |
|-----------|--------|----------|---------|
| **Conforme** | Mantiene ángulos y formas locales | Ángulos, formas pequeñas | Superficies |
| **Equivalente** | Mantiene superficies proporcionales | Áreas | Ángulos, formas |
| **Equidistante** | Mantiene distancias en cierta dirección | Distancias (en una dirección) | Ángulos, áreas |
| **Afiláctica** | No conserva ninguna propiedad estrictamente, pero minimiza deformaciones globales | Compromiso | Compromiso |

### 8.4 Proyección UTM (Universal Transversa de Mercator)
Es la proyección adoptada internacionalmente para cartografía topográfica militar y civil. Es de tipo **cilíndrica transversa** (el cilindro es tangente a un meridiano, no al ecuador) y **conforme** (conserva ángulos). España utiliza esta proyección en su cartografía oficial (Serie MTN del Instituto Geográfico Nacional).

---

## 9. El Mapa Topográfico Nacional (MTN) de España

### 9.1 Organismo responsable
El **Instituto Geográfico Nacional (IGN)**, dependiente del Ministerio de Transportes, Movilidad y Agenda Urbana, es el organismo responsable de la cartografía oficial en España.

### 9.2 Series del Mapa Topográfico Nacional

| Serie | Escala | Nº de hojas | Equidistancia | Uso |
|-------|--------|-------------|---------------|-----|
| **MTN25** | 1:25.000 | 4.126 hojas | 10 m | Detalle máximo, senderismo, patrulla |
| **MTN50** | 1:50.000 | 1.106 hojas | 20 m | Planificación territorial, navegación terrestre |

### 9.3 Elementos de un mapa topográfico
Todo mapa topográfico contiene:
- **Leyenda**: Explica los símbolos, colores y convenciones utilizados.
- **Escala numérica y gráfica**.
- **Cuadrícula UTM**: Red de coordenadas superpuesta.
- **Diagrama de declinación magnética**: Indica la diferencia entre N.V., N.M. y N.C. con su fecha y variación anual.
- **Datos geodésicos**: Elipsoide de referencia, proyección, datum.
- **Curvas de nivel** con su equidistancia indicada.
- **Toponimia**: Nombres geográficos de accidentes del terreno, poblaciones, ríos, etc.

### 9.4 Convenciones de color

| Color | Representa |
|-------|-----------|
| **Negro** | Obras humanas (edificios, carreteras, límites), rótulos, cuadrícula |
| **Marrón/Siena** | Relieve: curvas de nivel, cotas, escarpes |
| **Azul** | Hidrografía: ríos, lagos, mar, fuentes, acequias |
| **Verde** | Vegetación: bosques, cultivos, zonas verdes |
| **Rojo** | Carreteras principales, autopistas |
| **Rosa/Naranja** | Núcleos urbanos (zonas edificadas) |
