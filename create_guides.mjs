import fs from 'fs';
import path from 'path';
import { mdToPdf } from 'md-to-pdf';

const TARGET_DIR = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/GUARDIA CIVIL/Temario Especifico (No Juridico)';

if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// 1. Historia de la Guardia Civil
const historiaMD = `
# Tema: Historia de la Guardia Civil

## 1. Antecedentes y Fundación
- **Contexto**: Tras la Guerra de la Independencia (1808-1814) y durante el reinado de Isabel II, España sufría graves problemas de seguridad pública, destacando el fenómeno del bandolerismo.
- **Creación**: Creada mediante dos Decretos clave:
  - **Decreto de 28 de marzo de 1844**: Promovido por el Ministro de la Gobernación, Marqués de Peñaflorida. Establece la creación de un "Cuerpo especial de fuerza armada de Infantería y Caballería".
  - **Decreto de 13 de mayo de 1844**: Promovido por el General del Ejército, D. Francisco Javier Girón y Ezpeleta, **II Duque de Ahumada**, quien es considerado el **fundador y primer Inspector General**. Este decreto da verdadera estructura y operatividad militar al cuerpo.
- **Cartilla del Guardia Civil (1845)**: Redactada por el Duque de Ahumada, establece la base moral y deontológica del Cuerpo. El famoso "El honor es su principal divisa..." (Art. 1).

## 2. Consolidación y El Sexenio Revolucionario (1868 - 1874)
- **Papel en el siglo XIX**: La Guardia Civil erradica casi por completo el bandolerismo endémico en Andalucía y otras regiones. Demuestra una lealtad institucional enorme e inquebrantable a los diferentes gobiernos establecidos.
- **Sexenio**: Durante este periodo turbulento (Revolución de "La Gloriosa", Amadeo I, I República), la GC se mantiene firme en la defensa del orden constitucional vigente en cada momento, ganándose el título de "Benemérita" (otorgado oficialmente más tarde).

## 3. Del Reinado de Alfonso XIII a la Segunda República
- **Título de "Benemérita"**: En 1929, se le concede la Gran Cruz de la Orden Civil de Beneficencia, oficializando el apelativo de "Benemérita" por sus incontables actos humanitarios.
- **Segunda República (1931-1936)**: Mantiene su estructura con el gobierno republicano. Durante este periodo ocurren los tristes sucesos de Castilblanco (1931) y Casas Viejas (1933).

## 4. La Guerra Civil y el Franquismo (1936 - 1975)
- **Guerra Civil**: El Cuerpo queda dividido como el resto del país. Al concluir el conflicto militar, la GC sufre una reestructuración.
- **Ley de 15 de marzo de 1940**: Absorbción del Cuerpo de Carabineros (fuerza armada encargada de fronteras y aduanas) por la Guardia Civil. Pasando la GC a tener el control fiscal, de costas y fronteras.
- **Lucha contra el "Maquis"**: Protagoniza las acciones de represión y combate de la guerrilla antifranquista durante la posguerra.
- **Especialización**: Se crean unidades como la Agrupación de Tráfico (1959).

## 5. La Transición y la Democracia (1975 - Actualidad)
- **Constitución de 1978**: Queda consagrada la misión de las FCSE (art 104 CE): proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana.
- **Lucha contra el terrorismo**: ETA fue uno de sus mayores retos operativos y en el que el cuerpo pagó un inmenso coste en vidas. La GC fue clave en la desarticulación de esta banda.
- **Integración de la Mujer (1988)**: Por primera vez en las FCSE, se permite el ingreso de mujeres al Cuerpo (Real Decreto Ley 1/1988).
- **Actuales Fuerzas**: Integración plena en EUROPOL y FRONTEX, labores de misiones de paz internacionales, resguardo de cibercrimen, Seprona, UCO y unidades de élite (UEI).
`;

