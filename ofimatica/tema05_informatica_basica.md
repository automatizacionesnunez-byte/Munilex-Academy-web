# Tema 5. Informática Básica: Conceptos Fundamentales sobre el Hardware y el Software

---

## 1. Introducción a la Informática

### 1.1 Definición y Etimología
El término **informática** proviene del francés *informatique*, acuñado por Philippe Dreyfus en 1962, como contracción de *information automatique*. Se define como la ciencia que estudia el tratamiento automático y racional de la información mediante máquinas electrónicas, abarcando los campos de diseño, desarrollo y aplicación de sistemas computacionales.

En el contexto de la Administración General del Estado, la informática constituye una herramienta transversal imprescindible para la gestión de expedientes electrónicos, la tramitación administrativa y la interoperabilidad entre organismos públicos conforme al Esquema Nacional de Interoperabilidad (ENI, Real Decreto 4/2010).

### 1.2 El Ordenador: Concepto y Clasificación
Un **ordenador** es una máquina electrónica digital capaz de recibir, almacenar, procesar y emitir información de forma automática, siguiendo un conjunto finito de instrucciones denominado **programa**. Carece de inteligencia propia y ejecuta exclusivamente las operaciones que le han sido previamente codificadas.

**Clasificación por tamaño y capacidad:**
- **Supercomputadores**: Máxima potencia de cálculo. Empleados en meteorología, simulación nuclear y criptoanálisis (ejemplo: MareNostrum del BSC en Barcelona).
- **Mainframes**: Servidores centrales de grandes organizaciones bancarias y gubernamentales. Procesan millones de transacciones simultáneas.
- **Minicomputadores o Servidores**: Equipos intermedios que gestionan redes corporativas y servicios web.
- **Microcomputadores (PCs)**: Ordenadores personales de sobremesa (desktop) y portátiles (laptop/notebook).
- **Dispositivos móviles**: Tabletas y smartphones con capacidad computacional equivalente a PCs de hace una década.

### 1.3 Representación de la Información: El Sistema Binario
Los circuitos electrónicos internos de un ordenador (transistores MOSFET) operan en dos estados estables diferenciados: paso de corriente (1) o ausencia de corriente (0). Este fundamento físico obliga a que toda la información se codifique en el **sistema de numeración binario** (base 2).

- **Bit** (*Binary Digit*): Unidad mínima e indivisible de información. Solo admite dos valores: 0 o 1.
- **Byte** u **Octeto**: Agrupación de 8 bits. Permite representar 2^8 = 256 combinaciones diferentes, suficientes para codificar un carácter alfanumérico.
- **Nibble** o **Cuarteto**: Medio byte, es decir, 4 bits. Representa un dígito hexadecimal (0-F).
- **Palabra (Word)**: Cantidad de bits que la CPU procesa simultáneamente en un solo ciclo. En arquitecturas actuales de 64 bits, una palabra equivale a 8 bytes.

### 1.4 Tabla de Unidades de Medida de Almacenamiento
En informática, los múltiplos tradicionales ascienden en potencias de 2 (factor 1024), aunque la normalización IEC de 1998 introdujo los prefijos binarios (Kibi, Mebi, Gibi) para distinguirlos de los prefijos decimales SI (Kilo, Mega, Giga). En el ámbito de las oposiciones, se emplea la tabla clásica:

| Unidad | Equivalencia | Valor aproximado |
|---|---|---|
| 1 Byte (B) | 8 bits | — |
| 1 Kilobyte (KB) | 1.024 Bytes | ~10^3 B |
| 1 Megabyte (MB) | 1.024 KB | ~10^6 B |
| 1 Gigabyte (GB) | 1.024 MB | ~10^9 B |
| 1 Terabyte (TB) | 1.024 GB | ~10^12 B |
| 1 Petabyte (PB) | 1.024 TB | ~10^15 B |
| 1 Exabyte (EB) | 1.024 PB | ~10^18 B |
| 1 Zettabyte (ZB) | 1.024 EB | ~10^21 B |
| 1 Yottabyte (YB) | 1.024 ZB | ~10^24 B |

