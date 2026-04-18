# Tema 6. Introducción al Sistema Operativo: Windows 11

---

## 1. El Sistema Operativo: Definición, Funciones y Evolución

### 1.1 Concepto de Sistema Operativo
Un **sistema operativo (S.O.)** es el conjunto de programas fundamentales que actúa como intermediario entre el usuario y el hardware del ordenador. Es el primer software que se carga al encender el equipo (tras el firmware BIOS/UEFI) y permanece activo hasta su apagado. Sin sistema operativo, el hardware es una masa inerte de circuitos sin utilidad práctica.

### 1.2 Funciones Esenciales del Sistema Operativo
1. **Gestión del procesador (CPU)**: Planifica y distribuye el tiempo de CPU entre los distintos procesos en ejecución (multitarea). Algoritmos de planificación: Round Robin, prioridades, FIFO.
2. **Gestión de la memoria (RAM)**: Asigna bloques de memoria a los programas, controla qué zonas están libres u ocupadas y previene que un programa invada la zona de memoria de otro. Implementa la **memoria virtual** mediante el archivo de paginación (*pagefile.sys* en Windows): cuando la RAM física se agota, porciones de datos menos utilizados se transfieren temporalmente al disco.
3. **Gestión de archivos y almacenamiento**: Organiza la información en el disco mediante un **sistema de archivos** (NTFS en Windows, ext4 en Linux, APFS en macOS). Mantiene la tabla de asignación que vincula cada archivo con los clústeres físicos que ocupa.
4. **Gestión de dispositivos de E/S**: Coordina la comunicación con periféricos a través de los controladores (drivers), gestionando las colas de impresión, las transferencias USB, la entrada de teclado y ratón.
5. **Gestión de la seguridad**: Control de acceso por usuarios y contraseñas, permisos de archivos (lectura, escritura, ejecución), cifrado de unidades (BitLocker) y cortafuegos integrado.
6. **Interfaz con el usuario**: Proporciona el entorno gráfico (GUI - *Graphical User Interface*) o de línea de comandos (CLI) mediante el que el usuario interactúa con el sistema.

### 1.3 Evolución Histórica de los Sistemas Operativos
- **Años 50-60**: Procesamiento por lotes (batch). Sin interacción directa. Sistemas como IBM OS/360.
- **Años 70**: Nacimiento de UNIX (Ken Thompson y Dennis Ritchie, Bell Labs, 1969). Introducción de la multitarea y la multiusuario.
- **Años 80**: Aparición del PC de IBM (1981) con MS-DOS (Microsoft Disk Operating System). Interfaz de línea de comandos sin gráficos. Apple Macintosh (1984) populariza la GUI con ventanas, iconos y ratón.
- **Años 90**: Windows 3.x (entorno sobre MS-DOS), Windows 95 (primer Windows con menú Inicio, barra de tareas y sistema de 32 bits híbrido), Windows 98, Windows NT (línea profesional con kernel propio separado de MS-DOS).
- **Años 2000**: Windows XP (2001, fusión definitiva de las líneas doméstica y profesional sobre kernel NT 5.1), Windows Vista (2007), Windows 7 (2009, mejora drástica de rendimiento y usabilidad).
- **Años 2010**: Windows 8 (2012, interfaz Metro con tiles, pantalla de inicio radical que eliminó el botón Inicio), Windows 8.1 (restauración parcial del botón Inicio), **Windows 10** (2015, última versión "clásica", modelo de actualización continua *Windows as a Service*).
- **2021-actualidad**: **Windows 11** (Lanzado el 5 de octubre de 2021, nombre en clave *Sun Valley*). Versión actual de referencia para las oposiciones AGE.

