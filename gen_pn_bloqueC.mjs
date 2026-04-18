import fs from 'fs';
import path from 'path';
import { mdToPdf } from 'md-to-pdf';

const TARGET_DIR = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/POLICIA NACIONAL ESCALA BASICA';

const tema38 = `# TEMA 38. FUNDAMENTOS DE SISTEMAS OPERATIVOS. FUNCIONES DE UN SISTEMA OPERATIVO. TIPOLOGÍAS. SISTEMAS OPERATIVOS MÓVILES. SISTEMAS DE ALMACENAMIENTO Y SISTEMAS DE ARCHIVOS

---

## 1. CONCEPTO DE SISTEMA OPERATIVO

Un sistema operativo (SO) es el software fundamental que gestiona los recursos de hardware y software de un ordenador, actuando como intermediario entre el usuario y la máquina. Sin él, el hardware sería inutilizable. El SO permite que las aplicaciones (procesadores de texto, navegadores, bases de datos) funcionen sin necesidad de conocer los detalles del hardware subyacente.

### 1.1 Funciones principales

- **Gestión del procesador (CPU)**: Asigna tiempo de procesamiento a los distintos programas en ejecución (planificación de procesos). En sistemas multitarea, el SO conmuta rápidamente entre procesos dando la apariencia de ejecución simultánea.
- **Gestión de la memoria**: Controla qué partes de la memoria RAM están en uso y cuáles libres, asigna memoria a los procesos y la libera cuando terminan. Implementa la memoria virtual (uso del disco como extensión de la RAM).
- **Gestión del sistema de archivos**: Organiza los datos en el disco en una estructura jerárquica de directorios y archivos. Controla los permisos de acceso (lectura, escritura, ejecución).
- **Gestión de entrada/salida (E/S)**: Controla la comunicación con los periféricos (teclado, ratón, impresora, disco) a través de controladores (drivers).
- **Gestión de la seguridad**: Autenticación de usuarios, control de acceso, cifrado, registro de actividad (logs).
- **Interfaz de usuario**: Proporciona el medio de interacción: línea de comandos (CLI) o interfaz gráfica (GUI).

## 2. EVOLUCIÓN Y TIPOLOGÍAS

### 2.1 MS-DOS (Microsoft Disk Operating System)

Sistema operativo de Microsoft (1981) diseñado para los primeros PC IBM. Características: monotarea, monousuario, interfaz de línea de comandos (CLI), sistema de archivos FAT. Aunque obsoleto, sus comandos básicos perviven en el Símbolo del Sistema (CMD) de Windows.

### 2.2 UNIX

Creado en 1969 en los laboratorios Bell de AT&T por Ken Thompson y Dennis Ritchie. Características fundamentales: multitarea, multiusuario, portable (escrito en lenguaje C), modular, con sistema de permisos robusto. Su filosofía (pequeños programas que hacen una cosa bien y se combinan mediante tuberías) ha influido en toda la informática posterior. Variantes comerciales: Solaris (Oracle), AIX (IBM), HP-UX.

### 2.3 Linux

Creado en 1991 por Linus Torvalds como un kernel libre inspirado en UNIX. Combinado con las herramientas GNU de Richard Stallman, forma el sistema GNU/Linux. Es software libre (licencia GPL), gratuito y de código abierto. Distribuciones principales: Ubuntu, Debian, Red Hat/CentOS, Fedora, SUSE, Kali Linux (orientada a seguridad informática y auditoría, utilizada por fuerzas policiales y equipos de ciberseguridad).

Linux domina el mercado de servidores, supercomputadores, dispositivos IoT y es la base de Android.

### 2.4 Windows

Familia de sistemas operativos de Microsoft. Evolución: Windows 3.1 (1992, entorno gráfico sobre MS-DOS), Windows 95 (primer SO autónomo con GUI integrada), Windows XP (2001, estabilidad y éxito masivo), Windows 7, Windows 10 (2015, modelo de servicio con actualizaciones continuas), Windows 11 (2021, interfaz renovada, requisito de TPM 2.0 y Secure Boot).

Características relevantes para oposiciones: sistema de archivos NTFS, Active Directory (gestión de redes corporativas), Windows Defender (seguridad integrada), BitLocker (cifrado de disco), registro del sistema, Administrador de Tareas.

### 2.5 macOS

Sistema operativo de Apple para sus ordenadores. Basado en un kernel derivado de UNIX (Darwin/XNU). Sistema de archivos APFS. Conocido por su estabilidad, seguridad y diseño de interfaz. De uso minoritario frente a Windows, pero relevante en entornos creativos y académicos.

## 3. SISTEMAS OPERATIVOS MÓVILES

### 3.1 Android

Desarrollado inicialmente por Android Inc. (2003) y adquirido por Google en 2005. Basado en el kernel de Linux. Es el SO móvil más utilizado del mundo (cuota de mercado superior al 70% a nivel global). Características: código abierto (AOSP), tienda de aplicaciones Google Play, alta personalización, fragmentación de versiones.

### 3.2 iOS

Sistema operativo de Apple para iPhone e iPad. Derivado de macOS. Características: ecosistema cerrado y controlado, tienda de aplicaciones App Store con revisión previa, alto nivel de seguridad y privacidad, actualizaciones prolongadas. Cuota de mercado aproximada del 27%.

### 3.3 Consideraciones de seguridad para las FCSE

Los dispositivos móviles son herramientas de trabajo policial (comunicaciones, bases de datos, aplicaciones de geolocalización) y, al mismo tiempo, fuentes de evidencia digital en investigaciones criminales. El conocimiento del sistema operativo móvil es esencial para la extracción forense de datos (mensajes, ubicaciones, registros de llamadas, aplicaciones de mensajería cifrada).

## 4. SISTEMAS DE ALMACENAMIENTO

- **Almacenamiento local**: Discos duros (HDD), discos de estado sólido (SSD), memorias USB, tarjetas SD.
- **NAS (Network Attached Storage)**: Dispositivo de almacenamiento conectado a la red local, accesible por múltiples usuarios.
- **SAN (Storage Area Network)**: Red de almacenamiento de alta velocidad dedicada exclusivamente al tráfico de datos entre servidores y dispositivos de almacenamiento. Uso en centros de datos corporativos y gubernamentales.
- **Almacenamiento en la nube (Cloud Storage)**: Servicios de almacenamiento remoto: Google Drive, Microsoft OneDrive, Dropbox, Amazon S3. Ventajas: accesibilidad, redundancia, escalabilidad. Riesgos: dependencia de la conexión, jurisdicción de los datos, privacidad.

## 5. SISTEMAS DE ARCHIVOS

Un sistema de archivos define cómo se organizan, almacenan y recuperan los datos en un dispositivo de almacenamiento.

- **FAT32 (File Allocation Table)**: Sistema antiguo, compatible con prácticamente todos los SO. Limitación: tamaño máximo de archivo de 4 GB. Usado en memorias USB y tarjetas SD.
- **NTFS (New Technology File System)**: Sistema nativo de Windows. Soporta archivos de gran tamaño, permisos de acceso, cifrado (EFS), compresión, journaling (registro de transacciones para integridad), cuotas de disco.
- **ext4 (Extended File System 4)**: Sistema nativo de Linux. Journaling, soporte para grandes volúmenes, fragmentación mínima.
- **APFS (Apple File System)**: Sistema nativo de macOS e iOS desde 2017. Optimizado para almacenamiento flash (SSD), cifrado nativo, snapshots.
- **exFAT**: Supera las limitaciones de FAT32 sin la complejidad de NTFS. Ideal para unidades externas que deben funcionar en Windows y macOS.
`;