**Nota para examen:** La velocidad de transferencia de datos se mide habitualmente en **bits por segundo** (bps, Kbps, Mbps, Gbps), no en bytes. Es un error frecuente confundir ambas magnitudes: 100 Mbps de una conexión de fibra equivalen a 12,5 MB/s de descarga teórica máxima.

### 1.5 Sistemas de Codificación de Caracteres
Para que el ordenador procese texto humano legible, cada carácter (letra, número, signo de puntuación) debe poseer una equivalencia numérica binaria estandarizada internacionalmente.

- **ASCII** (*American Standard Code for Information Interchange*): Estándar de 1963, originalmente de 7 bits (128 caracteres: letras inglesas, dígitos y controles). La tabla **ASCII Extendida** usa 8 bits (256 caracteres), incorporando la ñ, vocales acentuadas y símbolos monetarios europeos.
- **EBCDIC** (*Extended Binary Coded Decimal Interchange Code*): Código de 8 bits desarrollado por IBM para sus mainframes. Incompatible con ASCII. Cada vez más obsoleto pero históricamente relevante.
- **UNICODE**: Estándar universal creado en 1991 por el Unicode Consortium ante la insuficiencia del ASCII para representar las escrituras mundiales (cirílico, árabe, chino, japonés, coreano, devanagari, etc.). Su codificación más extendida es **UTF-8**, que utiliza entre 1 y 4 bytes por carácter, siendo retrocompatible con ASCII en su primer bloque de 128 posiciones. Actualmente define más de 150.000 caracteres, incluyendo emojis oficiales.

---

## 2. El Hardware: Arquitectura Física del Ordenador

### 2.1 La Arquitectura de Von Neumann (1945)
Propuesta por el matemático húngaro-estadounidense **John von Neumann** en el documento *"First Draft of a Report on the EDVAC"*. Su innovación rupturista fue el concepto de **programa almacenado**: tanto los datos como las instrucciones del programa residen juntos en la misma memoria principal, a diferencia de la máquina ENIAC que exigía recablear físicamente los paneles para cada nueva tarea.

**Componentes funcionales:**
1. **Unidad Central de Proceso (CPU)**.
2. **Memoria Principal (RAM y ROM)**.
3. **Subsistema de Entrada/Salida (Periféricos)**.
4. **Buses de interconexión** (de datos, de direcciones y de control).

### 2.2 La Placa Base (Motherboard o Tarjeta Madre)
Es el gran circuito impreso (PCB) sobre el que se ensamblan, conectan y comunican todos los componentes del sistema.

**Elementos integrados en la placa base:**
- **Zócalo del procesador (Socket)**: Conector físico con matriz de pines o contactos LGA/PGA donde se ancla la CPU. Cada generación de procesador requiere un socket compatible específico (ejemplos actuales: Socket AM5 de AMD, LGA 1700 de Intel para las familias Core de 12ª a 14ª generación).
- **Ranuras de memoria DIMM**: Slots donde se insertan los módulos de RAM. Las placas domésticas suelen integrar 2 o 4 ranuras DIMM de tipo DDR4 o DDR5. El formato reducido para portátiles se denomina SO-DIMM.
- **El Chipset**: Conjunto de chips soldados en la placa que actúan como controladores de tráfico de datos entre los componentes. Históricamente se dividía en:
  - **Northbridge** (Puente Norte / MCH): Gestionaba las comunicaciones rápidas entre CPU, RAM y la ranura gráfica principal (AGP, luego PCIe x16). En placas modernas, estas funciones se han integrado dentro del propio procesador por eficiencia.
  - **Southbridge** (Puente Sur / ICH): Administra las conexiones más lentas: puertos USB, controladora SATA para discos, audio integrado, puertos de red Ethernet y ranuras PCI/PCIe secundarias.