### 1.4 Otros Sistemas Operativos Contemporáneos Relevantes
- **GNU/Linux**: Sistema operativo libre basado en el kernel Linux (Linus Torvalds, 1991). Distribuciones populares: Ubuntu, Debian, Fedora, CentOS, SUSE. Predominante en servidores web, supercomputadores e infraestructura de la nube.
- **macOS**: Sistema de Apple para sus ordenadores Mac, basado en Darwin (kernel XNU derivado de UNIX BSD).
- **Android**: Sistema operativo de Google para smartphones y tablets, basado en el kernel Linux.
- **iOS/iPadOS**: Sistema de Apple para iPhone y iPad, derivado de macOS.
- **Chrome OS**: Sistema ligero de Google centrado en el navegador Chrome y aplicaciones web.

---

## 2. Windows 11: Requisitos de Instalación (Contenido Clave para Examen)

Windows 11 introdujo unos requisitos mínimos de hardware más exigentes que cualquier versión anterior, siendo objeto frecuente de preguntas en las pruebas selectivas:

| Componente | Requisito mínimo |
|---|---|
| **Procesador** | 1 GHz con 2 o más núcleos, arquitectura de **64 bits** exclusivamente (ya no existe versión de 32 bits) |
| **RAM** | 4 GB mínimo |
| **Almacenamiento** | 64 GB mínimo de espacio libre en disco |
| **Firmware** | **UEFI** con capacidad de **Secure Boot** (Arranque Seguro) |
| **TPM** | Chip **TPM 2.0** (*Trusted Platform Module*) — elemento criptográfico de seguridad por hardware |
| **Pantalla** | Resolución mínima HD 720p (1280 x 720), diagonal superior a 9 pulgadas |
| **Tarjeta gráfica** | Compatible con DirectX 12 y driver WDDM 2.0 |
| **Conexión a Internet** | Necesaria para la configuración inicial y para cuentas Microsoft |

### 2.1 Novedades Disruptivas de Windows 11 frente a Windows 10
1. **Desaparición de la versión de 32 bits**: Windows 11 es exclusivamente 64 bits (x64/ARM64).
2. **Exigencia de TPM 2.0**: Módulo de Plataforma de Confianza, un chip criptográfico dedicado (o integrado en el firmware del procesador) que almacena claves de cifrado, certificados y credenciales de manera aislada y segura. Permite que BitLocker, Windows Hello y la integridad del arranque funcionen con máxima protección.
3. **UEFI Secure Boot obligatorio**: Mecanismo que impide la carga de código no firmado digitalmente durante el arranque, bloqueando rootkits y bootkits que intentarían insertarse antes del sistema operativo.
4. **Rediseño visual completo con Fluent Design System**: Esquinas redondeadas en todas las ventanas, efectos de materiales translúcidos (Mica y Acrylic), nuevos iconos y tipografía Segoe UI Variable.

---

## 3. La Interfaz Gráfica de Windows 11 (GUI Fluent Design)

### 3.1 El Escritorio (Desktop)
Superficie principal de trabajo visible tras el inicio de sesión. Elementos del escritorio:
- **Fondo de escritorio (Wallpaper)**: Imagen personalizable de fondo. Windows 11 introduce los *Temas* con fondos dinámicos.
- **Iconos de escritorio**: Accesos directos a programas, carpetas y archivos. Por defecto, Windows 11 solo muestra la **Papelera de Reciclaje**. Para habilitar iconos clásicos como "Este equipo" o "Panel de Control", se accede desde Configuración > Personalización > Temas > Configuración de iconos del escritorio.
- **Menú contextual**: Al hacer clic derecho sobre el escritorio. Windows 11 presentó un menú contextual simplificado con opciones básicas y un enlace "Mostrar más opciones" para acceder al menú completo clásico de Windows 10.
- **Widgets (Panel de widgets)**: Nueva barra lateral izquierda (accesible con `Win + W`) que muestra contenido dinámico personalizado: noticias, meteorología, cotizaciones, calendario, tareas pendientes y resultados deportivos. Funciona con la cuenta Microsoft y utiliza Microsoft Start.

