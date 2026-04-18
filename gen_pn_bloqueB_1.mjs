import fs from 'fs';
import path from 'path';
import { mdToPdf } from 'md-to-pdf';

const TARGET_DIR = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/POLICIA NACIONAL ESCALA BASICA';
if (!fs.existsSync(TARGET_DIR)) fs.mkdirSync(TARGET_DIR, { recursive: true });

const tema27 = `# TEMA 27. DERECHOS HUMANOS. DECLARACIÓN UNIVERSAL DE DERECHOS HUMANOS. CONVENIO EUROPEO PARA LA PROTECCIÓN DE LOS DERECHOS HUMANOS Y LIBERTADES FUNDAMENTALES. CONVENIO CONTRA LA TORTURA. PROTOCOLO FACULTATIVO DE LA CONVENCIÓN CONTRA LA TORTURA. MECANISMO NACIONAL DE PREVENCIÓN DE LA TORTURA DEL DEFENSOR DEL PUEBLO

---

## 1. INTRODUCCIÓN HISTÓRICA A LOS DERECHOS HUMANOS

Los Derechos Humanos son el conjunto de derechos y libertades fundamentales inherentes a todos los seres humanos por el simple hecho de serlo, sin distinción alguna por razón de nacionalidad, sexo, raza, religión, lengua o cualquier otra condición. Su reconocimiento es el resultado de un largo proceso histórico que hunde sus raíces en la filosofía griega (la idea de ley natural en Sófocles y los estoicos), pasa por el iusnaturalismo racionalista de los siglos XVII y XVIII (Locke, Rousseau, Montesquieu) y cristaliza en los grandes textos declarativos de la era moderna.

### 1.1 Precedentes históricos fundamentales

- **Carta Magna (1215)**: Considerada el primer documento que limita el poder del monarca frente a los barones ingleses. Estableció el principio de que nadie puede ser detenido ni desposeído de sus bienes sin juicio previo conforme a la ley (habeas corpus embrionario).
- **Petition of Rights (1628)**: Presentada al rey Carlos I de Inglaterra, prohíbe los impuestos sin consentimiento del Parlamento y la detención arbitraria.
- **Bill of Rights (1689)**: Tras la Revolución Gloriosa, establece la supremacía del Parlamento sobre la Corona, la prohibición de castigos crueles e inusuales y el derecho de petición.
- **Declaración de Independencia de los Estados Unidos (1776)**: Declara que todos los hombres son creados iguales y dotados de derechos inalienables: vida, libertad y búsqueda de la felicidad.
- **Declaración de los Derechos del Hombre y del Ciudadano (1789)**: Aprobada durante la Revolución Francesa, proclama los derechos naturales e imprescriptibles del hombre: libertad, propiedad, seguridad y resistencia a la opresión.

### 1.2 Los Derechos Humanos tras la Segunda Guerra Mundial

El Holocausto y las atrocidades de la Segunda Guerra Mundial impulsaron la necesidad de crear un sistema internacional de protección de los derechos humanos. La fundación de la Organización de las Naciones Unidas (ONU) en 1945 y la aprobación de su Carta fundacional establecieron las bases para la Declaración Universal de Derechos Humanos de 1948.

### 1.3 Generaciones de Derechos Humanos

La doctrina clasifica los derechos humanos en tres generaciones, atendiendo al momento histórico de su reconocimiento:

- **Primera generación — Derechos civiles y políticos**: Derecho a la vida, libertad, seguridad, igualdad ante la ley, libertad de expresión, de reunión, de asociación, derecho al voto. Son derechos de abstención: el Estado debe abstenerse de interferir.
- **Segunda generación — Derechos económicos, sociales y culturales**: Derecho al trabajo, a la educación, a la salud, a la vivienda, a la seguridad social. Son derechos de prestación: el Estado debe actuar positivamente para garantizarlos.
- **Tercera generación — Derechos de solidaridad**: Derecho a la paz, al medio ambiente, al desarrollo, a la autodeterminación de los pueblos. Son derechos colectivos que requieren cooperación internacional.

## 2. DECLARACIÓN UNIVERSAL DE DERECHOS HUMANOS (DUDH)

### 2.1 Contexto y aprobación

La Declaración Universal de Derechos Humanos fue aprobada el 10 de diciembre de 1948 por la Asamblea General de las Naciones Unidas mediante la Resolución 217 A (III), reunida en el Palais de Chaillot de París. Fue redactada por una Comisión presidida por Eleanor Roosevelt, con la participación de juristas de diversas tradiciones culturales como René Cassin (Francia), Charles Malik (Líbano), Peng-chun Chang (China), John Humphrey (Canadá) y Hernán Santa Cruz (Chile).

Fue aprobada por 48 votos a favor, ninguno en contra y 8 abstenciones (Unión Soviética, Bielorrusia, Ucrania, Checoslovaquia, Yugoslavia, Polonia, Arabia Saudí y Sudáfrica).

### 2.2 Naturaleza jurídica

La DUDH no es un tratado internacional vinculante en sentido estricto, sino una resolución de la Asamblea General con valor declarativo. Sin embargo, su contenido ha alcanzado la categoría de derecho internacional consuetudinario y sus principios son invocados universalmente como estándar mínimo de derechos humanos.

### 2.3 Estructura y contenido

La DUDH consta de un **Preámbulo** y **30 artículos**:

- **Preámbulo**: Establece los fundamentos filosóficos: la dignidad inherente y los derechos iguales e inalienables de todos los miembros de la familia humana como fundamento de la libertad, la justicia y la paz.
- **Artículos 1-2**: Principios generales de libertad, igualdad y no discriminación. «Todos los seres humanos nacen libres e iguales en dignidad y derechos».
- **Artículos 3-11**: Derechos civiles individuales: derecho a la vida, libertad y seguridad (art. 3); prohibición de la esclavitud (art. 4); prohibición de la tortura (art. 5); derecho al reconocimiento de la personalidad jurídica (art. 6); igualdad ante la ley (art. 7); derecho al recurso efectivo ante los tribunales (art. 8); prohibición de la detención arbitraria (art. 9); derecho a un juicio justo (art. 10); presunción de inocencia (art. 11).
- **Artículos 12-17**: Derechos del individuo en relación con la comunidad: intimidad (art. 12); libertad de circulación (art. 13); derecho de asilo (art. 14); nacionalidad (art. 15); matrimonio (art. 16); propiedad (art. 17).
- **Artículos 18-21**: Libertades públicas: libertad de pensamiento, conciencia y religión (art. 18); libertad de opinión y expresión (art. 19); libertad de reunión y asociación (art. 20); participación política y sufragio universal (art. 21).
- **Artículos 22-27**: Derechos económicos, sociales y culturales: seguridad social (art. 22); trabajo y salario justo (art. 23); descanso y vacaciones (art. 24); nivel de vida adecuado (art. 25); educación (art. 26); participación en la vida cultural (art. 27).
- **Artículos 28-30**: Disposiciones finales: derecho a un orden social e internacional adecuado (art. 28); deberes respecto a la comunidad (art. 29); prohibición de interpretación destructiva de los derechos (art. 30).

### 2.4 Instrumentos complementarios: los Pactos de 1966

Para dotar de fuerza jurídica vinculante al contenido de la DUDH, la ONU aprobó en 1966 dos tratados internacionales:
- **Pacto Internacional de Derechos Civiles y Políticos (PIDCP)**: Con su Protocolo Facultativo que permite las comunicaciones individuales al Comité de Derechos Humanos.
- **Pacto Internacional de Derechos Económicos, Sociales y Culturales (PIDESC)**.

Estos tres instrumentos (DUDH + PIDCP + PIDESC) conforman la llamada **Carta Internacional de Derechos Humanos**.

## 3. CONVENIO EUROPEO PARA LA PROTECCIÓN DE LOS DERECHOS HUMANOS Y LIBERTADES FUNDAMENTALES (CEDH)

### 3.1 Contexto y aprobación

El Convenio Europeo de Derechos Humanos (CEDH) fue firmado en Roma el 4 de noviembre de 1950 en el marco del Consejo de Europa y entró en vigor el 3 de septiembre de 1953. España lo ratificó el 4 de octubre de 1979, tras la transición democrática.

### 3.2 Estructura

El CEDH se compone del texto principal y de 16 Protocolos adicionales que han ampliado progresivamente el catálogo de derechos protegidos y reformado el mecanismo de garantía.

### 3.3 Derechos protegidos

Los derechos fundamentales recogidos en el Convenio y sus Protocolos incluyen:
- Derecho a la vida (art. 2) — Incluye la discusión sobre la pena de muerte, abolida por el Protocolo 6 y de forma absoluta por el Protocolo 13.
- Prohibición de la tortura y tratos inhumanos o degradantes (art. 3) — Derecho absoluto, no admite excepciones ni en situaciones de emergencia.
- Prohibición de la esclavitud y el trabajo forzado (art. 4).
- Derecho a la libertad y seguridad (art. 5) — Habeas corpus europeo.
- Derecho a un proceso equitativo (art. 6) — Derecho a un tribunal independiente e imparcial, presunción de inocencia, derechos de defensa.
- Principio de legalidad penal (art. 7) — *Nullum crimen, nulla poena sine lege*.
- Derecho al respeto de la vida privada y familiar (art. 8).
- Libertad de pensamiento, conciencia y religión (art. 9).
- Libertad de expresión (art. 10).
- Libertad de reunión y asociación (art. 11).
- Derecho a contraer matrimonio (art. 12).
- Derecho a un recurso efectivo (art. 13).
- Prohibición de discriminación (art. 14).

### 3.4 El Tribunal Europeo de Derechos Humanos (TEDH)

Con sede en Estrasburgo, el TEDH es el órgano jurisdiccional encargado de garantizar el cumplimiento del CEDH. Tras la reforma del Protocolo 11 (1998), el TEDH funciona como tribunal permanente al que pueden acudir directamente los ciudadanos de los Estados parte (demandas individuales) una vez agotadas las vías judiciales internas. Sus sentencias son obligatorias para los Estados condenados y son supervisadas por el Comité de Ministros del Consejo de Europa.

## 4. CONVENCIÓN CONTRA LA TORTURA Y OTROS TRATOS O PENAS CRUELES, INHUMANOS O DEGRADANTES (CAT)

### 4.1 Aprobación y ámbito

Adoptada por la Asamblea General de la ONU el 10 de diciembre de 1984 (Resolución 39/46) y entrada en vigor el 26 de junio de 1987. España la ratificó el 21 de octubre de 1987.

### 4.2 Definición de tortura (artículo 1)

Se entiende por tortura todo acto por el cual se inflija intencionadamente a una persona dolores o sufrimientos graves, ya sean físicos o mentales, con el fin de obtener de ella o de un tercero información o una confesión, de castigarla por un acto que haya cometido o se sospeche que ha cometido, o de intimidar o coaccionar a esa persona o a otras, o por cualquier razón basada en cualquier tipo de discriminación, cuando dichos dolores o sufrimientos sean infligidos por un funcionario público u otra persona en el ejercicio de funciones públicas, a instigación suya, o con su consentimiento o aquiescencia.

### 4.3 Obligaciones de los Estados parte

- Adoptar medidas legislativas, administrativas y judiciales eficaces para impedir la tortura (art. 2).
- No proceder a la expulsión, devolución o extradición de una persona a otro Estado cuando haya razones fundadas para creer que estaría en peligro de ser sometida a tortura — principio de **non-refoulement** (art. 3).
- Tipificar la tortura como delito en su legislación penal (art. 4).
- Investigar de forma pronta e imparcial toda denuncia de tortura (art. 12).
- Garantizar el derecho de la víctima a la indemnización (art. 14).
- Excluir las pruebas obtenidas mediante tortura (art. 15).

### 4.4 El Comité contra la Tortura (CAT)

Órgano de 10 expertos independientes que supervisa la aplicación de la Convención mediante el examen de los informes periódicos de los Estados parte, las comunicaciones entre Estados y las comunicaciones individuales.

## 5. PROTOCOLO FACULTATIVO DE LA CONVENCIÓN CONTRA LA TORTURA (OPCAT)

### 5.1 Aprobación y finalidad

El Protocolo Facultativo fue adoptado por la Asamblea General de la ONU el 18 de diciembre de 2002 (Resolución A/RES/57/199) y entró en vigor el 22 de junio de 2006. España lo ratificó el 4 de abril de 2006.

Su finalidad es establecer un sistema de visitas periódicas a cargo de órganos internacionales y nacionales independientes a los lugares donde se encuentren personas privadas de libertad, con el fin de prevenir la tortura y otros tratos crueles, inhumanos o degradantes. Se basa en el principio de que la prevención mediante la inspección regular es más eficaz que la mera represión posterior.

### 5.2 El Subcomité para la Prevención de la Tortura (SPT)

El OPCAT crea el Subcomité para la Prevención de la Tortura, compuesto por 25 expertos independientes con mandato para:
- Visitar los lugares de privación de libertad de los Estados parte.
- Formular recomendaciones.
- Cooperar con los Mecanismos Nacionales de Prevención.

### 5.3 Los Mecanismos Nacionales de Prevención (MNP)

El artículo 3 del OPCAT obliga a cada Estado parte a establecer, designar o mantener, a nivel nacional, uno o varios órganos de visitas para la prevención de la tortura, denominados Mecanismos Nacionales de Prevención.

## 6. EL MECANISMO NACIONAL DE PREVENCIÓN DE LA TORTURA DEL DEFENSOR DEL PUEBLO

### 6.1 Designación

En España, el Defensor del Pueblo fue designado como Mecanismo Nacional de Prevención de la Tortura (MNP) mediante Resolución de 1 de octubre de 2009, en virtud de la disposición final única de la LO 1/2009, de 3 de noviembre.

### 6.2 Funcionamiento

El MNP español, integrado en la institución del Defensor del Pueblo, realiza visitas periódicas y sin previo aviso a todos los centros de privación de libertad del territorio nacional:
- Centros penitenciarios.
- Comisarías de policía y cuarteles de la Guardia Civil (calabozos).
- Centros de Internamiento de Extranjeros (CIE).
- Centros de menores infractores.
- Hospitales psiquiátricos.
- Dependencias militares.
- Salas de inadmisión en aeropuertos.

### 6.3 Informes anuales

El MNP publica informes anuales que incluyen las visitas realizadas, las condiciones observadas y las recomendaciones formuladas a las autoridades competentes. Estos informes son públicos y constituyen una herramienta esencial para la rendición de cuentas de la administración penitenciaria y policial.

### 6.4 Relevancia para las FCSE

Para los miembros de las Fuerzas y Cuerpos de Seguridad del Estado, el conocimiento de los mecanismos de prevención de la tortura es esencial. Los funcionarios policiales están obligados a respetar la integridad física y moral de los detenidos (art. 520 LECrim, art. 5.3.b LO 2/1986), a facilitar el acceso de los mecanismos de inspección a las dependencias policiales, y a colaborar con las investigaciones sobre posibles malos tratos.
`;