- **Ranuras de expansión (Slots PCIe)**: Permiten añadir tarjetas gráficas dedicadas (GPU), tarjetas de red, capturadoras de vídeo o controladoras RAID. El estándar actual es **PCI-Express** en versiones 3.0, 4.0 y 5.0, con anchos x1, x4, x8 y x16.
- **Conectores de almacenamiento**: Puertos SATA III (6 Gbps) para HDDs y SSDs de 2,5", y ranuras **M.2** para SSDs NVMe de altísimo rendimiento.
- **Firmware BIOS/UEFI**: Chip de memoria no volátil (EEPROM/Flash) que contiene el programa de arranque básico. Al encender el equipo, la BIOS/UEFI ejecuta la rutina **POST** (*Power-On Self-Test*), verificando el correcto estado de CPU, RAM, teclado y discos antes de ceder el control al sistema operativo. La UEFI (*Unified Extensible Firmware Interface*) es la evolución moderna de la BIOS clásica, con interfaz gráfica, soporte para ratón, arranque seguro (*Secure Boot*) y compatibilidad con discos de más de 2 TB mediante tabla de particiones GPT.
- **Pila CMOS (CR2032)**: Batería de botón tipo litio de 3V que alimenta la memoria CMOS, conservando la configuración de fecha, hora y parámetros de la BIOS cuando el equipo está desconectado de la red eléctrica.
- **Conectores del panel frontal**: Cables de encendido (Power SW), reinicio (Reset SW), LED de actividad del disco duro y LED de encendido.

### 2.3 La Unidad Central de Proceso (CPU / Microprocesador)
Es el chip semiconductor que constituye el "cerebro" del ordenador, encargado de interpretar y ejecutar las instrucciones de los programas.

**Estructura interna de la CPU:**
- **Unidad Aritmético-Lógica (ALU)**: Circuito combinacional que realiza las operaciones matemáticas (suma, resta, multiplicación, división, desplazamientos de bits) y las operaciones lógicas booleanas (AND, OR, XOR, NOT, comparaciones).
- **Unidad de Control (UC)**: Dirige y coordina el funcionamiento de todos los componentes. Gestiona el **ciclo de instrucción** o ciclo de máquina, compuesto por las fases:
  1. **Fetch** (Captación): Lee la siguiente instrucción desde la memoria RAM, usando la dirección almacenada en el Contador de Programa (PC).
  2. **Decode** (Decodificación): Interpreta la instrucción según el juego de instrucciones (ISA: x86-64, ARM, RISC-V).
  3. **Execute** (Ejecución): La ALU o la unidad de coma flotante (FPU) realizan la operación.
  4. **Writeback** (Escritura): El resultado se almacena en un registro o se devuelve a memoria.
- **Registros**: Pequeñísimas celdas de memoria interna de la CPU, de acceso instantáneo (un solo ciclo de reloj). Tipos principales:
  - *Acumulador (ACC)*: Almacena temporalmente el resultado de las operaciones de la ALU.
  - *Contador de Programa (PC)*: Contiene la dirección de memoria de la próxima instrucción a ejecutar.
  - *Registro de Instrucción (IR)*: Guarda la instrucción que está siendo decodificada actualmente.
  - *Registro de Estado (Flags)*: Bits indicadores de condiciones (acarreo, cero, desbordamiento, signo).
- **Memoria Caché**: Memoria estática SRAM integrada en el encapsulado del procesador, muchísimo más rápida que la RAM (DRAM) pero también más cara y reducida en capacidad.
  - **L1 (Level 1)**: La más veloz y próxima a los núcleos. Suele dividirse en L1-I (instrucciones) y L1-D (datos). Típicamente 32-64 KB por núcleo.
  - **L2 (Level 2)**: Mayor capacidad (256 KB - 1 MB por núcleo), menor velocidad que L1.
  - **L3 (Level 3)**: Compartida entre todos los núcleos del procesador. Capacidades de 8 a 96 MB en CPUs modernas. Su misión es minimizar los accesos a la lenta RAM externa.
