# Tema 11. Correo Electrónico: Conceptos Elementales y Funcionamiento

---

## 1. Fundamentos del Correo Electrónico (e-mail)

### 1.1 Definición y Naturaleza
El **correo electrónico** (electronic mail, e-mail) es un servicio de red que permite el intercambio asíncrono de mensajes digitales entre usuarios a través de Internet o de redes privadas corporativas (intranet). Es el sistema de comunicación telemática más utilizado en la Administración Pública española para la tramitación interna, la comunicación interadministrativa y la notificación a ciudadanos en sede electrónica.

**Características esenciales:**
- **Asíncrono**: El emisor envía el mensaje sin necesidad de que el destinatario esté conectado en ese momento. El mensaje queda almacenado en el servidor de correo del destinatario hasta que este lo lea.
- **No presencial**: No requiere la presencia simultánea de emisor y receptor.
- **Instantáneo**: La entrega se produce habitualmente en segundos o minutos.
- **Multiplataforma**: Accesible desde cualquier dispositivo con conexión a Internet (PC, smartphone, tablet) y desde cualquier sistema operativo.
- **Multimedia**: Admite adjuntar archivos de cualquier tipo (documentos, imágenes, hojas de cálculo, PDFs).

### 1.2 Estructura de una Dirección de Correo Electrónico
Una dirección de correo tiene el formato universal: **`nombre_usuario@dominio`**

- **nombre_usuario** (parte local): Identificador único dentro del dominio. Distingue mayúsculas/minúsculas en teoría (RFC 5321), pero en la práctica la mayoría de servidores lo tratan como case-insensitive.
- **@** (arroba): Separador que se lee "at" (en). Su símbolo proviene del latín "ad" y fue elegido por Ray Tomlinson en 1971 para ARPANET.
- **dominio**: Nombre del servidor o proveedor de correo. Identifica la organización. Ejemplos: `gmail.com`, `outlook.es`, `mpt.gob.es` (Ministerio de Política Territorial), `correo.gob.es`.

**Ejemplo completo:** `juan.garcia@mpt.gob.es`

---

## 2. Arquitectura Técnica y Protocolos de Correo

### 2.1 Componentes del Sistema de Correo
- **MUA (Mail User Agent / Cliente de correo)**: La aplicación que el usuario utiliza para redactar, enviar, recibir y gestionar sus correos. Ejemplos: Microsoft Outlook, Mozilla Thunderbird, Apple Mail. También incluye los clientes web (webmail): Outlook.com, Gmail.com.
- **MTA (Mail Transfer Agent / Servidor de envío)**: El servidor que recibe el mensaje del cliente y lo encamina hacia el servidor del destinatario a través de Internet. Utiliza el protocolo SMTP.
- **MDA (Mail Delivery Agent)**: El componente del servidor de destino que deposita el mensaje en el buzón del destinatario.
- **Buzón (Mailbox)**: Almacén en el servidor donde se acumulan los mensajes recibidos hasta que el usuario los lee.

### 2.2 Protocolos de Correo Electrónico (Altamente Preguntados)

#### SMTP (Simple Mail Transfer Protocol) — Protocolo de ENVÍO
- **Función**: Transfiere mensajes desde el cliente hacia el servidor de correo saliente, y entre servidores de correo hasta alcanzar el servidor del destinatario.
- **Puerto estándar**: 25 (sin cifrar), 587 (con autenticación y STARTTLS), 465 (SMTPS, cifrado SSL/TLS directo).
- **Dirección**: Exclusivamente de envío. SMTP NO se utiliza para leer o descargar correos.
- **Funcionamiento**: El cliente se conecta al servidor SMTP, se autentica (usuario y contraseña), proporciona la dirección del remitente, la dirección del destinatario, y transmite el cuerpo del mensaje y los adjuntos codificados.

#### POP3 (Post Office Protocol version 3) — Protocolo de DESCARGA
- **Función**: Permite al cliente de correo DESCARGAR los mensajes desde el servidor al dispositivo local del usuario.
- **Puerto estándar**: 110 (sin cifrar), 995 (POP3S, cifrado SSL/TLS).
- **Comportamiento predeterminado**: Al descargar los mensajes, POP3 los **elimina del servidor**. Una vez descargados, solo existen en el dispositivo local. Esto implica que los correos no son accesibles desde otros dispositivos.
- **Opción configurable**: La mayoría de clientes permiten configurar POP3 para "dejar una copia en el servidor" durante un período determinado.
- **Ventaja**: Funciona offline (tras la descarga, no necesita conexión para leer los correos descargados).
- **Desventaja**: No hay sincronización real entre dispositivos. Si se lee un correo en el PC, seguirá marcado como no leído en el móvil (si se mantiene copia).