const tema28 = `# TEMA 28. GLOBALIZACIÓN Y ANTIGLOBALIZACIÓN. CONCEPTOS Y CARACTERÍSTICAS. CONSECUENCIAS DE LA GLOBALIZACIÓN. REACCIONES A LA GLOBALIZACIÓN. EL MOVIMIENTO ANTIGLOBALIZACIÓN: ORGANIZACIONES, OBJETIVOS E HISTORIA. EL FORO SOCIAL MUNDIAL

---

## 1. CONCEPTO DE GLOBALIZACIÓN

### 1.1 Definición

La globalización puede definirse como el proceso de creciente interconexión e interdependencia entre las distintas naciones del planeta en los ámbitos económico, político, cultural, tecnológico y social, caracterizado por la intensificación de los flujos transfronterizos de capitales, mercancías, personas, información e ideas, y por la percepción de que el mundo funciona cada vez más como una unidad integrada.

El término se popularizó en la década de 1990, tras el fin de la Guerra Fría, aunque el proceso tiene raíces históricas profundas (las rutas comerciales de la Antigüedad, los descubrimientos geográficos del siglo XV, la Revolución Industrial del siglo XVIII y la expansión colonial del siglo XIX son precedentes de la interconexión global).

### 1.2 Dimensiones de la globalización

**a) Dimensión económica**: Es la más visible y estudiada. Se manifiesta en la liberalización del comercio internacional (reducción de aranceles y barreras comerciales), la libre circulación de capitales, la deslocalización de la producción industrial, la creación de cadenas de valor globales y el papel protagonista de las empresas multinacionales. Instituciones clave: Organización Mundial del Comercio (OMC), Fondo Monetario Internacional (FMI), Banco Mundial.

**b) Dimensión política**: Proliferación de organizaciones internacionales y supranacionales (ONU, UE, OTAN, G-7, G-20), cesión parcial de soberanía por parte de los Estados-nación, surgimiento de una gobernanza global incipiente para problemas transnacionales (cambio climático, terrorismo, pandemias).

**c) Dimensión cultural**: Difusión planetaria de productos culturales (cine, música, moda, gastronomía), predominio de la cultura anglosajona (*americanización* o *mcdonaldización*), tensión entre homogeneización cultural y reafirmación de identidades locales (*glocalización*), universalización de valores como los derechos humanos y la democracia.

**d) Dimensión tecnológica**: La revolución digital (Internet, telefonía móvil, redes sociales, inteligencia artificial) ha sido el motor fundamental de la globalización contemporánea. Ha reducido drásticamente los costes de comunicación y transporte, ha permitido la deslocalización de servicios y ha creado un espacio virtual de interacción global instantánea.

## 2. CARACTERÍSTICAS DE LA GLOBALIZACIÓN CONTEMPORÁNEA

1. **Interdependencia**: Lo que ocurre en un punto del planeta repercute inmediatamente en todos los demás (crisis financiera de 2008, pandemia de COVID-19).
2. **Compresión espacio-temporal**: Las distancias geográficas pierden relevancia gracias a las tecnologías de transporte y comunicación. David Harvey acuñó el concepto de *time-space compression*.
3. **Desterritorialización**: Los procesos económicos, culturales y políticos desbordan las fronteras nacionales.
4. **Desigualdad asimétrica**: La globalización no beneficia a todos por igual. Existe una brecha creciente entre países desarrollados y países en vías de desarrollo, y entre sectores sociales dentro de cada país.
5. **Papel de las multinacionales**: Las grandes corporaciones transnacionales tienen un poder económico que supera el PIB de muchos Estados.
6. **Instantaneidad informativa**: Los medios de comunicación y las redes sociales permiten la difusión inmediata de información a escala planetaria.

## 3. CONSECUENCIAS DE LA GLOBALIZACIÓN

### 3.1 Consecuencias positivas

- Crecimiento económico global y reducción de la pobreza absoluta en regiones como el Sudeste Asiático.
- Difusión de avances tecnológicos, médicos y científicos.
- Mayor acceso a la información y al conocimiento.
- Universalización de los derechos humanos y la democracia como valores de referencia.
- Fomento de la cooperación internacional para problemas globales.
- Mayor diversidad cultural y contacto intercultural.

### 3.2 Consecuencias negativas

- Aumento de las desigualdades entre países ricos y pobres y dentro de los propios países.
- Precarización laboral y pérdida de empleos en sectores no competitivos (deslocalización industrial).
- Degradación medioambiental: sobreexplotación de recursos, contaminación transfronteriza, cambio climático.
- Homogeneización cultural y pérdida de identidades locales.
- Debilitamiento de la soberanía de los Estados-nación frente a los mercados financieros y las corporaciones.
- Facilitación del crimen organizado transnacional, el terrorismo internacional y la ciberdelincuencia.
- Crisis económicas sistémicas de efecto dominó (crisis financiera global de 2008).
- Movimientos migratorios masivos y sus tensiones asociadas.

## 4. REACCIONES A LA GLOBALIZACIÓN

Las respuestas a la globalización oscilan entre la aceptación entusiasta y el rechazo radical:

- **Hiperglobalismo neoliberal**: Defiende la desregulación total de los mercados, la privatización y la mínima intervención estatal. Representado por las políticas del Consenso de Washington.
- **Reformismo o globalización con rostro humano**: Acepta la globalización como un proceso irreversible pero aboga por regularlo para corregir sus excesos: comercio justo, responsabilidad social corporativa, Tasa Tobin sobre transacciones financieras, fortalecimiento de organismos internacionales.
- **Proteccionismo nacionalista**: Reacción defensiva que busca proteger la economía y la cultura nacionales mediante aranceles, restricciones migratorias y repliegue soberano. Ha experimentado un resurgimiento con fenómenos como el Brexit o el *America First*.
- **Movimiento antiglobalización**: Rechazo frontal al modelo neoliberal de globalización desde posiciones de izquierda, ecologistas, indigenistas y altermundistas.

## 5. EL MOVIMIENTO ANTIGLOBALIZACIÓN

### 5.1 Concepto

El movimiento antiglobalización (también denominado altermundismo, bajo el lema «Otro mundo es posible») es un movimiento social heterogéneo que agrupa a organizaciones y colectivos de diversa naturaleza (sindicatos, ONG, movimientos ecologistas, grupos campesinos, colectivos indígenas, partidos de izquierda) unidos por su oposición al modelo de globalización neoliberal y sus consecuencias sobre la desigualdad, el medio ambiente y la soberanía de los pueblos.

### 5.2 Origen y evolución histórica

- **1994 — Levantamiento zapatista (EZLN)**: El 1 de enero de 1994, coincidiendo con la entrada en vigor del Tratado de Libre Comercio de América del Norte (TLCAN), el Ejército Zapatista de Liberación Nacional se alzó en Chiapas (México). Es considerado el primer movimiento social que articuló una crítica global al neoliberalismo desde una perspectiva local e indígena.
- **1999 — Batalla de Seattle**: La reunión ministerial de la OMC en Seattle fue objeto de manifestaciones masivas (más de 50.000 participantes) que lograron paralizar las negociaciones comerciales. Es el evento fundacional del movimiento antiglobalización en los medios de comunicación occidentales.
- **2001 — Cumbre de Génova (G-8)**: Violentas protestas durante la cumbre del G-8 que se saldaron con la muerte del manifestante Carlo Giuliani y cientos de heridos.
- **2001 — Primer Foro Social Mundial en Porto Alegre**.
- **2011 — Movimiento Occupy Wall Street**: Bajo el lema «Somos el 99%», las protestas en Nueva York contra la desigualdad económica y el poder de Wall Street se extendieron a cientos de ciudades del mundo.

### 5.3 Organizaciones más relevantes

- **ATTAC** (*Asociación por la Tasación de las Transacciones financieras y por la Acción Ciudadana*): Fundada en Francia en 1998, promueve la Tasa Tobin y la regulación de los mercados financieros.
- **Vía Campesina**: Movimiento internacional de campesinos, agricultores familiares e indígenas que defiende la soberanía alimentaria frente al agronegocio.
- **Greenpeace** y **Friends of the Earth**: Organizaciones ecologistas que denuncian el impacto ambiental del modelo de desarrollo neoliberal.
- **Oxfam**: ONG que combate la desigualdad global y promueve el comercio justo.
- **Peoples' Global Action (PGA)**: Red de coordinación de movimientos sociales radicales.

### 5.4 Objetivos

1. Cancelación de la deuda externa de los países en desarrollo.
2. Regulación de los mercados financieros internacionales (Tasa Tobin).
3. Abolición de los paraísos fiscales.
4. Reforma democrática de las instituciones internacionales (OMC, FMI, Banco Mundial).
5. Protección del medio ambiente y lucha contra el cambio climático.
6. Soberanía alimentaria y comercio justo.
7. Respeto a los derechos de los pueblos indígenas y las minorías.
8. Defensa de los servicios públicos frente a la privatización.

## 6. EL FORO SOCIAL MUNDIAL (FSM)

### 6.1 Concepto y origen

El Foro Social Mundial es un encuentro internacional de la sociedad civil organizada que se celebra anualmente como contrapunto al Foro Económico Mundial de Davos (Suiza), donde se reúnen las élites políticas y empresariales globales.

El primer FSM tuvo lugar en Porto Alegre (Brasil) del 25 al 30 de enero de 2001, por iniciativa de ATTAC, el Movimiento de los Trabajadores Rurales Sin Tierra (MST) y otras organizaciones brasileñas. Su lema fundacional es: **«Otro mundo es posible»** (*Um outro mundo é possível*).

### 6.2 Principios (Carta de Principios del FSM, 2001)

1. Es un espacio abierto de encuentro para la reflexión, el debate, la formulación de propuestas, el intercambio de experiencias y la articulación de movimientos sociales.
2. Se opone al neoliberalismo y al dominio del mundo por el capital y cualquier forma de imperialismo.
3. No es una organización ni pretende ser un representante de la sociedad civil mundial. No toma decisiones como cuerpo.
4. No puede participar ningún partido político ni organización militar.
5. Se compromete con la construcción de una sociedad planetaria centrada en el ser humano.

### 6.3 Evolución

- **2001-2003**: Porto Alegre (Brasil). El FSM se consolida como el principal evento del movimiento altermundista, con asistencia creciente (de 20.000 participantes en 2001 a más de 100.000 en 2003).
- **2004**: Mumbai (India). Primer FSM fuera de América Latina.
- **2006**: Formato descentralizado (policéntrico) con sedes en Bamako (Mali), Caracas (Venezuela) y Karachi (Pakistán).
- **2007-2024**: Se han celebrado ediciones en Nairobi, Belém, Dakar, Túnez, Salvador de Bahía (2018) y Katmandú (Nepal, 2024).

### 6.4 Implicaciones para la seguridad pública

Desde la perspectiva policial, los movimientos antiglobalización y los foros sociales plantean desafíos de orden público: manifestaciones masivas, posibles infiltraciones de grupos violentos (Black Bloc), necesidad de equilibrar el derecho de reunión y expresión con la protección de la seguridad ciudadana y las infraestructuras críticas. La experiencia de Seattle (1999) y Génova (2001) condujo a una revisión de los protocolos policiales de gestión de multitudes en todo el mundo.
`;

