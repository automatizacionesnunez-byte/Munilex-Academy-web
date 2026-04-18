import fs from 'fs';
import path from 'path';
import { mdToPdf } from 'md-to-pdf';

const TARGET_DIR = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/POLICIA NACIONAL ESCALA BASICA';

const tema32 = `# TEMA 32. CONCEPTO DE GEOGRAFÍA HUMANA. LA CIUDAD, EL FENÓMENO URBANO. TEORÍAS FUNDAMENTALES DE LA GEOGRAFÍA URBANA. GEOGRAFÍA DE LA POBLACIÓN. EVOLUCIÓN DE LA POBLACIÓN MUNDIAL. PRINCIPIOS DE ECOLOGÍA. ECOLOGÍA SOCIAL

---

## 1. CONCEPTO Y OBJETO DE LA GEOGRAFÍA HUMANA

La Geografía Humana es la rama de la Geografía que estudia las relaciones entre los grupos humanos y el medio físico en el que se desarrollan, analizando cómo las sociedades organizan y transforman el espacio geográfico. Mientras la Geografía Física se ocupa del relieve, el clima, la hidrografía y la vegetación, la Geografía Humana centra su atención en la población, los asentamientos, las actividades económicas, las fronteras políticas y la distribución espacial de los fenómenos sociales.

### 1.1 Ramas principales

- **Geografía de la población (Geodemografía)**: Estudia la distribución, composición, dinámica y movimientos de la población.
- **Geografía urbana**: Analiza la ciudad como fenómeno espacial: su origen, estructura, funciones y problemas.
- **Geografía rural**: Estudia los espacios agrarios, la estructura de la propiedad de la tierra y las actividades agropecuarias.
- **Geografía económica**: Analiza la localización y distribución espacial de las actividades productivas por sectores.
- **Geografía política**: Estudia la organización política del espacio: Estados, fronteras, geopolítica.
- **Geografía cultural**: Analiza la distribución de los fenómenos culturales en el espacio (lenguas, religiones, etnias).

## 2. LA CIUDAD Y EL FENÓMENO URBANO

### 2.1 Concepto de ciudad

No existe una definición universal de ciudad. Los criterios para definirla varían según el país y la disciplina. Los criterios más utilizados son:
- **Criterio cuantitativo-demográfico**: Núcleo de población por encima de un umbral determinado (en España, el INE considera urbano a partir de 10.000 habitantes).
- **Criterio funcional**: Predominio de actividades económicas no agrarias (industria, comercio, servicios, administración).
- **Criterio morfológico**: Edificación densa y continua, trama de calles, dotaciones y equipamientos urbanos.
- **Criterio sociológico**: Modos de vida, actitudes y relaciones sociales específicamente urbanos (anonimato, heterogeneidad, movilidad social).

### 2.2 El proceso de urbanización

La urbanización es el proceso de concentración creciente de la población en ciudades. Es uno de los fenómenos demográficos más importantes de la historia contemporánea. Desde mediados del siglo XX, la población urbana mundial ha crecido exponencialmente, superando por primera vez a la población rural en 2007 según datos de Naciones Unidas. Se estima que en 2050, el 68% de la población mundial vivirá en ciudades.

Fases del proceso de urbanización: urbanización (concentración), suburbanización (expansión periférica), desurbanización (pérdida de población del centro) y reurbanización (revitalización de los centros históricos).

### 2.3 El fenómeno metropolitano

Las áreas metropolitanas son aglomeraciones urbanas formadas por una ciudad central y los municipios periféricos que mantienen con ella relaciones funcionales intensas (commuting, dependencia de servicios). Ejemplos en España: Madrid, Barcelona, Valencia, Sevilla, Bilbao.

## 3. TEORÍAS FUNDAMENTALES DE LA GEOGRAFÍA URBANA

### 3.1 Escuela de Chicago (ecología urbana)

La Escuela de Ecología Urbana de Chicago, desarrollada en las décadas de 1920 y 1930 por sociólogos como Robert Park, Ernest Burgess y Roderick McKenzie, aplicó conceptos de la ecología biológica al análisis de la ciudad:

- **Modelo de las zonas concéntricas de Burgess (1925)**: La ciudad se organiza en anillos concéntricos alrededor de un Distrito Central de Negocios (CBD): zona de transición, zona de residencia obrera, zona residencial de clase media y zona de cercanías (commuters). Los grupos sociales compiten por el espacio urbano mediante procesos de invasión, sucesión y segregación.

### 3.2 Modelo sectorial de Hoyt (1939)

Homer Hoyt propuso que la ciudad no crece en anillos concéntricos sino en sectores radiales que se extienden a lo largo de las principales vías de comunicación. Los usos del suelo se distribuyen en cuñas sectoriales.

### 3.3 Modelo de núcleos múltiples de Harris y Ullman (1945)

Chauncy Harris y Edward Ullman sostuvieron que la ciudad moderna no se organiza en torno a un único centro, sino alrededor de múltiples núcleos especializados: el centro de negocios, las zonas industriales, los subcentros comerciales, los campus universitarios.

## 4. GEOGRAFÍA DE LA POBLACIÓN

### 4.1 Distribución de la población mundial

La distribución de la población en la Tierra es extremadamente desigual. Más del 60% de la humanidad se concentra en Asia (China, India, Indonesia, Japón). Europa, América del Norte y las costas de África y América del Sur concentran la mayor parte del resto. Las grandes zonas despobladas son los desiertos, las regiones polares, las altas montañas y las selvas tropicales densas.

### 4.2 Conceptos demográficos fundamentales

- **Tasa de natalidad**: Número de nacimientos por cada 1.000 habitantes en un año.
- **Tasa de mortalidad**: Número de defunciones por cada 1.000 habitantes en un año.
- **Crecimiento natural o vegetativo**: Diferencia entre la tasa de natalidad y la tasa de mortalidad.
- **Tasa de fecundidad**: Número de nacimientos por cada 1.000 mujeres en edad fértil (15-49 años).
- **Índice sintético de fecundidad (ISF)**: Número medio de hijos por mujer. El nivel de reemplazo generacional es de 2,1.
- **Esperanza de vida al nacer**: Número medio de años que se espera que viva un recién nacido.
- **Saldo migratorio**: Diferencia entre la inmigración y la emigración en un periodo dado.
- **Pirámide de población**: Representación gráfica de la estructura por sexo y edad de una población. Tipos: progresiva (base ancha, países jóvenes), estacionaria, regresiva (base estrecha, países envejecidos).

### 4.3 La Teoría de la Transición Demográfica

Modelo que describe la evolución demográfica de las sociedades en cuatro fases:
1. **Régimen demográfico antiguo**: Alta natalidad y alta mortalidad → crecimiento lento o nulo.
2. **Transición inicial**: Se reduce la mortalidad (avances sanitarios) pero se mantiene alta natalidad → crecimiento demográfico explosivo.
3. **Transición final**: Desciende la natalidad (urbanización, industrialización, acceso a anticoncepción) → el crecimiento se desacelera.
4. **Régimen demográfico moderno**: Baja natalidad y baja mortalidad → crecimiento lento o incluso negativo (envejecimiento).

España se encuentra en la fase 4, con un ISF de 1,16 (uno de los más bajos del mundo), una elevada esperanza de vida (83 años) y un marcado envejecimiento demográfico.

## 5. PRINCIPIOS DE ECOLOGÍA

### 5.1 Concepto de ecología

La Ecología es la ciencia que estudia las relaciones de los organismos vivos entre sí y con su medio ambiente. El término fue acuñado por Ernst Haeckel en 1866. Los conceptos clave son:

- **Ecosistema**: Unidad funcional compuesta por los organismos vivos (biocenosis) y el medio físico (biotopo) en interacción.
- **Cadena trófica**: Secuencia de relaciones alimentarias entre organismos.
- **Biodiversidad**: Variedad de especies, genes y ecosistemas de un territorio.
- **Desarrollo sostenible**: Satisfacer las necesidades del presente sin comprometer la capacidad de las generaciones futuras (Informe Brundtland, 1987).

### 5.2 Principales problemas ecológicos

- Cambio climático y calentamiento global.
- Deforestación y pérdida de biodiversidad.
- Contaminación atmosférica, hídrica y del suelo.
- Desertificación y agotamiento de recursos naturales.
- Gestión de residuos y economía circular.

## 6. ECOLOGÍA SOCIAL

La Ecología Social, desarrollada por Murray Bookchin, estudia las relaciones entre los problemas ecológicos y los problemas sociales, sosteniendo que la crisis ambiental tiene su raíz en las estructuras jerárquicas y de dominación de la sociedad.

En el ámbito policial, la Ecología Social se vincula con la **Criminología Ambiental**: el estudio de cómo las características del entorno urbano (iluminación, diseño del espacio público, densidad, flujos peatonales) influyen en la distribución espacial del delito. Conceptos como la **Prevención del Crimen Mediante el Diseño Ambiental (CPTED)** de C. Ray Jeffery y Oscar Newman son directamente aplicables a la labor policial de prevención.
`;

