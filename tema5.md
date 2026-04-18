# Tema 5: Informática Básica — Conceptos Fundamentales sobre Hardware y Software

---

## 1. Introducción a la Informática

### 1.1 Definición
El término **"informática"** proviene del francés *informatique* (combinación de *information* y *automatique*), acuñado en 1962 por Philippe Dreyfus. Se define como la ciencia que estudia el **tratamiento automático y racional de la información** mediante máquinas electrónicas, considerada como soporte de los conocimientos humanos y de las comunicaciones en los campos técnico, económico y social.

La informática abarca tanto el hardware (componentes físicos) como el software (programas lógicos), así como las redes de comunicación que interconectan los sistemas.

### 1.2 El Ordenador
Un **ordenador** (computador o computadora) es una máquina electrónica digital capaz de recibir, almacenar, procesar y transmitir datos a gran velocidad, ejecutando instrucciones programadas.

**Características esenciales**:
- **Velocidad**: Procesa miles de millones de operaciones por segundo.
- **Precisión**: Los errores provienen del humano (datos de entrada o programación), no de la máquina.
- **Capacidad de almacenamiento**: Puede almacenar cantidades masivas de información.
- **Automatismo**: Ejecuta secuencias de instrucciones sin intervención humana continua.
- **Versatilidad**: Puede realizar funciones muy diversas según el software instalado.

### 1.3 Representación de la Información: El Sistema Binario
Todo ordenador digital basa su funcionamiento interno en el **sistema de numeración binario (base 2)**, que utiliza únicamente dos dígitos: **0** y **1**. Estos dos estados se corresponden con señales eléctricas (presencia o ausencia de voltaje, estados magnéticos, etc.).

A cada dígito binario se le denomina **bit** (acrónimo de *Binary Digit*). El bit es la **unidad mínima de información** que puede manejar un ordenador.