// 2. Instituciones Internacionales
const institucionesMD = `
# Tema: Instituciones Internacionales

## 1. Organización de las Naciones Unidas (ONU)
- **Fundación**: Creada mediante la Carta de las Naciones Unidas, firmada el 26 de junio de 1945 en San Francisco.
- **Sede**: Nueva York, EE. UU.
- **Estructura Principal**:
  - **Asamblea General**: Órgano deliberativo, todos los países miembros tienen un voto.
  - **Consejo de Seguridad**: Órgano con poder coercitivo. 15 miembros (5 permanentes con poder de veto: EE.UU, Rusia, China, Reino Unido, Francia).
  - **Secretaría General**: Máximo representante diplomático. Actual Secretario General: António Guterres.
  - **Corte Internacional de Justicia**: Órgano judicial ubicado en La Haya.

## 2. Organización del Tratado del Atlántico Norte (OTAN)
- **Fundación**: Tratado de Washington, 4 de abril de 1949.
- **Naturaleza**: Alianza defensiva militar y política intergubernamental. Se rige por el principio de defensa colectiva (Artículo 5).
- **Sede**: Bruselas, Bélgica.
- **Secretario General**: Jens Stoltenberg / Mark Rutte (transición).

## 3. Organizaciones Policiales Internacionales
### INTERPOL (Organización Internacional de Policía Criminal)
- **Sede**: Lyon, Francia.
- **Función**: Mayor organización policial internacional (195 países). Emite "notificaciones" (roja para personas buscadas; amarilla para desaparecidos). Se centra en terrorismo, crimen organizado y ciberdelincuencia.

### EUROPOL (Oficina Europea de Policía)
- **Sede**: La Haya, Países Bajos.
- **Función**: Órgano encargado de facilitar las operaciones de lucha contra la delincuencia en el seno de la UE. Apoya la investigación en delincuencia internacional grave y terrorismo, careciendo de poderes ejecutivos de arresto.

### CEPOL (Agencia de la UE para la Formación Policial)
- **Sede**: Budapest, Hungría.
- **Función**: Diseño, desarrollo y organización de formación de fuerzas policiales de la UE para el fomento de cooperación transfronteriza policial.

### FRONTEX
- **Sede**: Varsovia, Polonia.
- **Función**: Agencia Europea de la Guardia de Fronteras y Costas. Ayuda a los Estados miembros de la Unión a gestionar y vigilar solidariamente sus fronteras exteriores.
`;


// 3. Ciberseguridad
const ciberMD = `
# Tema: Ciberseguridad Práctica y TIC (CCN-CERT)

## 1. Principios Básicos de Ciberseguridad
- **Triada CIA**: Toda estrategia de ciberseguridad busca mantener 3 objetivos clave en la información:
  - **Confidencialidad**: Solo personas autorizadas pueden acceder.
  - **Integridad**: La información no ha sido alterada o borrada sin autorización.
  - **Disponibilidad**: Los datos y sistemas son accesibles cuando es necesario.

## 2. Amenazas y Malware (Tipología)
- **Phishing**: Suplantación de identidad para robo de credenciales mediante comunicaciones electrónicas (email).
- **Ransomware**: Malware que 'secuestra' datos mediante criptografía, cifrándolos y exigiendo un pago (rescate) por recuperarlos.
- **Troyano**: Programa que parece legítimo, pero al ejecutarse abre una puerta trasera ("backdoor") al atacante.
- **DDoS (Ataques de Denegación de Servicio)**: Saturar un servicio mediante miles de peticiones desde una botnet para inutilizarlo.
- **Zero-Day**: Ataque que aprovecha una vulnerabilidad de software de reciente descubrimiento que aún no ha sido parcheada por el desarrollador.

## 3. Deep Web y Dark Web
- **Clearnet (Web Superficial)**: Todo lo que indexan los buscadores estándar (Google, Bing). Representa un pequeño % de internet.
- **Deep Web (Web Profunda)**: Contenido no indexado (bases de datos, intranets, emails no públicos, cuentas bancarias online).
- **Dark Web**: Subsección de la Deep Web que requiere software específico de anonimización (Ej. red TOR, I2P) para acceder. Suele estar asociada a foros "underground" y ciberdelincuencia, aunque su base técnica es proporcionar anonimato y privacidad total.

## 4. Recomendaciones del CCN-CERT (Centro Criptológico Nacional)
- Políticas de Contraseñas "Fuertes": Uso de 2FA (Factor de doble autenticación), evitar palabras de diccionario, uso de gestores de contraseñas.
- Concepto **Zero Trust**: "Nunca confíes, siempre verifica". El sistema no confía inherentemente en ningún usuario o dispositivo.
- Actualización (Parcheo) constante: Aplicar siempre los parches de seguridad para evitar ataques tipo Zero-Day conocidos (N-day).
- Copias de Seguridad (Backup) según principio 3-2-1: 3 copias, en 2 soportes diferentes, con 1 copia off-site o fuera de línea (contra Ransomware).
`;