### 3.2 La Barra de Tareas (Taskbar) — Centrada
**El cambio visual más impactante de Windows 11 respecto a todas las versiones anteriores**. La barra de tareas se desplaza al centro inferior de la pantalla (alineación centrada), rompiendo con más de 25 años de tradición de alineación a la izquierda desde Windows 95.

**Componentes de la Barra de Tareas:**
- **Botón de Inicio (Icono de Windows)**: Abre el nuevo Menú Inicio. Posición central-izquierda.
- **Campo de búsqueda**: Icono de lupa o barra expandida para buscar archivos, aplicaciones, configuraciones y contenido web.
- **Vista de Tareas (Task View)**: Icono que muestra todas las ventanas abiertas y los escritorios virtuales.
- **Iconos de aplicaciones ancladas**: Programas fijados a la barra para acceso rápido. Se anclan haciendo clic derecho sobre la aplicación y seleccionando "Anclar a la barra de tareas".
- **Indicadores de aplicaciones en ejecución**: Una línea sutil bajo el icono señala que la aplicación está abierta.
- **Área de la esquina derecha (System Tray / Bandeja del Sistema)**:
  - *Iconos ocultos*: Flecha (^) que despliega los iconos de aplicaciones en segundo plano (antivirus, servicios cloud, etc.).
  - *Reloj y fecha*: Muestra la hora actual; al hacer clic abre un panel con el **Calendario** y las **Notificaciones** agrupadas.
  - *Iconos de estado de red, sonido y batería*: Al hacer clic sobre ellos se abre el **Panel de Configuración Rápida** (Quick Settings).

**Configuración de la Barra de Tareas**: Se accede desde Configuración > Personalización > Barra de tareas. Permite:
- Cambiar la alineación a **izquierda** (estilo clásico).
- Ocultar/mostrar los iconos de Búsqueda, Vista de Tareas, Widgets y Chat (Teams).
- Ocultar automáticamente la barra cuando no se usa.
- **Limitación de Windows 11**: La barra de tareas solo puede ubicarse en la parte inferior de la pantalla (no se permite moverla a los laterales ni arriba, a diferencia de Windows 10).

### 3.3 El Nuevo Menú de Inicio
**Cambio radical**: Desaparecen completamente los *Live Tiles* (Mosaicos dinámicos) introducidos en Windows 8. El nuevo menú se estructura en:

- **Parte superior — Sección "Anclado"**: Cuadrícula de iconos de aplicaciones que el usuario fija manualmente. Se pueden reorganizar, desanclar y agrupar en carpetas dentro del propio menú.
- **Parte inferior — Sección "Recomendado"**: Muestra archivos abiertos recientemente, documentos recientes de Office 365 y aplicaciones instaladas hace poco. Está vinculada a la actividad del usuario y a la cuenta Microsoft. Se puede desactivar parcialmente desde Configuración > Personalización > Inicio.
- **Botón "Todos las aplicaciones"**: Enlace en la esquina superior derecha de la sección "Anclado" que despliega la lista completa alfabética de todas las aplicaciones instaladas en el equipo.
- **Botón de usuario y apagado**: En la parte inferior del menú, muestra el nombre y foto del perfil del usuario activo, con opciones para Cerrar sesión, Bloquear o Cambiar de usuario. El botón de encendido ofrece: Suspender, Apagar y Reiniciar.

### 3.4 El Panel de Notificaciones y Calendario
Al hacer clic en la zona del reloj (esquina inferior derecha), se abre un panel combinado:
- **Parte superior**: Calendario mensual interactivo con integración de eventos de Outlook.
- **Parte inferior**: Lista cronológica de **Notificaciones** agrupadas por aplicación (correos nuevos, actualizaciones del sistema, alertas de seguridad). Incluye un botón "No molestar" (Focus Assist) y un enlace a Configuración de notificaciones.