**Otros sistemas numéricos utilizados en informática**:
- **Octal (base 8)**: Dígitos del 0 al 7. Cada dígito octal equivale a 3 bits.
- **Hexadecimal (base 16)**: Dígitos del 0 al 9 y letras A-F (A=10, B=11... F=15). Cada dígito hexadecimal equivale a 4 bits. Se usa ampliamente para representar direcciones de memoria y colores (ej. #FF0000 = rojo).

### 1.4 Unidades de Medida de la Información
La agrupación lógica básica de bits es el **Byte** u octeto (8 bits). Un Byte puede representar 256 valores diferentes (2^8 = 256), suficiente para codificar un carácter alfanumérico.

| Unidad | Equivalencia exacta (binaria) | Equivalencia aproximada |
|--------|-------------------------------|------------------------|
| **1 Byte (B)** | 8 bits | 1 carácter |
| **1 Kilobyte (KB)** | 1.024 Bytes (2^10) | ≈ 1.000 Bytes |
| **1 Megabyte (MB)** | 1.024 KB (2^20 B) | ≈ 1 millón de Bytes |
| **1 Gigabyte (GB)** | 1.024 MB (2^30 B) | ≈ 1.000 millones de Bytes |
| **1 Terabyte (TB)** | 1.024 GB (2^40 B) | ≈ 1 billón de Bytes |
| **1 Petabyte (PB)** | 1.024 TB (2^50 B) | ≈ 1.000 TB |

**⚠️ Nota**: En transmisión de datos (redes, internet), la velocidad se mide en **bits por segundo** (bps, Kbps, Mbps, Gbps), mientras que el almacenamiento se mide en **Bytes** (KB, MB, GB, TB). Una conexión de "100 Mbps" transmite 100 Mega**bits** por segundo, equivalente a 12,5 Mega**Bytes** por segundo (100 ÷ 8).

### 1.5 Sistemas de Codificación de Caracteres

| Sistema | Bits | Caracteres | Características |
|---------|------|-----------|-----------------|
| **ASCII** (American Standard Code for Information Interchange) | 7 bits (original) | 128 caracteres | Incluye letras inglesas (mayúsculas/minúsculas), números, signos de puntuación y caracteres de control. No incluye eñe ni acentos |
| **ASCII Extendido** | 8 bits | 256 caracteres | Ampliación que incluye caracteres acentuados y símbolos regionales (varias páginas de códigos: Latin-1, etc.) |
| **EBCDIC** (Extended Binary Coded Decimal Interchange Code) | 8 bits | 256 caracteres | Desarrollado por IBM para sus mainframes. Diferente organización que ASCII. En desuso general |
| **UNICODE** | Variable (UTF-8: 1-4 bytes; UTF-16: 2-4 bytes; UTF-32: 4 bytes) | >1.100.000 caracteres posibles | Estándar universal moderno. Incluye prácticamente todos los alfabetos del mundo (latino, cirílico, árabe, chino, japonés, emojis, etc.). **UTF-8** es la codificación dominante en Internet |

---

## 2. Arquitectura de Hardware

### 2.1 La Arquitectura de Von Neumann (1945)
El modelo de referencia de la computación moderna fue propuesto en 1945 por el matemático húngaro-estadounidense **John von Neumann**. Su innovación fundamental fue el concepto del **"programa almacenado"**: tanto los datos como las instrucciones del programa residen en la **misma memoria principal** (compartida), en lugar de estar en dispositivos separados.

**Componentes fundamentales** de la arquitectura de Von Neumann:
1. **Unidad Central de Procesamiento (CPU)**: Ejecuta las instrucciones.
2. **Memoria Principal (RAM/ROM)**: Almacena datos e instrucciones en uso.
3. **Subsistema de Entrada/Salida (E/S)**: Periféricos para comunicar el ordenador con el exterior.
4. **Buses de comunicación**: Canales que interconectan los componentes anteriores.

**Limitación (Cuello de botella de Von Neumann)**: Al compartir datos e instrucciones el mismo bus de memoria, no pueden leerse datos e instrucciones simultáneamente, lo que limita el rendimiento. La **arquitectura Harvard** (usada en microcontroladores) resuelve esto con memorias y buses separados para datos e instrucciones.

### 2.2 La Placa Base (Motherboard / Mainboard)
Es el circuito impreso principal del ordenador, donde se conectan e interconectan todos los componentes hardware. Elementos clave:

| Componente | Función |
|-----------|---------|
| **Socket (zócalo del procesador)** | Conector donde se inserta la CPU. Cada generación de procesador requiere un socket compatible específico (ej. LGA 1700 para Intel 12ª-14ª gen, AM5 para AMD Ryzen 7000) |
| **Zócalos DIMM** | Ranuras para insertar los módulos de memoria RAM (DDR4, DDR5) |
| **Chipset** | Conjunto de circuitos integrados que gestiona la comunicación entre la CPU, la RAM, los dispositivos de almacenamiento y los periféricos. Históricamente dividido en Northbridge (puente norte: CPU-RAM-gráfica, alta velocidad) y Southbridge (puente sur: USB, SATA, audio, red). En arquitecturas modernas, el Northbridge se ha integrado en la propia CPU |
| **BIOS / UEFI** | Firmware almacenado en un chip de memoria no volátil (Flash). Es el primer software que se ejecuta al encender el ordenador. Realiza el **POST** (Power-On Self-Test), inicializa el hardware y carga el sistema operativo. **UEFI** es la evolución moderna de la BIOS, con interfaz gráfica, soporte para discos de más de 2 TB (GPT) y arranque seguro (Secure Boot) |
| **Pila CMOS** | Pequeña batería de litio (CR2032) que mantiene energizado el chip CMOS, conservando la configuración de la BIOS/UEFI (fecha, hora, orden de arranque) cuando el ordenador está apagado |
| **Ranuras de expansión (PCIe)** | Conectores para tarjetas gráficas, de red, de sonido, SSD NVMe, etc. PCIe (Peripheral Component Interconnect Express) ofrece diferentes anchos de banda según el número de líneas (x1, x4, x8, x16) |
| **Conectores SATA** | Para conectar discos duros (HDD) y unidades SSD SATA |
| **Conectores M.2** | Formato compacto para SSD NVMe de alta velocidad |
| **Panel de puertos traseros** | USB, HDMI, DisplayPort, Ethernet (RJ-45), audio, etc. |

### 2.3 La Unidad Central de Proceso (CPU / Microprocesador)
Es el **"cerebro" del ordenador**. Se encarga de interpretar y ejecutar las instrucciones de los programas.

**Componentes internos de la CPU**:

| Componente | Función |
|-----------|---------|
| **Unidad de Control (UC)** | Dirige y coordina todas las operaciones. Interpreta las instrucciones, genera las señales de control adecuadas y secuencia la ejecución. Ciclo básico: **Fetch** (obtener instrucción de memoria) → **Decode** (decodificar qué debe hacer) → **Execute** (ejecutar la operación) |
| **Unidad Aritmético-Lógica (ALU)** | Realiza las operaciones matemáticas (suma, resta, multiplicación, división) y lógicas (AND, OR, NOT, XOR, comparaciones) |
| **Registros** | Pequeñas memorias ultrarrápidas dentro de la propia CPU. Almacenan temporalmente datos, direcciones e instrucciones durante el procesamiento. Son el nivel de almacenamiento más rápido y más pequeño |
| **Memoria Caché** | Memoria SRAM (Static RAM) ultrarrápida integrada en el procesador, que almacena copias de los datos e instrucciones más usados para reducir los tiempos de acceso a la RAM. Se organiza en niveles jerárquicos: **L1** (más rápida, más pequeña, por núcleo), **L2** (intermedia, por núcleo), **L3** (más lenta, más grande, compartida entre núcleos) |

**Medidas de rendimiento de la CPU**:
- **Frecuencia de reloj (GHz)**: Número de ciclos por segundo que ejecuta el procesador. A mayor frecuencia, más operaciones por segundo. Ej: 4.5 GHz = 4.500 millones de ciclos por segundo.
- **Número de núcleos (cores)**: Procesadores modernos tienen múltiples núcleos que pueden ejecutar instrucciones en paralelo (Dual-Core, Quad-Core, Octa-Core, etc.).
- **Hilos de ejecución (threads)**: Tecnologías como Hyper-Threading (Intel) o SMT (AMD) permiten que cada núcleo ejecute 2 hilos simultáneamente, duplicando la capacidad de tareas concurrentes.
- **Litografía (nm)**: Tamaño del proceso de fabricación de los transistores. A menor nanometraje, mayor eficiencia energética y mayor densidad de transistores (ej. 7 nm, 5 nm, 3 nm).
- **IPC (Instructions Per Cycle)**: Instrucciones que puede completar el procesador en cada ciclo de reloj. A mayor IPC, más eficiente es la arquitectura.

### 2.4 Tipologías de Memoria Principal

| Tipo | Volatilidad | Función | Velocidad | Subtipos |
|------|------------|---------|-----------|----------|
| **RAM (Random Access Memory)** | **Volátil** (se borra al apagar) | Memoria de trabajo: almacena los datos y programas en uso activo | Alta (nanosegundos) | DRAM (Dynamic), SDRAM, DDR4, DDR5 |
| **ROM (Read Only Memory)** | **No volátil** (se conserva) | Almacena el firmware (BIOS/UEFI). Solo lectura (o escritura controlada) | Media | ROM, PROM, EPROM, EEPROM, Flash |

**Tipos de RAM**:
- **DRAM (Dynamic RAM)**: Necesita refrescarse eléctricamente miles de veces por segundo para mantener los datos. Es la base de la RAM principal.
- **SRAM (Static RAM)**: No necesita refresco. Más rápida pero más cara y voluminosa. Se usa para la memoria caché de la CPU.
- **DDR (Double Data Rate)**: Generaciones sucesivas de SDRAM que duplican la tasa de transferencia usando ambos flancos de la señal de reloj. Versiones: DDR → DDR2 → DDR3 → DDR4 → **DDR5** (actual, hasta 6400+ MT/s).

**Tipos de ROM**:
- **PROM**: Programable una sola vez.
- **EPROM**: Borrable mediante luz ultravioleta y reprogramable.
- **EEPROM**: Borrable eléctricamente y reprogramable.
- **Flash**: Evolución de EEPROM. Borrable por bloques. Es la tecnología de los SSD, memorias USB, tarjetas SD y del chip de la BIOS/UEFI.

### 2.5 Almacenamiento Secundario Masivo

A diferencia de la RAM (volátil y limitada), el almacenamiento secundario conserva los datos permanentemente y ofrece mayor capacidad.

| Tipo | Tecnología | Ventajas | Desventajas | Capacidades típicas |
|------|-----------|----------|-------------|---------------------|
| **HDD (Hard Disk Drive)** | Magnética. Platos metálicos giratorios con cabezal lector/escritor flotante | Gran capacidad, bajo coste por GB | Lento (mecánico), frágil a golpes (Head Crash), ruido, consumo | 1 TB – 20 TB |
| **SSD (Solid State Drive)** | Flash NAND (electrónica, sin partes móviles) | Velocidad de lectura/escritura enormemente superior, resistente a golpes, silencioso, menor consumo | Mayor coste por GB que HDD | 256 GB – 8 TB |
| **SSD NVMe (M.2 PCIe)** | Flash NAND con interfaz PCIe NVMe | Velocidades extremas (hasta 7.000 MB/s lectura en PCIe 4.0; 14.000+ en PCIe 5.0) | Coste más alto | 256 GB – 4 TB |
| **CD** | Óptica (láser) | Económico | Poca capacidad (700 MB), obsolescencia | 700 MB |
| **DVD** | Óptica (láser) | Material audiovisual estándar | Capacidad limitada | 4,7 GB (SL) / 8,5 GB (DL) |
| **Blu-Ray** | Óptica (láser azul-violeta de menor longitud de onda) | Alta capacidad para vídeo HD/4K | Coste del lector/grabador | 25 GB (SL) / 50 GB (DL) / 128 GB (BDXL) |

**Estructura lógica de un disco HDD**: Los datos se organizan en **pistas** (anillos concéntricos), **sectores** (subdivisiones de las pistas, unidad mínima de lectura/escritura) y **clústeres** (agrupaciones de sectores, unidad mínima de asignación de archivos por el sistema de archivos).

### 2.6 Periféricos (Subsistema de Entrada/Salida)

| Tipo | Función | Ejemplos |
|------|---------|---------|
| **Entrada** | Introducir datos al ordenador | Teclado, ratón, micrófono, escáner, cámara web, lector de huella dactilar, lector de código de barras |
| **Salida** | Obtener información del ordenador | Monitor, impresora, altavoces, auriculares, proyector |
| **Entrada/Salida (mixtos)** | Ambas funciones | Pantalla táctil, módem, tarjeta de red, discos externos, impresora multifunción |

---

## 3. Software: Tipificación y Licencias

### 3.1 Definición
El **software** es el conjunto de programas, instrucciones y datos que permiten al hardware realizar tareas específicas. Sin software, el hardware es inerte.

### 3.2 Clasificación del software

| Categoría | Función | Ejemplos |
|-----------|---------|---------|
| **Software de Sistema (S.O.)** | Gestiona los recursos del hardware, proporciona una interfaz al usuario y sirve de plataforma para el software de aplicación | Windows (Microsoft), macOS (Apple), GNU/Linux (código abierto), Android (Google), iOS (Apple) |
| **Software de Aplicación** | Programas diseñados para que el usuario realice tareas concretas | Suite ofimática (Word, Excel, Access, PowerPoint), navegadores web (Chrome, Firefox, Edge), gestores de correo, software de diseño, antivirus |
| **Software de Programación** | Herramientas para crear otros programas (software) | Compiladores, intérpretes, editores de código (Visual Studio Code), depuradores (debuggers) |
| **Firmware** | Software embebido permanentemente en el hardware (BIOS/UEFI, software de routers, impresoras, etc.) | BIOS/UEFI, firmware de router, firmware de SSD |

### 3.3 El Sistema Operativo (S.O.)
Es el software fundamental que actúa como intermediario entre el usuario/aplicaciones y el hardware. Sus funciones principales son:
- **Gestión del procesador**: Asignar tiempo de CPU a los diferentes procesos (multitarea).
- **Gestión de memoria**: Asignar y liberar memoria RAM para los programas.
- **Gestión de archivos**: Organizar los datos en el almacenamiento (sistema de archivos: NTFS, FAT32, ext4, APFS).
- **Gestión de periféricos**: Controladores (drivers) para comunicarse con el hardware.
- **Interfaz de usuario**: Gráfica (GUI: ventanas, iconos, menús) o línea de comandos (CLI: terminal, PowerShell, Bash).
- **Seguridad**: Control de accesos, cuentas de usuario, permisos, actualizaciones.

### 3.4 Tipos de Licencia de Software

| Tipo de licencia | Descripción | Ejemplo |
|-----------------|-------------|---------|
| **Software Libre (Free Software)** | Respeta las **4 libertades**: 0) Ejecutar, 1) Estudiar el código fuente y modificarlo, 2) Redistribuir copias, 3) Distribuir copias modificadas. No significa necesariamente gratuito ("free" = libre, no gratis). Licencia GPL (GNU General Public License) | GNU/Linux, LibreOffice, Firefox, GIMP |
| **Software de Código Abierto (Open Source)** | El código fuente está disponible públicamente. Similar al software libre, pero con matices filosóficos/prácticos. Licencias: MIT, Apache, BSD | Apache, Chromium, VS Code |
| **Freeware** | Gratuito, pero el código fuente NO está disponible. El propietario conserva todos los derechos | Skype, Adobe Acrobat Reader, WinRAR (parcialmente) |
| **Shareware** | Se distribuye gratuitamente a modo de prueba/demo, con funcionalidad limitada o por tiempo limitado. Para uso completo se requiere pago | WinZip, algunos antivirus en versión trial |
| **Software Propietario (Privativo)** | El usuario adquiere una licencia de uso, pero NO puede modificar ni redistribuir el software. El código fuente es secreto | Microsoft Windows, Microsoft Office, Adobe Photoshop |
| **SaaS (Software as a Service)** | El software no se instala localmente, se accede por Internet mediante suscripción | Microsoft 365, Google Workspace, Dropbox, Salesforce |