- **Unidad de Coma Flotante (FPU)**: Coprocesador matemático especializado en operaciones con decimales de alta precisión (números en coma flotante, estándar IEEE 754).

**Métricas de rendimiento CPU preguntadas en oposiciones:**
- **Frecuencia de reloj**: Medida en Gigahercios (GHz). Indica los ciclos por segundo del oscilador de cuarzo. Un procesador a 4 GHz realiza 4.000 millones de ciclos por segundo. No obstante, dos CPUs a la misma frecuencia pueden tener rendimientos muy diferentes según su arquitectura.
- **Número de Núcleos (Cores)**: Las CPUs modernas integran múltiples núcleos de procesamiento (dual-core, quad-core, octa-core), permitiendo ejecutar varias tareas en paralelo real. La tecnología **Hyper-Threading** (Intel) o **SMT** (AMD) permite que cada núcleo físico procese dos hilos de ejecución simultáneos, duplicando los núcleos lógicos.
- **Litografía (Proceso de fabricación)**: Tamaño del transistor medido en nanómetros (nm). A menor litografía (7nm, 5nm, 3nm), mayor densidad de transistores, menor consumo energético y menor generación de calor.
- **IPC** (*Instructions Per Cycle*): Instrucciones que la CPU completa por cada ciclo de reloj. Es la métrica más fiable del rendimiento real.
- **TDP** (*Thermal Design Power*): Potencia térmica de diseño en vatios (W). Indica la cantidad de calor que el sistema de refrigeración debe disipar.

### 2.4 La Memoria Principal
- **RAM** (*Random Access Memory*): Memoria de acceso aleatorio (el tiempo de acceso es idéntico para cualquier posición). Es **volátil**: pierde todo su contenido al interrumpir la alimentación eléctrica. Es memoria de lectura y escritura donde se cargan los programas y datos en ejecución.
  - Tecnología **DRAM** (*Dynamic RAM*): Basada en condensadores que se descargan y requieren refresco periódico (cada pocos milisegundos).
  - Evolución: SDR SDRAM → DDR (Double Data Rate, transmite datos tanto en el flanco de subida como de bajada del ciclo de reloj) → DDR2 → DDR3 → DDR4 (voltaje de 1,2V, velocidades de 2133 a 3200 MHz base) → **DDR5** (voltaje de 1,1V, frecuencias base desde 4800 MHz, mayor ancho de banda, ECC on-die integrado para corrección de errores).
- **ROM** (*Read Only Memory*): Memoria no volátil de solo lectura en origen. Almacena permanentemente el firmware básico de arranque.
  - Evolución: ROM → PROM (Programable una sola vez) → EPROM (Borrable por luz ultravioleta) → **EEPROM** (Borrable eléctricamente, byte a byte) → **Flash** (Tipo especial de EEPROM que se borra por bloques, usada en SSDs, pendrives y chips de BIOS/UEFI).

### 2.5 Almacenamiento Secundario (Memoria Masiva No Volátil)
Dispositivos que conservan los datos de forma permanente sin necesidad de alimentación eléctrica continua.