### 3.5 El Panel de Configuración Rápida (Quick Settings)
Al hacer clic en los iconos de red/sonido/batería se despliega un panel flotante con controles rápidos de:
- **Wi-Fi**: Activar/desactivar, seleccionar red.
- **Bluetooth**: Activar/desactivar, conectar dispositivos emparejados.
- **Modo avión**: Desactivar todas las comunicaciones inalámbricas.
- **Ahorro de batería** (en portátiles): Reduce consumo limitando procesos en segundo plano.
- **Control de volumen**: Deslizador de audio del sistema.
- **Control de brillo**: Deslizador de luminosidad de pantalla (portátiles y monitores compatibles).
- **Accesibilidad**: Lupa, narrador, subtítulos en directo, filtros de color.
- **Transmitir (Cast)**: Enviar la pantalla a un dispositivo Miracast.
- **Punto de acceso móvil**: Compartir conexión de internet del PC.
- Enlace al icono de lápiz para **editar los botones rápidos** y personalizar qué opciones se muestran.

---

## 4. Gestión de Ventanas y Multitarea Avanzada

### 4.1 Anatomía de una Ventana en Windows 11
Toda ventana de aplicación comparte una estructura común:
- **Barra de título**: Muestra el nombre del documento y la aplicación. Permite arrastrar la ventana por la pantalla.
- **Botones de control** (esquina superior derecha):
  - *Minimizar* (—): Reduce la ventana a un icono en la barra de tareas.
  - *Maximizar* (□): Expande la ventana al tamaño completo de la pantalla. Si ya está maximizada, restaura al tamaño anterior.
  - *Cerrar* (✕): Cierra la aplicación o la ventana activa.
- **Bordes y esquinas redondeadas**: El diseño Fluent de W11 aplica radios de curvatura en las esquinas. Las ventanas son redimensionables arrastrando sus bordes.
- **Barra de menús o Cinta de opciones**: Varía según la aplicación.
- **Área de trabajo / contenido**: Zona central donde se visualiza el documento o la interfaz de la aplicación.
- **Barra de estado**: Franja inferior con información contextual (número de página, zoom, estadísticas).
- **Barras de desplazamiento**: Vertical y horizontal, para navegar por contenido que excede el tamaño visible.

### 4.2 Snap Layouts (Diseños de Acoplamiento)
Novedad estrella de Windows 11. Al posicionar el puntero del ratón sobre el botón de **Maximizar** de cualquier ventana (sin hacer clic), aparece un panel flotante con **6 diseños predefinidos** para dividir la pantalla:
- Dos mitades iguales (50/50).
- Lateral estrecho + amplio (33/67).
- Lateral amplio + estrecho (67/33).
- Tres tercios iguales (33/33/33).
- Cuatro cuadrantes iguales (25/25/25/25).
- Un panel grande + dos pequeños apilados.

Al seleccionar una zona del diseño, la ventana activa se acopla automáticamente en ese espacio, y el sistema muestra las demás ventanas abiertas para elegir cuáles ocuparán las zonas restantes.

**Snap Groups** (Grupos de Acoplamiento): Cuando varias ventanas se acoplan juntas en un diseño, Windows 11 las recuerda como un **grupo**. Al pasar el cursor sobre el icono de cualquiera de ellas en la barra de tareas, aparece una miniatura del grupo completo, permitiendo restaurar todo el conjunto de ventanas acopladas con un solo clic.

**Atajos de teclado para Snap:**
- `Win + Flecha izquierda`: Acopla la ventana activa a la mitad izquierda.
- `Win + Flecha derecha`: Acopla la ventana a la mitad derecha.
- `Win + Flecha arriba`: Maximiza la ventana.
- `Win + Flecha abajo`: Restaura o minimiza la ventana.

### 4.3 Escritorios Virtuales (Virtual Desktops)
Permiten crear múltiples espacios de trabajo independientes, cada uno con sus propias ventanas abiertas, para separar contextos (por ejemplo: un escritorio para la tramitación administrativa y otro para el correo y la consulta web).

