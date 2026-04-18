# Tema: Ciberseguridad — CCN-CERT, Amenazas y Protección TIC

---

## 1. Marco Institucional: El CCN-CERT y la Autoridad Nacional

### 1.1 El Centro Criptológico Nacional (CCN)
El **Centro Criptológico Nacional (CCN)** es el organismo responsable de coordinar la acción de los diferentes organismos de la Administración que utilizan medios o procedimientos de cifra, garantizar la seguridad de las tecnologías de la información en ese ámbito, informar sobre la adquisición coordinada del material criptológico y formar al personal de la Administración especialista en este campo.

- **Creación**: Fue creado en el año **2004**, adscrito orgánicamente al **Centro Nacional de Inteligencia (CNI)**, mediante el Real Decreto 421/2004.
- **Dependencia orgánica**: Ministerio de Defensa → CNI → CCN.
- **Base legal**: Ley 11/2002, reguladora del CNI, y el citado RD 421/2004.

### 1.2 El CCN-CERT (Computer Emergency Response Team)
El **CCN-CERT** es la Capacidad de Respuesta a Incidentes de Seguridad de la Información del CCN. Es, en esencia, el equipo de respuesta ante emergencias informáticas del sector público español.

**Funciones principales**:
1. Soporte y coordinación para el tratamiento de vulnerabilidades y la resolución de incidentes de seguridad en sistemas de las Administraciones Públicas.
2. Investigación y divulgación de las mejores prácticas sobre seguridad de la información.
3. Formación del personal del sector público en materia de seguridad TIC.
4. Elaboración de las guías CCN-STIC (Serie de normas técnicas de seguridad de la información y las comunicaciones).
5. Desarrollo de herramientas de ciberseguridad de uso público (PILAR, LUCIA, REYES, CLAUDIA, ELENA, CARMEN, MARTA, ROCÍO, etc.).

### 1.3 El Esquema Nacional de Seguridad (ENS)
Regulado por el **Real Decreto 311/2022** (que actualizó al anterior RD 3/2010), el ENS establece la política de seguridad para la protección adecuada de la información tratada y los servicios prestados por las entidades del sector público.

**Principios básicos del ENS**:
- Seguridad como proceso integral (no solo tecnología, también personas y procedimientos).
- Gestión de la seguridad basada en los riesgos.
- Prevención, detección, respuesta y conservación.
- Líneas de defensa (defensa en profundidad).
- Vigilancia continua y reevaluación periódica.
- Diferenciación de responsabilidades.

**Categorización de los sistemas** (según el impacto de un incidente): **BÁSICA, MEDIA, ALTA**.

**Dimensiones de seguridad del ENS**:
1. **Confidencialidad** [C]
2. **Integridad** [I]
3. **Trazabilidad** [T]
4. **Autenticidad** [A]
5. **Disponibilidad** [D]

---

## 2. La Triada de Seguridad de la Información (CIA) y Conceptos Ampliados

### 2.1 Triada CIA (Confidentiality, Integrity, Availability)

| Dimensión | Definición | Ejemplo de violación | Mecanismo de protección |
|-----------|-----------|----------------------|------------------------|
| **Confidencialidad** | Solo los actores autorizados pueden acceder a la información | Un hacker accede a datos personales de ciudadanos | Cifrado, control de accesos, clasificación de información |
| **Integridad** | Los datos no han sido modificados de forma no autorizada; se conservan exactos y completos | Un atacante altera una base de datos de antecedentes penales | Funciones hash (SHA-256, SHA-512), firma digital, copias de seguridad |
| **Disponibilidad** | Los servicios y la información están accesibles cuando se necesitan | Un ataque DDoS tumba la web del Ministerio del Interior | Redundancia, balanceo de carga, SAI, planes de continuidad de negocio |

### 2.2 Conceptos complementarios