// 4. Topografia
const topografiaMD = `
# Tema: Topografía Básica

## 1. Conceptos Fundamentales
- **Topografía**: Ciencia que estudia el conjunto de principios y procedimientos que tienen por objeto la representación gráfica de la superficie terrestre con sus formas y detalles tanto naturales como artificiales.
- **Planimetría**: Presenta un terreno en perspectiva 2D, como si fuera plano.
- **Altimetría**: Se encarga de representar las alturas y dimensiones verticales (cotas).
- **Mapa Funcional**: La conjunción de altimetría y planimetría genera el **mapa topográfico**.

## 2. Coordenadas y Meridianos
- **Meridianos**: Líneas imaginarias verticales (semicírculos) que van de Polo a Polo. El más famoso es el de Greenwich (Meridiano 0). Marcan la longitud.
- **Paralelos**: Líneas imaginarias horizontales y paralelas al ecuador. El Ecuador es el Paralelo 0. Marcan la latitud.
- **Latitud**: Distancia angular de cualquier punto de la Tierra con respecto al Ecuador (puede ser Norte o Sur).
- **Longitud**: Distancia angular respecto al meridiano de Greenwich (Este u Oeste).

## 3. Escalas
- **Escala**: Relación matemática que existe entre las dimensiones reales y las del dibujo que representa la realidad sobre un plano o un mapa.
- **Escala numérica**: Ej: 1:50.000. Indica que 1 centímetro en el mapa equivale a 50.000 centímetros (500 m) en la realidad.
- Mapa a pequeña escala (ej 1:1.000.000) representa una gran región con poco detalle. Un plano a gran escala (ej 1:5.000) representa una zona pequeña, pero con sumo detalle.

## 4. Direcciones y Orientación
- **Norte Geográfico (o Verdadero)**: Punto de intersección del eje de rotación de la tierra con su superficie en el hemisferio superior.
- **Norte Magnético**: Punto hacia el que señala la aguja de una brújula.
- **Declinación magnética**: Es el ángulo comprendido entre el Norte Magnético y el Norte Geográfico.
- **Azimut o Acimut**: Ángulo formado por el norte (generalmente el geográfico) y una dirección dada, medido en sentido de la aguja del reloj desde los 0º hasta los 360º.
- **Rumbo**: Ángulo medido con respecto a la línea Norte-Sur, cuyo valor no excede nunca de los 90º. (Ej: N 45º E).

## 5. Curvas de Nivel
- También llamadas **isohipsas**. Son líneas continuas empleadas en los mapas para unir todos los puntos que se encuentran a una misma cota o altura respecto al nivel del mar.
- Cuanto más juntas están entre sí, hay un mayor desnivel o pendiente en el terreno.
- Muestran de forma intuitiva los valles (forma de V apuntando a las alturas) o las crestas/espolones (V apuntando al valle).
`;

// 5. Ingles B1
const inglesMD = `
# Tema: Inglés Básica (Nivel A2 - B1)

## 1. Tenses (Tiempos Verbales)
### Present
- **Present Simple**: Hábitos, rutinas, hechos generales. (\`He goes to work everyday\`).
- **Present Continuous**: Acciones ocurriendo ahora o temporalmente. (\`I am studying right now\`). *Se usa también para futuros planeados cerrados: "I am taking the exam next Monday"*.

### Past
- **Past Simple**: Acciones finalizadas en el pasado en un momento puntual. (\`I went to Paris in 2010\`). Termina en -ed (regulares) o cambia (irregulares).
- **Past Continuous**: Acciones en progreso en un momento concreto del pasado. (\`I was sleeping when the phone rang\`).
- **Present Perfect**: Acciones iniciadas en el pasado que tienen conexión con el presente o experiencias sin especificar cuándo. (\`I have seen that movie\`). *Marcadores típicos: just, already, yet, ever, never, for, since*.

### Future
- **Will**: Promesas, decisiones espontáneas o predicciones no basadas en evidencia física. (\`I will call you later\`).
- **Going to**: Planes e intenciones pensadas con anticipación, o predicciones de algo inminente con evidencia. (\`Look at the clouds, it is going to rain\`).

## 2. Conditionals
- **Zero Conditional**: Hechos reales o científicos. (If + present, present). \`If you heat water, it boils\`.
- **First Conditional**: Probabilidades futuras realistas. (If + present, will + infinitive). \`If I study hard, I will pass\`.
- **Second Conditional**: Hipotéticos e irreales en el presente. (If + past simple, would + infinitive). \`If I were rich, I would buy a boat\`.

## 3. Countable and Uncountable Nouns
- **Countable**: Se pueden contar (apples, cars). Usan a/an, many, few.
- **Uncountable**: Masas o abstractos que no se cuentan individualmente (water, information, money, advice, news). Usan much, little, some.
  *Trampa típica: 'News', 'Advice', y 'Information' son SIEMPRE incontables.*

## 4. Modals (Verbos modales)
- Must (obligación fuerte) / Mustn't (prohibición).
- Can (habilidad, permiso).
- Should (consejo, recomendación).
- Have to (obligación impuesta desde fuera). \`I have to wear a uniform\`. Don't have to implica que "no es necesario" hacerlo (falta de obligación).
`;