const tema29 = `# TEMA 29. ACTITUDES Y VALORES SOCIALES. FORMACIÓN DE LAS ACTITUDES: CONCEPTO, COMPONENTES Y FUNCIONES. ESTEREOTIPOS, PREJUICIOS Y DISCRIMINACIÓN. ACTITUDES DE LA PERSONALIDAD AUTORITARIA: XENOFOBIA Y DOGMATISMO. LOS GRUPOS SOCIALES

---

## 1. CONCEPTO DE ACTITUD

### 1.1 Definición

Una actitud puede definirse como una predisposición aprendida a responder de forma consistentemente favorable o desfavorable respecto a un objeto social dado (Fishbein y Ajzen, 1975). Las actitudes no son directamente observables, sino constructos hipotéticos que se infieren a partir de las respuestas verbales y comportamentales del sujeto.

Gordon Allport (1935) ofreció una de las definiciones más influyentes: «Una actitud es un estado mental y neural de disposición, organizado a través de la experiencia, que ejerce una influencia directiva o dinámica sobre las respuestas del individuo a todos los objetos y situaciones con los que se relaciona».

### 1.2 Características de las actitudes

- Son **aprendidas**: Se forman a través de la experiencia directa, la observación y la socialización.
- Son **relativamente estables**: Aunque pueden cambiar, tienden a perdurar en el tiempo.
- Son **direccionales**: Se orientan hacia objetos sociales específicos (personas, grupos, instituciones, ideas).
- Implican una **evaluación**: Suponen siempre un juicio de valor (positivo o negativo, favorable o desfavorable).
- **Predisponen a la acción**: Aunque no determinan directamente la conducta, influyen significativamente en ella.

## 2. COMPONENTES DE LAS ACTITUDES: EL MODELO TRIPARTITO

El modelo tripartito o ABC (*Affect, Behavior, Cognition*) establece que toda actitud se compone de tres elementos:

### 2.1 Componente cognitivo (creencias)

Se refiere a los pensamientos, creencias e ideas que una persona tiene sobre el objeto de actitud. Constituye el componente informativo: lo que el sujeto cree saber. Ejemplo: «Los inmigrantes compiten por puestos de trabajo con los nacionales» es una creencia (verdadera o falsa) que forma parte de una actitud hacia la inmigración.

### 2.2 Componente afectivo (sentimientos)

Se refiere a las emociones y sentimientos que el objeto de actitud despierta en el sujeto. Es el componente evaluativo: lo que el sujeto siente. Ejemplo: «Me genera inquietud la llegada masiva de inmigrantes» expresa la dimensión emocional de la actitud.

### 2.3 Componente conductual o conativo (tendencia a la acción)

Se refiere a la predisposición a actuar de una determinada manera respecto al objeto de actitud. Es la intención comportamental. Ejemplo: «Votaría a un partido que restrinja la inmigración» refleja la dimensión conductual de la actitud.

Los tres componentes tienden a la coherencia entre sí (principio de consistencia cognitiva de Festinger), pero no siempre coinciden: una persona puede tener creencias positivas sobre la diversidad cultural, sentir incomodidad ante los inmigrantes y actuar de forma neutral. La discrepancia entre actitud y conducta es uno de los problemas clásicos de la Psicología Social.

## 3. FUNCIONES DE LAS ACTITUDES

Daniel Katz (1960) propuso una clasificación funcional de las actitudes:

- **Función adaptativa o instrumental**: Las actitudes ayudan a maximizar las recompensas y minimizar los castigos del entorno social. El individuo adopta actitudes favorables hacia los objetos que le proporcionan beneficios y desfavorables hacia los que le causan perjuicios.
- **Función defensiva del yo (ego-defensiva)**: Las actitudes protegen la autoestima del sujeto, permitiéndole negar amenazas internas o externas. El prejuicio racial puede funcionar como mecanismo de defensa que permite al sujeto proyectar su inseguridad en un grupo externo (*chivo expiatorio*).
- **Función expresiva de valores**: Las actitudes permiten al individuo expresar sus valores centrales y su identidad. Un ecologista convencido adoptará actitudes favorables hacia el reciclaje como expresión coherente de sus valores.
- **Función cognitiva o de conocimiento**: Las actitudes ayudan a organizar y simplificar la información del entorno, proporcionando marcos de referencia para interpretar la realidad. Los estereotipos cumplen esta función de economía cognitiva.

## 4. FORMACIÓN DE LAS ACTITUDES

Las actitudes se forman a través de diversos procesos:

- **Experiencia directa**: El contacto personal con el objeto de actitud es la fuente más poderosa de formación actitudinal.
- **Condicionamiento clásico**: La asociación repetida de un estímulo neutro con un estímulo que provoca una respuesta emocional puede generar una actitud. La publicidad utiliza sistemáticamente este mecanismo.
- **Condicionamiento operante**: Las actitudes que son reforzadas (aprobación social) tienden a mantenerse; las que son castigadas (rechazo) tienden a abandonarse.
- **Aprendizaje vicario (modelado)**: La observación de las actitudes de personas significativas (padres, profesores, líderes de opinión, personajes mediáticos) es una fuente fundamental de formación actitudinal, especialmente en la infancia y la adolescencia.
- **Influencia del grupo de referencia**: Los grupos a los que pertenecemos o aspiramos a pertenecer (familia, amigos, partido político, cuerpo policial) ejercen una presión normativa que moldea nuestras actitudes.

## 5. ESTEREOTIPOS, PREJUICIOS Y DISCRIMINACIÓN

Estos tres conceptos forman una secuencia interrelacionada que va desde lo cognitivo hasta lo conductual:

### 5.1 Estereotipos (componente cognitivo)

Un estereotipo es una creencia generalizada y simplificada sobre las características de un grupo social. Walter Lippmann (1922) introdujo el concepto en su obra *Public Opinion*, definiéndolos como «las imágenes en nuestras cabezas».

Los estereotipos cumplen una función cognitiva de categorización y simplificación de la realidad social, pero implican una **sobregeneralización** que ignora la variabilidad individual dentro del grupo. Pueden ser positivos, negativos o neutros, pero los estereotipos negativos son los que alimentan el prejuicio.

### 5.2 Prejuicio (componente afectivo)

El prejuicio es una actitud negativa injustificada hacia un grupo social y sus miembros. Gordon Allport (1954), en *The Nature of Prejudice*, lo definió como «una antipatía basada en una generalización defectuosa e inflexible».

El prejuicio se diferencia del estereotipo en su carga emocional: no es solo una creencia, sino un sentimiento negativo (hostilidad, desprecio, miedo, asco) dirigido hacia el grupo estereotipado.

### 5.3 Discriminación (componente conductual)

La discriminación es la conducta diferencial y perjudicial dirigida hacia los miembros de un grupo sobre el que se mantiene un prejuicio. Puede ser:
- **Individual**: Un propietario que se niega a alquilar un piso a un inmigrante.
- **Institucional**: Prácticas organizativas que, de forma sistemática, perjudican a determinados grupos (perfiles raciales policiales).
- **Positiva**: Medidas de acción afirmativa destinadas a compensar desigualdades históricas (cuotas de género, plazas reservadas).

## 6. ACTITUDES DE LA PERSONALIDAD AUTORITARIA: XENOFOBIA Y DOGMATISMO

### 6.1 La personalidad autoritaria (Adorno et al., 1950)

Theodor Adorno, Else Frenkel-Brunswik, Daniel Levinson y Nevitt Sanford publicaron en 1950 *The Authoritarian Personality*, estudio pionero que estableció una correlación entre ciertos rasgos de personalidad y la predisposición al autoritarismo, el antisemitismo y el fascismo.

Los rasgos de la personalidad autoritaria incluyen:
- **Convencionalismo**: Adhesión rígida a los valores convencionales de la clase media.
- **Sumisión autoritaria**: Actitud acrítica frente a las autoridades del grupo de pertenencia.
- **Agresividad autoritaria**: Tendencia a buscar, condenar, rechazar y castigar a quienes violan las normas convencionales.
- **Pensamiento estereotipado**: Visión rígida y simplificada de la realidad social.
- **Proyectividad**: Tendencia a proyectar impulsos inconscientes en el exterior (atribuir a los grupos minoritarios los propios defectos).

### 6.2 Xenofobia

La xenofobia (del griego *xenos* = extranjero y *phobos* = miedo) es el rechazo, hostilidad o miedo irracional hacia las personas extranjeras o hacia lo que se percibe como ajeno o diferente. Se manifiesta en actitudes de rechazo social, discurso de odio, agresiones y, en su forma extrema, en políticas de persecución étnica o religiosa.

### 6.3 Dogmatismo

Milton Rokeach (1960), en *The Open and Closed Mind*, amplió el concepto de personalidad autoritaria al introducir el constructo de *dogmatismo*, definido como un sistema cognitivo cerrado, organizado en torno a un conjunto de creencias rígidas sobre la realidad y la autoridad, que funciona como un mecanismo de defensa contra la amenaza y la incertidumbre. A diferencia de la escala F de Adorno (centrada en el autoritarismo de derechas), el dogmatismo de Rokeach es ideológicamente neutro: puede darse tanto en la extrema derecha como en la extrema izquierda.

## 7. LOS GRUPOS SOCIALES

### 7.1 Concepto de grupo social

Un grupo social puede definirse como un conjunto de personas que interactúan entre sí, comparten normas, valores y objetivos comunes, tienen conciencia de pertenencia al grupo (*nosotros*) y son percibidos como grupo por los demás.

### 7.2 Clasificación de los grupos

- **Grupos primarios** (Cooley, 1909): Relaciones íntimas, cara a cara, de pequeño tamaño, con fuerte carga emocional. Ejemplo: la familia, el grupo de amigos íntimos.
- **Grupos secundarios**: Relaciones formales, funcionales, de mayor tamaño, con vínculos menos intensos. Ejemplo: una empresa, un sindicato, un cuerpo policial.
- **Grupos de pertenencia**: Aquellos a los que el individuo pertenece de hecho.
- **Grupos de referencia**: Aquellos que el individuo toma como modelo para orientar sus actitudes y comportamiento, pertenezca o no a ellos.
- **Endogrupo (ingroup)**: El grupo propio, con el que el individuo se identifica.
- **Exogrupo (outgroup)**: El grupo ajeno, percibido como diferente y potencialmente amenazante.

### 7.3 Dinámica grupal

Kurt Lewin, considerado el padre de la dinámica de grupos, estableció que el comportamiento del individuo dentro del grupo está determinado por el «campo de fuerzas» grupal. Conceptos clave:
- **Cohesión grupal**: Fuerza que mantiene unidos a los miembros del grupo.
- **Conformidad**: Tendencia a ajustar la propia conducta y opiniones a las normas del grupo (experimentos de Solomon Asch, 1951).
- **Pensamiento grupal (groupthink)**: Irving Janis (1972) describe la tendencia de los grupos muy cohesionados a tomar decisiones defectuosas por priorizar la unanimidad sobre el pensamiento crítico.
- **Polarización grupal**: Tendencia de los grupos a tomar decisiones más extremas que las que tomarían sus miembros individualmente.
- **Liderazgo**: Estilos autocrático, democrático y *laissez-faire* (Lewin, Lippitt y White, 1939).
`;