| Concepto | Definición | Ejemplo |
|----------|-----------|---------|
| **Autenticidad** | Garantía de que una entidad (persona o sistema) es quien dice ser | Certificado digital de la FNMT, login con credenciales verificadas |
| **Trazabilidad (Accountability)** | Capacidad de asociar cada acción a una entidad identificada, en cualquier momento posterior | Logs de auditoría, registros de acceso con timestamp y usuario |
| **No Repudio** | Imposibilidad de negar haber realizado o recibido una comunicación digital | Firma electrónica reconocida en notificaciones judiciales electrónicas |

### 2.3 Otros conceptos fundamentales

- **Vulnerabilidad**: Debilidad de un sistema que puede ser explotada por una amenaza (ej. software sin actualizar, contraseña débil, puerto abierto innecesario).
- **Amenaza**: Cualquier evento o agente potencial que puede explotar una vulnerabilidad (ej. un hacker, un virus, un empleado descontento, un desastre natural).
- **Riesgo**: Probabilidad de que una amenaza explote una vulnerabilidad y cause un impacto: **Riesgo = Amenaza × Vulnerabilidad × Impacto**.
- **Exploit**: Código o técnica concreta que aprovecha una vulnerabilidad específica.
- **0-Day (Día Cero)**: Vulnerabilidad desconocida por el fabricante y sin parche disponible. Son las más peligrosas.

---

## 3. Tipología y Vectores de Amenaza

### 3.1 Amenazas de Ingeniería Social (Factor Humano)

La ingeniería social explota la psicología humana, no las debilidades técnicas. Es la causa principal de incidentes de seguridad a nivel mundial.

| Técnica | Canal | Descripción | Ejemplo |
|---------|-------|-------------|---------|
| **Phishing** | Email | Suplantación de identidad masiva mediante correos que imitan entidades de confianza (bancos, Hacienda, Correos) | Email falso de "tu banco" pidiendo confirmar credenciales en un enlace fraudulento |
| **Spear Phishing** | Email | Phishing dirigido y personalizado contra una víctima concreta, con datos reales de la víctima | Email dirigido a un fiscal con datos de un caso real para que descargue un adjunto |
| **Whaling** | Email | Spear phishing dirigido específicamente a altos directivos (CEO, directores, ministros) | Email dirigido al CEO suplantando al director financiero |
| **Vishing** | Teléfono (voz/VoIP) | Suplantación por llamada telefónica | Llamada haciéndose pasar por el banco pidiendo claves |
| **Smishing** | SMS / WhatsApp | Suplantación por mensaje de texto | SMS falso de "Correos" o "DGT" con enlace malicioso |
| **Baiting** | Físico | Dejar dispositivos infectados (USB, CD) en lugares frecuentados por la víctima | USB "perdido" en el aparcamiento de una comisaría |
| **Pretexting** | Cualquiera | Crear un escenario ficticio creíble para obtener información de la víctima | Llamar haciéndose pasar por soporte técnico de Microsoft |
| **Tailgating / Piggybacking** | Físico | Seguir a un empleado autorizado para acceder a un área restringida sin credenciales | Entrar tras un guardia que abre con tarjeta, simulando cargar cajas |

### 3.2 Malware (Software Malicioso)