**Soportes Magnéticos: Disco Duro (HDD - Hard Disk Drive)**
Uno o varios platos rígidos de aluminio o vidrio recubiertos de material ferromagnético giran a alta velocidad (5400 o 7200 RPM) mientras un brazo mecánico (actuador) con un cabezal de lectura/escritura se desplaza radialmente sobre su superficie.
- **Estructura lógica de bajo nivel**: Caras (superficies útiles de cada plato) → Pistas (circunferencias concéntricas) → Sectores (porciones angulares de cada pista, típicamente de 512 bytes o 4096 bytes en discos Advanced Format) → **Clúster** o Unidad de Asignación (agrupación de sectores contiguos que constituye la unidad mínima de almacenamiento que el sistema de archivos asigna a un fichero).
- **Cilindro**: Conjunto de pistas con el mismo radio en todos los platos apilados.
- Interfaz de conexión principal: **SATA III** (Serial ATA, velocidad máxima teórica de 6 Gbps = 600 MB/s).
- Vulnerabilidad mecánica: El temido ***Head Crash*** ocurre cuando el cabezal roza físicamente el plato magnético en movimiento, destruyendo irremediablemente los datos de esas pistas.

**Soportes de Estado Sólido: SSD (Solid State Drive)**
Utilizan chips de **memoria Flash NAND** (tecnologías SLC, MLC, TLC, QLC según el número de bits almacenados por celda: 1, 2, 3 o 4 bits respectivamente). No poseen ninguna parte mecánica móvil.
- Ventajas sobre HDD: Velocidad de lectura/escritura enormemente superior; resistencia a golpes y vibraciones; menor consumo energético; funcionamiento silencioso; menor latencia de acceso.
- **Formatos físicos**: 2,5" SATA (compatibilidad con bahías de portátil), **M.2** (tarjeta compacta que se inserta directamente en la placa base).
- **Protocolo NVMe** (*Non-Volatile Memory Express*): Diseñado específicamente para SSDs sobre bus PCIe. Velocidades secuenciales de lectura de hasta 7.000-14.000 MB/s en PCIe Gen 4/Gen 5, frente al tope de 560 MB/s de un SSD SATA.
- Desventaja: Los ciclos de escritura de las celdas NAND son finitos (métricas TBW - *Total Bytes Written*), aunque en la práctica la vida útil supera con creces la necesidad administrativa habitual.

**Soportes Ópticos**
Basados en la lectura de microperforaciones (*pits*) y zonas lisas (*lands*) en la superficie reflectante de un disco, mediante un haz de luz láser.
- **CD-ROM**: Láser infrarrojo. Capacidad de 700 MB.
- **DVD**: Láser rojo (longitud de onda menor que CD, mayor densidad). Capa simple: 4,7 GB. Doble capa (DL): 8,5 GB. Doble cara y doble capa: 17,1 GB.
- **Blu-Ray Disc (BD)**: Láser azul-violeta (longitud de onda aún menor). Capa simple: 25 GB. Doble capa: 50 GB. Formato BDXL: hasta 128 GB.

**Memorias Flash extraíbles**: Pendrives USB (USB 2.0: 480 Mbps; USB 3.0: 5 Gbps; USB 3.2: 20 Gbps), tarjetas SD/microSD.

### 2.6 Periféricos (Dispositivos de Entrada/Salida)

**Periféricos de Entrada** (introducen datos al sistema):
- Teclado (QWERTY español con ñ y tecla AltGr para caracteres especiales).
- Ratón (óptico, láser, inalámbrico por radiofrecuencia o Bluetooth).
- Escáner (plano, de mano, de alimentación). Resolución medida en PPP (puntos por pulgada) o DPI.
- Lector de código de barras y QR.
- Micrófono.
- Cámara web (Webcam).
- Lector biométrico de huellas dactilares.
- Lectores OCR (*Optical Character Recognition*): Digitalizan texto impreso convirtiéndolo en texto editable.