const tema30 = `# TEMA 30. PRINCIPIOS ÉTICOS DE LA SOCIEDAD ACTUAL. TRANSMISIÓN DE VALORES EN LA SOCIEDAD ACTUAL: EL PROCESO DE SOCIALIZACIÓN. LIBERTAD-RESPONSABILIDAD. IGUALDAD-SOLIDARIDAD. TOLERANCIA. CONTRAVALORES: RACISMO, FANATISMO, FUNDAMENTALISMO, SECTARISMO, HOOLIGANISMO. DELITOS DE ODIO

---

## 1. ÉTICA Y MORAL: CONCEPTOS FUNDAMENTALES

### 1.1 Distinción entre ética y moral

Aunque en el lenguaje coloquial se usan como sinónimos, conviene distinguirlos:
- **Moral**: Conjunto de normas, valores y costumbres que regulan la conducta de los miembros de una sociedad concreta en un momento histórico determinado. Es descriptiva y particular: cada sociedad, cada grupo, cada época tiene su propia moral.
- **Ética**: Reflexión filosófica y racional sobre la moral. Es normativa y pretende universalidad: busca principios válidos para toda la humanidad, más allá de las diferencias culturales. La ética pregunta: ¿qué debemos hacer y por qué?

### 1.2 La ética en la sociedad contemporánea

La sociedad actual se caracteriza por el **pluralismo moral**: coexisten sistemas de valores diversos y a veces contradictorios. La globalización, los movimientos migratorios, la secularización y el individualismo han erosionado la homogeneidad moral de las sociedades tradicionales. Sin embargo, existe un núcleo de valores compartidos que actúa como ética mínima de convivencia: los derechos humanos, el Estado de Derecho, la democracia, la dignidad de la persona.

## 2. TRANSMISIÓN DE VALORES: EL PROCESO DE SOCIALIZACIÓN

### 2.1 Concepto de socialización

La socialización es el proceso mediante el cual el individuo interioriza las normas, valores, actitudes y pautas de conducta de la sociedad en la que vive, convirtiéndose en un miembro funcional de la misma. Es un proceso continuo que dura toda la vida, aunque es especialmente intenso durante la infancia y la adolescencia.

### 2.2 Tipos de socialización

- **Socialización primaria**: Se produce durante la infancia, en el seno de la familia. Es la más importante porque establece las estructuras cognitivas y emocionales básicas del individuo. El niño aprende el lenguaje, los roles de género, las normas elementales de convivencia y los valores fundamentales de su entorno.
- **Socialización secundaria**: Se produce cuando el individuo se incorpora a nuevos grupos sociales fuera de la familia: la escuela, el grupo de iguales, el mundo laboral, el ejército, el cuerpo policial. Implica la adquisición de conocimientos especializados y roles específicos.
- **Resocialización**: Proceso mediante el cual se desaprenden valores y pautas de conducta anteriores y se adquieren otros nuevos. Se da en instituciones totales (prisiones, cuarteles, monasterios) o en situaciones de cambio radical de vida (emigración, conversión religiosa).

### 2.3 Agentes de socialización

- **La familia**: Agente primario fundamental. Transmite los primeros valores, normas y hábitos. El estilo educativo parental (autoritario, democrático, permisivo, negligente) influye decisivamente en la formación moral del individuo.
- **La escuela**: Agente formal que transmite no solo conocimientos académicos, sino valores cívicos, normas de convivencia y habilidades sociales.
- **El grupo de iguales (peers)**: Especialmente influyente durante la adolescencia. Puede reforzar o contradecir los valores transmitidos por la familia y la escuela.
- **Los medios de comunicación**: Televisión, prensa, radio e Internet difunden modelos de conducta, estereotipos y valores de forma masiva e influyente.
- **Las redes sociales**: En las últimas décadas se han convertido en un agente de socialización de primer orden, especialmente entre los jóvenes. Crean burbujas informativas, promueven la viralidad y pueden contribuir tanto a la difusión de valores democráticos como a la radicalización.
- **Las instituciones religiosas**: Transmiten sistemas de valores y normas morales basados en la tradición y la fe.

## 3. VALORES FUNDAMENTALES DE LA SOCIEDAD DEMOCRÁTICA

### 3.1 Libertad y Responsabilidad

La **libertad** es el valor que reconoce la capacidad del ser humano para elegir y actuar según su propia voluntad. En el ámbito jurídico-político, se manifiesta en las libertades fundamentales reconocidas en la Constitución (libertad de expresión, de reunión, de asociación, de circulación, de conciencia). Sin embargo, la libertad no es absoluta: está limitada por los derechos de los demás y por el bien común.

La **responsabilidad** es el correlato necesario de la libertad. Ser libre implica responder de las consecuencias de las propias decisiones. La responsabilidad puede ser moral (ante la propia conciencia), social (ante la comunidad), jurídica (ante la ley) y profesional (ante el ejercicio de la función pública). Para un agente policial, la responsabilidad adquiere una dimensión especial: el uso de la fuerza, la restricción legítima de libertades ajenas y la protección de los ciudadanos exigen un alto grado de responsabilidad ética y deontológica.

### 3.2 Igualdad y Solidaridad

La **igualdad** proclama que todos los seres humanos tienen la misma dignidad y los mismos derechos fundamentales. El artículo 14 de la Constitución Española establece que los españoles son iguales ante la ley sin que pueda prevalecer discriminación alguna por razón de nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social. La igualdad puede ser formal (igualdad ante la ley), material (igualdad real de oportunidades y condiciones) y de trato (no discriminación).

La **solidaridad** es el valor que expresa el compromiso de ayuda mutua entre los miembros de la sociedad, especialmente hacia los más vulnerables. Se manifiesta en el Estado del Bienestar, la cooperación al desarrollo, el voluntariado y la acción social.

### 3.3 Tolerancia

La **tolerancia** es el respeto activo hacia las opiniones, creencias, prácticas y formas de vida diferentes a las propias. No implica indiferencia ni aprobación, sino la aceptación de la legitimidad de la diversidad en una sociedad plural. Los límites de la tolerancia se encuentran en la intolerancia misma: no se puede tolerar lo que destruye la convivencia democrática (paradoja de la tolerancia de Karl Popper).

## 4. CONTRAVALORES: REACCIONES SOCIALES A LOS VALORES MAYORITARIOS

### 4.1 Racismo

Ideología que postula la existencia de razas humanas superiores e inferiores y justifica la dominación, exclusión o exterminio de los grupos considerados inferiores. Aunque la ciencia ha demostrado que el concepto biológico de «raza» carece de fundamento genético, el racismo persiste como construcción social y se manifiesta en discriminación laboral, segregación residencial, perfiles étnicos policiales y violencia racial.

### 4.2 Fanatismo

Adhesión apasionada, ciega e intransigente a una causa, ideología o creencia que lleva al individuo a considerar que su verdad es la única válida y a rechazar violentamente cualquier disidencia. El fanatismo puede ser religioso, político, deportivo o ideológico.

### 4.3 Fundamentalismo

Corriente ideológica o religiosa que defiende la interpretación literal e intransigente de los textos sagrados o de los principios fundacionales de una doctrina, rechazando cualquier adaptación a los tiempos modernos. El fundamentalismo islamista, el fundamentalismo cristiano evangélico y el fundamentalismo de mercado son ejemplos contemporáneos.

### 4.4 Sectarismo

El sectarismo se refiere a la adhesión fanática a una secta o grupo cerrado que manipula a sus miembros mediante técnicas de control mental, aislamiento social, explotación económica y sometimiento a un líder carismático. Las sectas destructivas atentan contra la libertad, la dignidad y la salud mental de sus adeptos.

### 4.5 Hooliganismo

Fenómeno de violencia grupal asociado al deporte, especialmente al fútbol. Los hooligans (*ultras*) utilizan los eventos deportivos como pretexto para ejercer violencia contra los seguidores del equipo contrario, las fuerzas de seguridad y las instalaciones públicas. En España, la LO 19/2007, de 11 de julio, contra la violencia, el racismo, la xenofobia y la intolerancia en el deporte establece el marco legal de actuación.

## 5. DELITOS DE ODIO

### 5.1 Concepto

Un delito de odio es cualquier infracción penal cometida contra personas o bienes cuando la víctima, el local o el objetivo son seleccionados por su conexión, vinculación, afiliación, apoyo o pertenencia real o percibida a un grupo social definido por características como raza, origen nacional o étnico, lengua, religión, sexo, orientación sexual, identidad de género, discapacidad, edad u otros factores similares (definición operativa de la OSCE).

### 5.2 Marco jurídico español

- **Artículo 22.4ª del Código Penal**: Circunstancia agravante genérica por motivos racistas, antisemitas, de orientación sexual, identidad de género, enfermedad o discapacidad.
- **Artículo 510 CP**: Delitos de incitación al odio, la hostilidad, la discriminación o la violencia contra grupos o personas por los motivos anteriores. Incluye la producción y distribución de materiales que fomenten el odio.
- **Artículos 511-512 CP**: Discriminación en el empleo y en los servicios públicos.
- **Artículo 515.4º CP**: Asociaciones ilícitas que promuevan la discriminación o el odio.

### 5.3 Actuación policial

Las FCSE disponen de protocolos específicos para la identificación, registro y persecución de los delitos de odio. El Sistema Estadístico de Criminalidad (SEC) incorpora un apartado específico para estos delitos. Desde 2014, el Ministerio del Interior publica anualmente un Informe sobre la evolución de los delitos de odio en España.
`;