| Tipo | Descripción | Propagación | Peligrosidad |
|------|-------------|-------------|--------------|
| **Virus** | Código malicioso que se adjunta a programas legítimos y se activa al ejecutarlos | Requiere acción del usuario (ejecutar archivo infectado) | Media-Alta |
| **Gusano (Worm)** | Se propaga de forma autónoma por la red sin intervención del usuario | Automática, explota vulnerabilidades de red | Alta |
| **Troyano (Trojan)** | Se camufla dentro de un programa aparentemente legítimo e instala funcionalidades ocultas (backdoor) | El usuario lo instala creyendo que es software legítimo | Alta |
| **Ransomware** | Cifra los archivos del disco duro con algoritmos robustos (AES-256, RSA) y exige un rescate económico (generalmente en criptomonedas) para proporcionar la clave de descifrado | Email, exploit kits, RDP expuesto | **Crítica** — Amenaza nº 1 del sector público |
| **Spyware** | Recopila información del usuario sin su conocimiento (contraseñas, historial, capturas de pantalla) | Bundled con software gratuito, descargas | Media |
| **Adware** | Muestra publicidad no deseada, redirige navegadores | Bundled con software gratuito | Baja-Media |
| **Rootkit** | Oculta la presencia de otro malware o del atacante al sistema operativo, proporcionando acceso privilegiado persistente | Exploit, escalación de privilegios | Muy Alta |
| **Backdoor (Puerta trasera)** | Proporciona acceso remoto no autorizado al sistema, eludiendo la autenticación normal | Instalada por troyanos, rootkits, o incluso código fuente comprometido | Muy Alta |
| **Keylogger** | Registra todas las pulsaciones de teclado (contraseñas, mensajes, datos bancarios) | Spyware, troyanos, dispositivos físicos (hardware keylogger) | Alta |
| **Botnet** | Red de dispositivos infectados (zombis) controlados remotamente por un atacante (botmaster) para ejecutar acciones coordinadas | Gusanos, troyanos | Muy Alta (base de DDoS) |
| **Cryptojacker** | Utiliza los recursos de cómputo de la víctima sin su conocimiento para minar criptomonedas | Scripts en web, malware | Media |

### 3.3 Ataques de Red

| Ataque | Descripción | Objetivo |
|--------|------------|----------|
| **DoS (Denial of Service)** | Saturar un servidor con peticiones masivas desde un único origen hasta dejarlo inoperativo | Disponibilidad |
| **DDoS (Distributed DoS)** | Igual que DoS, pero desde miles de orígenes simultáneos (botnet de dispositivos zombis) | Disponibilidad |
| **MITM (Man In The Middle)** | El atacante se interpone de forma invisible entre dos partes que comunican, interceptando y potencialmente alterando la información | Confidencialidad, Integridad |
| **DNS Spoofing / DNS Poisoning** | Alterar las resoluciones DNS para redirigir al usuario a sitios fraudulentos | Confidencialidad |
| **ARP Spoofing** | Enviar mensajes ARP falsos en una red local para asociar la MAC del atacante con la IP de otro dispositivo (gateway) | Confidencialidad |
| **SQL Injection** | Insertar código SQL malicioso en formularios web para acceder o modificar bases de datos | Confidencialidad, Integridad |
| **Cross-Site Scripting (XSS)** | Inyectar scripts maliciosos en páginas web visitadas por otros usuarios | Confidencialidad |
| **Brute Force / Dictionary Attack** | Probar todas las combinaciones posibles (fuerza bruta) o un listado de contraseñas comunes (diccionario) hasta encontrar la correcta | Autenticidad |

---

## 4. Topología de la Red: Clearnet, Deep Web y Dark Web

### 4.1 Estructura en capas de Internet

La conectividad global se divide operativamente en tres niveles de accesibilidad:

| Capa | Accesibilidad | Porcentaje estimado | Contenido | Acceso |
|------|--------------|---------------------|-----------|--------|
| **Surface Web / Clearnet** | Pública e indexada por buscadores | ~4-5% | Páginas web estáticas, blogs, tiendas online, Wikipedia, redes sociales públicas | Google, Bing, navegadores convencionales |
| **Deep Web** | No indexada, requiere autenticación | ~90-95% | Intranets corporativas, correo webmail, plataformas bancarias, bases de datos gubernamentales (SIGO, SIDENPOL), historiales médicos, bases de datos académicas | Navegadores convencionales + credenciales de acceso |
| **Dark Web** | Cifrada e intencionalmente oculta | <1% | Mercados ilegales (armas, drogas, datos robados), foros de hacking, pero también comunicaciones de disidentes políticos y periodismo protegido | Navegador TOR, I2P, Freenet |

### 4.2 La Dark Web y TOR

**TOR (The Onion Router)** es el sistema de navegación anónima más conocido. Su nombre proviene de su funcionamiento por capas de cifrado (como las capas de una cebolla):
- El tráfico del usuario pasa a través de una cadena de al menos **3 nodos (relays)** voluntarios repartidos por el mundo.
- Cada nodo solo conoce al nodo anterior y al siguiente, nunca el origen y el destino simultáneamente.
- Los sitios web de la Dark Web utilizan dominios con extensión **.onion** y son inaccesibles desde navegadores convencionales.

