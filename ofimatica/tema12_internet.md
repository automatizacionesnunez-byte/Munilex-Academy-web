# Tema 12. La Red Internet: Origen, Arquitectura y Servicios

---

## 1. Historia y Evolución de Internet

### 1.1 Los Orígenes: ARPANET (1969)
Internet nació como un proyecto militar estadounidense durante la Guerra Fría. El Departamento de Defensa de los Estados Unidos, a través de su agencia de investigación **DARPA** (Defense Advanced Research Projects Agency), financió la creación de **ARPANET** en 1969: una red de comunicaciones descentralizada diseñada para sobrevivir a un ataque nuclear. La descentralización era clave: si un nodo era destruido, los datos encontrarían rutas alternativas para llegar a su destino.

**Hitos cronológicos:**
- **1969**: Primera conexión de ARPANET entre cuatro universidades: UCLA, Stanford Research Institute, UC Santa Barbara y Universidad de Utah. El primer mensaje transmitido fue "LO" (se pretendía enviar "LOGIN", pero el sistema se cayó tras las dos primeras letras).
- **1971**: Ray Tomlinson inventa el **correo electrónico** para ARPANET, utilizando el símbolo **@** para separar el nombre de usuario del nombre de la máquina.
- **1973**: Vinton Cerf y Robert Kahn desarrollan el protocolo **TCP/IP**, que se convertirá en el estándar universal de comunicación en Internet.
- **1983**: ARPANET adopta oficialmente TCP/IP. Se considera esta fecha como el nacimiento técnico de "Internet" como la conocemos.
- **1984**: Se implementa el sistema **DNS** (Domain Name System), eliminando la necesidad de memorizar direcciones IP numéricas.
- **1989**: Tim Berners-Lee, investigador del **CERN** (Organización Europea para la Investigación Nuclear) en Ginebra, propone la **World Wide Web (WWW)**: un sistema de documentos de hipertexto interconectados mediante enlaces, accesibles a través de Internet usando navegadores.
- **1991**: La WWW se hace pública. Berners-Lee crea el primer servidor web, el primer navegador web y el primer sitio web del mundo.
- **1993**: Aparece **Mosaic**, el primer navegador web gráfico popular, desarrollado en el NCSA (National Center for Supercomputing Applications). Es el antecesor de Netscape Navigator.
- **1995**: Explosión comercial de Internet. Nacen Amazon, eBay, Yahoo!. Netscape sale a bolsa.
- **2004-presente**: Era de la **Web 2.0** (redes sociales participativas: Facebook, Twitter, YouTube). Posteriormente, la Web Semántica (Web 3.0), el Internet de las Cosas (IoT) y la inteligencia artificial generativa marcan la evolución actual.

### 1.2 Definición Actual de Internet
**Internet** es una red global de redes de ordenadores interconectadas que utilizan el conjunto de protocolos **TCP/IP** para comunicarse entre sí. No tiene un propietario único ni un gobierno central; es una infraestructura descentralizada y distribuida administrada cooperativamente por organizaciones como:
- **ICANN** (Internet Corporation for Assigned Names and Numbers): Administra el sistema de nombres de dominio DNS y la asignación de direcciones IP.
- **IETF** (Internet Engineering Task Force): Desarrolla y publica los estándares técnicos de Internet (RFC - Request For Comments).
- **W3C** (World Wide Web Consortium): Fundado por Tim Berners-Lee, desarrolla los estándares web (HTML, CSS, XML, etc.).

### 1.3 Internet vs World Wide Web (WWW)
- **Internet**: La infraestructura física y lógica de la red global (cables submarinos, satélites, routers, protocolos TCP/IP). Es el "medio de transporte".
- **WWW (Web)**: Es un **servicio** que funciona sobre Internet. Es el sistema de páginas web interconectadas por hiperenlaces, accesibles mediante navegadores usando el protocolo HTTP/HTTPS. La Web es el servicio más popular de Internet, pero no es el único.
- **Otros servicios sobre Internet**: Correo electrónico (SMTP), transferencia de archivos (FTP), acceso remoto (SSH), videoconferencia, mensajería instantánea, VoIP, streaming.

---

## 2. Arquitectura Técnica de Internet

### 2.1 El Modelo TCP/IP (Pila de Protocolos)
El modelo TCP/IP organiza los protocolos de comunicación en cuatro capas funcionales:

| Capa | Función | Protocolos principales |
|---|---|---|
| **4. Aplicación** | Servicios directos al usuario | HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, SSH, Telnet, DHCP |
| **3. Transporte** | Control de la transmisión extremo a extremo | **TCP** (fiable, con control de errores) y **UDP** (rápido, sin garantía) |
| **2. Internet (Red)** | Direccionamiento y enrutamiento de paquetes | **IP** (IPv4, IPv6), ICMP (ping), ARP |
| **1. Acceso a red (Enlace)** | Transmisión física de bits por el medio | Ethernet, Wi-Fi (802.11), PPP, Fibra óptica |

#### TCP (Transmission Control Protocol)
- Protocolo de transporte **orientado a conexión** y **fiable**. Antes de transmitir datos, establece una conexión mediante el "saludo de tres vías" (SYN → SYN-ACK → ACK).
- Garantiza que todos los paquetes lleguen al destino en el orden correcto, sin errores ni duplicados. Si un paquete se pierde, TCP lo retransmite.
- Uso: Navegación web (HTTP/HTTPS), correo electrónico (SMTP, POP3, IMAP), transferencia de archivos (FTP).

#### UDP (User Datagram Protocol)
- Protocolo de transporte **sin conexión** y **no fiable**. No establece conexión previa ni verifica la recepción de los paquetes.
- Más rápido que TCP por la ausencia de controles, pero acepta la pérdida de paquetes.
- Uso: Streaming de vídeo/audio en directo, videoconferencia (Zoom, Teams), juegos online, resolución DNS.

#### IP (Internet Protocol)
- Protocolo de la capa de red que se encarga del **direccionamiento** (asignar una dirección IP única a cada dispositivo) y del **enrutamiento** (encontrar la ruta óptima para que los paquetes viajen desde el origen hasta el destino a través de múltiples redes y routers intermedios).

### 2.2 Direcciones IP

#### IPv4 (Versión 4)
- Formato: Cuatro bloques de números decimales separados por puntos. Cada bloque (octeto) oscila entre 0 y 255.
- Ejemplo: `192.168.1.100`
- Longitud: 32 bits (4 bytes). Total de direcciones posibles: 2^32 = **4.294.967.296** (~4.300 millones).
- **Problema**: El agotamiento de direcciones IPv4 es un hecho desde 2011 debido al crecimiento exponencial de dispositivos conectados (smartphones, IoT).
- **Clases de direcciones** (clasificación teórica histórica):
  - Clase A: 1.0.0.0 a 126.255.255.255 (grandes redes, millones de hosts).
  - Clase B: 128.0.0.0 a 191.255.255.255 (redes medianas).
  - Clase C: 192.0.0.0 a 223.255.255.255 (redes pequeñas, hasta 254 hosts).
  - Clase D: 224.0.0.0 a 239.255.255.255 (multicast).
  - Clase E: 240.0.0.0 a 255.255.255.255 (experimental/reservada).
- **Direcciones privadas** (no enrutables en Internet público, usadas en redes locales):
  - 10.0.0.0 a 10.255.255.255
  - 172.16.0.0 a 172.31.255.255
  - **192.168.0.0 a 192.168.255.255** (la más habitual en hogares y oficinas).
- **Dirección de loopback**: `127.0.0.1` (localhost). Se usa para que un equipo se comunique consigo mismo para pruebas.

#### IPv6 (Versión 6)
- Formato: Ocho grupos de cuatro dígitos hexadecimales separados por dos puntos.
- Ejemplo: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
- Longitud: 128 bits (16 bytes). Total: 2^128 = ~340 sextillones de direcciones (prácticamente ilimitadas).
- Diseñado para resolver definitivamente el agotamiento de IPv4 y mejorar la seguridad (IPsec integrado), autocconfiguración y eficiencia de enrutamiento.

### 2.3 Dirección MAC (Media Access Control)
- Identificador **físico único** e inmutable grabado en la tarjeta de red (NIC) de cada dispositivo por el fabricante.
- Formato: 6 bytes en hexadecimal separados por dos puntos o guiones: `00:1A:2B:3C:4D:5E`.
- Opera en la capa de Enlace de datos (no es enrutable por Internet, solo tiene alcance dentro de la red local).
- Diferencia clave con la IP: La dirección MAC es permanente y del hardware; la dirección IP es lógica, temporal y asignada por software o por el router (DHCP).

### 2.4 Máscara de Subred
- Define qué parte de la dirección IP identifica la **red** y qué parte identifica el **host** (dispositivo) dentro de esa red.
- Ejemplo: Con máscara `255.255.255.0` y dirección IP `192.168.1.100`: los tres primeros octetos (`192.168.1`) identifican la red, y el último (`100`) identifica al equipo específico.

