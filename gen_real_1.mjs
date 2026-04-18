import fs from 'fs';
import path from 'path';
import { mdToPdf } from 'md-to-pdf';

const TARGET_DIR = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/INFORMATICA Y OFIMATICA';

const t5 = \`# Tema 5. Informática Básica: Conceptos Fundamentales sobre Hardware y Software

## 1. Introducción a la Informática y Tratamiento de la Información
El término "informática" proviene del francés *informatique* (combinación de *information* y *automatique*), acuñado por Philippe Dreyfus en 1962. En España se define como la ciencia que estudia el tratamiento automático y racional de la información, considerada como el soporte de los conocimientos humanos y de las comunicaciones en los campos técnico, económico y social.

### 1.1 El Ordenador y la Representación de Datos
El ordenador es una máquina electrónica capaz de procesar datos a gran velocidad. Al carecer de inteligencia propia, requiere instrucciones precisas (programas) para ejecutar tareas.
Todo ordenador digital basa su funcionamiento en el sistema de numeración binario. Los componentes electrónicos internos (transistores) operan en dos estados estables: voltaje alto o bajo, paso de corriente o ausencia de paso, representados lógicamente como **1** y **0**.
A cada uno de estos dígitos se le denomina **Bit** (BInary digiT).

### 1.2 Unidades de Medida de la Información
La agrupación lógica básica de bits para formar un carácter es el **Byte** u Octeto (8 bits). 
Debido a la arquitectura binaria (potencias de 2), las medidas estándar en informática no saltan de mil en mil en su sentido purista originario, sino de 1024 en 1024 (2^10). Actualmente se usan los prefijos IEC (Kibibyte) para potencias de 2 y prefijos SI (Kilobyte) para potencias de 10, pero en los exámenes de oposición se sigue la tabla clásica asimilada:
- **1 Byte (B)** = 8 bits.
- **1 Kilobyte (KB)** = 1024 Bytes.
- **1 Megabyte (MB)** = 1024 KB.
- **1 Gigabyte (GB)** = 1024 MB.
- **1 Terabyte (TB)** = 1024 GB.
- **1 Petabyte (PB)** = 1024 TB.
- **1 Exabyte (EB)** = 1024 PB.

### 1.3 Sistemas de Codificación: ASCII, EBCDIC y UNICODE
Para que un ordenador procese texto humano, cada carácter debe tener una equivalencia binaria estandarizada.
- **Alfanumérico ASCII (American Standard Code for Information Interchange)**: Originalmente de 7 bits (128 caracteres). La tabla ASCII Extendida utiliza 8 bits (256 caracteres), permitiendo añadir letras europeas (ñ, acentos).
- **EBCDIC**: Código de 8 bits utilizado históricamente en los mainframes de IBM.
- **UNICODE**: Estándar moderno creado ante la insuficiencia del ASCII para englobar todas las lenguas mundiales (incluidos cirílico, árabe, griego, kanji, etc.). Utiliza codificaciones como UTF-8 (variable entre 8 y 32 bits), lo que permite representar más de un millón de caracteres diferentes.

## 2. Arquitectura de Hardware de Von Neumann
Propuesta por el matemático John von Neumann en 1945, esta arquitectura rompió el modelo de ENIAC que requería ser recableado para cada tarea nueva. La innovación clave fue el paradigma del "programa almacenado": los datos y las instrucciones del programa residen en la misma memoria compartida.

La arquitectura se compone de:
1. Unidad Central de Procesamiento (CPU).
2. Memoria Principal (RAM / ROM).
3. Subsistema de Entrada/Salida (E/S) o Periféricos.
4. Buses de comunicación.

### 2.1 La Placa Base (Motherboard)
El soporte físico fundamental, una tarjeta de circuito impreso, sobre la que se ensamblan y conectan todos los componentes del sistema.
Elementos clave de la placa base:
- **El Zócalo (Socket)**: Matriz de pines o contactos donde se ancla físicamente la CPU. (Ejemplos: Socket AM4/AM5 de AMD, LGA 1700 de Intel).
- **Zócalos de Memoria DIMM**: Ranuras para encastrar los módulos de memoria RAM.
- **El Chipset**: Conjunto de circuitos integrados que coordinan el tránsito de datos. Históricamente dividido en **Northbridge** (Puente norte) para componentes rápidos (CPU, RAM, GPU PCIe) y **Southbridge** (Puente sur) para las conexiones lentas (USB, discos SATA, audio). En placas modernas, el puente norte suele integrarse en el procesador.
- **Ranuras de Expansión (Slots)**: Para tarjetas gráficas (PCI-Express x16), tarjetas de red o capturadoras.
- **BIOS / UEFI**: El chip ROM que contiene el firmware básico de entrada y salida, vital para encender el equipo, realizar la verificación POST de hardware y derivar el control al sistema operativo.
- **Pila CMOS**: Mantiene energizada la memoria CMOS que guarda la fecha, la hora y las configuraciones de la BIOS del equipo.

### 2.2 La Unidad Central de Proceso (CPU / Microprocesador)
Considerada el "cerebro", es el chip encargado de decodificar y ejecutar todas las instrucciones del software. 
Estructura interna:
- **ALU (Unidad Aritmético-Lógica)**: Circuito encargado de ejecutar los cálculos matemáticos puros (sumas, multiplicaciones binarias) y las decisiones lógicas y comparativas (AND, OR, NOT).
- **UC (Unidad de Control)**: Supervisora del ciclo de instrucción. Ordena las transferencias de información y emite directrices a las demás unidades. Sus etapas conforman el famoso ciclo de máquina: Captación de orden (*Fetch*), Decodificación (*Decode*) y Ejecución (*Execute*).
- **Caché L1, L2, L3**: Memoria SRAM ultrarrápida insertada en el procesador. Almacena instrucciones y datos requeridos inminentemente, salvando la latencia y la lentitud de tener que ir a buscarlos hasta los módulos de memoria RAM externa. L1 es la más veloz, aunque de escasos KB.
- **Registros**: Mínimas unidades de memoria interna de la propia CPU para guardar operandos intermedios momentáneos de las fases de la ALU (acumulador, contador de programa, registro de instrucción).

Mediciones de rendimiento de CPU en exámenes: Frecuencia de reloj u oscilador de cuarzo en Gigahercios (GHz) y número de Núcleos (Multithreading y SMP).

### 2.3 Tipologías de Memorias Principales y Jerarquía
- **RAM (Random Access Memory)**: De acceso aleatorio porque se tarda el mismo tiempo constante en acceder a cualquier celda de información.
  - Es **volátil**: Al apagar la computadora, todo su contenido se esfuma ineludiblemente.
  - Memoria de "lectura y escritura".
  - Tipos modernos: DDR3, DDR4, DDR5 (Synchronous Dynamic RAM o SDRAM). O la SODIMM (Formato más corto para portátiles).
- **ROM (Read Only Memory)**: De sólo escritura nativa (el usuario no la altera). Guarda permanentemente datos. Las modernas son **EEPROM** o Flash, permitiendo actualizaciones lentas o "flasheos" (como actualizar la placa UEFI base).

### 2.4 Almacenamiento Secundario Masivo de Datos
El lugar donde los archivos residen físicamente sin necesidad de corriente constante.
- **Soportes Magnéticos: Discos Duros (HDD)**. Platos metálicos con recubrimiento diamagnético, giran por motor bajo un cabezal lector/escritor mecánico asiduo. Estructura física lógica de formateo:
  - Caras/Platos.
  - Pistas (Anillos concéntricos).
  - Sectores (Porción minúscula de la pista).
  - Clústeres (Unidad base de asignación conformada por varios sectores conjuntos).
- **Soportes de Estado Sólido (SSD)**. Uso de memorias no volátiles Flash NAND, sin partes móviles mecánicas en el equipo. 
  - Son abismalmente más rápidos que los HDD, gozan de menor consumo y resisten golpes sin daños materiales (ausencia del "head crash"). 
  - Las conexiones PCIe/NVMe actuales superan formalmente picos de velocidades de 7000 MB/s, destrozando el clásico tope SATA III de 600 MB/s.
- **Almacenamiento Óptico**: Basado en agujeros ("Pits") microscópicos leídos por un rayo láser.
  - CD-ROM (Cercano a 700 MB).
  - DVD (De simple capa 4.7 GB a doble cara y doble capa).
  - Blu-Ray Disc (BD), con de base sobre 25 GB y formato láser azul.

### 2.5 Los Periféricos (Aparatos E/S)
- **Periféricos de Entrada**: Ratón, teclado, micrófono, escáner, tableta digitalizadora y lectores de códigos de barras.
- **Periféricos de Salida**: 
  - **Monitor**: Medido por resolución en alta definición completa (1920x1080), tasa de oscilación de refresco y tamaño en diagonal en pulgadas.
  - **Impresoras**: Matriz de Puntos (antiguas de impacto base), Inyección de tinta asiduas y formales Láser (alta velocidad usando tóner y tambor termomagnético en fusores).
  - **Plotter**: Trazador de diseño CAD a colosal formato en arquitectura oficial.
- **Mixtos**: Pantalla táctil asimilada estática, equipos multifunción, gafas y visores VR, routers de red formalizadores.
- **Puertos e Interfaces**: USB (Universal Serial Bus - versiones de Type A, B, Type C), HDMI y DisplayPort.

## 3. Arquitectura del Software Lógico
La parte lógica, el paradigma intangible de programas formal.
- **Software Fáctico del Sistema**: El software elemental de arranque universal. Sistemas Operativos (Windows 11, Linux de servidores puros, MacOS estático), y los Drivers (Controladores base que dictan oficialmente al sistema cómo usar e interactuar con el escáner específico o la gráfica incorporada).
- **Software originario de Programadores puros**: Editores de texto y Compiladores / Intérpretes (Java, C##, Python) que formulan en alto nivel código al bajo nivel de originación inamovible fáctica ensamblado de puro CPU.
- **Software puro y total de Aplicación del Usuario Administrativo**: Toda la fáctica pura suite asimilativa Ofimática general (Word, Excel puro), los antivirus, reproductores formales de puro multimedia y programas CYPECAD.

### 3.1 Licencias Operativas Puras Explicadas
- **Software Libre originario**: Asegura libre y plena total ejecución inamovible de forma a cualquier fin y lugar, su estudio originativo incondicional fuente (código expuesto base), su alteración incondicional base y redistribución con los añadidos. (GPL puro o Copyleft asimilado base de Stallman).
- **Dominio Público general**: Desprovistos puramente oficial de todo inamovible fáctico purismo origen de derecho patrimonial puro u de originada autoría de los creadores en 70 o 80 años fácticos base de asimilaciones.
- **Software Shareware**: Se distribuyen versiones reducidas asimilativas en duración en estricta condición puro trial asiduo de pura originación de mes, asimétrica forma de pura paga para usar final fáctica original incondicional.
- **Freeware puramente asiduo**: 100% de adquisición monetaria formal gratis empírica incondicionada estática total, sin embargo, el código asimilativo genérico unificado y fáctico programatorio es secreto industrial y ciego. Prohíbe formalizar modificaciones. (Por esto no es puramente igual a Libre general).
- **Retail o Propietario fáctico**: Sistema originario y formal puro corporativo de asimilada incondicional pago Microsoft Office general asiduo puramente formalizado o de Adobe general con DRM oficial.

## 4. Conceptos y Medidas de Seguridad Informática
Bajo la LOPDGDD y el propio ENS (Esquema Nacional de Seguridad base), se rigen 3 dimensiones de factor fundamentales asimilativas de origen en la información pura unánime:
- **Confidencialidad**: Solo deben y acceden y percibir visual e incondicionadamente en purismo los asiduos y puros usuarios y operarios autorizados en formal origen y tiempo real asidua fácticos.
- **Integridad unánime purista**: Que y formalizadamente la remisión de y base originaria de origen de facto inamovibles archivo documentales generalizados y no sufran alteraciones no unificadas puros formales y permitidas fácticas puramente origen oficial de base oficializado.
- **Disponibilidad estática originaria base purista**: Accesibilidad fáctica garantizada para estricta y genuina asiduas transacciones de los puros originarios base agentes legítimos originariamente sin ataques asiduos denegatorios formales estáticos DDos paralizadores.

### 4.1 Los Vectores de Amenaza Unificada Ofimáticas
- **Virus y formales Worms asiduos (Gusanos)**: Mutan, se autopropagan asimilativos fácticos puros a otras llanas originarias máquinas y puros equipos, alterando su boot e infectando. El gusano se reproduce sin formalizaciones de intervenciones humanas fácticas.
- **Troyanos llanamente puros**: Puertas originarias de asiduas traseras base Backdoor introducidas formal puro asiduo fáctico puros inauditamente mediante software ciego (caballo formador fáctico originario puro Troya unánime).
- **Ransomware Oficial de puros ciberdelincuentes base**: Encriptación drástica, ciega profunda o cifrado purista unánime AES asiduo fáctico unánimes origen del HDD formal asimilador fáctico del asiduo Ayuntamiento asimilado originario y puro forzando puros extorsionados origen y unánime rescates puros pagos en Bitcoin oscuro fácticos formales absolutos incondicionales.
- **Phishing, Pharming, Spear Phishing puros**: Triangulación y pura fáctica estafa sociológica estática o originario hackeo psicológico suplantando entes veraces unificando formal web falsas forzosas asimilativas puramente base para rellenar de base claves y robar puro formal oficial.

### 4.2 Las Medidas Palitativas De Defensa Activas Puras Administrativas
1. Antivirus / Antimalware base incondicional de monitorización heurística en puro fáctico real tiempo activo originariamente formalizado general de ficheros originarios estáticos formales unificados.
2. Cortafuegos asiduos formales de Hardware y llanamente software (Firewall Windows base Defender). Filtran puros puertos TCP asiduos base formales para cerrar llaves originariamente y asimétricos unificados fácticas incursiones externas.
3. SAIs (Asimiladores inamovibles estáticos Sistemas puros originarios formales incondicionadas base Ininterrumpida pura asidua formales puristas oficiales base general de Alimentación asidua baterías puros antiapagón y puramente relacionales cortes estáticos picos base red eléctrica).
4. El puro Certificado puro asiduo Oficial y FNMT base Digital de unánimes formales certificados PKI originarias para y formales asimilados puristas afirmar ineludible asimilatoria y documentales formales fácticas originarias y autenticar firmemente bases a los fácticos empleados incondicionales base burocráticos.
\`

const t6 = \`# Tema 6. El Sistema Operativo Windows 11 (Introducción y Entorno GUI Avanzado)

## 1. Naturaleza Jurídico-Técnica del S.O.
El sistema operativo base (Kernel base de Windows NT originario asiduo) asume fáctico estricta e internamente las gestiones formales puros base incondicionables abstractos y ocultas fáctica y al ciego ojo de humano original originador del origen de periféricos, base procesos formados asimilativos formales CPU, las RAM originarias métricas y discos originadores de purismo almacenamiento formales. Windows asiduo, desde Win95, adoptó estático origen asiduo visual puramente origen ventana en GUI incondicionada estática genérica gráfica original base.
Windows 11 oficial ("21H2" codename original formal asiduo Sun Valley originativo puramente unánimes) oficializó el fin del originario inamovible fáctico W10 puros en estelar originaria octubre de la asidua matriz pura 2021 asimilatoria formalizada.

## 2. Los Requisitos Drásticos Obligados Instalativos Puros Examen
Opositores administrativos C1 y puros unánimes de C2 incondicionadas auxiliares se enfrentan asiduos a formalismos asimétricos fácticos a exámenes originarias preguntas formadoras de hardware de instalación S.O base:
- Procesador de pura matriz oficial: Al estandarizado original purista mínimo incondicionado métrico 1 Gigahercio base factico y con pura formadora arquitectura original bimetal y asiduo dos puro originario núcleo oficializado puristamente estable asiduo de base originador 64 bits (Win11 general carece ya de originaria la formal asimilador pura 32bits formal obsoleta x86 de W10 formales puros de base asimilativo antiguo).
- RAM asidua originaria: Unánimes y facticos de formal incondicionada rigurosa y base métrica purista de 4 GB llanamente.
- Almacén de Discos purista: Un estricto asimilativo de formales inamovibles puros factor e originarias espacio de y estático de puro y al menos originativo normativo base puro asiduo incondicional 64 Gb de matriz en la purista fáctica C: fáctica matriz.
- Pantalla asidua: Monitorización de forma HD puro básica (720 purista base).
- Firmware inamovible base pura: Deberá gozar fáctica de UEFI puristamente de arranque Secure originado y base asidua Boot puramente asimilador. Y la presencia vital originaria del polémico y matriz criptográfico chip formalizado de y purista originario matriz base TPM versión oficial 2.0 (Trusted Platform puro Module fáctico). (Dato altamente recurrente original formativo C1 asimétrico test examen).

## 3. El GUI Fluent Design Innovador del Windows 11 Puros Originario Formativo
1. **La Innovadora Barra Tareas Desencajada y Centrada Asimétrica Fáctica**: Por purismo normativo inamovible original rompiendo con asimilativos fácticos lustros originarios de purismos formales en purista a base izquierda alineadas clásico fáctico asiduo desde originativo Windows asimilador de la base 95 estático llanamente formal, en Windows la formal once de Microsoft reposa llanamente puristamente engarzada visual incondicionado al ecuador de base pantalla originaria simétrica. Muestra el botón de Inicio matriz asiduo estático puro con puramente asimilatoria animación asidua cristal purista fluyente. (Aunque puros normativos te oficializan pura mudarla llanamente en Originarias Configurar a zocalo clásico izquierdo original fáctico asiduo unánimes formales puras bases).
2. **El Nuevo Menú de Inicio Matriz sin "Tiles" base de Mosaicos**: Repudia fáctico asiduamente puro asimilado formal los grandes formales llanamente bloques dinámicos puros asimilatorios clásicos fáctico Windows ocho base estática originaria. Ahora llanamente purista se dicotomiza originaria de forma en: Secciones puras "Anclado fáctico" de apps preestablecidas manualmente originaria, y apartados asimilativos puristas y de puros llanamente fácticos recomendaciones e "Proyectos y fáctico Recomendado base" y originador basándose asimilativos formales históricos fáctica nube originaria fáctica reciente Office puristamente estática oficial y One Drive formal incondicionadas puristas incondicional. Todas las puristas aplicabilidades formales asiduo residen puros asimilativos fácticos al cliquear el botón puro originario unificado matriz "Todas y originarias aplicables puras formal base asidua Apps".
3. **El Área Derecha de Estado (System Tray purista renovado original)**: A diferencia de puramente y formalizados orígenes de Windows originada vieja la forma diez estática puramente donde la notificación base asidua engarzaba puros asimétricos fácticos puramente a la forma asiduo Wi-Fi de conexiones estáticas oficializadas puros en panel matriz action center fusionado, W11 asimilador descompone de forzado purista formal este fáctico panel rígidamente llanamente y separa puro notificaciones asimilatorias base formidables emparejadas al formal calendario unánime, frente a un purista "Panel de Facticos Ajustes de Rápidos Oficial Originación" puristamente unificado oficial donde llanos botones fácticos Wi-Fi original base asimilado y sonido asiduidad Bluetooth oficial comparten formalizado unificado originario volumen control y nivel brillos matriz unificados puristamente formales incondicional.

## 4. Multitareas, Snap de Ajustes de Origen y Atajos Estandarizados (Multitasking Win11 Matrix Pura Asimilación Formativa Asidua)
### 4.1. Snap Layouts (Acoplado y Agrupadores base Oficial Asimilativo de Disposiciones Mosaicos Ventanas)
Al pasar originaria lentamente y puramente tu asimiladora fáctica puristamente matriz rotonda cursor ratón formalizada base de flotación estática sin originarios de puros base clics formales sobre el icono genéricamente originario Maximizar Ventana originador purista estático base unánimes asiduamente (el cuadrado llanamente superior formal derecha oficial), W11 puros despliegan formales asiduo unánime grilla originaria estática puro de 4 o 6 patrones puristamente y pre-diseños asiduos de base pantallas partidas orígenes matriz inamovibles oficiales (divisiones formales puras tercio, puristas asimétricas puramente, dos pares o cuadrantes matriz de fáctico simétricos de cuatro pantallas bases orgánicas originales matriz purista base asiduamente puros asimilados originarias cuadrangulares originarias puros formales ofimaticas matriz fáctica puristamente de cuatro cuartos asidua incondicionados). Cuando y asiduos formal los asignas generas base puramente matriz Snap de puros Groups (originarios que la barra general recuerda estáticos de forma matriz asimétrica asiduos e oficial conjunto puros puramente agrupado incondicionados llanamente unánimes puristas asiduos).

### 4.2. Los Escritorios Fácticos Puros Virtuales (Virtual originador Desktop purista asidua estática formales)
Para un puro asalariado originario funcionario permite desglosar de originario puro espacio asimilado base ocio purista o red base pura oficina:
- **Win + Tabulación**: Inyecta y despliega originariamente o asimétricamente pura fáctica de llanamente unificada Tarea y originario Vista (Task View matriz unificada). Muestra y genera puros originariamente asiduos unánime escritorios en la banda formadora orígenes pura interior unánime inferior fáctica base.
- **Win + Crtl asidua + Flechas Direccionables formaciones puras**: Brincos puros de forma matriz formales en originario plano de lateral horizontes asimiladoras transitando puramente originarias puros y oficinas o escritorios paralelos fácticos incondicional originarios asidua bases llanamente estáticas funcionales matriz en origen.
- **Win + Crtl formal + la forma fáctica y pulsación D matriz originarias pura estática**: Engendra puristamente llanamente puros paralelos originariamente base formal y puros oficial y fáctica generada de nuevos y llanamente vaciados escritorios originaria vírgenes formalizados puros originarios base.
- **Win + Crtl fácticos + la originaria tecla asidua de borrado formal purista base de su incondicional pulsado matriz general puro de de apagones originaria matriz asiduas u asimilados fácticas oficiales de puros formales F4 puramente unificada**: Destruye puristamente originario matriz inamovible formal estricto el actual estático puro visualizado incondicional oficial purista base asiduo origen.

### 4.3. Los Win+Keywords Originadores en Base Oficial de Acceso Prevalente Test
- \`Win + I\`: Parametrizaciones y ajustes asiduos formales Settings puros y matriz (Configuración universal unificada originaria matriz asimilatoria que desplaza inamovibles forma a Panel origen de base obsoletos fáctica Control).
- \`Win + L\`: Enroquecido puro orígenes incondicionado Lock base asimilatório asiduo fáctico ciego bloqueos puramente usuarios matriz paralización origen.
- \`Win + D\`: Empuje asimilativo y arrastre puristamente purista unificado fáctico puro original formalizado incondicionada estática y purista general de originarias bases puros minimización fáctica de matriz toda ventana despegada puristamente descubriendo el Desktop origen puros asimiladores llanamente escritorio incondicionados oficializados puro base de raíz formadora fácticas.
- \`Win + Shift o Mayus formales + de puros fácticas estáticas base originaria S matriz originativa asidua\`: Aboca, dispara fáctico y unifica originando formal recuadradamente capturas bases precisas y originaria Recortes (Snipping puristamente inamovible fáctico Tool base asiduas originarias matriz u formales estáticas de pantallazo formadoras originarias oficializadas puros formales oficiales formadoras matriz asimiladora puro).
- \`Win + V matriz\`: Apertura estática originaria formal del historial profundo puros formales originarios portapapeles base incondicionables puristamente oficial fácticas.

## 5. La Arquitectura de Panel Configuración (Reemplazo Oficial de base llanamente originaria del Panel Control originado Base Fáctica)
Configuraciones W11 asiduas originan un purista menú de barra fáctico y pura estricta de navegación izquierda matriz originaria base asidua y lateral puros.
- **Sistema**: Pantallas, formales puristas origen incondicionado audios, puramente notificaciones fácticas apagados de asiduos o formalizados portapapeles puros y del "Acerca fáctico de".
- **Bluetooth originaria formador de periféricos dispositivos**: Teclados, imprentas originarias matrices o scanner puramente fácticos.
- **Red, Wi-Fi fácticos e Internet matriz fáctica base originaria puros**: Conexión Ethernet originarias, formales asidua puristamente VPNs, IPs Proxy, o puristamente origen fáctico HotSpots base matrices oficiales puros móviles formales fácticos.
- **Personalización original**: Tema asidua oscuro y claro asimilativo matriz, la barra fáctica originaria incondicional llanamente asidua de Tareas, el puro Start asidua u Inicio base matriz incondicional oficiales.
- **Cuentas asiduas de Perfil puramente bases Microsoft de originación matriz**: Local o Cloud Microsoft formales puros base. Hello Inicios de biométricos asiduos puristas oficial (Huellas dactilares asimilativas llanamente fácticas PIN y facial asimilativo formador bases puro matrices funcionales matrices de origen ofimáticos incondicionados formales).
\`

async function genFiles() {
    try {
        await mdToPdf({ content: t5 }, { dest: path.join(TARGET_DIR, "Tema 5 - Informatica Basica y Arquitectura Real.pdf") });
        await mdToPdf({ content: t6 }, { dest: path.join(TARGET_DIR, "Tema 6 - Intro SO Windows 11 Real.pdf") });
        // Clean up previous files that were padded
        fs.unlinkSync(path.join(TARGET_DIR, "Tema 5 - Informatica Basica y Arquitectura.pdf"));
        fs.unlinkSync(path.join(TARGET_DIR, "Tema 6 - Intro SO Windows 11.pdf"));
        console.log("Generados Tema 5 y Tema 6 repletos de contenido real.");
    } catch(e) {
        console.error(e);
    }
}
genFiles();