// 6. Lengua
const lenguaMD = `
# Tema: Lengua Española y Ortografía 

## 1. Reglas de Acentuación General
- **Agudas**: Su sílaba tónica es la última. Llevan tilde cuando terminan en vocal, -n o -s. (Ej: *camión, compás, menú*).
- **Llanas**: Su sílaba tónica es la penúltima. Llevan tilde cuando terminan en consonante distinta de -n o -s. (Ej: *árbol, césped, lápiz*, o palabras como *tórax*, *bíceps* donde terminan en -s u otra consonante agrupada).
- **Esdrújulas y Sobresdrújulas**: Su sílaba tónica es la antepenúltima (o anterior). **Siempre** llevan tilde. (Ej: *murciélago, dígamelo*).

## 2. Hiatos, Diptongos y Triptongos
- **Vocales abiertas**: A, E, O.
- **Vocales cerradas**: I, U.
- **Diptongo**: Unión de dos vocales en la misma sílaba (Abierta + Cerrada átona, o dos Cerradas diferentes). Siguen reglas generales. (Ej: *cai-mán*, *ciu-dad*).
- **Hiato**: Dos vocales que van juntas pero se pronuncian en sílabas distintas. 
  - Abierta + Abierta, o vocales iguales. Siguen reglas generales de acentuación: (Ej: *le-ón*, *a-é-re-o*).
  - Cerrada tónica + Abierta (o viceversa): **Se tilda siempre la cerrada** sin importar las reglas generales, para romper el diptongo. (Ej: *Ma-rí-a*, *ba-úl*).

## 3. Tilde Diacrítica
Sirve para diferenciar palabras que se escriben igual pero tienen distinta categoría gramatical:
- **el** (artículo) vs **él** (pronombre)
- **tu / mi** (posesivo) vs **tú / mí** (pronombre)
- **te** (pronombre) vs **té** (sustantivo/infusión)
- **de / se** (preposición / pronombre) vs **dé / sé** (verbos dar / saber)
- **si** (conjunción) vs **sí** (afirmación o pronombre, "volvió en sí")
- **mas** (conjunción = pero) vs **más** (adverbio de cantidad)
- **Aún** (cuando se puede sustituir por "todavía" lleva tilde).

\* *Aclaración RAE (2010)*: **Solo**, los demostrativos (*este, ese, aquel*) y la conjunción *o* entre números **ya no llevan tilde diacrítica en ningún caso**.

## 4. Algunos Conflictos Comunes (Porque / Porqué / Por que / Por qué)
- **Por qué**: Interrogativo o exclamativo. \`¿Por qué no vienes?\`
- **Porque**: Conjunción causal (respuesta). \`No voy porque no quiero\`.
- **Porqué**: Sustantivo, equivale a "el motivo". Va con artículo. \`No entiendo el porqué de su actitud\`.
- **Por que**: Preposición + Pronombre relativo. Equivale a "por el cual / la cual". \`Ese es el motivo por que (por el cual) me fui\`.
`;

async function compilePDFs() {
    console.log("Generando PDFs desde Markdown...");

    const filesToGenerate = [
        { name: "Tema - Historia de la Guardia Civil.pdf", content: historiaMD },
        { name: "Tema - Instituciones Internacionales.pdf", content: institucionesMD },
        { name: "Tema - Ciberseguridad CCN-CERT.pdf", content: ciberMD },
        { name: "Tema - Topografia.pdf", content: topografiaMD },
        { name: "Tema - Ingles B1 General.pdf", content: inglesMD },
        { name: "Tema - Lengua Ortografia y Gramatica.pdf", content: lenguaMD }
    ];

    for (const file of filesToGenerate) {
        const dest = path.join(TARGET_DIR, file.name);
        try {
            const pdf = await mdToPdf({ content: file.content }, { dest });
            console.log("✅ Creado PDF:", file.name);
        } catch (error) {
            console.error("❌ Fallo en", file.name, error);
        }
    }
}

compilePDFs();