const tema39 = `# TEMA 39. REDES INFORMÁTICAS. MODELO OSI. MODELO TCP/IP. DISPOSITIVOS DE RED. DIRECCIONAMIENTO IP. PROTOCOLOS FUNDAMENTALES

---

## 1. CONCEPTO DE RED INFORMÁTICA

Una red informática es un conjunto de equipos (ordenadores, servidores, impresoras, dispositivos móviles) conectados entre sí mediante medios de transmisión (cables, ondas electromagnéticas) con el fin de compartir información, recursos y servicios.

### 1.1 Clasificación por alcance geográfico

- **PAN (Personal Area Network)**: Red personal de corto alcance (Bluetooth, NFC). Alcance: metros.
- **LAN (Local Area Network)**: Red de área local (oficina, edificio, comisaría). Alcance: hasta centenares de metros.
- **MAN (Metropolitan Area Network)**: Red de área metropolitana (campus universitario, ayuntamiento). Alcance: ciudad.
- **WAN (Wide Area Network)**: Red de área amplia (interconexión de sedes policiales a nivel nacional). Alcance: país o continente. Internet es la WAN global.

### 1.2 Topologías de red

- **Bus**: Todos los dispositivos conectados a un cable central. Si el cable falla, toda la red cae. Obsoleta.
- **Estrella**: Todos los dispositivos conectados a un nodo central (switch o hub). Si un cable falla, solo cae ese dispositivo. Es la topología más utilizada en LANs actuales.
- **Anillo**: Cada dispositivo se conecta al siguiente formando un circuito cerrado. Usada en redes Token Ring (obsoleta) y fibra óptica metropolitana.
- **Malla**: Cada dispositivo puede conectarse con varios o todos los demás. Alta redundancia y fiabilidad. Usada en redes militares y de emergencia.

## 2. MODELO OSI (Open Systems Interconnection)

Modelo de referencia desarrollado por la ISO (International Organization for Standardization) en 1984 que divide la comunicación de red en **7 capas** abstractas:

| Capa | Nombre | Función | Ejemplo |
|------|--------|---------|---------|
| 7 | Aplicación | Interfaz con el usuario y las aplicaciones | HTTP, FTP, SMTP, DNS |
| 6 | Presentación | Formato de datos, cifrado, compresión | SSL/TLS, JPEG, ASCII |
| 5 | Sesión | Gestión de sesiones de comunicación | NetBIOS, RPC |
| 4 | Transporte | Entrega fiable de datos extremo a extremo | TCP, UDP |
| 3 | Red | Encaminamiento de paquetes entre redes | IP, ICMP, ARP |
| 2 | Enlace de datos | Transmisión fiable en el medio físico | Ethernet, WiFi (802.11) |
| 1 | Física | Transmisión de bits por el medio | Cables, conectores, señales |

## 3. MODELO TCP/IP

Modelo práctico que sustenta Internet. Desarrollado por el Departamento de Defensa de EE.UU. (DARPA) en los años 1970. Tiene **4 capas**:

| Capa TCP/IP | Equivalente OSI | Protocolos |
|-------------|-----------------|------------|
| Aplicación | 5, 6, 7 | HTTP, FTP, SMTP, DNS, SSH, Telnet |
| Transporte | 4 | TCP (fiable, orientado a conexión), UDP (rápido, sin conexión) |
| Internet | 3 | IP, ICMP, ARP, IGMP |
| Acceso a red | 1, 2 | Ethernet, WiFi, PPP |

## 4. DISPOSITIVOS DE RED

- **Hub (Concentrador)**: Dispositivo de capa 1 que retransmite la señal a todos los puertos. No filtra tráfico. Obsoleto, sustituido por switches.
- **Switch (Conmutador)**: Dispositivo de capa 2 que reenvía las tramas solo al puerto de destino (usa direcciones MAC). Mejora el rendimiento y la seguridad.
- **Router (Encaminador)**: Dispositivo de capa 3 que interconecta redes distintas y encamina los paquetes IP por la ruta óptima. Es el dispositivo que conecta la LAN con Internet.
- **Firewall (Cortafuegos)**: Dispositivo o software que filtra el tráfico de red según reglas de seguridad predefinidas. Puede ser:
  - De filtrado de paquetes (capa 3-4).
  - De inspección de estado (stateful).
  - De aplicación (capa 7, proxy).
  - Next-Generation Firewall (NGFW): incluye inspección profunda, IPS, antivirus.
- **Servidor DHCP**: Asigna automáticamente direcciones IP a los dispositivos de la red.
- **Servidor DNS (Domain Name System)**: Traduce nombres de dominio (www.policia.es) en direcciones IP numéricas.
- **Servidor Proxy**: Actúa como intermediario entre el usuario e Internet. Funciones: caché, filtrado de contenido, anonimización, control de acceso.
- **Punto de acceso inalámbrico (WAP)**: Permite la conexión WiFi a la red cableada.

## 5. DIRECCIONAMIENTO IP

### 5.1 IPv4

Dirección de 32 bits expresada en 4 octetos decimales separados por puntos (ejemplo: 192.168.1.100). Permite 2³² = 4.294.967.296 direcciones (insuficientes para la demanda actual).

**Clases de redes IPv4:**
- **Clase A**: 1.0.0.0 a 127.255.255.255. Redes muy grandes (16 millones de hosts).
- **Clase B**: 128.0.0.0 a 191.255.255.255. Redes medianas (65.536 hosts).
- **Clase C**: 192.0.0.0 a 223.255.255.255. Redes pequeñas (254 hosts).
- **Clase D**: 224.0.0.0 a 239.255.255.255. Multicast.
- **Clase E**: 240.0.0.0 a 255.255.255.255. Reservada/experimental.

**Direcciones privadas** (no enrutables en Internet): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.

**NAT (Network Address Translation)**: Permite que múltiples dispositivos de una red privada compartan una única dirección IP pública.

### 5.2 IPv6

Dirección de 128 bits expresada en 8 grupos de 4 dígitos hexadecimales separados por dos puntos (ejemplo: 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Permite 2¹²⁸ ≈ 3,4 × 10³⁸ direcciones (prácticamente ilimitadas). Incorpora mejoras en seguridad (IPsec nativo), autoconfiguración y eficiencia del encaminamiento.

## 6. PROTOCOLOS FUNDAMENTALES

- **HTTP/HTTPS**: Protocolo de transferencia de hipertexto. Base de la World Wide Web. HTTPS añade cifrado SSL/TLS.
- **FTP**: Transferencia de archivos entre cliente y servidor. SFTP y FTPS son variantes seguras.
- **SMTP**: Envío de correo electrónico.
- **POP3/IMAP**: Recepción de correo electrónico. POP3 descarga y elimina del servidor; IMAP sincroniza.
- **DNS**: Resolución de nombres de dominio a direcciones IP.
- **SSH**: Acceso remoto seguro a servidores (cifrado).
- **TELNET**: Acceso remoto sin cifrado (obsoleto e inseguro).
- **TCP**: Protocolo de transporte fiable, orientado a conexión (handshake de tres vías).
- **UDP**: Protocolo de transporte rápido, sin conexión, sin garantía de entrega. Usado en streaming, VoIP, juegos online.

## 7. REDES INALÁMBRICAS

### 7.1 WiFi (IEEE 802.11)

Familia de estándares para redes inalámbricas de área local. Evolución:
- 802.11b (1999): 11 Mbps, 2.4 GHz.
- 802.11g (2003): 54 Mbps, 2.4 GHz.
- 802.11n / WiFi 4 (2009): 600 Mbps, 2.4/5 GHz.
- 802.11ac / WiFi 5 (2013): 6.9 Gbps teóricos, 5 GHz.
- 802.11ax / WiFi 6 (2020): Mayor eficiencia en entornos densos.
- WiFi 7 (2024): Velocidades superiores a 40 Gbps teóricos.

**Seguridad WiFi**: WEP (obsoleto, vulnerable), WPA (mejorado), WPA2 (estándar actual, cifrado AES), WPA3 (2018, mayor protección).

### 7.2 Bluetooth

Protocolo de comunicación inalámbrica de corto alcance (hasta 100m en BT 5.0). Usado para auriculares, transferencia de archivos, dispositivos IoT. Versión actual: Bluetooth 5.4.
`;