**Gestión de Escritorios Virtuales:**
- **Crear nuevo escritorio**: `Win + Ctrl + D`.
- **Navegar entre escritorios**: `Win + Ctrl + Flecha izquierda/derecha`.
- **Cerrar el escritorio actual**: `Win + Ctrl + F4` (las ventanas se transfieren al escritorio adyacente).
- **Abrir Vista de Tareas**: `Win + Tab` (muestra todos los escritorios y ventanas, permite arrastrar ventanas entre escritorios, renombrar escritorios y asignar fondos de pantalla diferentes a cada uno).

### 4.4 Administrador de Tareas (Task Manager)
Herramienta esencial de supervisión y control de procesos del sistema.
- **Apertura**: `Ctrl + Shift + Esc` (acceso directo) o `Ctrl + Alt + Supr` (pantalla de seguridad con enlace al Administrador).
- **Pestañas principales**:
  - *Procesos*: Lista de aplicaciones y procesos en segundo plano con su consumo de CPU, memoria, disco y red.
  - *Rendimiento*: Gráficos en tiempo real de uso de CPU, memoria, discos, GPU y red.
  - *Historial de aplicaciones*: Consumo acumulado de recursos por aplicación.
  - *Inicio*: **Muy importante para exámenes**. Permite habilitar o deshabilitar programas que se ejecutan automáticamente al encender el equipo, afectando al tiempo de arranque.
  - *Usuarios*: Sesiones activas y consumo por usuario.
  - *Detalles*: Lista completa de procesos con PID (Process ID), estado y prioridad.
  - *Servicios*: Servicios del sistema (procesos sin interfaz gráfica que operan en segundo plano).

---

## 5. Configuración del Sistema (Settings) vs Panel de Control

### 5.1 La Aplicación Configuración (Settings)
Windows 11 profundiza en la migración de ajustes desde el antiguo Panel de Control hacia la aplicación moderna **Configuración** (`Win + I`). Su interfaz presenta un panel de navegación lateral izquierdo con las siguientes categorías principales:

- **Sistema**: Pantalla (resolución, escala, frecuencia de refresco), sonido, notificaciones, modo de concentración, energía y batería, almacenamiento (liberación de espacio), multitarea (Snap Layouts), pantalla remota, portapapeles, "Acerca de" (información del equipo: nombre, procesador, RAM, edición de Windows, ID de producto).
- **Bluetooth y dispositivos**: Emparejamiento Bluetooth, impresoras y escáneres, mouse, touchpad, cámaras, teléfono (enlace a Android).
- **Red e Internet**: Wi-Fi, Ethernet, VPN, proxy, punto de acceso móvil (hotspot), modo avión, propiedades de red (IP, DNS, MAC).
- **Personalización**: Fondo de escritorio, colores del sistema (tema claro u oscuro), temas, pantalla de bloqueo, barra de tareas, menú Inicio, fuentes instaladas.
- **Aplicaciones**: Aplicaciones instaladas (desinstalar, modificar, valor predeterminadas), aplicaciones predeterminadas (qué programa abre cada tipo de archivo), características opcionales, aplicaciones de inicio.
- **Cuentas**: Información de la cuenta Microsoft o local, opciones de inicio de sesión (Windows Hello: reconocimiento facial, huella dactilar, PIN, contraseña, clave de seguridad FIDO2), familia y otros usuarios.
- **Hora e idioma**: Fecha y hora (manual o automática por Internet), idioma y región, escritura, reconocimiento de voz.
- **Accesibilidad**: Tamaño del texto, lupa, filtros de color, narrador, subtítulos automáticos, reconocimiento de voz, teclas de ratón, teclado en pantalla.
- **Privacidad y seguridad**: Seguridad de Windows (antivirus Defender, firewall, protección de cuentas), cifrado del dispositivo, permisos de Windows (diagnósticos, historial de actividad), permisos de aplicaciones (cámara, micrófono, ubicación, contactos).
- **Windows Update**: Actualizaciones del sistema, historial de actualizaciones, opciones avanzadas (horas activas, actualizaciones opcionales), programa Windows Insider.