#### IMAP (Internet Message Access Protocol) — Protocolo de SINCRONIZACIÓN
- **Función**: Permite al cliente de correo acceder y gestionar los mensajes **directamente en el servidor**, manteniéndolos siempre almacenados en él.
- **Puerto estándar**: 143 (sin cifrar), 993 (IMAPS, cifrado SSL/TLS).
- **Comportamiento**: Los mensajes permanecen en el servidor. El cliente muestra una vista sincronizada en tiempo real. Si se lee un correo en el PC, aparecerá como leído también en el móvil y en la versión web.
- **Ventaja**: Sincronización completa multidispositivo. Las carpetas, los estados de lectura, las etiquetas y las marcas de seguimiento se sincronizan globalmente.
- **Desventaja**: Requiere conexión a Internet permanente para acceder al correo. Ocupa espacio de almacenamiento en el servidor (cuota de buzón).
- **Es el protocolo predominante actualmente** en entornos profesionales y administrativos.

#### Tabla Comparativa de Protocolos (Resumen de Examen)
| Característica | SMTP | POP3 | IMAP |
|---|---|---|---|
| **Función** | ENVIAR correos | DESCARGAR correos | SINCRONIZAR correos |
| **Puerto sin cifrar** | 25 / 587 | 110 | 143 |
| **Puerto con SSL/TLS** | 465 / 587 | 995 | 993 |
| **Ubicación del mensaje** | En tránsito | Dispositivo local | Servidor |
| **Sincronización** | No aplica | No | Sí (multidispositivo) |
| **Requiere Internet** | Solo al enviar | Solo al descargar | Permanentemente |

### 2.3 Protocolos de Seguridad del Correo
- **SSL (Secure Sockets Layer) / TLS (Transport Layer Security)**: Protocolos de cifrado que protegen la comunicación entre el cliente y el servidor, impidiendo que terceros intercepten el contenido del mensaje en tránsito (cifrado "en tránsito").
- **STARTTLS**: Extensión que permite convertir una conexión no cifrada (puerto estándar) en una conexión cifrada tras la negociación inicial.
- **S/MIME (Secure/Multipurpose Internet Mail Extensions)**: Estándar de cifrado y firma digital de extremo a extremo para correos. Utiliza certificados X.509 para garantizar que el mensaje solo pueda ser leído por el destinatario previsto, y que la identidad del remitente sea verificable.
- **SPF, DKIM, DMARC**: Mecanismos de autenticación del dominio remitente que combaten la suplantación de identidad y el phishing a nivel de servidor.

---

## 3. Microsoft Outlook 365: El Cliente de Correo de Referencia

### 3.1 Naturaleza y Alcance
**Microsoft Outlook 365** no es únicamente un gestor de correo electrónico, sino un **PIM (Personal Information Manager)** integral que unifica:
- Correo electrónico.
- Calendario y programación de reuniones.
- Contactos (Libreta de direcciones / People).
- Tareas y lista de pendientes (To-Do).
- Notas.

### 3.2 Interfaz Principal de Outlook 365
- **Panel de carpetas (izquierda)**: Muestra la estructura jerárquica de carpetas de correo.
- **Lista de mensajes (centro)**: Muestra los encabezados de los mensajes de la carpeta seleccionada (remitente, asunto, fecha, vista previa del contenido, indicadores de adjuntos, clasificación por colores).
- **Panel de lectura (derecha o inferior)**: Muestra el contenido completo del mensaje seleccionado sin necesidad de abrirlo en ventana separada.
- **Barra de navegación inferior**: Iconos para alternar entre las vistas de Correo ✉, Calendario 📅, Contactos 👤, Tareas ✓ y Notas 📝.
- **Cinta de opciones (Ribbon)**: Con pestañas contextuales para Inicio (Nuevo correo, Responder, Reenviar, Eliminar, Mover, Categorizar), Enviar/Recibir, Carpeta y Vista.

### 3.3 Las Carpetas Predeterminadas de Outlook
| Carpeta | Función |
|---|---|
| **Bandeja de entrada (Inbox)** | Recibe todos los mensajes nuevos entrantes |
| **Bandeja de salida (Outbox)** | Almacena temporalmente los mensajes pendientes de envío (hasta que se completa la conexión con el servidor SMTP) |
| **Elementos enviados (Sent Items)** | Copia de todos los mensajes enviados por el usuario |
| **Borradores (Drafts)** | Mensajes redactados parcialmente y guardados sin enviar |
| **Elementos eliminados (Deleted Items)** | Mensajes borrados (papelera). Pueden restaurarse hasta su vaciado definitivo |
| **Correo no deseado (Junk / Spam)** | Mensajes clasificados automáticamente como correo basura por los filtros antispam |
| **Archivo (Archive)** | Almacenamiento de mensajes antiguos que se desean conservar fuera de la bandeja de entrada principal |
| **Carpetas personalizadas** | Carpetas creadas por el usuario para organizar mensajes por proyecto, tema, departamento, etc. |