const tema33 = `# TEMA 33. LA SEGURIDAD. CONCEPTO. SEGURIDAD INDIVIDUAL Y SEGURIDAD COLECTIVA. LA INSEGURIDAD. POLICÍA DE SEGURIDAD Y POLICÍA DE ORDEN PÚBLICO. SEGURIDAD PÚBLICA Y SEGURIDAD PRIVADA

---

## 1. CONCEPTO DE SEGURIDAD

### 1.1 Definición

La seguridad, en su acepción más amplia, puede definirse como la ausencia de riesgo, amenaza o peligro, o como la situación en la que los derechos y libertades de las personas están efectivamente protegidos. La RAE la define como «cualidad de seguro» y «libre y exento de todo peligro, daño o riesgo».

La seguridad no es un fin en sí mismo, sino un medio para el ejercicio efectivo de los derechos y libertades. Sin seguridad, la libertad, la igualdad y el resto de derechos constitucionales quedan vacíos de contenido real.

### 1.2 Dimensiones de la seguridad

- **Seguridad individual**: Protección de la persona frente a agresiones contra su vida, integridad, libertad y patrimonio.
- **Seguridad colectiva o pública**: Protección del orden público, la paz social y el funcionamiento de las instituciones democráticas.
- **Seguridad ciudadana**: Concepto que integra la seguridad individual y colectiva en el contexto de la convivencia democrática, centrado en la protección del libre ejercicio de los derechos y libertades (art. 1 LO 4/2015).
- **Seguridad nacional**: Protección de la soberanía, integridad territorial, orden constitucional e intereses vitales de la nación frente a amenazas externas e internas (Ley 36/2015 de Seguridad Nacional).
- **Seguridad humana**: Concepto acuñado por el PNUD (1994) que amplía el foco de la seguridad más allá de lo militar, incluyendo la seguridad alimentaria, sanitaria, ambiental, económica, comunitaria, política y personal.

## 2. SEGURIDAD INDIVIDUAL Y SEGURIDAD COLECTIVA

### 2.1 Seguridad individual

La seguridad individual se refiere al derecho de toda persona a sentirse y estar protegida frente a las amenazas contra su persona y sus bienes. La Constitución Española reconoce en su artículo 17.1 que «toda persona tiene derecho a la libertad y a la seguridad».

### 2.2 Seguridad colectiva

La seguridad colectiva se refiere a la protección del conjunto de la sociedad frente a las amenazas que ponen en peligro la convivencia pacífica, el orden público y el funcionamiento de las instituciones. El artículo 104.1 CE establece que las Fuerzas y Cuerpos de Seguridad tienen como misión proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana.

### 2.3 Tensión libertad-seguridad

Uno de los debates centrales de las democracias contemporáneas es el equilibrio entre libertad y seguridad. Las restricciones de libertad en nombre de la seguridad (controles policiales, videovigilancia, interceptación de comunicaciones, estados de alarma) deben estar siempre sujetas al principio de proporcionalidad, necesidad y legalidad, bajo el control judicial.

## 3. LA INSEGURIDAD

### 3.1 Seguridad objetiva y seguridad subjetiva

- **Seguridad objetiva**: Se mide a través de indicadores estadísticos de criminalidad (tasa de delitos por cada 1.000 habitantes, operaciones policiales, detenciones).
- **Seguridad subjetiva o percepción de seguridad**: Es la sensación de seguridad o inseguridad que experimentan los ciudadanos, influida por factores como la cobertura mediática de los delitos, la experiencia personal de victimización, el entorno urbano, variables sociodemográficas y los estereotipos sobre delincuencia y peligrosidad.

Es frecuente que la percepción de inseguridad sea mayor que el nivel real de criminalidad, fenómeno conocido como «paradoja de la seguridad». La gestión policial moderna debe abordar tanto la seguridad objetiva como la subjetiva.

### 3.2 Factores que influyen en la inseguridad ciudadana

- Desigualdad social y pobreza.
- Desempleo, especialmente juvenil.
- Consumo de drogas y alcohol.
- Degradación urbanística y abandono de espacios públicos.
- Debilidad de los vínculos comunitarios.
- Cobertura mediática sensacionalista.
- Fenómenos migratorios mal gestionados.

## 4. POLICÍA DE SEGURIDAD Y POLICÍA DE ORDEN PÚBLICO

### 4.1 Policía de seguridad

La policía de seguridad tiene como función principal la prevención y represión de las conductas delictivas que atentan contra la vida, integridad, libertad y patrimonio de los ciudadanos. Es la labor policial cotidiana: patrullaje preventivo, atención a las víctimas, investigación criminal, detención de sospechosos.

### 4.2 Policía de orden público

La policía de orden público tiene como función el mantenimiento de la tranquilidad y normalidad de la vida ciudadana en los espacios públicos. Se activa especialmente en situaciones de concentraciones masivas, manifestaciones, eventos deportivos, altercados callejeros y situaciones de emergencia. Las Unidades de Intervención Policial (UIP) del CNP y los antidisturbios de las policías autonómicas son los cuerpos especializados.

### 4.3 MODELO POLICIAL ESPAÑOL (LO 2/1986)

La LO 2/1986 de FCSE establece el modelo policial español basado en la distribución competencial:
- **Cuerpo Nacional de Policía (CNP)**: Competencias en capitales de provincia y municipios designados. Funciones de policía judicial, extranjería, DNI, control de fronteras, investigación criminal.
- **Guardia Civil**: Competencias en el resto del territorio nacional. Funciones de vigilancia de vías de comunicación, costas, fronteras terrestres, resguardo fiscal, medio ambiente, armas y explosivos.
- **Policías autonómicas**: Los Mossos d'Esquadra (Cataluña), la Ertzaintza (País Vasco), la Policía Foral (Navarra) y las policías autonómicas en proceso de creación.
- **Policías locales**: Dependientes de los municipios. Funciones de policía administrativa, tráfico urbano, colaboración con las FCSE.

## 5. SEGURIDAD PÚBLICA Y SEGURIDAD PRIVADA

### 5.1 Seguridad pública

La seguridad pública es un servicio público esencial reservado a las Administraciones Públicas y ejercido por las FCSE. Su fundamento constitucional está en los artículos 104 (misión de las FCSE) y 149.1.29ª (competencia exclusiva del Estado en seguridad pública).

### 5.2 Seguridad privada

La seguridad privada está regulada por la **Ley 5/2014, de 4 de abril, de Seguridad Privada**, que la define como un servicio complementario y subordinado a la seguridad pública. Se ejerce por empresas de seguridad autorizadas y personal habilitado (vigilantes de seguridad, escoltas privados, detectives privados, directores de seguridad).

**Principios rectores de la seguridad privada según la Ley 5/2014:**
- Subordinación a la seguridad pública.
- Complementariedad respecto de la función policial.
- Colaboración con las FCSE.
- Control administrativo por parte del Ministerio del Interior.

**Ámbitos de actuación:**
- Vigilancia y protección de bienes, establecimientos y eventos.
- Protección de personas (escoltas).
- Transporte de fondos y objetos valiosos.
- Instalación y mantenimiento de sistemas de seguridad.
- Centrales de alarma.
- Investigación privada (detectives).

### 5.3 Diferencias fundamentales

| Aspecto | Seguridad Pública | Seguridad Privada |
|---------|-------------------|-------------------|
| Naturaleza | Servicio público | Actividad privada regulada |
| Titularidad | Estado | Empresas privadas |
| Personal | Funcionarios públicos | Personal laboral habilitado |
| Ámbito | Todo el territorio | Espacios privados o contratados |
| Autoridad | Agentes de la autoridad | Sin condición de autoridad pública |
| Uso de la fuerza | Legítimo y regulado | Muy limitado (legítima defensa) |
| Armas | Sí | Solo vigilantes con armas (excepcionalmente) |

## 6. NUEVOS RETOS DE SEGURIDAD EN EL SIGLO XXI

- **Terrorismo yihadista y de extrema derecha**: Amenaza persistente que requiere inteligencia, cooperación internacional y vigilancia de la radicalización.
- **Crimen organizado transnacional**: Narcotráfico, trata de seres humanos, tráfico de armas, blanqueo de capitales.
- **Ciberdelincuencia**: Delitos informáticos de alcance global.
- **Amenazas híbridas**: Combinación de medios militares, cibernéticos, desinformación y presión económica por parte de actores estatales y no estatales.
- **Cambio climático y seguridad**: Migraciones climáticas, conflictos por recursos, catástrofes naturales.
`;