---

## 4. Redes de Comunicación

### 4.1 Clasificación por alcance geográfico

| Tipo | Nombre | Alcance | Ejemplo |
|------|--------|---------|---------|
| **PAN** | Personal Area Network | Metros (entorno personal) | Bluetooth entre móvil y auriculares |
| **LAN** | Local Area Network | Edificio o campus | Red de una oficina, comisaría o academia |
| **MAN** | Metropolitan Area Network | Ciudad o área metropolitana | Red de conexión entre sedes de un ayuntamiento |
| **WAN** | Wide Area Network | País, continente o mundial | Internet, la red SIRDEE de la Guardia Civil |

### 4.2 Topologías de red

| Topología | Descripción | Ventajas | Desventajas |
|-----------|-------------|----------|-------------|
| **Bus** | Todos los dispositivos conectados a un único cable central | Sencilla, económica | Si el cable central falla, cae toda la red |
| **Estrella** | Todos los dispositivos conectados a un nodo central (switch/hub) | Si un cable falla, solo cae ese dispositivo. Fácil de ampliar | Si el nodo central falla, cae toda la red |
| **Anillo** | Los dispositivos forman un circuito cerrado | Rendimiento predecible | Difícil diagnóstico de fallos; si un nodo falla sin redundancia, cae la red |
| **Malla** | Cada dispositivo tiene conexión directa con varios o todos los demás | Máxima redundancia y tolerancia a fallos | Costosa, compleja |