const tema31 = `# TEMA 31. INMIGRACIÓN. CONCEPTO, CLASES Y CAUSAS. MOVIMIENTOS MIGRATORIOS EN LA ACTUALIDAD. MARCO JURÍDICO. POLÍTICAS DE INTEGRACIÓN. INMIGRACIÓN IRREGULAR. PAPEL DE LAS FUERZAS Y CUERPOS DE SEGURIDAD

---

## 1. CONCEPTOS BÁSICOS

### 1.1 Definiciones fundamentales

- **Migración**: Desplazamiento de personas desde su lugar de residencia habitual a otro, con carácter temporal o permanente, dentro o fuera de las fronteras de un país.
- **Emigración**: Salida de personas de su país de origen o residencia para establecerse en otro.
- **Inmigración**: Llegada de personas a un país distinto del de su origen o residencia habitual para establecerse en él.
- **Migración interna**: Desplazamiento dentro del mismo país (éxodo rural, movimientos interregionales).
- **Migración externa o internacional**: Desplazamiento que implica el cruce de fronteras nacionales.
- **Persona refugiada**: Persona que, debido a fundados temores de ser perseguida por motivos de raza, religión, nacionalidad, pertenencia a un grupo social determinado u opiniones políticas, se encuentra fuera de su país de nacionalidad y no puede o no quiere acogerse a su protección (art. 1 de la Convención de Ginebra de 1951).
- **Apátrida**: Persona que ningún Estado considera como nacional conforme a su legislación.

### 1.2 Tipos de migración

- Según la voluntariedad: **voluntaria** (por motivos económicos, familiares, educativos) o **forzada** (refugiados, desplazados por conflictos, catástrofes naturales).
- Según la temporalidad: **temporal** (estacional, por contrato) o **permanente** (establecimiento definitivo).
- Según la legalidad: **regular** (con documentación y permisos) o **irregular** (sin autorización administrativa para residir o trabajar).

## 2. CAUSAS DE LOS MOVIMIENTOS MIGRATORIOS

El modelo clásico de análisis de las causas migratorias es el modelo **push-pull** (Ravenstein, 1885; Lee, 1966):

### 2.1 Factores de expulsión (push)

- **Económicos**: Pobreza, desempleo, bajos salarios, falta de oportunidades de desarrollo.
- **Políticos**: Persecución, inestabilidad, conflictos armados, terrorismo, regímenes dictatoriales.
- **Sociales**: Discriminación por razón de género, etnia, religión u orientación sexual.
- **Ambientales**: Desertificación, inundaciones, sequías, cambio climático.
- **Demográficos**: Superpoblación, presión sobre los recursos.

### 2.2 Factores de atracción (pull)

- **Económicos**: Mercados laborales con demanda de mano de obra, mejores salarios.
- **Políticos**: Estabilidad democrática, respeto a los derechos humanos, Estado de Derecho.
- **Sociales**: Sistemas de protección social, sanidad, educación.
- **Redes migratorias**: Presencia de compatriotas ya asentados (efecto llamada, cadenas migratorias).
- **Proximidad geográfica y cultural**: Lengua común, lazos históricos coloniales.

## 3. MOVIMIENTOS MIGRATORIOS EN LA ACTUALIDAD

### 3.1 Contexto global

Según datos de la Organización Internacional para las Migraciones (OIM) y ACNUR, el número de migrantes internacionales supera los 280 millones de personas (aproximadamente el 3,6% de la población mundial). Los principales corredores migratorios se dirigen de Sur a Norte (África-Europa, Latinoamérica-Norteamérica, Asia del Sur-Golfo Pérsico) aunque los movimientos Sur-Sur son igualmente significativos.

### 3.2 La inmigración en España

España ha experimentado una transformación demográfica profunda en las últimas tres décadas, pasando de ser un país emisor de emigrantes (1950-1975) a convertirse en un país receptor de inmigración a partir de los años 2000. Las principales nacionalidades de origen son: Marruecos, Rumanía, Colombia, Ecuador, Venezuela, China, Honduras, Reino Unido, Italia y Ucrania.

### 3.3 La Unión Europea y la presión migratoria

La UE se enfrenta a flujos migratorios de diversa naturaleza: inmigración económica regular, reagrupación familiar, movilidad intracomunitaria (libre circulación de ciudadanos europeos) e inmigración irregular por las rutas mediterránea (central, occidental y oriental) y terrestre (Balcanes, Ceuta y Melilla).

## 4. MARCO JURÍDICO DE LA INMIGRACIÓN EN ESPAÑA

### 4.1 Normativa internacional

- **Convención de Ginebra de 1951** y su Protocolo de 1967 sobre el Estatuto de los Refugiados.
- **Convención Internacional sobre la protección de los derechos de todos los trabajadores migratorios y de sus familiares** (ONU, 1990).
- **Pacto Mundial para la Migración Segura, Ordenada y Regular** (Marrakech, 2018).

### 4.2 Normativa europea

- **Acuerdo de Schengen (1985) y Convenio de Aplicación (1990)**: Espacio de libre circulación sin controles fronterizos internos, con refuerzo de las fronteras exteriores comunes.
- **Reglamento Dublín III**: Determina el Estado miembro responsable del examen de una solicitud de protección internacional.
- **Directiva de Retorno (2008/115/CE)**: Normas y procedimientos para el retorno de nacionales de terceros países en situación irregular.
- **FRONTEX (Agencia Europea de la Guardia de Fronteras y Costas)**: Coordina la gestión de las fronteras exteriores de la UE.
- **Sistema de Información Schengen (SIS II)**: Base de datos policial compartida para la gestión de la seguridad fronteriza.
- **Sistema Europeo Común de Asilo (SECA)**: Marco normativo armonizado para el tratamiento de las solicitudes de protección internacional.

### 4.3 Normativa española

- **LO 4/2000, de 11 de enero, sobre derechos y libertades de los extranjeros en España y su integración social** (Ley de Extranjería, reformada por LO 8/2000, LO 14/2003 y LO 2/2009): Regula la entrada, estancia, residencia, trabajo y salida de los extranjeros no comunitarios, así como sus derechos y libertades.
- **RD 557/2011, de 20 de abril**: Reglamento de la Ley de Extranjería.
- **Ley 12/2009, de 30 de octubre, reguladora del derecho de asilo y de la protección subsidiaria**.
- **LO 4/2015, de 30 de marzo, de Protección de la Seguridad Ciudadana**: Regula el régimen de las devoluciones en frontera (disposición adicional décima, «rechazo en frontera» en Ceuta y Melilla).

## 5. POLÍTICAS DE INTEGRACIÓN

### 5.1 Modelos teóricos

- **Asimilación**: El inmigrante abandona su cultura de origen y adopta completamente la cultura del país receptor. Modelo históricamente predominante en Francia.
- **Multiculturalismo**: La sociedad receptora reconoce y respeta la diversidad cultural, permitiendo la coexistencia de comunidades diferenciadas con sus propias tradiciones. Modelo desarrollado en Reino Unido, Canadá y Países Bajos.
- **Interculturalismo**: Promueve el diálogo, la interacción y el intercambio enriquecedor entre culturas diversas, buscando valores compartidos sin renuncia a la identidad propia. Es el modelo que la UE y España promueven actualmente.

### 5.2 La integración en España

La normativa española (art. 2 bis LO 4/2000) reconoce el principio de integración como un proceso bidireccional de adaptación mutua entre inmigrantes y sociedad receptora. Las Comunidades Autónomas y los Ayuntamientos desarrollan planes de integración que incluyen programas de aprendizaje del idioma, inserción laboral, mediación intercultural y sensibilización social.

## 6. INMIGRACIÓN IRREGULAR

### 6.1 Concepto

Se considera inmigración irregular la entrada, estancia o permanencia en territorio español de un ciudadano extranjero sin cumplir los requisitos legalmente establecidos (visado, permiso de residencia, permiso de trabajo).

### 6.2 Vías de entrada irregular en España

- **Vía marítima**: Embarcaciones precarias (pateras, cayucos) que cruzan el Estrecho de Gibraltar, navegan desde las costas africanas hacia las Islas Canarias (ruta atlántica) o se dirigen a las costas de Andalucía, Murcia o Baleares (ruta mediterránea occidental).
- **Vía terrestre**: Salto de las vallas fronterizas de Ceuta y Melilla.
- **Vía aérea**: Llegada con visado de turista y permanencia en situación irregular una vez expirado (la más frecuente numéricamente, aunque la menos mediática).
- **Tráfico de personas y trata de seres humanos**: Redes criminales organizadas que explotan a los migrantes.

### 6.3 Consecuencias de la irregularidad

La situación administrativa irregular genera vulnerabilidad: explotación laboral, exclusión de los servicios públicos (más allá de los derechos básicos reconocidos por la ley), miedo a la denuncia ante las autoridades (lo que favorece la victimización), riesgo de expulsión administrativa.

## 7. PAPEL DE LAS FUERZAS Y CUERPOS DE SEGURIDAD DEL ESTADO

### 7.1 Competencias del Cuerpo Nacional de Policía

Según la LO 2/1986, de 13 de marzo, de Fuerzas y Cuerpos de Seguridad (art. 12.1.A), corresponde al Cuerpo Nacional de Policía:
- El control de entrada y salida del territorio nacional de españoles y extranjeros.
- Las previstas en la legislación sobre extranjería, refugio y asilo, extradición, expulsión, emigración e inmigración.
- La vigilancia e inspección del cumplimiento de la normativa en materia de juego.
- La expedición del DNI y los pasaportes.

### 7.2 Actuaciones específicas en materia de extranjería

- **Controles fronterizos**: Verificación documental en puestos habilitados (aeropuertos, puertos, pasos terrestres).
- **Centros de Internamiento de Extranjeros (CIE)**: Establecimientos no penitenciarios donde se retiene a los extranjeros en situación irregular mientras se tramita su expulsión (máximo 60 días, art. 62 LO 4/2000).
- **Expedientes de expulsión y devolución**: Instrucción de los procedimientos administrativos sancionadores por estancia irregular.
- **Lucha contra el tráfico ilícito de migrantes y la trata de seres humanos**: Investigación policial de las redes criminales que explotan la inmigración irregular.
- **UCRIF (Unidad Central de Redes de Inmigración Ilegal y Falsedades Documentales)**: Unidad especializada del CNP en la lucha contra las redes de inmigración ilegal.
- **Oficinas de Extranjería**: Dependencias donde se tramitan autorizaciones de residencia, trabajo y reagrupación familiar.
`;

async function run() {
    try {
        console.log("=== BLOQUE B — Lote 1 (Temas 27-31) ===");
        console.log("Destino:", TARGET_DIR);
        
        const temas = [
            { content: tema27, name: "Tema 27 - Derechos Humanos" },
            { content: tema28, name: "Tema 28 - Globalizacion y Antiglobalizacion" },
            { content: tema29, name: "Tema 29 - Actitudes y Valores Sociales" },
            { content: tema30, name: "Tema 30 - Principios Eticos de la Sociedad Actual" },
            { content: tema31, name: "Tema 31 - Inmigracion" },
        ];

        for (const t of temas) {
            await mdToPdf({ content: t.content }, { dest: path.join(TARGET_DIR, t.name + ".pdf") });
            console.log("✓", t.name);
        }
        
        console.log("\\nLote 1 completado: 5 PDFs generados.");
    } catch (e) {
        console.error("Error:", e);
    }
}

run();