---

## 4. Composición y Envío de Mensajes

### 4.1 Campos de un Nuevo Mensaje
- **De (From)**: Dirección del remitente. Habitualmente se autocompleta con la cuenta configurada. Si se tienen múltiples cuentas, se puede seleccionar desde cuál enviar.
- **Para (To)**: Dirección(es) del destinatario principal. Pueden incluirse varios separados por punto y coma.
  
**Campos fundamentales de examen — CC vs CCO:**
- **CC (Con Copia / Carbon Copy)**: Los destinatarios incluidos en este campo reciben una copia del mensaje y **todos los demás destinatarios (Para y CC) pueden ver sus direcciones**. Se utiliza para informar a personas que no son el destinatario principal pero deben estar al tanto.
- **CCO (Con Copia Oculta / BCC - Blind Carbon Copy)**: Los destinatarios incluidos aquí reciben una copia del mensaje pero **su dirección es invisible para el resto de destinatarios (Para, CC y otros CCO)**. Se utiliza para:
  - Proteger la privacidad de los destinatarios (envíos masivos donde no se quiere revelar la lista de direcciones, conforme a la LOPDGDD).
  - Enviar copia informativa sin que el destinatario principal lo sepa.

- **Asunto (Subject)**: Línea descriptiva breve del contenido del mensaje. Aunque no es obligatoria, su omisión genera una advertencia en la mayoría de clientes de correo. Es fundamental para la organización y búsqueda posterior de correos.
- **Cuerpo del mensaje**: Área principal de redacción. Admite texto plano o formato HTML (negrita, cursiva, listas, colores, tablas, imágenes incrustadas).

### 4.2 Archivos Adjuntos
- Se añaden mediante el botón "Adjuntar archivo" o arrastrando directamente al cuerpo del mensaje.
- Límite de tamaño habitual: **25 MB** por mensaje en la mayoría de servidores (Gmail, Outlook.com). Para archivos mayores, Outlook 365 ofrece la opción de adjuntar como **enlace de OneDrive** (el archivo se sube a la nube y se comparte un enlace de acceso).
- **Precaución de seguridad**: Los archivos ejecutables (`.exe`, `.bat`, `.cmd`, `.msi`, `.vbs`) suelen ser bloqueados o filtrados automáticamente por los servidores de correo como medida de protección contra malware.

### 4.3 Opciones de Envío Avanzadas
- **Prioridad del mensaje**: Alta (!) o Baja (↓). Es una etiqueta visual para el destinatario; no afecta a la velocidad de entrega real.
- **Solicitar confirmación de entrega**: El servidor de destino envía un aviso cuando el mensaje llega al buzón.
- **Solicitar confirmación de lectura**: El destinatario recibe una solicitud para confirmar que ha abierto y leído el mensaje. El destinatario puede aceptar o rechazar enviar dicha confirmación.
- **Firma automática**: Bloque de texto predefinido (nombre, cargo, teléfono, logotipo) que se inserta automáticamente al final de cada mensaje nuevo o respuesta. Se configura en Archivo > Opciones > Correo > Firmas.
- **Cifrar el mensaje**: Protege el contenido con S/MIME o cifrado de Microsoft 365 para que solo el destinatario pueda leerlo.
- **Firmar digitalmente**: Adjunta una firma digital que certifica la identidad del remitente y la integridad del mensaje (no ha sido alterado en tránsito).
- **Retrasar la entrega**: Programar la fecha y hora de envío del mensaje.

### 4.4 Responder, Responder a todos y Reenviar
- **Responder (Reply)**: Envía una respuesta únicamente al remitente original. El asunto se antecede automáticamente con "RE:".
- **Responder a todos (Reply All)**: Envía la respuesta al remitente Y a todos los destinatarios incluidos en Para y CC del mensaje original. **Precaución**: Puede generar envíos masivos no deseados si la lista de destinatarios es amplia.
- **Reenviar (Forward)**: Envía el mensaje recibido (con su contenido y adjuntos) a un nuevo destinatario que no participaba en la conversación original. El asunto se antecede con "RV:" o "FW:".

---

## 5. Organización y Gestión del Correo