### 4.3 Modelo OSI y TCP/IP

El **Modelo OSI** (Open Systems Interconnection) define 7 capas teóricas de comunicación. El modelo **TCP/IP** (usado en Internet) lo simplifica a 4 capas prácticas:

| Capa OSI | Nombre | Función | Protocolo TCP/IP equivalente |
|----------|--------|---------|----------------------------|
| 7 | Aplicación | Interacción con el usuario final | Aplicación (HTTP, HTTPS, FTP, SMTP, DNS, DHCP) |
| 6 | Presentación | Formato de datos, cifrado, compresión | (incluida en Aplicación) |
| 5 | Sesión | Gestión de conexiones entre aplicaciones | (incluida en Aplicación) |
| 4 | **Transporte** | Entrega fiable de datos extremo a extremo | Transporte (**TCP**, UDP) |
| 3 | **Red** | Enrutamiento de paquetes entre redes distintas | Internet (**IP**, ICMP, ARP) |
| 2 | Enlace de datos | Transmisión fiable en un enlace físico directo | Acceso a Red (Ethernet, WiFi) |
| 1 | Física | Señales eléctricas, ópticas o inalámbricas | Acceso a Red (cables, conectores, ondas) |

### 4.4 Protocolos fundamentales

| Protocolo | Función |
|-----------|---------|
| **HTTP/HTTPS** | Transferencia de páginas web. HTTPS añade cifrado SSL/TLS |
| **FTP/SFTP** | Transferencia de archivos. SFTP añade cifrado |
| **SMTP** | Envío de correo electrónico |
| **POP3/IMAP** | Recepción de correo electrónico. IMAP sincroniza desde el servidor; POP3 descarga y borra del servidor |
| **DNS** | Traducción de nombres de dominio (munilex.es) a direcciones IP (93.184.216.34) |
| **DHCP** | Asignación automática de direcciones IP a los dispositivos de una red |
| **TCP** | Protocolo de transporte fiable con control de errores (retransmite paquetes perdidos) |
| **UDP** | Protocolo de transporte rápido sin control de errores (usado en streaming, videollamadas) |
| **IP** | Protocolo de red que asigna direcciones lógicas (IPv4: 32 bits, ej. 192.168.1.1; IPv6: 128 bits) y encamina paquetes |