const tema40 = `# TEMA 40. INTELIGENCIA. DATOS, INFORMACIÓN E INTELIGENCIA. TIPOLOGÍAS DE INTELIGENCIA. CICLO DE INTELIGENCIA. INTELIGENCIA DE FUENTES ABIERTAS (OSINT). SURFACE WEB, DEEP WEB, DARK WEB Y DARK NET

---

## 1. CONCEPTOS BÁSICOS: DATO, INFORMACIÓN E INTELIGENCIA

### 1.1 Pirámide del conocimiento

- **Dato**: Elemento aislado, sin contexto ni interpretación. Es la materia prima. Ejemplo: «23.4°C», «Madrid», «14:30h».
- **Información**: Dato procesado, contextualizado y con significado. Se obtiene al organizar y relacionar datos. Ejemplo: «La temperatura en Madrid a las 14:30 era de 23.4°C».
- **Conocimiento**: Información asimilada, interpretada y comprensible que permite tomar decisiones. Ejemplo: «Las temperaturas primaverales en Madrid favorecen las concentraciones masivas al aire libre».
- **Inteligencia**: Conocimiento específico, elaborado a partir de la recogida, evaluación, análisis e interpretación de información relevante para la toma de decisiones en materia de seguridad. La inteligencia responde a una necesidad previamente definida y está orientada a la acción.

### 1.2 Diferencia entre información e inteligencia

La información es descriptiva (¿qué ha pasado?), mientras que la inteligencia es predictiva y prescriptiva (¿qué puede pasar? ¿qué debemos hacer?). La inteligencia añade valor a la información mediante el análisis, la evaluación de fiabilidad de las fuentes y la integración de datos procedentes de múltiples canales.

## 2. TIPOLOGÍAS DE INTELIGENCIA

### 2.1 Según el nivel de decisión

- **Inteligencia estratégica**: Orientada a la toma de decisiones a largo plazo por parte de los niveles superiores (Gobierno, dirección general). Analiza amenazas globales, tendencias y escenarios futuros.
- **Inteligencia táctica**: Orientada a operaciones concretas a medio plazo. Ejemplo: planificación de un dispositivo de seguridad para un evento de alto riesgo.
- **Inteligencia operativa**: Orientada a la acción inmediata en intervenciones policiales concretas. Ejemplo: información sobre la ubicación de un sospechoso para proceder a su detención.

### 2.2 Según el origen de la información (disciplinas INT)

- **HUMINT (Human Intelligence)**: Información obtenida de fuentes humanas: confidentes, informadores, entrevistas, interrogatorios.
- **SIGINT (Signals Intelligence)**: Información obtenida de la interceptación de señales de comunicación (COMINT) o electrónicas (ELINT).
- **IMINT (Imagery Intelligence)**: Información obtenida de imágenes: satélites, drones, fotografía aérea.
- **OSINT (Open Source Intelligence)**: Información obtenida de fuentes abiertas y públicamente accesibles.
- **SOCMINT (Social Media Intelligence)**: Subcategoría de OSINT centrada en redes sociales.
- **FININT (Financial Intelligence)**: Información financiera para la detección de blanqueo de capitales y financiación del terrorismo.
- **GEOINT (Geospatial Intelligence)**: Inteligencia geoespacial basada en sistemas de información geográfica (SIG/GIS).

## 3. EL CICLO DE INTELIGENCIA

El Ciclo de Inteligencia es el proceso sistemático mediante el cual se transforma la información bruta en inteligencia útil para la toma de decisiones. Consta de cuatro fases:

### 3.1 Dirección (planificación y necesidades)

Los decisores (juez, fiscal, jefe de unidad policial) definen las necesidades de inteligencia: ¿qué necesitamos saber? Se formulan los requerimientos y se asignan los recursos.

### 3.2 Obtención (recogida)

Se recoge información mediante las disciplinas INT adecuadas (HUMINT, OSINT, SIGINT, etc.). Es la fase más voluminosa y costosa.

### 3.3 Elaboración (procesamiento y análisis)

La información bruta se valora (¿es fiable la fuente? ¿es veraz el dato?), se integra con otras fuentes, se analiza y se interpreta para producir inteligencia. Técnicas: análisis de vínculos, análisis de patrones, análisis de redes sociales (SNA), análisis prospectivo, matrices de evaluación de amenazas.

### 3.4 Difusión

La inteligencia elaborada se distribuye a los usuarios finales en el formato y momento adecuados (informes, alertas, briefings). La clasificación de seguridad determina quién puede acceder al producto.

### 3.5 Retroalimentación

Los usuarios evalúan la utilidad de la inteligencia recibida y formulan nuevos requerimientos, reiniciando el ciclo.

## 4. INTELIGENCIA DE FUENTES ABIERTAS (OSINT)

### 4.1 Concepto

La OSINT es la inteligencia elaborada a partir de información disponible públicamente, es decir, accesible sin necesidad de medios encubiertos ni autorización judicial. Fuentes: prensa, televisión, radio, publicaciones académicas, registros públicos, patentes, informes gubernamentales, redes sociales, foros, blogs, páginas web.

### 4.2 Ventajas e inconvenientes

**Ventajas**: Bajo coste, accesibilidad inmediata, legalidad plena, gran volumen de información disponible, complementa otras disciplinas INT.
**Inconvenientes**: Exceso de información (infoxicación), dificultad de verificación, desinformación deliberada, sesgo de selección.

### 4.3 Herramientas OSINT

- Motores de búsqueda: Google (operadores avanzados: *dorks*), Bing, DuckDuckGo.
- Redes sociales: análisis de perfiles públicos en Twitter/X, Facebook, Instagram, LinkedIn, Telegram.
- Buscadores de personas: Pipl, Spokeo, Have I Been Pwned.
- Buscadores de dominios e IPs: Shodan (dispositivos IoT), Censys, WHOIS.
- Geolocalización: Google Maps, Google Earth, GeoGuessr, Sentinel Hub.
- Metadatos: ExifTool (extracción de metadatos de imágenes y documentos).
- Archivos web: Wayback Machine (Internet Archive).
- Herramientas integradas: Maltego (análisis de vínculos), SpiderFoot, Recon-ng.

## 5. ESTRUCTURA DE LA RED: SURFACE WEB, DEEP WEB, DARK WEB Y DARK NET

### 5.1 Surface Web (Web Superficial)

Es la parte de Internet indexada por los motores de búsqueda convencionales (Google, Bing). Representa aproximadamente el 4-5% del contenido total de Internet. Incluye: páginas web públicas, blogs, noticias, redes sociales abiertas, tiendas online.

### 5.2 Deep Web (Web Profunda)

Es la parte de Internet que no está indexada por los motores de búsqueda, pero que es accesible con las credenciales o herramientas adecuadas. Representa la inmensa mayoría del contenido de Internet (aprox. 90-95%). Incluye: bases de datos académicas, historiales médicos, cuentas de correo electrónico, intranets corporativas, contenido detrás de paywalls, archivos gubernamentales restringidos.

### 5.3 Dark Web

Es una pequeña porción de la Deep Web accesible únicamente mediante software especializado que garantiza el anonimato. Los contenidos no están indexados y sus servidores ocultan su dirección IP. Una gran parte del contenido de la Dark Web es ilícito: mercados de drogas, armas, datos robados, material de explotación sexual infantil, servicios de hacking.

### 5.4 Dark Net (Red Oscura)

Son las redes superpuestas (overlay networks) que proporcionan la infraestructura técnica para acceder a la Dark Web. La más conocida es:
- **TOR (The Onion Router)**: Red de anonimización que cifra el tráfico en múltiples capas y lo reenvía a través de una serie de nodos voluntarios. Los sitios web en TOR usan dominios .onion.
- **I2P (Invisible Internet Project)**: Red alternativa de anonimato.
- **Freenet**: Red descentralizada de almacenamiento y distribución de información.

### 5.5 Criptomonedas

Las criptomonedas (Bitcoin, Monero, Ethereum) son el medio de pago predominante en la Dark Web. Monero es especialmente valorada por los cibercriminales por su mayor nivel de privacidad respecto a Bitcoin.

### 5.6 Relevancia policial

Las FCSE cuentan con unidades especializadas en ciberpatrullaje y monitorización de la Dark Web para la detección de actividades ilícitas: la Unidad Central de Ciberdelincuencia (UCC) del CNP y el Grupo de Delitos Telemáticos de la Guardia Civil.
`;