**Otros protocolos de Dark Web**: **I2P** (Invisible Internet Project, dominios .i2p) y **Freenet** (red descentralizada y distribuida para publicación anónima).

**⚠️ Dato de examen**: La Deep Web NO es sinónimo de Dark Web. La Deep Web (web profunda) es simplemente todo lo que no indexan los buscadores: tu correo electrónico, la intranet de tu trabajo, tu panel bancario online. Es legal y cotidiana. La Dark Web es un subconjunto intencional de la Deep Web, diseñado para el anonimato.

---

## 5. Mecanismos de Defensa y Buenas Prácticas

### 5.1 Defensa técnica

| Mecanismo | Función | Detalles |
|-----------|---------|----------|
| **Antivirus / Antimalware** | Detectar, bloquear y eliminar software malicioso | Basado en firmas (bases de datos de malware conocido), heurística (comportamiento sospechoso) y análisis en la nube |
| **Firewall (Cortafuegos)** | Filtrar el tráfico de red según reglas predefinidas (IPs de origen/destino, puertos, protocolos) | Puede ser por software (Windows Defender Firewall) o por hardware (appliance dedicado). Separa la red interna de la externa |
| **IDS/IPS** | Sistema de Detección (IDS) o Prevención (IPS) de Intrusiones. Monitoriza el tráfico en busca de patrones de ataque | IDS solo alerta; IPS además bloquea el tráfico sospechoso automáticamente |
| **SAI (Sistema de Alimentación Ininterrumpida) / UPS** | Baterías que proporcionan energía eléctrica temporal ante cortes o picos de tensión, protegiendo el hardware y permitiendo un apagado ordenado | Esencial para servidores, centros de datos y equipos críticos de las FCSE |
| **VPN (Virtual Private Network)** | Crea un túnel cifrado sobre una red pública (Internet) para simular una red privada segura | Permite el teletrabajo seguro y protege las comunicaciones en redes WiFi públicas |
| **WAF (Web Application Firewall)** | Firewall especializado en proteger aplicaciones web contra ataques como SQL Injection, XSS, etc. | Capa de protección específica para servidores web |
| **SIEM (Security Information and Event Management)** | Plataforma que recopila, correlaciona y analiza logs de múltiples fuentes en tiempo real para detectar incidentes | Centro neurálgico de un SOC (Security Operations Center) |
| **DLP (Data Loss Prevention)** | Herramientas que detectan y previenen la fuga de información sensible fuera de la organización | Monitoriza email, USBs, subidas a la nube, impresiones |

### 5.2 Criptografía

| Tipo | Claves | Funcionamiento | Algoritmos | Uso |
|------|--------|---------------|------------|-----|
| **Simétrica** | Una sola clave compartida (secreta) | Emisor y receptor usan la misma clave para cifrar y descifrar | AES (128/256 bits), DES, 3DES, Blowfish | Cifrado de datos en reposo, cifrado de disco, VPN |
| **Asimétrica (Clave Pública)** | Par de claves: pública (compartida) + privada (secreta) | Lo que se cifra con una clave solo se descifra con la otra | RSA, ECC, DSA | Firma digital, intercambio de claves, certificados digitales |
| **Hash (Resumen)** | No usa claves; función unidireccional | Genera un "resumen" único de longitud fija a partir de datos de cualquier tamaño. Irreversible | SHA-256, SHA-512, MD5 (obsoleto), SHA-3 | Verificar integridad de archivos, almacenar contraseñas |

**Firma electrónica / digital**: Basada en criptografía asimétrica. El firmante cifra un hash del documento con su clave privada. El receptor lo descifra con la clave pública del firmante, verificando simultáneamente autoría (autenticidad), no repudio e integridad.

**Certificado digital**: Documento electrónico emitido por una Autoridad de Certificación (CA) que vincula una clave pública con la identidad de su titular. En España, la FNMT-RCM emite el certificado digital de persona física. Regulado por la **Ley 6/2020**, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza (transpone el Reglamento eIDAS europeo).