### 5.1 Búsqueda y Filtrado
- **Barra de búsqueda**: Permite buscar mensajes por remitente, asunto, contenido del cuerpo, fecha, adjuntos, categoría. Se encuentra en la parte superior de la lista de mensajes.
- **Searchqueryoperators**: `de:nombre`, `asunto:texto`, `tiene:datos adjuntos`, `recibido:esta semana`.
- **Carpetas de búsqueda virtuales**: Carpetas que muestran automáticamente los mensajes que cumplen ciertos criterios (ej: correos no leídos de todos los buzones, correos con adjuntos, correos marcados).

### 5.2 Reglas de Organización Automática
Outlook permite crear **reglas** que se ejecutan automáticamente al recibir (o enviar) mensajes que cumplan condiciones predefinidas:
- Ejemplo: "Cuando llegue un correo de `director@mpt.gob.es`, moverlo automáticamente a la carpeta 'Dirección' y marcarlo como de alta importancia".
- Condiciones: Remitente, destinatario, asunto que contiene palabras clave, tamaño del mensaje, con/sin adjuntos.
- Acciones: Mover a carpeta, copiar, eliminar, reenviar automáticamente, marcar como leído, aplicar categoría de color, reproducir sonido, mostrar alerta.

### 5.3 Categorías de Color y Marcas de Seguimiento
- **Categorías de color**: Etiquetas de colores que permiten clasificar visualmente los mensajes por proyecto, prioridad o tema (roja, azul, verde, naranja, morada, amarilla). Son personalizables con nombres descriptivos.
- **Marcas de seguimiento (Follow-up flags)**: Indicadores (banderitas) para señalar mensajes que requieren acción futura. Se puede asignar una fecha de vencimiento que genera un recordatorio.

### 5.4 Respuestas Automáticas (Fuera de la oficina)
- Función esencial en la Administración para ausencias programadas (vacaciones, permisos, comisiones de servicio).
- Configuración: Archivo > Respuestas automáticas (Fuera de la oficina). Permite:
  - Activar/desactivar las respuestas automáticas.
  - Programar un período (fecha de inicio y fin).
  - Redactar un mensaje diferente para remitentes internos (dentro de la organización) y externos.
  - Ejemplo: "Me encuentro ausente del [fecha] al [fecha]. Para asuntos urgentes, contacte con [compañero] en [correo alternativo]."

---

## 6. Webmail vs Cliente de Escritorio

### 6.1 Webmail (Acceso por navegador)
- Acceso a través del navegador web (ej: `outlook.office.com`, `mail.google.com`).
- No requiere instalación de software adicional.
- Accesible desde cualquier dispositivo con navegador e Internet.
- Funcionalidad habitualmente más limitada que el cliente de escritorio.
- Depende completamente de la conexión a Internet.

### 6.2 Cliente de Escritorio (Aplicación instalada)
- Software instalado localmente (Microsoft Outlook, Mozilla Thunderbird).
- Mayor funcionalidad: reglas avanzadas, integración con calendario y contactos, acceso offline (con IMAP configurado para caché local).
- Requiere configuración inicial (servidor entrante, saliente, puertos, seguridad).
- Suele ser el estándar en puestos de trabajo de la Administración del Estado.

---

## 7. Spam, Phishing y Buenas Prácticas de Seguridad en el Correo

### 7.1 Correo no Deseado (Spam)
Mensajes masivos no solicitados, habitualmente de carácter publicitario o fraudulento. Los filtros antispam modernos utilizan heurística, listas negras (blacklists), análisis bayesiano y verificación SPF/DKIM/DMARC para clasificarlos automáticamente.

### 7.2 Phishing por Correo
El vector de ataque más frecuente en la Administración Pública. Correos que suplantan la identidad de entidades legítimas (Agencia Tributaria, Seguridad Social, bancos) para robar credenciales o instalar malware.

**Señales de alerta:**
- Remitente con dominio sospechoso (ej: `aeat-info@mail-aeat.ru` en lugar de `@aeat.es`).
- Errores ortográficos y gramaticales.
- Urgencia o amenazas ("Su cuenta será bloqueada en 24 horas").
- Enlaces que al pasar el cursor revelan URLs diferentes a las mostradas en el texto.
- Solicitud de datos personales, contraseñas o información bancaria.

### 7.3 Buenas Prácticas (Recomendaciones CCN-CERT)
- No abrir adjuntos ni hacer clic en enlaces de remitentes desconocidos.
- Verificar siempre el dominio real del remitente.
- No reenviar cadenas ni correos sospechosos.
- Usar CCO para envíos a múltiples destinatarios externos (protección de datos, LOPDGDD).
- No utilizar el correo corporativo para fines personales.
- Activar la autenticación en dos factores (2FA/MFA) en la cuenta de correo.
- Cifrar los mensajes con información sensible o datos personales.