const tema41 = `# TEMA 41. CIBERDELINCUENCIA Y AGENTES DE LA AMENAZA. PRINCIPALES ATAQUES. INGENIERÍA SOCIAL. MALWARE. AGENTES DE LA AMENAZA. CYBER KILL CHAIN. MARCO JURÍDICO

---

## 1. CONCEPTO DE CIBERDELINCUENCIA

La ciberdelincuencia comprende toda actividad delictiva que utiliza las tecnologías de la información y la comunicación (TIC) como medio, objetivo o instrumento para la comisión de ilícitos penales. Incluye tanto los delitos informáticos puros (aquellos cuyo objeto son los propios sistemas informáticos) como los delitos tradicionales facilitados por las TIC (estafas, amenazas, distribución de pornografía infantil).

## 2. PRINCIPALES TIPOS DE ATAQUES

### 2.1 Malware (software malicioso)

- **Virus**: Programa que se inserta en otros archivos legítimos y se ejecuta cuando el archivo anfitrión es abierto. Se propaga por acción del usuario.
- **Gusano (Worm)**: Se autorreplica y propaga por la red sin intervención humana. Puede saturar el ancho de banda.
- **Troyano**: Se disfraza de software legítimo. Una vez instalado, abre una puerta trasera (backdoor) que permite al atacante acceder al sistema remotamente.
- **Ransomware**: Cifra los archivos de la víctima y exige un rescate (generalmente en criptomonedas) para proporcionar la clave de descifrado. Ejemplos: WannaCry (2017), NotPetya, Ryuk, LockBit.
- **Spyware**: Recopila información del usuario (contraseñas, historial, pulsaciones de teclado — keylogger) sin su conocimiento.
- **Adware**: Muestra publicidad no deseada, a menudo como pretexto para instalar otros malware.
- **Rootkit**: Se oculta en el sistema operativo a nivel profundo, dificultando su detección por antivirus convencionales.

### 2.2 Ingeniería social

Técnica de manipulación psicológica para engañar a las personas y obtener información confidencial o acceso a sistemas:
- **Phishing**: Suplantación de identidad mediante correos electrónicos fraudulentos que imitan a entidades legítimas (bancos, administraciones) para capturar credenciales.
- **Spear phishing**: Phishing dirigido a una persona o empresa concreta, con contenido personalizado.
- **Vishing**: Phishing por vía telefónica (voice phishing).
- **Smishing**: Phishing por SMS.
- **Pharming**: Manipulación del sistema DNS para redirigir al usuario a una web falsa sin que este lo perciba.
- **Spoofing**: Suplantación de la identidad de un remitente (IP spoofing, email spoofing, caller ID spoofing).
- **Baiting**: Dejar dispositivos USB infectados en lugares donde serán encontrados y conectados por la víctima.

### 2.3 Ataques técnicos

- **DDoS (Distributed Denial of Service)**: Saturación de un servidor con millones de peticiones simultáneas procedentes de una red de dispositivos infectados (botnet), impidiendo que los usuarios legítimos accedan al servicio.
- **Inyección SQL**: Inserción de código malicioso en formularios web para manipular la base de datos subyacente (robo de datos, eliminación de registros).
- **XSS (Cross-Site Scripting)**: Inyección de scripts maliciosos en páginas web legítimas para robar cookies de sesión o redirigir al usuario.
- **Zero-day**: Explotación de una vulnerabilidad desconocida por el fabricante del software, para la que no existe parche.
- **Botnet**: Red de dispositivos infectados (zombies) controlados remotamente por un atacante (botmaster) para realizar ataques DDoS, envío de spam, minería de criptomonedas (cryptojacking) u otras actividades ilícitas.
- **Man-in-the-Middle (MitM)**: El atacante intercepta la comunicación entre dos partes sin que estas lo sepan.

### 2.4 Fraudes online

- **BEC (Business Email Compromise)**: Suplantación del correo electrónico de un directivo para ordenar transferencias bancarias fraudulentas a empleados del departamento financiero.
- **Cartas nigerianas (fraude 419)**: Mensaje que promete una gran cantidad de dinero a cambio de un adelanto previo.
- **Romance scam**: Estafa sentimental a través de aplicaciones de citas.
- **Skimming**: Clonación de tarjetas bancarias mediante dispositivos instalados en cajeros automáticos o terminales de punto de venta.

## 3. AGENTES DE LA AMENAZA

- **Cibercriminales**: Individuos o grupos organizados con motivación económica.
- **Crime as a Service (CaaS)**: Modelo de negocio criminal donde se ofrecen herramientas y servicios (ransomware kits, botnets de alquiler, servicios de blanqueo de criptomonedas) a otros delincuentes sin conocimientos técnicos.
- **Hacktivistas**: Atacantes con motivación ideológica o política (Anonymous, LulzSec). Utilizan el hacking como forma de protesta (defacements, filtraciones de datos).
- **Insider threat (amenaza interna)**: Empleados, contratistas o exempleados con acceso legítimo a los sistemas que los utilizan de forma maliciosa o negligente.
- **APTs (Advanced Persistent Threats)**: Grupos de atacantes altamente sofisticados, generalmente vinculados a Estados-nación, que llevan a cabo operaciones de ciberespionaje prolongadas contra objetivos estratégicos (infraestructuras críticas, defensa, diplomacia). Ejemplos: APT28 (Fancy Bear, vinculado a Rusia), APT1 (China), Lazarus Group (Corea del Norte).
- **Script kiddies**: Atacantes sin conocimientos técnicos avanzados que utilizan herramientas creadas por otros.
- **Ciberterroristas**: Utilizan el ciberespacio para promover sus objetivos terroristas (propaganda, reclutamiento, financiación, ataques a infraestructuras críticas).

## 4. CYBER KILL CHAIN

Modelo desarrollado por Lockheed Martin que describe las 7 fases de un ciberataque dirigido:

1. **Reconocimiento**: El atacante investiga al objetivo (OSINT, escaneo de vulnerabilidades).
2. **Armamento (Weaponization)**: Se crea el exploit o se prepara el malware (p. ej., un documento Word con macro maliciosa).
3. **Distribución (Delivery)**: Se envía el arma al objetivo (email de phishing, USB infectado, watering hole).
4. **Explotación**: La vulnerabilidad es explotada y el malware se ejecuta en el sistema de la víctima.
5. **Instalación**: El malware se instala de forma persistente en el sistema (backdoor, rootkit).
6. **Comando y Control (C2)**: El atacante establece un canal de comunicación remota con el sistema comprometido.
7. **Acciones sobre el objetivo**: Robo de datos, cifrado (ransomware), destrucción, movimiento lateral dentro de la red.

La comprensión de la Kill Chain permite a los defensores implementar contramedidas en cada fase para interrumpir el ataque antes de que alcance su objetivo final.

## 5. MARCO JURÍDICO

- **Convenio de Budapest sobre la Ciberdelincuencia (2001)**: Primer tratado internacional sobre delitos informáticos. Tipifica delitos contra la confidencialidad, integridad y disponibilidad de los datos y sistemas informáticos, delitos informáticos, delitos relacionados con el contenido y delitos contra la propiedad intelectual.
- **Directiva NIS2 (UE 2022/2555)**: Medidas para un elevado nivel común de ciberseguridad en la UE.
- **Código Penal español**: Arts. 197 bis y ter (acceso ilícito a sistemas informáticos), art. 264 (daños informáticos), art. 248.2 (estafa informática), art. 270 (propiedad intelectual), art. 189 (pornografía infantil online).
- **LO 3/2018 (LOPDGDD)** y **Reglamento General de Protección de Datos (RGPD)**: Protección de datos personales frente a brechas de seguridad.
`;