const tema34 = `# TEMA 34. DROGODEPENDENCIAS. CONCEPTOS FUNDAMENTALES. CLASIFICACIÓN DE LAS DROGAS. PRINCIPALES SUSTANCIAS. EFECTOS EN LA SALUD Y LA CONDUCTA. FACTORES DE RIESGO Y PROTECCIÓN. MARCO NORMATIVO. PLAN NACIONAL SOBRE DROGAS

---

## 1. CONCEPTOS FUNDAMENTALES

### 1.1 Definiciones de la OMS

- **Droga**: Toda sustancia que, introducida en el organismo, puede modificar una o más de sus funciones (definición de la OMS, 1969). En sentido estricto, droga de abuso es aquella sustancia psicoactiva cuyo consumo puede generar dependencia.
- **Uso**: Consumo esporádico o moderado que no genera problemas significativos.
- **Abuso**: Patrón de consumo que provoca consecuencias adversas (sanitarias, familiares, laborales, legales) sin haber alcanzado la dependencia.
- **Dependencia**: Necesidad compulsiva de consumir la sustancia de forma continuada para experimentar sus efectos o evitar el malestar de su ausencia. Puede ser física (síndrome de abstinencia) y/o psicológica (craving o deseo intenso).
- **Tolerancia**: Necesidad de aumentar progresivamente la dosis para obtener el mismo efecto o disminución del efecto con la misma dosis.
- **Síndrome de abstinencia**: Conjunto de síntomas físicos y psicológicos que aparecen cuando se interrumpe bruscamente el consumo de una sustancia de la que existe dependencia física. Varía según la sustancia: temblores, sudoración, ansiedad, convulsiones (alcohol); dolores musculares, diarrea, insomnio (heroína); irritabilidad, anergia (cocaína).
- **Tolerancia cruzada**: Cuando la tolerancia a una sustancia genera tolerancia a otra del mismo grupo farmacológico.
- **Policonsumo**: Consumo simultáneo o secuencial de varias sustancias. Patrón cada vez más frecuente.

## 2. CLASIFICACIÓN DE LAS DROGAS

### 2.1 Clasificación según su efecto sobre el Sistema Nervioso Central (SNC)

**a) Depresoras del SNC:** Disminuyen la actividad cerebral.
- Alcohol etílico.
- Opiáceos: heroína, morfina, codeína, metadona, fentanilo.
- Benzodiacepinas: diazepam (Valium), alprazolam (Trankimazin), lorazepam (Orfidal).
- Barbitúricos.
- GHB (gamma-hidroxibutirato o «éxtasis líquido»).

**b) Estimulantes del SNC:** Aceleran la actividad cerebral.
- Cocaína (clorhidrato, crack, base libre).
- Anfetaminas y metanfetamina (speed, crystal meth).
- MDMA (éxtasis).
- Nicotina (tabaco).
- Cafeína.
- Catinonas sintéticas (mefedrona, «sales de baño»).

**c) Perturbadoras del SNC (alucinógenas/psicodélicas):** Distorsionan la percepción de la realidad.
- Cannabis (THC): marihuana, hachís.
- LSD (dietilamida del ácido lisérgico).
- Psilocibina (hongos alucinógenos).
- Mescalina (peyote).
- Ketamina (anestésico disociativo).
- Inhalantes (pegamentos, disolventes, nitritos o «poppers»).
- Cannabinoides sintéticos («spice»).

### 2.2 Clasificación legal

- **Drogas legales**: Alcohol, tabaco, fármacos con prescripción médica.
- **Drogas ilegales**: Todas las sustancias incluidas en las listas de fiscalización internacional (Convención Única de 1961 sobre Estupefacientes, Convenio sobre Sustancias Psicotrópicas de 1971).

## 3. PRINCIPALES SUSTANCIAS Y SUS EFECTOS

### 3.1 Alcohol

Es la droga legal más consumida y la que causa mayor morbimortalidad. Efectos a corto plazo: desinhibición, euforia, pérdida de coordinación, agresividad, coma etílico. Efectos a largo plazo: cirrosis hepática, pancreatitis, deterioro cognitivo, neuropatía periférica, síndrome de Korsakoff, cardiomiopatía. El síndrome de abstinencia alcohólico puede ser mortal (*delirium tremens*).

### 3.2 Cannabis

Sustancia ilegal más consumida en España y en el mundo. El principio activo principal es el THC (delta-9-tetrahidrocannabinol). Efectos: relajación, euforia leve, alteración de la percepción temporal, deterioro de la memoria a corto plazo, paranoia. A largo plazo: síndrome amotivacional, deterioro cognitivo en consumidores precoces, riesgo de psicosis en personas vulnerables, problemas respiratorios.

### 3.3 Cocaína

Potente estimulante extraído de la hoja de coca (Erythroxylum coca). Formas: clorhidrato (polvo, «nieve» — consumo nasal o inyectado), crack (base libre — fumado). Efectos: euforia intensa, incremento de la energía y la autoconfianza, hiperactividad, dilatación pupilar, taquicardia, hipertensión. Riesgos graves: infarto de miocardio, ictus, perforación del tabique nasal, psicosis paranoide.

### 3.4 Heroína

Opiáceo semisintético derivado de la morfina. Produce una sensación de bienestar intenso («flash» o «subidón»), seguida de un estado de sedación y aislamiento emocional. La heroína es la droga con mayor capacidad adictógena y con un síndrome de abstinencia físico especialmente severo. El consumo por vía intravenosa fue responsable de la crisis del VIH/SIDA en España en los años 1980 y 1990.

### 3.5 Drogas de síntesis

Grupo heterogéneo de sustancias producidas en laboratorios clandestinos. La más conocida es el MDMA (éxtasis o «pastis»), que produce empatía, euforia, estimulación sensorial y riesgo de hipertermia (golpe de calor). Las nuevas sustancias psicoactivas (NSP) constituyen un desafío permanente para las fuerzas policiales por su constante innovación química para evadir la fiscalización legal.

## 4. FACTORES DE RIESGO Y PROTECCIÓN

### 4.1 Factores de riesgo

- **Individuales**: Baja autoestima, impulsividad, búsqueda de sensaciones, trastornos de conducta, patología mental previa.
- **Familiares**: Desestructuración familiar, consumo parental, estilos educativos inadecuados, falta de supervisión.
- **Sociales y comunitarios**: Grupo de iguales consumidor, disponibilidad de sustancias, marginalidad, fracaso escolar, desempleo.
- **Ambientales**: Presión publicitaria, normalización social del consumo (alcohol, cannabis), oferta accesible.

### 4.2 Factores de protección

- Autoestima y autocontrol.
- Comunicación familiar positiva.
- Grupo de iguales no consumidor.
- Rendimiento académico y ocupación productiva.
- Acceso a información objetiva sobre drogas.
- Participación en actividades prosociales (deporte, voluntariado, cultura).

## 5. MARCO NORMATIVO

### 5.1 Derecho internacional

- **Convención Única de 1961 sobre Estupefacientes** (enmendada por el Protocolo de 1972).
- **Convenio sobre Sustancias Psicotrópicas de 1971**.
- **Convención contra el Tráfico Ilícito de Estupefacientes y Sustancias Psicotrópicas de 1988** (Viena).

### 5.2 Derecho español

- **Código Penal (arts. 368-378)**: Tipifica los delitos contra la salud pública de tráfico de drogas, distinguiendo entre sustancias que causan grave daño a la salud (heroína, cocaína) y las que no lo causan (cannabis). Penas de 1 a 3 años para las segundas y de 3 a 6 años para las primeras, con agravantes por cantidad, organización, menores y establecimientos públicos.
- **LO 4/2015 de Seguridad Ciudadana (arts. 36.16 y 36.17)**: El consumo y tenencia ilícita de drogas tóxicas en lugares públicos constituye infracción administrativa grave, sancionable con multa de 601 a 30.000 euros. Puede suspenderse la sanción si el infractor se somete a un programa de deshabituación.
- **Ley 17/1967 sobre Estupefacientes**: Adapta a España los compromisos internacionales en materia de fiscalización.

## 6. PLAN NACIONAL SOBRE DROGAS Y ESTRATEGIA NACIONAL DE ADICCIONES

### 6.1 Plan Nacional sobre Drogas (PNSD)

Creado en 1985, es el instrumento fundamental del Gobierno de España para coordinar la acción de todas las Administraciones Públicas en materia de drogodependencias. Adscrito al Ministerio de Sanidad, coordina la prevención, la asistencia, la reinserción social y la reducción de la oferta.

### 6.2 Estrategia Nacional de Adicciones 2017-2024

Amplía el enfoque del PNSD a las adicciones sin sustancia (ludopatía, adicción a las nuevas tecnologías, compras compulsivas). Se articula en ejes: prevención (universal, selectiva e indicada), atención integral, reducción de daños, incorporación social, investigación y cooperación internacional.

## 7. INTERVENCIÓN POLICIAL EN MATERIA DE DROGAS

Las FCSE intervienen tanto en la represión del tráfico como en la colaboración preventiva:
- **Investigación y desarticulación de redes de narcotráfico**: UDYCO (Unidad de Drogas y Crimen Organizado del CNP).
- **Interceptación de alijos**: Colaboración con la Agencia Tributaria, Vigilancia Aduanera y Europol.
- **Control de precursores químicos**: Sustancias utilizadas para fabricar drogas de síntesis.
- **Diligencias por consumo o tenencia en vía pública**: Tramitación de sanciones administrativas.
- **Colaboración con los servicios asistenciales**: Derivación de consumidores a los recursos sociosanitarios de la comunidad.
`;