**Periféricos de Salida** (emiten información procesada):
- **Monitor/Pantalla**: Tecnologías LCD/LED, OLED, AMOLED. Parámetros: resolución (HD 1280x720, Full HD 1920x1080, 4K UHD 3840x2160), tasa de refresco (60 Hz, 144 Hz), tamaño diagonal en pulgadas, tiempo de respuesta (ms), tipo de panel (IPS, VA, TN).
- **Impresoras**: 
  - *De impacto (Matriciales o de agujas)*: Un cabezal con agujas golpea una cinta entintada contra el papel. Ruidosas, baja calidad pero capaces de imprimir calco con copias.
  - *De inyección de tinta*: Proyectan microgotas de tinta líquida sobre el papel. Buena calidad fotográfica, coste por página elevado.
  - *Láser*: Utilizan un tambor fotoconductor, tóner en polvo fino y un fusor térmico que fija la imagen por calor y presión. Alta velocidad, bajo coste por página en grandes volúmenes, calidad profesional. Más empleadas en oficinas de la Administración.
  - *Impresoras 3D (Fabricación Aditiva)*: Depositan material capa a capa (filamentos PLA/ABS, resina fotopolimérica) para construir objetos tridimensionales.
- **Altavoces/Auriculares**: Salida de audio.
- **Plóter (Plotter)**: Impresora de gran formato para planos técnicos, cartografía y diseño CAD.

**Periféricos Mixtos (Entrada y Salida simultánea)**:
- Pantalla táctil (entrada por toque + salida visual).
- Equipo multifunción (impresora + escáner + copiadora + fax).
- Dispositivos de red: Módem (modulador-demodulador), Router, Switch, Punto de acceso WiFi.
- Gafas de Realidad Virtual (VR/AR).

**Principales puertos e interfaces de conexión**:
- **USB** (*Universal Serial Bus*): USB 2.0 (480 Mbps), USB 3.0/3.1 (5-10 Gbps), USB 3.2 Gen 2x2 (20 Gbps), USB4 (40 Gbps). Conectores Type-A (rectangular clásico), Type-B (cuadrado para impresoras), **Type-C** (reversible, estándar moderno universal).
- **HDMI** (*High-Definition Multimedia Interface*): Salida de vídeo y audio digital hacia monitores y televisores.
- **DisplayPort**: Alternativa a HDMI con mayor ancho de banda, habitual en monitores profesionales.
- **Ethernet RJ-45**: Conexión de red cableada (100 Mbps, 1 Gbps, 2,5 Gbps, 10 Gbps).
- **Jack 3.5mm**: Conector analógico de audio (auriculares/micrófono).

---

## 3. El Software: Componente Lógico del Sistema

### 3.1 Definición y Clasificación General
El **software** es el conjunto de programas, instrucciones y datos que dirigen el funcionamiento del hardware. Sin software, el hardware es una máquina inerte.

**Clasificación por nivel funcional:**

1. **Software de Sistema (o de Base)**: Gestiona los recursos del hardware y proporciona la plataforma sobre la que se ejecutan las aplicaciones.
   - *Sistemas Operativos*: Windows 11, GNU/Linux (distribuciones Ubuntu, Debian, Red Hat), macOS, Android, iOS.
   - *Controladores de dispositivos (Drivers)*: Pequeños programas que actúan de intermediarios entre el sistema operativo y cada pieza de hardware específica (el driver de la impresora, el de la tarjeta gráfica, etc.). Sin el driver adecuado, el S.O. no puede comunicarse con el periférico.
   - *Utilidades del sistema*: Desfragmentadores de disco, liberadores de espacio, gestores de arranque, herramientas de diagnóstico.