const tema42 = `# TEMA 42. ORIGEN DE LAS ARMAS DE FUEGO. DEFINICIÓN, CLASIFICACIÓN Y CATEGORÍAS. FUNCIONAMIENTO. EL CARTUCHO. BALÍSTICA. ARMAS PROHIBIDAS. DOCUMENTACIÓN PARA TENENCIA Y PORTE

---

## 1. EVOLUCIÓN HISTÓRICA

Las armas de fuego surgieron en China (siglo IX, pólvora) y llegaron a Europa en el siglo XIV. Evolución: cañones primitivos → arcabuces de mecha (s. XV) → mosquetes de llave de rueda (s. XVI) → llave de chispa o pedernal (s. XVII) → percusión por fulminante (s. XIX, Rev. Industrial) → cartucho metálico moderno (segunda mitad s. XIX) → armas semiautomáticas y automáticas (s. XX).

## 2. DEFINICIÓN LEGAL DE ARMA DE FUEGO

Según el artículo 2 del Reglamento de Armas (RD 137/1993, de 29 de enero): son armas de fuego toda arma portátil que tenga cañón y que lance, esté concebida para lanzar o pueda transformarse para lanzar un perdigón, bala o proyectil por la acción de un combustible propulsor.

## 3. CLASIFICACIÓN Y CATEGORÍAS (RD 137/1993)

El Reglamento de Armas clasifica las armas en **7 categorías**:

- **1ª categoría**: Armas de fuego cortas (pistolas y revólveres).
- **2ª categoría**: Armas de fuego largas rayadas para caza mayor (rifles de cerrojo, semiautomáticos regulados).
- **3ª categoría**: Armas de fuego largas rayadas accionadas por repetición o semiautomáticas no incluidas en la 2ª, y las armas largas de ánima lisa (escopetas).
- **4ª categoría**: Carabinas y pistolas de aire comprimido o CO₂ con energía cinética superior a 24,2 julios.
- **5ª categoría**: Armas blancas y objetos asimilados.
- **6ª categoría**: Armas de fuego de avancarga.
- **7ª categoría**: Armas de imitación, detonadoras y deactivadas.

### 3.1 Clasificación por características técnicas

**Según la longitud del cañón:**
- Armas cortas: Longitud total inferior a 60 cm o cañón inferior a 30 cm. (Pistola, revólver.)
- Armas largas: Longitud total igual o superior a 60 cm y cañón igual o superior a 30 cm. (Escopeta, rifle, carabina.)

**Según el ánima del cañón:**
- Ánima rayada: Interior del cañón con estrías helicoidales que imprimen rotación al proyectil para estabilizar su trayectoria. (Rifles, pistolas.)
- Ánima lisa: Interior del cañón liso, sin estrías. (Escopetas.)

**Según el sistema de disparo:**
- Tiro a tiro: Un disparo manual por cada acción del tirador.
- De repetición: El tirador acciona manualmente un mecanismo (cerrojo, palanca, corredera) para introducir cada cartucho.
- Semiautomática: Tras cada disparo, el mecanismo se recarga automáticamente, pero se requiere una nueva presión del gatillo para cada disparo.
- Automática: Mientras se mantiene presionado el gatillo, el arma dispara de forma continua (ráfaga). Las armas automáticas están prohibidas para civiles en España.

## 4. EL CARTUCHO

El cartucho es la unidad completa de munición que se introduce en la recámara del arma. Componentes:

- **Vaina**: Contenedor metálico (latón, acero) que alberga los demás componentes. Tipos según la forma del culote: de pestaña (rimfire), sin pestaña (rimless), semirimmed.
- **Carga propulsora (pólvora)**: Sustancia deflagrante que, al arder, genera los gases a alta presión que impulsan el proyectil. Puede ser pólvora negra (en desuso) o pólvora sin humo (nitrocelulosa).
- **Pistón o cápsula iniciadora (fulminante)**: Elemento percutor que, al ser golpeado por la aguja percutora del arma, produce una llama que inicia la combustión de la pólvora. Tipos: percusión central (centerfire, para armas militares y policiales) y percusión anular (rimfire, para calibres pequeños como el .22 LR).
- **Proyectil (bala)**: Elemento que es lanzado a través del cañón. Tipos: ojival (punta), blindado (FMJ — Full Metal Jacket), semiblindado, hueco (hollow point), punta blanda, perforante, trazadora.

## 5. BALÍSTICA

### 5.1 Balística interior

Estudia los fenómenos que ocurren dentro del cañón del arma desde que se percute el cartucho hasta que el proyectil abandona la boca del cañón: presión de los gases, velocidad inicial, estrías y campos del ánima.

### 5.2 Balística exterior

Estudia el movimiento del proyectil desde que sale del cañón hasta que impacta en el blanco. Factores: gravedad, resistencia del aire, velocidad, rotación (efecto giroscópico de las estrías), viento, temperatura.

### 5.3 Balística de efectos (terminal o forense)

Estudia los efectos del proyectil sobre el blanco (cuerpo humano, vehículo, cristal, pared). En Criminalística, la balística forense permite:
- Identificar el arma que disparó un proyectil mediante el cotejo de las huellas de las estrías.
- Determinar la distancia de disparo.
- Analizar la trayectoria del proyectil.
- Estimar la posición del tirador.

## 6. ARMAS PROHIBIDAS

El artículo 4 del Reglamento de Armas prohíbe, con carácter general:
- Armas de fuego automáticas (de ráfaga).
- Armas de fuego camufladas (con apariencia de otro objeto: bolígrafo, mechero, paraguas).
- Municiones con proyectil perforante, explosivo, incendiario, trazador o expansivo (prohibidas para civiles).
- Armas de fuego con dispositivos silenciadores (salvo autorización especial).
- Armas de guerra (reservadas a las FCSE y Fuerzas Armadas).

## 7. DOCUMENTACIÓN PARA TENENCIA Y PORTE

- **Licencia de armas**: Autorización administrativa expedida por la Intervención de Armas de la Guardia Civil. Tipos: A (arma de guerra, uso exclusivo FCSE y FA), B (arma corta, defensa personal — muy restrictiva), C (armas largas rayadas, caza mayor), D (armas largas de ánima lisa, caza menor), E (armas de la categoría 3ª.2 y 3ª.3), F (armas de tiro deportivo).
- **Guía de pertenencia**: Documento individual de cada arma que identifica al propietario y las características del arma (marca, modelo, calibre, número de serie).
- **Tarjeta de armas**: Para armas de las categorías 4ª.1 (aire comprimido) y 7ª, expedida por el Ayuntamiento.
`;