### 4.5 Direcciones IP
- **IPv4**: 32 bits, formato decimal con puntos: *192.168.1.100*. Aproximadamente 4.300 millones de direcciones posibles (insuficientes para la cantidad actual de dispositivos).
- **IPv6**: 128 bits, formato hexadecimal con dos puntos: *2001:0db8:85a3:0000:0000:8a2e:0370:7334*. Prácticamente ilimitadas (3,4 × 10^38 direcciones).
- **IP Pública**: Dirección visible en Internet, asignada por el proveedor (ISP).
- **IP Privada**: Dirección interna de una red local (LAN), no accesible directamente desde Internet. Rangos privados: 10.x.x.x, 172.16.x.x-172.31.x.x, 192.168.x.x.

---

## 5. Seguridad Informática

### 5.1 Dimensiones de la seguridad
Las tres dimensiones fundamentales de la seguridad de la información (Triada CIA):
- **Confidencialidad**: Solo usuarios autorizados acceden a la información.
- **Integridad**: Los datos no se alteran sin autorización.
- **Disponibilidad**: Los servicios están accesibles cuando se necesitan.

### 5.2 Amenazas principales

| Amenaza | Descripción |
|---------|-------------|
| **Virus** | Se adjunta a programas legítimos. Requiere acción del usuario para propagarse |
| **Gusano (Worm)** | Se propaga de forma autónoma por la red, sin intervención del usuario |
| **Troyano** | Se camufla en software legítimo e instala puertas traseras (backdoors) |
| **Ransomware** | Cifra masivamente los archivos del disco (AES-256/RSA) y exige un rescate en criptomonedas (BTC, Monero). **Amenaza nº 1 del sector público** |
| **Spyware** | Espía la actividad del usuario (contraseñas, historial, capturas) |
| **Keylogger** | Registra todas las pulsaciones de teclado |
| **Phishing** | Suplantación de identidad (banco, policía, Hacienda) para robar credenciales |
| **DDoS** | Saturación masiva de un servidor desde miles de orígenes (botnet) |
| **MITM** | Intercepción de comunicación entre dos partes legítimas |