const tema35 = `# TEMA 35. EL DESARROLLO SOSTENIBLE. CONCEPTO. LOS PILARES DEL DESARROLLO SOSTENIBLE. CUMBRES INTERNACIONALES. AGENDA 2030 Y LOS OBJETIVOS DE DESARROLLO SOSTENIBLE (ODS). CAMBIO CLIMÁTICO. INSTRUMENTOS DE GESTIÓN AMBIENTAL

---

## 1. CONCEPTO DE DESARROLLO SOSTENIBLE

### 1.1 Definición

El concepto de desarrollo sostenible fue popularizado por el **Informe Brundtland** (1987), elaborado por la Comisión Mundial sobre el Medio Ambiente y el Desarrollo (presidida por la primera ministra noruega Gro Harlem Brundtland), titulado *Nuestro Futuro Común*. Se define como: «aquel desarrollo que satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer las suyas propias».

Esta definición encierra dos conceptos clave:
- **Necesidades**: Especialmente las esenciales de los más pobres, a las que se debe dar prioridad.
- **Limitaciones**: Impuestas por el estado actual de la tecnología y la organización social sobre la capacidad del medio ambiente para satisfacer las necesidades presentes y futuras.

### 1.2 Antecedentes

El origen del pensamiento ambientalista contemporáneo puede rastrearse hasta obras como *Primavera Silenciosa* de Rachel Carson (1962), que denunció los efectos de los pesticidas, y el informe *Los Límites del Crecimiento* del Club de Roma (1972), que advirtió sobre la insostenibilidad del modelo de crecimiento económico ilimitado en un planeta con recursos finitos.

## 2. LOS TRES PILARES DEL DESARROLLO SOSTENIBLE

### 2.1 Pilar económico

Un modelo económico sostenible debe generar riqueza y empleo de forma eficiente, pero sin agotar los recursos naturales ni generar externalidades negativas irreversibles (contaminación, destrucción de ecosistemas). Implica la transición del modelo lineal (extraer-producir-consumir-desechar) a un modelo de **economía circular** (reducir-reutilizar-reciclar-recuperar).

### 2.2 Pilar social

El desarrollo sostenible exige equidad social: acceso universal a la educación, la sanidad, la vivienda, la alimentación y el empleo digno. No puede haber sostenibilidad si persisten la pobreza extrema, la desigualdad de género, la exclusión social y las violaciones de los derechos humanos.

### 2.3 Pilar ambiental

La protección del medio ambiente es la condición sine qua non de la sostenibilidad. Requiere la conservación de la biodiversidad, la gestión sostenible de los recursos naturales, la lucha contra el cambio climático y la prevención de la contaminación.

## 3. PRINCIPALES CUMBRES INTERNACIONALES

### 3.1 Estocolmo (1972)

La **Conferencia de las Naciones Unidas sobre el Medio Humano** fue la primera gran cumbre ambiental. Estableció 26 principios sobre la protección del medio ambiente y la necesidad de compatibilizar el desarrollo con la preservación ecológica. Se creó el **PNUMA** (Programa de las Naciones Unidas para el Medio Ambiente).

### 3.2 Río de Janeiro (1992) — «Cumbre de la Tierra»

La **Conferencia de las Naciones Unidas sobre el Medio Ambiente y el Desarrollo** reunió a 172 Estados y fue la cumbre ambiental más importante del siglo XX. Produjo cinco documentos clave:
1. **Declaración de Río sobre el Medio Ambiente y el Desarrollo** (27 principios).
2. **Agenda 21**: Plan de acción global para el desarrollo sostenible.
3. **Convenio Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC)**: Base del Protocolo de Kioto.
4. **Convenio sobre la Diversidad Biológica (CDB)**.
5. **Declaración de principios sobre los bosques**.

### 3.3 Kioto (1997)

El **Protocolo de Kioto** estableció compromisos cuantitativos y vinculantes de reducción de emisiones de gases de efecto invernadero (GEI) para los países industrializados. Primera reducción: 5,2% respecto a los niveles de 1990 en el periodo 2008-2012. Introdujo mecanismos de flexibilidad: comercio de emisiones, mecanismo de desarrollo limpio (MDL) y aplicación conjunta.

### 3.4 París (2015)

El **Acuerdo de París** supuso un giro histórico al comprometer a todos los países (no solo a los desarrollados) a contribuir a la lucha contra el cambio climático. Objetivo: limitar el aumento de la temperatura media global muy por debajo de los 2°C respecto a los niveles preindustriales, esforzándose por no superar los 1,5°C. Cada país presenta sus **Contribuciones Determinadas a Nivel Nacional (NDC)**.

## 4. AGENDA 2030 Y LOS 17 ODS

### 4.1 La Agenda 2030

Aprobada por la Asamblea General de la ONU el 25 de septiembre de 2015 (Resolución 70/1), la Agenda 2030 para el Desarrollo Sostenible es el plan de acción global más ambicioso de la historia. Sucede a los Objetivos de Desarrollo del Milenio (ODM, 2000-2015) y se articula en torno a las «5 P»: Personas, Planeta, Prosperidad, Paz y Partenariados (alianzas).

### 4.2 Los 17 Objetivos de Desarrollo Sostenible (ODS)

1. Fin de la pobreza. 2. Hambre cero. 3. Salud y bienestar. 4. Educación de calidad. 5. Igualdad de género. 6. Agua limpia y saneamiento. 7. Energía asequible y no contaminante. 8. Trabajo decente y crecimiento económico. 9. Industria, innovación e infraestructura. 10. Reducción de las desigualdades. 11. Ciudades y comunidades sostenibles. 12. Producción y consumo responsables. 13. Acción por el clima. 14. Vida submarina. 15. Vida de ecosistemas terrestres. 16. Paz, justicia e instituciones sólidas. 17. Alianzas para lograr los objetivos.

## 5. CAMBIO CLIMÁTICO

### 5.1 Concepto y causas

El cambio climático es la variación global del clima de la Tierra debido a causas naturales y, fundamentalmente, a la actividad humana (antropogénico). La combustión de combustibles fósiles (petróleo, carbón, gas natural), la deforestación y la agricultura intensiva incrementan la concentración de gases de efecto invernadero (CO₂, metano, óxido nitroso) en la atmósfera, provocando un aumento de la temperatura media global.

### 5.2 Efectos

- Deshielo de los casquetes polares y glaciares.
- Subida del nivel del mar (amenaza para las zonas costeras).
- Fenómenos meteorológicos extremos (sequías, inundaciones, olas de calor, huracanes).
- Pérdida de biodiversidad y desertificación.
- Migraciones climáticas y conflictos por recursos (agua, tierras cultivables).
- Impacto en la seguridad alimentaria y la salud pública.

### 5.3 El IPCC

El **Panel Intergubernamental de Expertos sobre el Cambio Climático (IPCC)**, creado en 1988 por la ONU, es el organismo científico de referencia mundial. Sus informes de evaluación constituyen la base científica para las negociaciones climáticas internacionales.

## 6. INSTRUMENTOS DE GESTIÓN AMBIENTAL

- **Evaluación de Impacto Ambiental (EIA)**: Procedimiento administrativo para identificar, predecir y evaluar los efectos ambientales de un proyecto antes de su ejecución.
- **Auditoría ambiental**: Evaluación sistemática del cumplimiento de la normativa ambiental por parte de una organización.
- **Sistemas de gestión ambiental**: ISO 14001, EMAS (Eco-Management and Audit Scheme).
- **Etiquetado ecológico**: Certificaciones que informan al consumidor sobre el impacto ambiental de un producto.
- **Comercio de derechos de emisión de GEI**: Mecanismo de mercado para reducir emisiones.
- **Fiscalidad verde**: Impuestos ambientales que internalizan los costes ecológicos de la actividad económica.

## 7. MARCO JURÍDICO AMBIENTAL

### 7.1 Derecho español

- **Artículo 45 CE**: Todos tienen derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona, así como el deber de conservarlo. Los poderes públicos velarán por la utilización racional de todos los recursos naturales.
- **Ley 7/2021 de cambio climático y transición energética**: Establece la meta de alcanzar la neutralidad climática no más tarde del año 2050.
- **Ley 21/2013 de evaluación ambiental**.
- **Ley 26/2007 de Responsabilidad Medioambiental**: Principio de «quien contamina, paga».

### 7.2 Derecho europeo

- **Pacto Verde Europeo (European Green Deal, 2019)**: Estrategia de la UE para alcanzar la neutralidad climática en 2050 y desacoplar el crecimiento económico del uso de recursos.
- **Ley Europea del Clima (Reglamento 2021/1119)**.
`;