### 5.3 Principios operativos

**Principio del Menor Privilegio**: Cada usuario, proceso o programa solo debe tener los permisos estrictamente necesarios para realizar su función. Nada más. Esto limita el daño potencial si una cuenta es comprometida.

**Defensa en Profundidad**: Implementar múltiples capas de seguridad superpuestas (firewall perimetral + segmentación de red + antivirus + control de accesos + cifrado + monitorización). Si una capa falla, la siguiente detiene la amenaza.

**Principio Zero Trust ("Confianza Cero")**: No se confía en ningún usuario, dispositivo o red, ni siquiera dentro del perímetro corporativo. Cada acceso requiere verificación continua (autenticación, autorización y validación de seguridad del dispositivo) en cada solicitud.

**Regla de Copias de Seguridad 3-2-1**: Frente al ransomware y la pérdida de datos:
- **3** copias de los datos (el original + 2 copias de seguridad).
- En **2** soportes distintos (disco duro local + nube, o disco externo + cinta).
- **1** copia fuera del edificio (off-site: nube remota, sede alternativa, caja fuerte ignífuga externa).

**Autenticación Multifactor (MFA / 2FA)**: Exigir al menos dos factores de autenticación de categorías distintas antes de conceder acceso:
- **Algo que sabes**: Contraseña, PIN.
- **Algo que tienes**: Teléfono móvil (SMS, app OTP como Google Authenticator), token físico, tarjeta inteligente.
- **Algo que eres**: Biometría (huella dactilar, reconocimiento facial, iris).

### 5.4 Sandboxing (Ejecución en Caja de Arena)
Técnica que ejecuta un programa sospechoso en un entorno aislado y controlado (máquina virtual, contenedor) sin acceso a la red real ni al sistema operativo principal. Se usa en análisis forense digital y en la evaluación de archivos potencialmente maliciosos recibidos en una dependencia policial.

---

## 6. Legislación Española en Materia de Ciberseguridad y Protección de Datos

### 6.1 Marco normativo principal

| Norma | Contenido |
|-------|-----------|
| **Reglamento (UE) 2016/679 (RGPD)** | Reglamento General de Protección de Datos. Directamente aplicable en toda la UE desde el 25 de mayo de 2018. Regula el tratamiento de datos personales |
| **Ley Orgánica 3/2018 (LOPDGDD)** | Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales. Adapta el RGPD al ordenamiento español |
| **Real Decreto 311/2022 (ENS)** | Esquema Nacional de Seguridad. Regula la seguridad de los sistemas de información del sector público |
| **Ley 6/2020** | Reguladora de los servicios electrónicos de confianza (firma electrónica, certificados digitales, sellos de tiempo) |
| **Directiva NIS2 (UE) 2022/2555** | Directiva sobre medidas para un elevado nivel común de ciberseguridad en la UE (pendiente de transposición completa en España) |

### 6.2 Derechos ARSULIPO (Derechos del interesado según RGPD/LOPDGDD)
- **A**cceso: Saber si se tratan tus datos y obtener copia.
- **R**ectificación: Corregir datos inexactos.
- **S**upresión (Derecho al olvido): Eliminar datos personales.
- **U**n límite al tratamiento (Limitación): Restringir el tratamiento en determinados supuestos.
- **L**levar tus datos (Portabilidad): Recibir tus datos en formato estructurado y transferirlos a otro responsable.
- **I**mpugnar (Oposición): Oponerse al tratamiento de tus datos en determinados supuestos.
- **P**erfil automatizado (No ser objeto de decisiones individuales automatizadas): No ser sometido a decisiones basadas únicamente en tratamiento automatizado, incluida la elaboración de perfiles.
- **O**posición: A la toma de decisiones automatizadas.

### 6.3 Autoridad de Control
La **Agencia Española de Protección de Datos (AEPD)** es la autoridad pública independiente encargada de velar por el cumplimiento de la legislación de protección de datos en España.