2. **Software de Desarrollo (o de Programación)**: Herramientas para crear nuevo software.
   - *Lenguajes de programación*: De bajo nivel (Ensamblador, cercano al lenguaje máquina binario), de alto nivel (C, C++, Java, Python, C#, JavaScript).
   - *Compiladores*: Traducen el código fuente completo de alto nivel a código máquina ejecutable antes de su ejecución (C, C++). El resultado es un archivo `.exe` independiente.
   - *Intérpretes*: Traducen y ejecutan el código línea a línea en tiempo real (Python, JavaScript). No generan un ejecutable independiente; requieren el intérprete instalado en la máquina para funcionar.
   - *IDEs (Entornos Integrados de Desarrollo)*: Herramientas que combinan editor de código, compilador/intérprete, depurador y gestor de proyectos (Visual Studio, IntelliJ IDEA, Eclipse).

3. **Software de Aplicación**: Programas diseñados para que el usuario final realice tareas concretas y productivas.
   - *Suites ofimáticas*: Microsoft Office 365 (Word, Excel, Access, PowerPoint, Outlook), LibreOffice (Writer, Calc, Base, Impress).
   - *Navegadores web*: Microsoft Edge, Google Chrome, Mozilla Firefox, Safari.
   - *Software de diseño gráfico*: Adobe Photoshop, Illustrator, GIMP, Inkscape.
   - *Antivirus y seguridad*: Microsoft Defender, Kaspersky, Bitdefender, Malwarebytes.
   - *Gestores de bases de datos corporativas*: Oracle Database, MySQL, PostgreSQL, Microsoft SQL Server.

### 3.2 Tipos de Licencias de Software (Pregunta Recurrente)

| Tipo | Código fuente | Coste | Modificación | Redistribución |
|---|---|---|---|---|
| **Software Libre (GPL/Copyleft)** | Abierto y accesible | Puede ser gratuito o de pago | Permitida | Permitida con misma licencia |
| **Open Source (MIT, Apache, BSD)** | Abierto | Generalmente gratuito | Permitida | Permitida, incluso en productos privativos |
| **Freeware** | Cerrado (no disponible) | Gratuito | Prohibida | Permitida en su forma original |
| **Shareware** | Cerrado | Gratuito temporalmente (trial 30 días) | Prohibida | Limitada a la versión de prueba |
| **Software Propietario (Retail)** | Cerrado | De pago (licencia comercial) | Prohibida | Prohibida sin autorización |
| **Dominio Público** | Variable | Gratuito | Permitida | Sin restricciones |

**Las 4 libertades del Software Libre** (definidas por Richard Stallman y la Free Software Foundation):
- Libertad 0: Usar el programa con cualquier propósito.
- Libertad 1: Estudiar cómo funciona (requiere acceso al código fuente) y adaptarlo.
- Libertad 2: Distribuir copias para ayudar a otros.
- Libertad 3: Distribuir copias de las versiones modificadas.

**Nota técnica**: Software Libre no significa necesariamente gratuito (*"Free as in freedom, not as in free beer"*). Es un modelo de licenciamiento que garantiza libertades al usuario. Software gratuito (Freeware) no es Software Libre si su código fuente permanece cerrado.

---

## 4. Seguridad Informática Básica

### 4.1 Los Tres Pilares de la Seguridad de la Información (Tríada CIA)
Conforme al Esquema Nacional de Seguridad (ENS, Real Decreto 311/2022) y normativas ISO 27001:
- **Confidencialidad**: Solo los usuarios autorizados deben poder acceder a la información. Se protege mediante cifrado, control de acceso, políticas de contraseñas y clasificación de la información.
- **Integridad**: Los datos no deben ser alterados ni corrompidos de forma no autorizada ni accidental. Se garantiza mediante funciones hash (SHA-256), firmas digitales y sistemas de control de versiones.
- **Disponibilidad**: Los sistemas y datos deben estar accesibles cuando los usuarios legítimos los necesiten. Se asegura mediante redundancia (RAID), copias de seguridad (backups), sistemas de alimentación ininterrumpida (SAI/UPS) y planes de recuperación ante desastres (DRP).

Adicionalmente se consideran: **Autenticidad** (verificar que el emisor es quien dice ser), **Trazabilidad** (registrar quién hizo qué y cuándo) y **No repudio** (impedir que un emisor niegue haber realizado una acción).

### 4.2 Principales Amenazas y Tipos de Malware
- **Virus informático**: Código malicioso que se adjunta a un archivo o programa legítimo (huésped) y se activa al ejecutarlo. Puede dañar archivos, modificar el sector de arranque o inutilizar el sistema. Requiere interacción humana para propagarse.
- **Gusano (Worm)**: Malware autorreplicante que se propaga por la red sin necesidad de adjuntarse a ningún archivo y sin requerir intervención del usuario. Consume ancho de banda y recursos del sistema.
- **Troyano (Trojan)**: Programa aparentemente legítimo que oculta funcionalidad maliciosa. Puede abrir una puerta trasera (*backdoor*) para que un atacante acceda remotamente al equipo.
- **Ransomware**: Cifra masivamente los archivos del disco (mediante algoritmos AES-256 o RSA) e imposibilita su acceso, exigiendo un rescate económico (habitualmente en criptomonedas) para entregar la clave de descifrado. Ejemplos: WannaCry (2017), Ryuk, LockBit.
- **Spyware**: Software espía que recopila información del usuario (historial de navegación, pulsaciones de teclado mediante *keyloggers*, credenciales) y la envía al atacante sin conocimiento ni consentimiento de la víctima.
- **Adware**: Muestra publicidad intrusiva no solicitada para generar ingresos al atacante.
- **Rootkit**: Conjunto de herramientas que se instalan sigilosamente en el sistema para obtener y mantener acceso con privilegios de administrador (root), ocultando su presencia a los antivirus convencionales.

### 4.3 Técnicas de Ingeniería Social
- **Phishing**: Correos electrónicos fraudulentos que suplantan la identidad de entidades legítimas (bancos, AEAT, Correos) para engañar al destinatario y que revele credenciales o datos bancarios a través de páginas web falsas.
- **Spear Phishing**: Phishing dirigido, personalizado para una víctima concreta (un directivo, un funcionario de alto nivel).
- **Pharming**: Manipulación del sistema DNS para redirigir al usuario desde un dominio legítimo a una réplica fraudulenta sin que este lo advierta.
- **Vishing**: Phishing por llamada telefónica.
- **Smishing**: Phishing por mensajes SMS.

### 4.4 Medidas de Protección Activas y Pasivas
- **Antivirus / Antimalware**: Software de detección y eliminación de amenazas en tiempo real mediante firmas de virus conocidos y análisis heurístico de comportamientos sospechosos. Microsoft Defender viene integrado de serie en Windows 11.
- **Cortafuegos (Firewall)**: Barrera de seguridad (hardware o software) que filtra el tráfico de red entrante y saliente según reglas configuradas, bloqueando conexiones no autorizadas por puertos TCP/UDP. El Firewall de Windows Defender opera por defecto.
- **SAI/UPS** (*Sistema de Alimentación Ininterrumpida*): Dispositivo con baterías internas que suministra energía eléctrica estabilizada al equipo durante cortes de suministro, protegiendo contra apagones, subidas de tensión (sobretensiones) y caídas de tensión (microcortes).
- **Copias de seguridad (Backup)**: Duplicación periódica de los datos críticos en un medio separado. Tipos: completa (todos los datos), incremental (solo lo modificado desde la última copia, cualquiera que fuera), diferencial (lo modificado desde la última copia completa).
- **Cifrado de datos**: Aplicación de algoritmos criptográficos para hacer los datos ilegibles sin la clave correspondiente. BitLocker (Windows), VeraCrypt.
- **Contraseñas seguras**: Mínimo 12 caracteres combinando mayúsculas, minúsculas, números y símbolos especiales. Renovación periódica obligatoria. Autenticación multifactor (MFA/2FA).
- **Certificado digital y firma electrónica**: Conforme a la Ley 6/2020, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza. El certificado electrónico de la FNMT (Fábrica Nacional de Moneda y Timbre) permite identificarse telemáticamente ante la Administración y firmar documentos con validez jurídica. Se basa en **criptografía asimétrica de clave pública (PKI)**: un par de claves (pública y privada) vinculadas matemáticamente.