const tema36 = `# TEMA 36. GRAMÁTICA DE LA LENGUA ESPAÑOLA. FONÉTICA Y FONOLOGÍA. MORFOLOGÍA: LAS CATEGORÍAS GRAMATICALES. EL VERBO. SINTAXIS: LA ORACIÓN SIMPLE Y COMPUESTA

---

## 1. FONÉTICA Y FONOLOGÍA

### 1.1 Distinción entre fonética y fonología

- **Fonética**: Estudia los sonidos del habla tal como se producen físicamente (articulación), se transmiten (acústica) y se perciben (audición). Trabaja con **fonos** (realizaciones concretas).
- **Fonología**: Estudia los sonidos del habla en su función distintiva dentro del sistema lingüístico. Trabaja con **fonemas** (representaciones abstractas). El fonema es la unidad mínima que distingue significados: /p/ y /b/ son fonemas distintos porque «pata» ≠ «bata».

### 1.2 Sistema vocálico español

El español posee 5 fonemas vocálicos: /a/, /e/, /i/, /o/, /u/, clasificados por:
- **Punto de articulación (eje horizontal)**: anterior (i, e), central (a), posterior (o, u).
- **Grado de abertura (eje vertical)**: abierta (a), media (e, o), cerrada (i, u).

### 1.3 Sistema consonántico español

El español peninsular estándar tiene 19 fonemas consonánticos, clasificados por:
- **Punto de articulación**: bilabial (/p/, /b/, /m/), labiodental (/f/), interdental (/θ/ en «caza»), dental (/t/, /d/), alveolar (/s/, /n/, /l/, /r/, /r̄/), palatal (/ʧ/ en «chico», /ɲ/ en «ñ», /ʎ/ en «llama» — para hablantes distinguidores), velar (/k/, /g/, /x/ en «jota»).
- **Modo de articulación**: oclusivo (p, t, k, b, d, g), fricativo (f, θ, s, x), africado (ʧ), nasal (m, n, ɲ), lateral (l, ʎ), vibrante simple (r) y múltiple (r̄).
- **Sonoridad**: sordo (p, t, k, f, θ, s, x, ʧ) o sonoro (b, d, g, m, n, ɲ, l, ʎ, r, r̄).

### 1.4 Fenómenos fonológicos relevantes

- **Seseo**: Pronunciación de /θ/ como /s/ (general en Hispanoamérica y sur de España).
- **Yeísmo**: Pérdida de la distinción entre /ʎ/ y /ʝ/ (pronunciar igual «pollo» y «poyo»). Fenómeno mayoritario en el español actual.

## 2. MORFOLOGÍA: LAS CATEGORÍAS GRAMATICALES

La morfología estudia la estructura interna de las palabras: sus componentes mínimos con significado (**morfemas**) y las reglas de formación.

### 2.1 El sustantivo

Palabra con la que se designan seres, objetos, ideas o conceptos. Posee género (masculino/femenino) y número (singular/plural). Tipos: común/propio, concreto/abstracto, individual/colectivo, contable/incontable.

### 2.2 El adjetivo

Palabra que modifica al sustantivo expresando cualidades o determinaciones. Tipos:
- **Calificativos**: expresan cualidades (grande, bonito, azul).
- **Grados del adjetivo**: positivo, comparativo (superioridad, igualdad, inferioridad) y superlativo (absoluto: grandísimo; relativo: el más grande).

### 2.3 Los determinantes

Palabras que acompañan al sustantivo delimitando su referencia. Tipos: artículos (el, la, los, las; un, una, unos, unas), demostrativos (este, ese, aquel), posesivos (mi, tu, su), numerales (cardinales, ordinales), indefinidos (alguno, ninguno, todo, otro), interrogativos y exclamativos (qué, cuánto).

### 2.4 Los pronombres

Sustituyen al sustantivo o sintagma nominal. Tipos: personales (yo, tú, él, me, te, se, lo, la, le), demostrativos (este, ese, aquel — con función sustantiva), posesivos (mío, tuyo), relativos (que, quien, cual, cuyo), interrogativos (quién, qué, cuál), indefinidos (alguien, nadie, algo, nada).

### 2.5 El adverbio

Palabra invariable que modifica al verbo, al adjetivo o a otro adverbio. Tipos: de lugar (aquí, allí, lejos), de tiempo (hoy, ayer, siempre), de modo (bien, mal, así), de cantidad (mucho, poco, bastante), de afirmación (sí, también), de negación (no, nunca, jamás), de duda (quizás, acaso).

### 2.6 La preposición

Palabra invariable que establece una relación de subordinación entre dos elementos. Preposiciones del español: a, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, sobre, tras, versus, vía.

### 2.7 La conjunción

Palabra invariable que une palabras, sintagmas u oraciones. Tipos:
- **Coordinantes**: copulativas (y, e, ni), disyuntivas (o, u), adversativas (pero, sino, mas), explicativas (o sea, es decir).
- **Subordinantes**: causales (porque, ya que), condicionales (si), concesivas (aunque), finales (para que), temporales (cuando, mientras), consecutivas (así que, por lo que), comparativas (como, tal como).

### 2.8 La interjección

Palabra o expresión que expresa una emoción, una orden o un acto de habla de forma exclamativa: ¡ay!, ¡oh!, ¡bravo!, ¡uf!, ¡vaya!.

## 3. EL VERBO

### 3.1 Definición y constituyentes

El verbo es la categoría gramatical que expresa acciones, estados o procesos situándolos en el tiempo. Es el núcleo del predicado. Su forma se compone de lexema (significado) + morfemas flexivos de persona (1ª, 2ª, 3ª), número (singular, plural), tiempo (presente, pasado, futuro), modo (indicativo, subjuntivo, imperativo) y aspecto (imperfectivo/perfectivo).

### 3.2 Las conjugaciones

El español tiene tres conjugaciones: 1ª (-ar: cantar), 2ª (-er: comer), 3ª (-ir: vivir).

### 3.3 Los modos verbales

- **Indicativo**: Expresa hechos reales, ciertos o probables. (Tiempos: presente, pretérito imperfecto, pretérito perfecto simple, pretérito perfecto compuesto, pretérito pluscuamperfecto, futuro simple, futuro compuesto, condicional simple, condicional compuesto.)
- **Subjuntivo**: Expresa deseos, dudas, posibilidades, hipótesis. (Tiempos: presente, pretérito imperfecto, pretérito perfecto, pretérito pluscuamperfecto, futuro simple — en desuso.)
- **Imperativo**: Expresa órdenes o mandatos. Solo tiene formas propias para la 2ª persona (canta tú, cantad vosotros). Para las demás personas se usa el subjuntivo.

### 3.4 Formas no personales

No expresan persona ni número:
- **Infinitivo**: cantar, comer, vivir (función sustantiva: «el saber no ocupa lugar»).
- **Gerundio**: cantando, comiendo, viviendo (función adverbial: «llegó corriendo»).
- **Participio**: cantado, comido, vivido (función adjetiva: «los documentos firmados»).

### 3.5 Perífrasis verbales

Combinaciones de un verbo auxiliar + forma no personal con significado unitario: tener que + infinitivo (obligación), ir a + infinitivo (futuro próximo), estar + gerundio (acción en curso), deber de + infinitivo (probabilidad), acabar de + infinitivo (acción reciente).

## 4. SINTAXIS: LA ORACIÓN SIMPLE

### 4.1 Definición

La oración simple es una unidad de comunicación con sentido completo que consta de un solo predicado (un solo verbo conjugado).

### 4.2 Componentes

- **Sujeto**: El elemento del que se dice algo. Concuerda en persona y número con el verbo. Puede ser explícito o elíptico.
- **Predicado**: Lo que se dice del sujeto. Dos tipos: predicado nominal (ser/estar/parecer + atributo: «María es médica»); predicado verbal (cualquier otro verbo + complementos: «María estudia Derecho»).

### 4.3 Complementos del verbo

- **Complemento Directo (CD)**: Recibe directamente la acción del verbo. Se identifica sustituyendo por lo, la, los, las.
- **Complemento Indirecto (CI)**: Designa al destinatario de la acción. Se identifica sustituyendo por le, les, se.
- **Complemento Circunstancial (CC)**: Expresa las circunstancias de la acción: lugar, tiempo, modo, causa, instrumento, compañía, finalidad.
- **Complemento Agente (CAg)**: En oraciones pasivas, indica quién realiza la acción (introducido por «por»).
- **Atributo**: En oraciones copulativas (ser, estar, parecer), complemento que atribuye una cualidad al sujeto.
- **Complemento Predicativo**: Complemento que predica una cualidad del sujeto o del CD con verbos no copulativos.
- **Complemento de Régimen (CRég)**: Complemento exigido por el verbo precedido de preposición: «Confía en sus amigos».

## 5. SINTAXIS: LA ORACIÓN COMPUESTA

### 5.1 Coordinación

Dos o más oraciones con la misma jerarquía sintáctica unidas por conjunciones coordinantes:
- **Copulativas**: «Estudia y trabaja». (y, e, ni)
- **Disyuntivas**: «¿Vienes o te quedas?». (o, u)
- **Adversativas**: «Lo intentó pero no pudo». (pero, mas, sino, sin embargo)
- **Explicativas**: «Es decir, no vendrán». (o sea, es decir, esto es)
- **Distributivas**: «Ora ríe, ora llora». (ora...ora, bien...bien, ya...ya)

### 5.2 Subordinación

Una oración (subordinada) depende sintácticamente de otra (principal):
- **Subordinadas sustantivas**: Funcionan como un sustantivo (sujeto, CD, etc.): «Quiero *que vengas*».
- **Subordinadas adjetivas o de relativo**: Funcionan como un adjetivo, modificando a un sustantivo: «El hombre *que vino ayer*».
- **Subordinadas adverbiales**: Funcionan como un adverbio: temporales (*Cuando llegues, llámame*), causales (*Porque estaba lloviendo*), condicionales (*Si estudias, aprobarás*), concesivas (*Aunque llueva, iremos*), finales (*Para que lo sepas*), consecutivas (*Tanto corrió que se cansó*), comparativas (*Más listo de lo que parece*).

### 5.3 Yuxtaposición

Oraciones unidas sin nexo conjuntivo, separadas por signos de puntuación: «Llegué, vi, vencí».
`;