const tema43 = `# TEMA 43. EL VEHÍCULO PRIORITARIO. DEFINICIÓN. SEÑALES LUMINOSAS Y ACÚSTICAS. FACULTADES DE LOS CONDUCTORES. COMPORTAMIENTO DE LOS DEMÁS CONDUCTORES. RESPONSABILIDAD

---

## 1. DEFINICIÓN LEGAL

El artículo 68 del Texto Articulado de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (Real Decreto Legislativo 6/2015, de 30 de octubre) regula los vehículos prioritarios y de urgencia:

**Vehícculo prioritario**: Aquel que se encuentra al servicio de las autoridades o de los organismos cuya urgente misión lo requiere, debidamente autorizados y con las señales especiales reglamentarias. Incluye: vehículos de las FCSE (Policía Nacional, Guardia Civil, policías autonómicas y locales), ambulancias, vehículos de extinción de incendios y salvamento.

**Vehículo de urgencia** (concepto más amplio): Cualquier vehículo que, por las circunstancias, necesite urgentemente desplazarse, aunque no disponga de señales especiales (ejemplo: un vehículo particular que traslada a un herido al hospital).

## 2. SEÑALES LUMINOSAS Y ACÚSTICAS

### 2.1 Señales luminosas

Los vehículos prioritarios portan señales luminosas especiales de color azul (para servicios de emergencia) que se activan durante el servicio urgente:
- Rotativos luminosos en el techo del vehículo.
- Luces LED estroboscópicas integradas en la parrilla o en el parabrisas.

### 2.2 Señales acústicas (sirenas)

Se utilizan dispositivos acústicos especiales de urgencia (sirenas electrónicas con tonos alternos). Solo deben activarse cuando la urgencia del servicio lo requiera y resulte necesario para advertir a los demás usuarios de la vía.

### 2.3 Uso combinado

Para que se activen las excepciones a las normas de circulación, el vehículo prioritario debe hacer uso de las señales luminosas (obligatorio) y, cuando sea necesario, también de las acústicas. El mero uso de la sirena sin señales luminosas no confiere la condición de prioritario.

## 3. FACULTADES DE LOS CONDUCTORES DE VEHÍCULOS PRIORITARIOS

Cuando circulen en servicio urgente, los conductores de vehículos prioritarios podrán excepcionar las siguientes normas de circulación:

1. **Exceder los límites de velocidad** establecidos con carácter general.
2. **Circular por carriles reservados** a otros usuarios (autobuses, BUS-VAO).
3. **No respetar las señales de preferencia** (ceda el paso, stop).
4. **Circular en sentido contrario** cuando la vía esté despejada y resulte necesario.
5. **Estacionar en lugares prohibidos** cuando el servicio lo requiera.
6. **No respetar los semáforos en rojo**, previa adopción de las precauciones necesarias.

### 3.1 Límites a las excepciones

Las facultades excepcionales no son absolutas. El artículo 68 y el Reglamento General de Circulación establecen que:
- Las excepciones solo se aplican cuando el servicio lo requiera con urgencia.
- El conductor debe adoptar las **precauciones necesarias** para no poner en peligro a los demás usuarios de la vía.
- Se aplica el **principio de proporcionalidad**: la excepción debe ser proporcional a la urgencia del servicio.
- La condición de vehículo prioritario **no exime de responsabilidad** en caso de accidente por negligencia.

## 4. COMPORTAMIENTO DE LOS DEMÁS CONDUCTORES

El resto de conductores y peatones tienen las siguientes obligaciones ante un vehículo prioritario:
- **Facilitar el paso** al vehículo prioritario que indica su presencia con señales luminosas y acústicas.
- **Apartarse** de la trayectoria del vehículo prioritario, desplazándose lo más a la derecha posible.
- **Detenerse** si es necesario para liberar la calzada.
- **No seguir ni adelantar** a un vehículo prioritario en servicio.

El incumplimiento de estas obligaciones constituye una infracción administrativa tipificada en el TRLTSV.

## 5. TIPOS DE VEHÍCULOS POLICIALES Y EQUIPAMIENTO

- Turismos patrulla (radiopatrullas o Z-cars).
- Vehículos camuflados (para investigación y seguimiento).
- Motocicletas policiales.
- Furgones de transporte de detenidos.
- Vehículos de las UIP (Unidades de Intervención Policial) — antidisturbios.
- Vehículos todoterreno para dispositivos especiales.

## 6. RESPONSABILIDAD DEL CONDUCTOR PRIORITARIO

### 6.1 Responsabilidad administrativa

Aunque el conductor prioritario puede excepcionar determinadas normas, si el accidente se produce por una conducción negligente o desproporcionada respecto a la urgencia del servicio, puede ser sancionado administrativamente.

### 6.2 Responsabilidad penal

Si la conducción prioritaria causa lesiones o muerte por imprudencia, el conductor puede ser investigado penalmente por un delito de homicidio o lesiones imprudentes (arts. 142 y 152 CP).

### 6.3 Responsabilidad civil y patrimonial

La Administración responde patrimonialmente por los daños causados por los vehículos de servicio público (art. 106.2 CE), con derecho de repetición contra el funcionario si hubo dolo o negligencia grave.
`;