### 5.2 El Panel de Control (Legacy)
Aunque Microsoft migra progresivamente todas las opciones a Configuración, el **Panel de Control clásico** aún persiste en Windows 11 para ciertos ajustes avanzados no completamente migrados:
- Programas y características (desinstalar programas con más detalle).
- Herramientas administrativas (Visor de eventos, Servicios, Administración de equipos, Administrador de discos).
- Opciones de energía avanzadas (planes de energía personalizados).
- Cuentas de usuario avanzadas (netplwiz).
- Conexiones de red avanzadas (adaptadores de red, IP manual detallada).
- Acceso: Se puede buscar "Panel de Control" en la barra de búsqueda de Windows.

---

## 6. Cuentas de Usuario en Windows 11

### 6.1 Tipos de Cuentas
- **Cuenta Microsoft (en línea)**: Vinculada a una dirección de correo electrónico (Outlook, Hotmail, Live). Sincroniza configuración, temas, historial de actividad y archivos de OneDrive entre dispositivos. Es la opción predeterminada y recomendada por Microsoft durante la instalación de Windows 11.
- **Cuenta local**: Funciona exclusivamente en el equipo, sin vinculación con servicios en la nube de Microsoft. No requiere conexión a Internet.
- **Cuenta de directorio activo (Active Directory)**: Utilizada en entornos corporativos y de la Administración Pública, gestionada centralizadamente por el departamento de TIC a través de un servidor de dominio Windows Server.

### 6.2 Niveles de Privilegios
- **Administrador**: Control total sobre el equipo. Puede instalar y desinstalar software, modificar la configuración del sistema, crear y eliminar cuentas de otros usuarios, acceder a todos los archivos.
- **Usuario estándar**: Puede usar programas instalados y modificar su propia configuración, pero no puede instalar software que afecte a todo el sistema ni modificar archivos de configuración críticos.
- **Control de Cuentas de Usuario (UAC - User Account Control)**: Mecanismo de seguridad que solicita confirmación elevada (mediante diálogo de permisos) cuando un programa o acción intenta realizar cambios que requieren nivel de administrador, incluso si el usuario actual es administrador.

### 6.3 Opciones de Inicio de Sesión (Windows Hello)
Windows 11 potencia la autenticación biométrica y sin contraseña:
- **Reconocimiento facial**: Requiere cámara infrarroja compatible (Windows Hello Face). Desbloqueo por análisis 3D del rostro.
- **Huella dactilar**: Mediante lector biométrico integrado o externo USB.
- **PIN numérico**: Código local asociado al dispositivo (no se transmite por Internet, a diferencia de la contraseña de la cuenta).
- **Contraseña**: Método tradicional alfanumérico.
- **Clave de seguridad física (FIDO2/U2F)**: Dispositivo USB o NFC que actúa como segundo factor de autenticación.
- **Contraseña de imagen**: Gestos sobre una imagen seleccionada por el usuario.

---

## 7. Herramientas Nativas del Sistema y Utilidades Integradas

### 7.1 Herramientas de Productividad
- **Bloc de notas (Notepad)**: Editor de texto plano minimalista, renovado en W11 con pestañas, modo oscuro y buscador mejorado.
- **Calculadora**: Modos estándar, científica, programador, conversores de unidades. Modo gráfico de funciones.
- **Herramienta Recortes (Snipping Tool)**: Captura de pantalla con opciones de recorte libre, rectangular, de ventana o pantalla completa. En W11 incorpora grabación de vídeo de pantalla. Atajo: `Win + Shift + S`.
- **Paint**: Editor de imágenes básico con soporte de transparencia, capas y nuevo Cocreator con IA generativa.
- **Grabadora de Voz**: Captura y edición básica de audio.
- **Mapas**: Cartografía basada en Bing Maps.
- **Fotos**: Visor y editor básico de imágenes con funciones de recorte, ajuste, filtros y creación de vídeos.
- **Reproductor multimedia (Media Player)**: Reproductor de audio y vídeo integrado que sustituye al antiguo Groove Music y Windows Media Player.