const tema37 = `# TEMA 37. ORTOGRAFÍA DE LA LENGUA ESPAÑOLA. USO DE LAS LETRAS O GRAFEMAS. REGLAS DE ACENTUACIÓN. SIGNOS DE PUNTUACIÓN. USO DE MAYÚSCULAS Y MINÚSCULAS. ABREVIATURAS, SIGLAS Y ACRÓNIMOS

---

## 1. USO DE LAS LETRAS O GRAFEMAS

### 1.1 Uso de B y V

**Se escribe con B:**
- Las palabras que empiezan por bu-, bur-, bus- (bueno, burro, buscar).
- Las que empiezan por bi-, bis-, biz- (bicicleta, bisabuelo).
- Las terminadas en -bundo, -bunda (moribundo, vagabunda).
- Las terminadas en -bilidad (amabilidad, posibilidad — excepto movilidad y civilidad).
- Las formas de los verbos terminados en -bir (escribir, recibir — excepto hervir, servir, vivir).
- El pretérito imperfecto de indicativo de los verbos de la 1ª conjugación y del verbo ir: cantaba, iba.
- Las palabras con el prefijo bien- o ben- (bienvenido, benévolo).

**Se escribe con V:**
- Las palabras que empiezan por vice-, viz- (vicepresidente, vizconde).
- Las que empiezan por eva-, eve-, evi-, evo- (evaluar, evento, evitar, evolución — excepto ébano).
- Los adjetivos terminados en -avo, -ave, -evo, -eve, -ivo, -iva (octavo, suave, nuevo, breve, activo, positiva).
- Detrás de ad-, sub-, ob- (advertir, subversivo, obvio).
- Las formas de los verbos que no tienen b ni v en su infinitivo: tuve (tener), estuve (estar), anduve (andar).

### 1.2 Uso de G y J

**Se escribe con G (sonido suave ante a, o, u; sonido fuerte ante e, i con diéresis o sin ella):**
- Las palabras que empiezan por geo- (geografía, geología).
- Las que empiezan por gest- (gestión, gesto).
- Las terminadas en -gen, -gencia (origen, urgencia — excepto lejía y comején).
- Las terminadas en -ger, -gir (proteger, dirigir — excepto tejer y crujir).
- Las terminadas en -logía, -gogía (biología, pedagogía).

**Se escribe con J:**
- Las palabras terminadas en -aje, -eje (garaje, equipaje, hereje — excepto protege).
- Las terminadas en -jero, -jera, -jería (consejero, cajera, cerrajería — excepto ligero).
- Las formas de los verbos que no tienen g ni j en su infinitivo: dije (decir), traje (traer), conduje (conducir).
- Las palabras derivadas de otras que tienen j: caja → cajero, rojo → rojizo.

### 1.3 Uso de H

La H es muda en español (no representa ningún sonido):
- Se escriben con H las palabras que empiezan por hie-, hue- (hierro, huevo).
- Las que empiezan por hidro-, hiper-, hipo-, homo-, hetero- (hidrógeno, hipermercado, hipótesis, homogéneo, heterodoxo).
- Las formas del verbo haber (he, has, ha, hemos, habéis, han), hacer, hablar, habitar.
- Las interjecciones: ¡ah!, ¡oh!, ¡eh!, ¡bah!.

### 1.4 Uso de LL e Y (yeísmo)

El yeísmo (pronunciar igual ll e y) es el fenómeno mayoritario en el español actual. Sin embargo, la ortografía mantiene la distinción:
- Se escribe LL en: calle, caballo, silla, botella, ladrillo, rollo.
- Se escribe Y en: ayer, mayor, leyenda, hoy; y como conjunción copulativa.
- Se escriben con Y las formas de verbos que no tienen ni ll ni y en su infinitivo: leyó (leer), huyó (huir), cayó (caer).

## 2. REGLAS DE ACENTUACIÓN

### 2.1 Reglas generales

- **Palabras agudas** (acento en la última sílaba): Llevan tilde cuando terminan en vocal, -n o -s. Ejemplos: café, corazón, compás.
- **Palabras llanas o graves** (acento en la penúltima sílaba): Llevan tilde cuando NO terminan en vocal, -n o -s. Ejemplos: árbol, lápiz, fácil, cárcel.
- **Palabras esdrújulas** (acento en la antepenúltima sílaba): Llevan tilde siempre. Ejemplos: teléfono, brújula, cómodo.
- **Palabras sobresdrújulas** (acento antes de la antepenúltima sílaba): Llevan tilde siempre. Ejemplos: dígamelo, cómpratelo.

### 2.2 Diptongos, triptongos e hiatos

- **Diptongo**: Combinación de una vocal abierta (a, e, o) + una cerrada átona (i, u), o de dos cerradas distintas. Se acentúan siguiendo las reglas generales, y la tilde recae sobre la vocal abierta o la segunda cerrada: náutico, cuídalo.
- **Triptongo**: Tres vocales en una sola sílaba (cerrada + abierta + cerrada). Se acentúan según las reglas generales, con la tilde sobre la vocal abierta: estudiáis, cambiéis.
- **Hiato**: Dos vocales contiguas que se pronuncian en sílabas distintas. Dos tipos:
  - Hiato de dos vocales abiertas: se acentúa según reglas generales (le-ón, po-e-ta).
  - Hiato de vocal abierta + cerrada tónica (o viceversa): la cerrada tónica siempre lleva tilde, con independencia de las reglas generales: ra-íz, pa-ís, ba-úl, ca-ída, ríe, búho.

### 2.3 Tilde diacrítica

Tilde que distingue palabras con la misma forma pero distinta función gramatical:
| Sin tilde | Con tilde |
|-----------|-----------|
| el (artículo) | él (pronombre) |
| tu (posesivo) | tú (pronombre) |
| mi (posesivo/nota musical) | mí (pronombre) |
| si (condicional/nota) | sí (afirmación/pronombre) |
| de (preposición) | dé (verbo dar) |
| se (pronombre) | sé (verbo saber/ser) |
| te (pronombre) | té (infusión) |
| mas (pero) | más (cantidad) |
| aun (incluso) | aún (todavía) |
| solo → Ya no lleva tilde (RAE 2010) |
| este/ese/aquel (pronombres) → Ya no llevan tilde (RAE 2010) |

## 3. SIGNOS DE PUNTUACIÓN

### 3.1 El punto (.)

Señala una pausa al final de un enunciado. Tipos: punto y seguido (separa oraciones dentro del mismo párrafo), punto y aparte (separa párrafos), punto final (cierra un texto).

### 3.2 La coma (,)

Señala una pausa breve dentro de un enunciado. Usos principales: separar elementos de una enumeración; delimitar incisos, aposiciones y vocativos; separar oraciones coordinadas con pero, aunque, sino; detrás de conectores discursivos (sin embargo, no obstante, es decir).

**Error frecuente**: No se pone coma entre sujeto y predicado, salvo que haya un inciso.

### 3.3 El punto y coma (;)

Pausa intermedia entre la coma y el punto. Se usa para separar oraciones yuxtapuestas relacionadas entre sí, y para separar elementos de una enumeración cuando estos ya contienen comas internas.

### 3.4 Los dos puntos (:)

Introducen una enumeración, una cita textual, una explicación o consecuencia, y encabezan el cuerpo de una carta (Estimado señor:).

### 3.5 Los puntos suspensivos (…)

Indican una enumeración incompleta, una pausa expresiva, suspense o vacilación. Son siempre tres y nunca se combinan con «etc.».

### 3.6 Signos de interrogación (¿?) y exclamación (¡!)

En español, a diferencia de otros idiomas, se usan signos de apertura y de cierre. Es un error frecuente omitir el signo de apertura.

## 4. USO DE MAYÚSCULAS Y MINÚSCULAS

### 4.1 Se escriben con mayúscula inicial

- La primera palabra de un escrito y después de punto.
- Los nombres propios de persona, lugar, institución (María, Madrid, Ministerio del Interior).
- Los tratamientos abreviados (Sr., D., Ilmo.).
- Los días festivos y acontecimientos históricos (Navidad, Revolución Francesa).
- Las siglas (OTAN, ONU, UE).

### 4.2 Se escriben con minúscula

- Los días de la semana, los meses y las estaciones (lunes, marzo, primavera).
- Los gentilicios (español, madrileño).
- Los cargos y títulos (el presidente, el rey, el ministro — salvo en documentos oficiales o cuando sustituyen al nombre propio).
- Los nombres de religiones, ideologías y disciplinas académicas (cristianismo, socialismo, matemáticas).

## 5. ABREVIATURAS, SIGLAS Y ACRÓNIMOS

### 5.1 Abreviaturas

Representación gráfica reducida de una palabra mediante la supresión de letras. Se cierran con punto: Sr. (señor), Dra. (doctora), pág. (página), art. (artículo), Admón. (Administración), C.P. (código postal).

### 5.2 Siglas

Palabra formada por las iniciales de una expresión compleja. Se escriben en mayúsculas y sin puntos: ONU, OTAN, DNI, BOE, CGPJ. Cuando se integran como palabras comunes, pueden escribirse en minúscula: ovni, radar, sida.

### 5.3 Acrónimos

Siglas que se pronuncian como una palabra y pueden incorporarse al léxico común: láser (*Light Amplification by Stimulated Emission of Radiation*), radar, Renfe, Mercosur. Cuando se lexicalizan, se escriben en minúscula y admiten plural con -s: ovnis, radares, láseres.
`;

async function run() {
    try {
        console.log("=== BLOQUE B — Lote 2 (Temas 32-37) ===");
        console.log("Destino:", TARGET_DIR);
        
        const temas = [
            { content: tema32, name: "Tema 32 - Concepto de Geografia Humana" },
            { content: tema33, name: "Tema 33 - La Seguridad" },
            { content: tema34, name: "Tema 34 - Drogodependencias" },
            { content: tema35, name: "Tema 35 - El Desarrollo Sostenible" },
            { content: tema36, name: "Tema 36 - Gramatica de la Lengua Espanola" },
            { content: tema37, name: "Tema 37 - Ortografia de la Lengua Espanola" },
        ];

        for (const t of temas) {
            await mdToPdf({ content: t.content }, { dest: path.join(TARGET_DIR, t.name + ".pdf") });
            console.log("✓", t.name);
        }
        
        console.log("\\nLote 2 completado: 6 PDFs generados.");
    } catch (e) {
        console.error("Error:", e);
    }
}

run();