const tema44 = `# TEMA 44. LA SEGURIDAD EN LA CONDUCCIÓN DE VEHÍCULOS PRIORITARIOS. SEGURIDAD ACTIVA Y PASIVA. SISTEMAS DE SEGURIDAD. CONDUCCIÓN POLICIAL. TRASLADO DE DETENIDOS

---

## 1. SEGURIDAD ACTIVA

La seguridad activa comprende todos los sistemas y elementos del vehículo diseñados para **evitar** que se produzca un accidente. Actúan de forma preventiva, mejorando la estabilidad, el control y la capacidad de frenado del vehículo.

### 1.1 Principales sistemas

- **ABS (Anti-lock Braking System)**: Impide el bloqueo de las ruedas durante una frenada brusca, permitiendo al conductor mantener el control de la dirección. Esencial en la conducción policial, donde las frenadas de emergencia son frecuentes.
- **ESP (Electronic Stability Program) / Control de estabilidad**: Detecta y corrige automáticamente la pérdida de tracción y los derrapes, frenando selectivamente las ruedas necesarias y reduciendo la potencia del motor.
- **TCS (Traction Control System) / Control de tracción**: Impide que las ruedas motrices patinen al acelerar, especialmente en superficies resbaladizas.
- **Dirección asistida**: Reduce el esfuerzo necesario para girar el volante, mejorando la maniobrabilidad.
- **Sistema de frenado de emergencia (BAS)**: Detecta una frenada de pánico y aplica la máxima presión de frenado automáticamente.
- **Control de crucero adaptativo (ACC)**: Mantiene una distancia de seguridad programada respecto al vehículo precedente.
- **Sistemas de iluminación inteligente**: Faros adaptativos que orientan el haz de luz en las curvas, luces de conducción diurna (DRL), asistente de luces largas automáticas.
- **Sistema de alerta de cambio involuntario de carril (LDW/LKA)**.
- **Sistema de detección de ángulo muerto (BLIS)**.
- **Neumáticos**: Elemento crítico de seguridad activa — estado de la banda de rodadura, presión correcta, tipo (verano/invierno/cuatro estaciones).

## 2. SEGURIDAD PASIVA

La seguridad pasiva comprende los sistemas diseñados para **reducir las consecuencias** de un accidente una vez que este ya se ha producido. Su objetivo es proteger la integridad física de los ocupantes.

### 2.1 Principales sistemas

- **Cinturón de seguridad**: Elemento de seguridad pasiva más eficaz. Retiene al ocupante y evita que sea proyectado contra el habitáculo o expulsado del vehículo. En España, su uso es obligatorio para todos los ocupantes.
- **Airbags**: Bolsas de aire que se despliegan en milisegundos en caso de colisión, amortiguando el impacto del ocupante contra el volante, el salpicadero o las partes laterales del vehículo. Tipos: frontales, laterales, de cortina (protección de la cabeza), de rodilla.
- **Reposacabezas**: Protegen contra el latigazo cervical (whiplash) en colisiones por alcance trasero.
- **Carrocería deformable con habitáculo rígido**: La estructura del vehículo está diseñada para absorber la energía del impacto en las zonas de deformación programada (morro, maletero), mientras el habitáculo central permanece intacto.
- **Barras de protección lateral**: Refuerzos en las puertas para proteger en colisiones laterales.
- **Sistema ISOFIX**: Anclajes estandarizados para sillas infantiles.
- **Sistemas de retención infantil (SRI)**: Sillas homologadas según la talla y peso del menor.

## 3. SISTEMAS DE SEGURIDAD EN MOTOCICLETAS POLICIALES

- **ABS para motocicletas**: Imprescindible para evitar el bloqueo de la rueda delantera (caída por encima del manillar).
- **Control de tracción (MSC/TC)**.
- **Equipamiento del motorista policial**: Casco integral homologado, guantes reforzados, botas de protección, chaqueta y pantalón con protecciones (espaldera, coderas, rodilleras), chaleco reflectante.

## 4. TÉCNICAS DE CONDUCCIÓN POLICIAL

### 4.1 Conducción defensiva

Técnica basada en la anticipación, la observación continua del entorno, el mantenimiento de distancias de seguridad amplias y la previsión de las acciones de los demás conductores. Es la técnica de conducción habitual del vehículo patrulla.

### 4.2 Conducción evasiva

Técnicas avanzadas para evitar obstáculos o amenazas en situaciones de emergencia: maniobras de evasión a alta velocidad, frenada de emergencia con control direccional, giros rápidos, marcha atrás controlada.

### 4.3 Conducción de persecución

Protocolos para la persecución de vehículos sospechosos. Requiere: comunicación permanente con la sala del 091, evaluación continua del riesgo para terceros, decisión de continuar o abortar la persecución según las circunstancias (tráfico, condiciones meteorológicas, peligrosidad del sospechoso).

## 5. TRASLADO DE DETENIDOS: PROTOCOLOS DE SEGURIDAD

### 5.1 Normas generales

- El detenido debe ser trasladado con las esposas reglamentarias colocadas.
- Se realiza un cacheo previo al embarque para retirar objetos peligrosos.
- El detenido viaja en el asiento trasero, preferiblemente con cinturón de seguridad y con cierre de seguridad infantil activado en las puertas.
- Al menos un agente debe acompañar al detenido en la parte trasera.
- Se evitan paradas innecesarias durante el trayecto.

### 5.2 Ergonomía y fatiga del conductor

La conducción policial implica largos turnos de patrullaje que generan fatiga física y mental. Es fundamental: respetar los descansos, mantener una postura ergonómica correcta, evitar conducir bajo los efectos de la fatiga acumulada, conocer los signos de microsueño.
`;