### 7.2 Herramientas de Administración del Sistema
- **Liberador de espacio en disco**: Limpia archivos temporales, caché del sistema, archivos de actualizaciones antiguas y contenido de la Papelera de Reciclaje. Accesible desde Configuración > Sistema > Almacenamiento > Recomendaciones de limpieza.
- **Desfragmentar y optimizar unidades**: Para HDDs, reorganiza los fragmentos de archivos dispersos en clústeres contiguos, mejorando el rendimiento de acceso. Para SSDs, ejecuta el comando TRIM (libera bloques Flash marcados como eliminados, manteniendo el rendimiento). Se programa de forma automática semanalmente.
- **Información del sistema (msinfo32)**: Muestra información detallada del hardware, componentes y entorno de software instalado.
- **Símbolo del sistema (cmd.exe)**: Consola de línea de comandos heredada de MS-DOS. Comandos frecuentes: `dir`, `cd`, `copy`, `move`, `del`, `ipconfig`, `ping`, `tracert`.
- **PowerShell**: Línea de comandos avanzada basada en .NET con lenguaje de scripting completo. Más potente que cmd.exe.
- **Terminal de Windows (Windows Terminal)**: Aplicación moderna que unifica en pestañas el acceso a PowerShell, cmd.exe y WSL (Windows Subsystem for Linux).

---

## 8. Atajos de Teclado Esenciales de Windows 11 (Preguntados en Examen)

| Atajo | Función |
|---|---|
| `Win` | Abrir/cerrar el Menú de Inicio |
| `Win + D` | Mostrar/ocultar el Escritorio (minimizar todo) |
| `Win + E` | Abrir el Explorador de archivos |
| `Win + I` | Abrir Configuración (Settings) |
| `Win + L` | Bloquear el equipo (pantalla de bloqueo) |
| `Win + S` o `Win + Q` | Abrir la Búsqueda de Windows |
| `Win + R` | Abrir el cuadro de diálogo Ejecutar |
| `Win + V` | Abrir el Historial del portapapeles |
| `Win + W` | Abrir el Panel de Widgets |
| `Win + Tab` | Abrir la Vista de Tareas (escritorios virtuales) |
| `Win + Shift + S` | Captura de pantalla con Recortes (Snipping Tool) |
| `Win + Ctrl + D` | Crear nuevo escritorio virtual |
| `Win + Ctrl + F4` | Cerrar el escritorio virtual actual |
| `Win + Ctrl + ← / →` | Navegar entre escritorios virtuales |
| `Win + Flecha ← / →` | Acoplar ventana a mitad izquierda/derecha (Snap) |
| `Win + Flecha ↑ / ↓` | Maximizar / restaurar-minimizar ventana |
| `Alt + Tab` | Cambiar entre ventanas abiertas (ciclo rápido) |
| `Alt + F4` | Cerrar la ventana activa o apagar desde el escritorio |
| `Ctrl + Shift + Esc` | Abrir el Administrador de Tareas directamente |
| `Ctrl + Alt + Supr` | Pantalla de seguridad (Administrador, Bloquear, Cerrar sesión, Cambiar usuario) |
| `F2` | Renombrar elemento seleccionado |
| `F5` | Actualizar la ventana activa |
| `F11` | Pantalla completa en el navegador o Explorador |
| `Ctrl + Z` | Deshacer última acción |
| `Ctrl + Y` | Rehacer acción deshecha |
| `Ctrl + C` / `Ctrl + X` / `Ctrl + V` | Copiar / Cortar / Pegar |
| `Ctrl + A` | Seleccionar todo |
| `Impr Pant (PrtSc)` | Capturar pantalla completa al portapapeles |