### 2.5 Puerta de Enlace Predeterminada (Default Gateway)
- Dirección IP del **router** local que conecta la red interna con redes externas (Internet).
- Cuando un dispositivo de la red local quiere comunicarse con un equipo de otra red, envía los datos a la puerta de enlace, que los encamina hacia el destino.
- Ejemplo doméstico: `192.168.1.1` (dirección típica por defecto del router).

### 2.6 DHCP (Dynamic Host Configuration Protocol)
- Protocolo que asigna **automáticamente** direcciones IP, máscara de subred, puerta de enlace y servidores DNS a los dispositivos que se conectan a la red.
- Sin DHCP, cada dispositivo requeriría configuración manual (IP estática).
- El servidor DHCP es habitualmente el router en redes domésticas o un servidor dedicado en redes corporativas.

---

## 3. El Sistema de Nombres de Dominio (DNS)

### 3.1 Función del DNS
El DNS es un sistema jerárquico y distribuido que traduce los **nombres de dominio** legibles por humanos (como `www.policia.es`) a las **direcciones IP** numéricas que los ordenadores necesitan para comunicarse (como `195.77.6.30`).

Sin DNS, los usuarios deberían memorizar las direcciones IP numéricas de cada sitio web que quisieran visitar.

### 3.2 Estructura Jerárquica de los Nombres de Dominio
Una dirección como `www.guardiacivil.es` se lee de derecha a izquierda en la jerarquía:

1. **Raíz (Root)**: El nivel invisible más alto, representado por un punto (`.`). Los servidores raíz son 13 en todo el mundo (designados con letras A-M).
2. **TLD (Top-Level Domain / Dominio de Nivel Superior)**: `.es` en este caso.
   - TLD genéricos (gTLD): `.com` (comercial), `.org` (organizaciones), `.net` (redes), `.edu` (educación), `.gov` (gobierno EE.UU.), `.info`, `.biz`.
   - TLD de país (ccTLD): `.es` (España), `.fr` (Francia), `.uk` (Reino Unido), `.de` (Alemania), `.pt` (Portugal).
   - TLD patrocinados: `.gob.es` (Gobierno de España), `.mil` (militar EE.UU.).
   - Nuevos gTLD: `.app`, `.dev`, `.academy`, `.madrid`, `.barcelona`.
3. **Dominio de Segundo Nivel**: `guardiacivil` en el ejemplo.
4. **Subdominio**: `www` es un subdominio convencional (World Wide Web), pero pueden existir otros como `mail.guardiacivil.es`, `sede.guardiacivil.es`.

### 3.3 URL (Uniform Resource Locator)
Una **URL** es la dirección completa de un recurso en Internet. Su estructura:

`https://www.mpt.gob.es/portal/politica-territorial/index.html`

| Componente | Ejemplo | Significado |
|---|---|---|
| **Protocolo** | `https://` | Método de comunicación (HTTP seguro con TLS) |
| **Subdominio** | `www.` | Subdominio convencional |
| **Dominio** | `mpt` | Nombre del sitio |
| **TLD** | `.gob.es` | Dominio de nivel superior (gobierno España) |
| **Ruta (Path)** | `/portal/politica-territorial/` | Estructura de carpetas en el servidor |
| **Archivo** | `index.html` | Nombre del documento solicitado |

---

## 4. Protocolos de Servicios de Internet