### 5.3 Mecanismos de defensa

| Mecanismo | Función |
|-----------|---------|
| **Antivirus/Antimalware** | Detecta y elimina software malicioso |
| **Firewall (Cortafuegos)** | Filtra tráfico de red (IPs, puertos, protocolos). Puede ser hardware o software |
| **SAI / UPS** | Baterías ante cortes y picos eléctricos. Permite apagado ordenado de servidores |
| **VPN** | Túnel cifrado sobre Internet para comunicaciones seguras |
| **Cifrado (Criptografía)** | Simétrica (AES: una clave compartida) / Asimétrica (RSA: clave pública + privada) |
| **Firma Electrónica** | Regulada por Ley 6/2020. Basada en criptografía asimétrica (PKI). Garantiza autenticidad, integridad y no repudio |
| **Certificado Digital** | Documento electrónico emitido por una CA (FNMT en España) que vincula una clave pública a una identidad |
| **MFA / 2FA** | Autenticación multifactor: contraseña + SMS/OTP/biometría |
| **Copias de seguridad 3-2-1** | 3 copias, 2 soportes distintos, 1 fuera del edificio (off-site) |

### 5.4 Marco legal

| Norma | Contenido |
|-------|-----------|
| **RGPD (Reglamento UE 2016/679)** | Protección de datos personales en la UE |
| **LOPDGDD (LO 3/2018)** | Adaptación del RGPD al ordenamiento español |
| **ENS (RD 311/2022)** | Esquema Nacional de Seguridad para el sector público |
| **Ley 6/2020** | Servicios electrónicos de confianza (firma electrónica y certificados) |