const tema45 = `# TEMA 45. PREVENCIÓN DE RIESGOS LABORALES EN SEGURIDAD VIAL. FACTORES DEL TRÁFICO Y SU INFLUENCIA EN LA SINIESTRALIDAD. RIESGOS LABORALES EN LA CONDUCCIÓN POLICIAL. EQUIPOS DE PROTECCIÓN INDIVIDUAL. MANTENIMIENTO PREVENTIVO

---

## 1. MARCO NORMATIVO

### 1.1 Ley 31/1995 de Prevención de Riesgos Laborales (LPRL)

Establece el marco general de protección de la seguridad y salud de los trabajadores. Principios de la acción preventiva (art. 15): evitar los riesgos, evaluar los que no se puedan evitar, combatirlos en su origen, adaptar el trabajo a la persona, planificar la prevención, anteponer la protección colectiva a la individual, dar las debidas instrucciones a los trabajadores.

### 1.2 Aplicación a las FCSE

El RD 2/2006, de 16 de enero, establece las normas de prevención de riesgos laborales en la actividad de los funcionarios del Cuerpo Nacional de Policía y del Cuerpo de la Guardia Civil, adaptando la LPRL a las particularidades de estas profesiones.

## 2. FACTORES DEL TRÁFICO Y SU INFLUENCIA EN LA SINIESTRALIDAD

### 2.1 Factor Humano

Es el factor más determinante en la siniestralidad (presente en más del 90% de los accidentes según la DGT). Incluye:

- **Fatiga y somnolencia**: Reducen la capacidad de atención, aumentan el tiempo de reacción y disminuyen la agudeza visual. Los turnos de noche y los servicios prolongados aumentan el riesgo.
- **Estrés**: La tensión derivada de situaciones de emergencia, persecuciones o conflictos policiales puede provocar decisiones precipitadas al volante.
- **Consumo de sustancias**: Alcohol, drogas y ciertos medicamentos (somníferos, antihistamínicos, ansiolíticos) deterioran gravemente las facultades para conducir.
- **Distracciones**: Uso del teléfono móvil, manipulación de equipos de comunicación policial (TETRA, emisora), consulta de pantallas MDT (Mobile Data Terminal).
- **Velocidad inadecuada**: Principal factor en la gravedad de los accidentes.
- **No respetar la distancia de seguridad**.
- **Agresividad al volante**: En situaciones de persecución, la adrenalina puede llevar a una conducción temeraria.

### 2.2 Factor Ambiental (vía y entorno)

- **Climatología adversa**: lluvia, niebla, hielo, nieve, viento lateral.
- **Estado de la vía**: baches, obras, gravilla, marcas viales deterioradas.
- **Iluminación**: Conducción nocturna, deslumbramiento, zonas de transición luz/oscuridad (túneles).
- **Trazado de la vía**: curvas peligrosas, pendientes pronunciadas, intersecciones conflictivas.

### 2.3 Factor Vehículo

- **Estado mecánico**: frenos desgastados, dirección con holgura, suspensión deteriorada.
- **Neumáticos**: Profundidad insuficiente de la banda de rodadura (mínimo legal: 1,6 mm), presión incorrecta, desgaste asimétrico.
- **Alumbrado**: Faros desalineados, luces fundidas.
- **Sistemas de seguridad**: Testigos de avería encendidos (ABS, ESP), airbags desactivados.

## 3. RIESGOS LABORALES ESPECÍFICOS EN LA CONDUCCIÓN DE VEHÍCULOS PRIORITARIOS

### 3.1 Riesgos de accidente

- Colisión frontal, lateral o por alcance.
- Atropello de peatón al circular en sentido contrario o saltarse un semáforo.
- Vuelco en maniobras evasivas a alta velocidad.
- Colisión con mobiliario urbano u otros elementos fijos.
- Accidente de motocicleta por pérdida de control.

### 3.2 Riesgos ergonómicos

- Lesiones musculoesqueléticas por conducción prolongada (lumbalgias, cervicalgias).
- Síndrome del túnel carpiano por vibración transmitida al volante.
- Fatiga visual por exposición a pantallas y señales intermitentes.

### 3.3 Riesgos psicosociales

- Estrés postraumático tras vivir o presenciar un accidente grave.
- Ansiedad derivada de la responsabilidad del traslado de detenidos o personas protegidas.
- Burnout por la acumulación de servicios de riesgo.

## 4. EQUIPOS DE PROTECCIÓN INDIVIDUAL (EPI)

### 4.1 Para conductores de turismos

- Cinturón de seguridad (uso obligatorio incluso para agentes en servicio — solo se exceptúa en caso de funciones concretas que lo impidan, según el TRLTSV).
- Chaleco reflectante de alta visibilidad para actuaciones fuera del vehículo.
- Calzado adecuado para la conducción (suela antideslizante).

### 4.2 Para motoristas policiales

- Casco integral homologado (norma ECE 22.06).
- Guantes de protección con refuerzo en nudillos y palma.
- Botas de protección con protección maleolar.
- Chaqueta y pantalón con protecciones CE en hombros, codos, espalda, caderas y rodillas.
- Protección contra la intemperie (traje de agua, ropa térmica).

### 4.3 Para agentes en controles de tráfico

- Chaleco reflectante.
- Guantes blancos reflectantes para señalización manual.
- Linternas de señalización.
- Conos y señalización de balizamiento.

## 5. ESTRATEGIAS DE MANTENIMIENTO PREVENTIVO DEL VEHÍCULO

### 5.1 Revisiones periódicas

- **Diarias (antes de cada servicio)**: Comprobación visual de neumáticos (presión y estado), niveles de líquidos (aceite, refrigerante, limpiaparabrisas), funcionamiento de luces y sirenas, estado de frenos (pedal firme), espejos retrovisores, limpieza de cristales.
- **Semanales/mensuales**: Revisión de la presión exacta de neumáticos (manómetro), comprobación de la batería, revisión de pastillas y discos de freno, comprobación del equipamiento de emergencia (triángulos, extintor, botiquín).
- **Según programa de mantenimiento del fabricante**: Cambio de aceite, filtros (aceite, aire, habitáculo), líquido de frenos, correas y distribución, embrague, amortiguadores. El cumplimiento estricto del programa de mantenimiento del fabricante es obligatorio para garantizar la seguridad y la operatividad del vehículo policial.

### 5.2 Mantenimiento correctivo

Reparación de averías detectadas durante el servicio o en las revisiones. El conductor debe comunicar cualquier anomalía observada al parque móvil o servicio de mantenimiento de la comisaría.

## 6. INVESTIGACIÓN DE ACCIDENTES LABORALES DE TRÁFICO

### 6.1 Protocolo de actuación

1. Atención a las víctimas y asegurar la zona del accidente (señalización, protección).
2. Comunicación al Centro de Coordinación (CIMACC 091).
3. Comunicación al mando directo y al servicio de Prevención de Riesgos Laborales.
4. Notificación al Sistema DELTA del Ministerio de Trabajo (accidente laboral).
5. Investigación de las causas: factor humano, vía, vehículo, condiciones ambientales.
6. Elaboración de informe de prevención con medidas correctoras para evitar su repetición.
7. Seguimiento y archivo del expediente.
`;

async function run() {
    try {
        console.log("=== BLOQUE C — Temas 38-45 ===");
        console.log("Destino:", TARGET_DIR);
        
        const temas = [
            { content: tema38, name: "Tema 38 - Fundamentos de Sistemas Operativos" },
            { content: tema39, name: "Tema 39 - Redes Informaticas" },
            { content: tema40, name: "Tema 40 - Inteligencia" },
            { content: tema41, name: "Tema 41 - Ciberdelincuencia y Agentes de la Amenaza" },
            { content: tema42, name: "Tema 42 - Origen de las Armas de Fuego" },
            { content: tema43, name: "Tema 43 - El Vehiculo Prioritario" },
            { content: tema44, name: "Tema 44 - Seguridad en la Conduccion" },
            { content: tema45, name: "Tema 45 - Prevencion de Riesgos Laborales en Seguridad Vial" },
        ];

        for (const t of temas) {
            await mdToPdf({ content: t.content }, { dest: path.join(TARGET_DIR, t.name + ".pdf") });
            console.log("✓", t.name);
        }
        
        console.log("\\nBloque C completado: 8 PDFs generados.");
    } catch (e) {
        console.error("Error:", e);
    }
}

run();