### 4.1 HTTP y HTTPS - Protocolo de la Web
- **HTTP** (HyperText Transfer Protocol): Protocolo de transferencia de hipertexto. Gestiona la comunicación solicitud-respuesta entre el navegador (cliente) y el servidor web. **Puerto 80**. Los datos viajan sin cifrar (inseguro).
- **HTTPS** (HTTP Secure): Versión cifrada de HTTP que utiliza **TLS** (Transport Layer Security, sucesor de SSL) para cifrar toda la comunicación entre navegador y servidor. **Puerto 443**. Se identifica visualmente por el **candado** en la barra de direcciones del navegador y por el prefijo `https://`.
  - El certificado SSL/TLS del servidor web es emitido por una Autoridad de Certificación (CA) reconocida (Let's Encrypt, DigiCert, Comodo) que verifica la identidad del propietario del dominio.
  - **Pregunta de examen**: ¿Cuál es la diferencia entre HTTP y HTTPS? HTTPS cifra la comunicación mediante SSL/TLS sobre el puerto 443; HTTP transmite en texto plano por el puerto 80.

### 4.2 FTP (File Transfer Protocol)
- Protocolo de transferencia de ficheros entre cliente y servidor. **Puerto 21** (control) y **Puerto 20** (datos).
- Permite subir (upload) y descargar (download) archivos.
- **SFTP** (SSH File Transfer Protocol) y **FTPS** (FTP Secure/SSL): Versiones cifradas que protegen las credenciales y los datos transferidos.

### 4.3 Telnet y SSH
- **Telnet**: Protocolo de acceso remoto a otro ordenador por línea de comandos. **Puerto 23**. Transmite todo en texto plano (incluida la contraseña). Obsoleto por inseguro.
- **SSH** (Secure Shell): Sustituto seguro de Telnet. **Puerto 22**. Toda la comunicación va cifrada. Estándar actual para la administración remota de servidores.

### 4.4 Otros Protocolos y Servicios
- **P2P (Peer-to-Peer)**: Arquitectura descentralizada donde cada nodo actúa simultáneamente como cliente y servidor. Utilizada para compartir archivos (BitTorrent), comunicaciones (Skype original) y criptomonedas (blockchain).
- **VoIP (Voice over IP)**: Transmisión de voz por Internet (llamadas telefónicas a través de la red). Servicios: Skype, Teams, Zoom, WhatsApp. Protocolo SIP.
- **VPN (Virtual Private Network)**: Red privada virtual que crea un túnel cifrado sobre Internet público, permitiendo a empleados remotos acceder a la red corporativa de forma segura como si estuvieran físicamente en la oficina.

---

## 5. Navegadores Web

### 5.1 Concepto y Función
Un **navegador web** (web browser) es la aplicación que interpreta y representa visualmente las páginas web (documentos HTML, CSS y JavaScript) recibidas desde los servidores web a través del protocolo HTTP/HTTPS.

### 5.2 Navegadores Principales
| Navegador | Desarrollador | Motor de renderizado |
|---|---|---|
| **Microsoft Edge** | Microsoft | Chromium (Blink) — desde 2020 |
| **Google Chrome** | Google | Chromium (Blink) |
| **Mozilla Firefox** | Mozilla Foundation | Gecko |
| **Safari** | Apple | WebKit |
| **Opera** | Opera Software | Chromium (Blink) |
| **Brave** | Brave Software | Chromium (Blink) |

**Nota**: Chromium es el proyecto de código abierto base sobre el que se construyen Chrome, Edge, Opera y Brave. Esto significa que comparten motor de renderizado y tienen un comportamiento web muy similar.

### 5.3 Elementos y Funcionalidades del Navegador

**Interfaz común:**
- **Barra de direcciones (URL / Omnibox)**: Campo para escribir URLs o realizar búsquedas directamente.
- **Pestañas (Tabs)**: Permiten tener múltiples páginas abiertas simultáneamente.
- **Botones de navegación**: Atrás, Adelante, Actualizar (`F5` o `Ctrl + R`), Detener, Inicio.
- **Marcadores / Favoritos**: Direcciones de páginas guardadas para acceso rápido.
- **Historial de navegación**: Registro cronológico de todas las páginas visitadas. Accesible con `Ctrl + H`.
- **Descargas**: Gestor de archivos descargados.
- **Extensiones / Complementos**: Programas añadidos que amplían la funcionalidad del navegador (bloqueadores de publicidad, gestores de contraseñas, traductores).

**Datos almacenados por el navegador:**
- **Cookies**: Pequeños archivos de texto que los sitios web almacenan en el navegador del usuario para recordar información (sesión de login, preferencias de idioma, artículos en el carrito de compra). Tipos:
  - *Cookies de sesión*: Se eliminan al cerrar el navegador.
  - *Cookies persistentes*: Permanecen almacenadas hasta su fecha de expiración.
  - *Cookies de terceros (third-party)*: Establecidas por dominios distintos al visitado (típicamente para publicidad y seguimiento entre sitios). Cada vez más restringidas por razones de privacidad.
- **Caché (archivos temporales)**: Copias locales de imágenes, hojas de estilo CSS, scripts y otros recursos de las páginas visitadas. Permiten cargar más rápido las páginas al revisitarlas. Se pueden borrar manualmente o configurar limpieza automática.
- **Contraseñas guardadas**: El navegador puede ofrecer almacenar credenciales de acceso a sitios web.
- **Datos de formularios**: Autocompletado de nombre, dirección, teléfono.

**Navegación privada / Incógnito:**
- Modo especial que **no guarda** en el historial, cookies, caché, ni datos de formularios de la sesión. Al cerrar la ventana privada, se eliminan todos los rastros locales.
- **NO anonimiza** la actividad ante el proveedor de Internet (ISP), el administrador de la red ni los sitios web visitados. Solo protege la privacidad local del dispositivo.
- Atajos: Chrome/Edge: `Ctrl + Shift + N`. Firefox: `Ctrl + Shift + P`.

---

## 6. Motores de Búsqueda

### 6.1 Concepto
Un **motor de búsqueda** (search engine) es un sistema web que indexa el contenido de miles de millones de páginas web y permite al usuario localizar información escribiendo palabras clave o consultas en un campo de búsqueda.

**Componentes internos de un buscador:**
1. **Araña o Crawler (Robot de rastreo)**: Programa automatizado que recorre Internet siguiendo enlaces de página en página, descubriendo y descargando contenido nuevo. Los más conocidos: Googlebot (Google), Bingbot (Microsoft).
2. **Índice**: Base de datos masiva donde se almacena el contenido rastreado, procesado y clasificado por palabras clave, relevancia, ubicación geográfica, idioma, fecha.
3. **Algoritmo de ranking**: Fórmula que ordena los resultados según su relevancia para la consulta del usuario. Google utiliza más de 200 factores de posicionamiento (PageRank original, autoridad del dominio, velocidad de carga, adaptabilidad móvil, calidad del contenido).

### 6.2 Principales Motores de Búsqueda
- **Google**: Domina más del 90% del mercado mundial.
- **Bing**: Motor de búsqueda de Microsoft, integrado en Edge y Windows.
- **Yahoo!**: Actualmente utiliza la tecnología de Bing para sus resultados.
- **DuckDuckGo**: Motor centrado en la privacidad (no rastrea al usuario ni personaliza resultados).
- **Ecosia**: Motor que destina sus beneficios publicitarios a la plantación de árboles.

### 6.3 Operadores Avanzados de Búsqueda (Google)
| Operador | Función | Ejemplo |
|---|---|---|
| `"frase exacta"` | Busca la secuencia exacta de palabras | `"procedimiento administrativo común"` |
| `-palabra` | Excluye resultados que contengan esa palabra | `Python -serpiente` |
| `site:dominio` | Restringe los resultados a un dominio específico | `TREBEP site:boe.es` |
| `filetype:ext` | Busca archivos de un tipo concreto | `temario oposiciones filetype:pdf` |
| `intitle:palabra` | Busca la palabra en el título de la página | `intitle:transparencia` |
| `inurl:palabra` | Busca la palabra en la URL | `inurl:convocatoria` |
| `OR` | Busca cualquiera de los términos | `Excel OR Calc` |
| `*` | Comodín (sustituye una o varias palabras) | `"Ley * de transparencia"` |
| `define:palabra` | Muestra la definición de un término | `define:interoperabilidad` |
| `cache:url` | Muestra la versión en caché de Google de una página | `cache:www.boe.es` |

---

## 7. Servicios y Tecnologías de Internet Contemporáneas

### 7.1 Computación en la Nube (Cloud Computing)
Modelo de prestación de servicios informáticos a través de Internet, sin necesidad de infraestructura propia local.
- **IaaS** (Infraestructura como Servicio): Servidores virtuales, almacenamiento, redes. Ejemplo: Amazon AWS, Microsoft Azure, Google Cloud.
- **PaaS** (Plataforma como Servicio): Entorno de desarrollo y ejecución de aplicaciones. Ejemplo: Google App Engine, Heroku.
- **SaaS** (Software como Servicio): Aplicaciones completas accesibles por navegador. Ejemplo: Microsoft 365, Gmail, Google Workspace, Salesforce.

### 7.2 La Sede Electrónica y la Administración Digital
En el contexto de la Administración General del Estado:
- **Sede electrónica**: Portal web oficial de cada organismo que permite a los ciudadanos realizar trámites administrativos telemáticamente (presentar solicitudes, pagar tasas, consultar expedientes). Regulada por la Ley 39/2015 del Procedimiento Administrativo Común y la Ley 40/2015 de Régimen Jurídico del Sector Público.
- **Cl@ve**: Sistema de identificación, autenticación y firma electrónica para personas físicas ante la Administración. Métodos: Cl@ve PIN (temporal), Cl@ve Permanente, DNIe (DNI electrónico), certificado digital FNMT.
- **Carpeta Ciudadana**: Área personal en línea donde el ciudadano puede consultar sus datos en poder de la Administración, sus notificaciones electrónicas y el estado de sus trámites.
