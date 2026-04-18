import fs from 'fs';
import path from 'path';
import { mdToPdf } from 'md-to-pdf';

const TARGET_DIR = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/AYUDANTE INSTITUCIONES PENITENCIARIAS';

if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// ============================================================
// TEMA 1 — ELEMENTOS DE LA CONDUCTA HUMANA
// ============================================================
const tema1 = `# TEMA 1. ELEMENTOS DE LA CONDUCTA HUMANA. ESTÍMULOS Y RESPUESTAS. REFUERZO Y CASTIGO. TÉCNICAS DE EVALUACIÓN DE LA CONDUCTA HUMANA: LA OBSERVACIÓN, LA AUTOOBSERVACIÓN, EL AUTORREGISTRO, LOS AUTOINFORMES, LOS REGISTROS PSICOFISIOLÓGICOS. LA INTEGRACIÓN DE LOS DATOS DE LA EVALUACIÓN Y REALIZACIÓN DE INFORMES

---

## 1. INTRODUCCIÓN: LA PSICOLOGÍA EN EL ÁMBITO PENITENCIARIO

La Psicología Penitenciaria constituye una rama aplicada de la Psicología cuyo objeto de estudio es el comportamiento humano dentro del contexto de la privación de libertad. Su fundamento jurídico se encuentra en el artículo 25.2 de la Constitución Española, que establece que las penas privativas de libertad estarán orientadas hacia la reeducación y reinserción social, así como en la Ley Orgánica 1/1979, de 26 de septiembre, General Penitenciaria (en adelante, LOGP), y en el Real Decreto 190/1996, de 9 de febrero, por el que se aprueba el Reglamento Penitenciario (en adelante, RP).

El artículo 62 de la LOGP establece que el tratamiento penitenciario se inspirará en los siguientes principios: se basará en el estudio científico de la constitución, temperamento, carácter, aptitudes y actitudes del sujeto, así como de su sistema dinámico-motivacional y del aspecto evolutivo de su personalidad. Asimismo, el artículo 110 del RP dispone que la Administración Penitenciaria diseñará programas formativos orientados a desarrollar las aptitudes de los internos, enriquecer sus conocimientos, mejorar sus capacidades técnicas o profesionales y compensar sus carencias.

Para el cumplimiento de estos objetivos, resulta imprescindible conocer los elementos que configuran la conducta humana, las leyes que rigen su adquisición y mantenimiento, y las técnicas que permiten evaluarla de forma rigurosa y sistemática.

## 2. ELEMENTOS DE LA CONDUCTA HUMANA

### 2.1 Concepto de conducta

La conducta humana puede definirse como el conjunto de acciones y reacciones —observables o encubiertas— que un organismo ejecuta en relación con su medio ambiente. La psicología científica, desde el conductismo clásico de John B. Watson (1913) hasta los modelos cognitivo-conductuales actuales, ha establecido que la conducta se comprende a través del análisis funcional de tres sistemas de respuesta:

- **El sistema motor o conductual**: Comprende las acciones observables del sujeto. En el medio penitenciario, incluye desde las conductas de cumplimiento normativo (asistir a recuentos, mantener la celda ordenada) hasta las conductas disruptivas (agresiones, autolesiones, intentos de fuga).

- **El sistema cognitivo-verbal**: Abarca los pensamientos, creencias, atribuciones y expectativas del individuo. Un interno puede presentar distorsiones cognitivas relacionadas con la minimización del delito, la externalización de la culpa o esquemas de desconfianza hacia la autoridad institucional.

- **El sistema psicofisiológico o emocional**: Se refiere a las respuestas del sistema nervioso autónomo y somático, tales como la activación simpática (taquicardia, sudoración palmar), la tensión muscular o las alteraciones del sueño que frecuentemente acompañan a la ansiedad carcelaria.

### 2.2 Determinantes de la conducta

La conducta del interno no puede explicarse atendiendo exclusivamente a factores internos (personalidad, psicopatología) ni exclusivamente a factores externos (el medio carcelario). Siguiendo el modelo interaccionista de Bandura (1977), la conducta es el resultado de la interacción recíproca entre:

- **Variables personales u organísmicas (O)**: Historia de aprendizaje previa, repertorio conductual adquirido, estructura cognitiva, estado emocional, características biológicas (p. ej., lesiones cerebrales, consumo de sustancias).

- **Variables situacionales o ambientales (E)**: Las características físicas y sociales del entorno penitenciario: densidad poblacional, régimen de vida (ordinario, cerrado o abierto), relaciones con otros internos y con el personal funcionario, disponibilidad de actividades ocupacionales y de tratamiento.

- **Consecuencias de la conducta (C)**: Los efectos que la conducta del sujeto produce en su entorno y que, a su vez, retroalimentan la probabilidad de que dicha conducta se repita o se extinga.

Este esquema tripartito E-O-R-C (Estímulo-Organismo-Respuesta-Consecuencia) constituye el marco básico del análisis funcional de la conducta, herramienta fundamental del psicólogo penitenciario.

## 3. ESTÍMULOS Y RESPUESTAS

### 3.1 Concepto y tipos de estímulos

Un estímulo es cualquier cambio energético del medio externo o interno del organismo que es capaz de activar un receptor sensorial y, en consecuencia, provocar una respuesta. Los estímulos pueden clasificarse atendiendo a diversos criterios:

**Según su origen:**
- **Estímulos exteroceptivos**: Proceden del medio exterior (ruidos del módulo, órdenes verbales del funcionario, la presencia intimidatoria de otro interno).
- **Estímulos interoceptivos**: Proceden del interior del organismo (hambre, dolor visceral, malestar asociado al síndrome de abstinencia).
- **Estímulos propioceptivos**: Provienen de músculos, tendones y articulaciones e informan sobre la posición y el movimiento corporal.

**Según su función en el aprendizaje:**
- **Estímulo incondicionado (EI)**: Aquel que provoca una respuesta de forma natural, sin aprendizaje previo. (Ejemplo: una agresión física provoca miedo de forma innata.)
- **Estímulo condicionado (EC)**: Aquel que, tras asociarse repetidamente con un EI, adquiere la capacidad de provocar una respuesta similar. (Ejemplo: el sonido de la alarma de cierre de celdas puede generar ansiedad condicionada tras una experiencia traumática.)
- **Estímulo discriminativo (Ed)**: Aquel que señala la disponibilidad de un refuerzo o castigo. (Ejemplo: la presencia de un funcionario concreto puede señalar que determinada conducta será sancionada.)

### 3.2 Concepto y tipos de respuestas

La respuesta es la reacción del organismo ante un estímulo o situación estimular. Las respuestas pueden ser:

- **Respuestas respondientes o reflejas**: Son involuntarias, elicitadas automáticamente por un estímulo. Se rigen por el condicionamiento clásico de Pavlov. (Ejemplo: la salivación ante el olor de la comida del economato.)
- **Respuestas operantes o instrumentales**: Son voluntarias, emitidas por el sujeto y controladas por sus consecuencias. Se rigen por el condicionamiento operante de Skinner. (Ejemplo: un interno que mantiene buena conducta para obtener un permiso de salida.)

En el ámbito penitenciario, la mayoría de las conductas relevantes para el tratamiento son de naturaleza operante: las agresiones, el cumplimiento de normas, la participación en actividades formativas, el consumo de drogas o la colaboración con el Equipo Técnico.

## 4. REFUERZO Y CASTIGO

Los conceptos de refuerzo y castigo, desarrollados fundamentalmente por B.F. Skinner en su obra *Science and Human Behavior* (1953), constituyen los pilares del condicionamiento operante y son la base de los programas de modificación de conducta aplicados en el medio penitenciario.

### 4.1 El refuerzo

El refuerzo es toda consecuencia de una conducta que aumenta la probabilidad de que dicha conducta se repita en el futuro en circunstancias similares.

**Refuerzo positivo (R+):** Consiste en la presentación de un estímulo apetitivo contingente a la emisión de una conducta. En el medio penitenciario:
- Concesión de permisos de salida ordinarios o extraordinarios.
- Acceso a actividades recreativas, deportivas o culturales.
- Recompensas del artículo 263 del RP: comunicaciones adicionales, aumento de peculio, becas para formación, propuesta de beneficios penitenciarios.
- Reconocimiento verbal del funcionario o del Equipo Técnico.

**Refuerzo negativo (R-):** Consiste en la retirada o evitación de un estímulo aversivo contingente a la emisión de una conducta. En el medio penitenciario:
- Cancelación de una sanción menor por buena conducta posterior.
- Evitación del aislamiento mediante el cumplimiento de normas.
- Progresión de grado (de segundo a tercer grado) que permite salir del centro.

### 4.2 El castigo

El castigo es toda consecuencia de una conducta que disminuye la probabilidad de que dicha conducta se repita en el futuro.

**Castigo positivo (C+):** Consiste en la presentación de un estímulo aversivo contingente a la emisión de una conducta. En el medio penitenciario:
- Imposición de sanciones disciplinarias (art. 42 LOGP y arts. 231-243 RP): aislamiento en celda, privación de paseos, limitación de comunicaciones.
- Regresión de grado de tratamiento.

**Castigo negativo u omisión (C-):** Consiste en la retirada de un estímulo apetitivo contingente a la emisión de una conducta. En el medio penitenciario:
- Denegación de un permiso de salida ya previsto.
- Pérdida de la plaza en un taller productivo.
- Retirada del acceso a la televisión o al economato.

### 4.3 La extinción

La extinción no es propiamente un castigo, sino un procedimiento que consiste en dejar de reforzar una conducta que previamente era reforzada, lo que produce una disminución gradual de su frecuencia. En prisión, ignorar sistemáticamente las demandas injustificadas de un interno que busca atención puede constituir un procedimiento de extinción.

### 4.4 Programas de refuerzo en el medio penitenciario

Especial mención merece la **Economía de Fichas** (Token Economy), programa de contingencias ampliamente utilizado en módulos terapéuticos y unidades de régimen cerrado. Consiste en:
1. Definir operativamente las conductas objetivo (hacer la cama, asistir a clase, no agredir).
2. Entregar fichas o puntos contingentes a la emisión de las conductas deseadas.
3. Permitir el canje de fichas por reforzadores materiales o de actividad previamente acordados.
4. Aplicar costes de respuesta (retirada de fichas) por conductas inadecuadas.

Su eficacia se sustenta en que permite aplicar reforzamiento inmediato, individualizado y contingente, superando las limitaciones del reforzamiento institucional habitual (permisos, progresiones), que por su naturaleza es demorado y poco frecuente.

## 5. TÉCNICAS DE EVALUACIÓN DE LA CONDUCTA HUMANA

La evaluación conductual en el medio penitenciario tiene como objetivo identificar las conductas problema, sus antecedentes y sus consecuencias, para diseñar un programa de intervención individualizado. Las principales técnicas son:

### 5.1 La observación

Es la técnica más básica y puede ser la más informativa. Consiste en el registro sistemático del comportamiento del interno tal como ocurre en su medio natural. Se distinguen varias modalidades:

- **Observación asistemática o no estructurada**: El funcionario o educador observa la conducta del interno sin un plan previo, anotando los hechos relevantes que llaman su atención. Tiene la ventaja de la espontaneidad, pero el inconveniente de la subjetividad y la falta de replicabilidad.

- **Observación sistemática o estructurada**: Se establece previamente qué conductas se van a observar, cuándo, dónde y cómo se van a registrar. Requiere la elaboración de hojas de registro conductual que recogen la frecuencia, duración, intensidad y latencia de las conductas objetivo. Es más rigurosa y permite comparaciones entre observadores (fiabilidad interjueces).

- **Observación participante**: El observador forma parte del contexto natural del interno. En prisión, el funcionario de vigilancia interior es un observador participante permanente, lo que le otorga una posición privilegiada para la detección precoz de conductas de riesgo (autolesiones, ideación suicida, tráfico de sustancias, acoso entre internos).

- **Observación no participante**: Se realiza desde fuera del contexto inmediato, por ejemplo mediante circuito cerrado de televisión (CCTV) o a través de un espejo unidireccional en entrevistas clínicas.

### 5.2 La autoobservación

La autoobservación implica que el propio sujeto se convierte en observador de su propia conducta. El interno presta atención deliberada a determinados aspectos de su comportamiento (pensamientos, emociones, acciones) que habitualmente pasan desapercibidos. Esta técnica es fundamental en los programas cognitivo-conductuales, ya que permite al interno tomar conciencia de sus patrones automáticos de pensamiento y conducta, los antecedentes que los desencadenan y las consecuencias que los mantienen.

En la práctica penitenciaria, la autoobservación se utiliza especialmente en:
- Programas de control de la agresión (Programa de Pensamiento Prosocial, Programa de Control de la Agresión Sexual - PCAS).
- Programas de prevención de recaídas en drogodependencias.
- Programas de gestión emocional y tolerancia a la frustración.

### 5.3 El autorregistro

El autorregistro es la técnica mediante la cual el sujeto anota de forma estandarizada la ocurrencia de determinadas conductas, pensamientos o emociones, especificando las circunstancias en que se producen. Se diferencia de la autoobservación en que, además de observar, el sujeto registra por escrito los datos siguiendo un formato predeterminado.

Un autorregistro típico en el medio penitenciario incluiría las siguientes columnas:
- **Fecha y hora** de la conducta.
- **Situación antecedente**: ¿Qué estaba ocurriendo justo antes?
- **Pensamiento automático**: ¿Qué se dijo a sí mismo el interno?
- **Emoción experimentada** e intensidad (escala 0-10).
- **Conducta emitida**: ¿Qué hizo?
- **Consecuencias**: ¿Qué ocurrió después?

El autorregistro presenta ventajas significativas: proporciona datos ecológicos (en el entorno natural), permite acceder a conductas encubiertas (pensamientos, emociones) inaccesibles a la observación externa, y tiene un efecto reactivo terapéutico (el mero hecho de registrar una conducta tiende a modificarla). Sin embargo, tiene limitaciones: requiere cierto nivel de capacidad intelectual y motivación por parte del interno, y puede verse afectado por la deseabilidad social.

### 5.4 Los autoinformes

Los autoinformes son instrumentos de evaluación estandarizados en los que el sujeto responde verbalmente (en entrevista) o por escrito (cuestionarios, inventarios, escalas) a una serie de preguntas sobre sus experiencias internas, rasgos de personalidad, estados emocionales o actitudes.

En el ámbito penitenciario, los autoinformes más frecuentemente utilizados son:
- **MMPI-2 (Minnesota Multiphasic Personality Inventory)**: Inventario de personalidad que evalúa psicopatología a través de escalas clínicas y de validez.
- **16-PF de Cattell**: Cuestionario factorial de personalidad que mide 16 rasgos primarios.
- **BDI (Beck Depression Inventory)**: Inventario para evaluar la severidad de la sintomatología depresiva.
- **STAI (State-Trait Anxiety Inventory de Spielberger)**: Inventario que diferencia entre ansiedad-estado y ansiedad-rasgo.
- **PCL-R (Psychopathy Checklist-Revised de Hare)**: Instrumento de referencia mundial para la evaluación de la psicopatía, que combina entrevista semiestructurada y revisión de expediente.
- **EHS (Escala de Habilidades Sociales de Gismero)**: Evalúa déficits en competencia social.
- **Cuestionarios de actitudes hacia la violencia y la agresión**.

Los autoinformes, aunque eficientes y estandarizados, son vulnerables a la simulación (fingir patología), la disimulación (ocultar problemas) y la deseabilidad social (presentarse de forma favorable), fenómenos especialmente frecuentes en el contexto penitenciario donde las respuestas pueden tener consecuencias directas sobre la clasificación, los permisos o la libertad condicional.

### 5.5 Los registros psicofisiológicos

Los registros psicofisiológicos miden las respuestas del sistema nervioso que acompañan a los procesos psicológicos. Aunque su uso habitual en la práctica penitenciaria cotidiana es limitado, tienen aplicaciones específicas en la investigación criminológica y en la evaluación forense:

- **Respuesta galvánica de la piel (GSR)**: Mide los cambios en la conductancia eléctrica de la piel debidos a la sudoración emocional. Se utiliza en estudios sobre reactividad emocional de sujetos psicópatas, que característicamente muestran un patrón de hiporeactividad autonómica ante estímulos aversivos.
- **Electroencefalograma (EEG)**: Registro de la actividad eléctrica cerebral. Permite detectar anomalías neurológicas que puedan estar relacionadas con la conducta violenta.
- **Electromiograma (EMG)**: Mide la tensión muscular, indicador de ansiedad y estrés.
- **Frecuencia cardíaca y presión arterial**: Indicadores de la activación del sistema nervioso simpático.
- **Pletismografía peniana**: Técnica utilizada específicamente en la evaluación y tratamiento de agresores sexuales, que mide la respuesta de erección ante diferentes categorías de estímulos visuales o auditivos para valorar las preferencias sexuales del sujeto.

## 6. LA INTEGRACIÓN DE LOS DATOS DE LA EVALUACIÓN Y REALIZACIÓN DE INFORMES

### 6.1 El análisis funcional de la conducta

Toda la información recogida mediante las técnicas anteriores debe integrarse en un análisis funcional que establezca las relaciones causales entre las variables antecedentes, las conductas problema y sus consecuencias. El análisis funcional responde a una pregunta central: ¿por qué esta persona se comporta de esta manera en esta situación?

El modelo SORC (Estímulo-Organismo-Respuesta-Consecuencia) proporciona el marco integrador:
- **S (Situación antecedente)**: Qué estímulos externos o internos preceden a la conducta.
- **O (Variables organísmicas)**: Qué características del sujeto (cognitivas, emocionales, biológicas) modulan la relación entre el estímulo y la respuesta.
- **R (Respuesta)**: Descripción topográfica y funcional de la conducta en sus tres sistemas (motor, cognitivo, fisiológico).
- **C (Consecuencias)**: Qué obtiene o evita el sujeto con su conducta (refuerzo positivo, refuerzo negativo, castigo).

### 6.2 Los informes penitenciarios

El Equipo Técnico (compuesto por psicólogo, jurista, trabajador social y educador, según el art. 274 del RP) elabora diversos tipos de informes que se elevan a la Junta de Tratamiento:

- **Informe de clasificación inicial (art. 63 LOGP y art. 103 RP)**: Propone el grado de tratamiento (primero, segundo o tercero) y el programa individualizado de tratamiento del interno. Debe incluir un estudio de la personalidad del interno, un análisis de su actividad delictiva y los factores positivos y negativos para su reinserción.

- **Informes de revisión de grado (art. 105 RP)**: Se elaboran como máximo cada seis meses para los clasificados en primer grado y cada seis meses como mínimo para los clasificados en segundo y tercer grado.

- **Informes de permisos de salida (arts. 154-162 RP)**: Valoran el riesgo de quebrantamiento de condena, la evolución del tratamiento y las circunstancias personales y sociales del interno.

- **Informes preceptivos para el Juez de Vigilancia Penitenciaria**: En supuestos de libertad condicional (art. 90 del Código Penal), aplicación de medidas de seguridad o resolución de quejas y recursos.

### 6.3 Requisitos de los informes

Todo informe penitenciario debe reunir las siguientes características:
1. **Objetividad**: Basarse en datos contrastables y procedentes de fuentes múltiples.
2. **Rigor técnico**: Utilizar terminología profesional adecuada y referencias a instrumentos de evaluación validados.
3. **Coherencia interna**: Las conclusiones deben derivarse lógicamente de los datos presentados.
4. **Confidencialidad**: Respetar el derecho a la intimidad del interno (art. 4.2.b LOGP), limitando la información a lo estrictamente necesario para la finalidad del informe.
5. **Interdisciplinariedad**: Integrar las aportaciones de todos los miembros del Equipo Técnico.

La calidad de estos informes depende directamente de la calidad de la evaluación previa, lo que subraya la importancia de un manejo riguroso de las técnicas de evaluación conductual expuestas en este tema.
`;

// ============================================================
// TEMA 2 — ORGANIZACIÓN SOCIAL DE LA PRISIÓN
// ============================================================
const tema2 = `# TEMA 2. ORGANIZACIÓN SOCIAL DE LA PRISIÓN: CONTROL FORMAL E INFORMAL. CÓDIGO DEL RECLUSO, JERGA Y LENGUAJE. SUBCULTURAS CARCELARIAS. FENÓMENOS DE HACINAMIENTO Y CONDUCTA DEL RECLUSO. EFECTOS PSICOLÓGICOS DE LA RECLUSIÓN: FACTORES DETERMINANTES, CONSECUENCIAS FÍSICAS Y PSICOSOCIALES. PRISIONIZACIÓN Y SOCIALIZACIÓN

---

## 1. LA PRISIÓN COMO SISTEMA SOCIAL: LA «INSTITUCIÓN TOTAL»

### 1.1 Concepto de Institución Total

El sociólogo canadiense Erving Goffman, en su obra *Internados* (1961), acuñó el concepto de «Institución Total» para referirse a aquellos establecimientos donde un gran número de individuos en igual situación, aislados de la sociedad por un período apreciable de tiempo, comparten en su encierro una rutina diaria administrada formalmente. Goffman identificó cinco tipos de instituciones totales: hogares para personas incapaces e inofensivas (asilos, orfanatos); establecimientos para personas que, siendo incapaces de cuidarse por sí mismas, constituyen una amenaza involuntaria para la comunidad (sanatorios para tuberculosos o enfermos mentales); establecimientos organizados para proteger a la comunidad de quienes constituyen un peligro intencional para ella (cárceles, campos de concentración); instituciones destinadas a la consecución de una tarea técnica (cuarteles, barcos, colegios internos); y establimientos concebidos como refugios del mundo (monasterios, conventos).

La prisión encaja en el tercer tipo: su finalidad manifiesta es proteger a la sociedad de quienes han sido declarados culpables de un delito. No obstante, como Institución Total, la prisión presenta una serie de características que la convierten en un sistema social singular:

1. **Ruptura de las esferas de la vida**: En la vida libre, el individuo duerme, trabaja y se divierte en lugares diferentes, con personas diferentes y bajo autoridades diferentes. En la prisión, todos los aspectos de la vida se desarrollan en el mismo lugar y bajo la misma autoridad única.

2. **Programación estricta**: Las actividades diarias están rigurosamente programadas y cada una conduce a la siguiente en un orden prefijado e impuesto desde arriba mediante un sistema formal de normas explícitas.

3. **Despersonalización**: El interno es despojado de sus pertenencias personales, recibe un número de identificación, viste ropa uniforme y se somete a registros corporales, lo que Goffman denomina «mortificación del yo» o proceso de desculturación.

4. **Separación entre mundo de los internos y mundo del personal**: Existe una división fundamental entre el grupo de internos y el grupo de funcionarios. Ambos grupos tienden a concebirse mutuamente en términos de estereotipos hostiles.

### 1.2 La organización social informal de la prisión

Más allá de la estructura formal definida por la LOGP, el RP y los organigramas administrativos, la prisión desarrolla una organización social informal basada en relaciones de poder, estatus y solidaridad entre los propios internos. Esta organización no figura en ningún manual, pero es tremendamente influyente en la vida cotidiana del establecimiento.

## 2. CONTROL FORMAL E INFORMAL

### 2.1 El control formal

El control formal se ejerce a través de los mecanismos institucionales establecidos por el ordenamiento jurídico penitenciario:

- **Control normativo**: La LOGP, el RP, las Instrucciones de la Secretaría General de Instituciones Penitenciarias (SGIP) y las normas de régimen interno de cada centro establecen un marco detallado de derechos y deberes de los internos (arts. 4 y 5 LOGP), así como un régimen disciplinario (arts. 42-44 LOGP y arts. 231-257 RP) con tipificación de infracciones (muy graves, graves y leves), sanciones (aislamiento en celda, privación de paseos, limitación de comunicaciones) y procedimiento sancionador con garantías.

- **Control personal**: Ejercido por los funcionarios de vigilancia interior, los equipos técnicos, los jefes de servicio y el Director del centro. La presencia constante del funcionario es el instrumento primario de control formal. La ratio funcionario/interno es un indicador clave de la capacidad de control institucional.

- **Control arquitectónico**: El diseño del edificio (sistemas panópticos, módulos independientes, circuitos cerrados de televisión, sistemas de control de acceso por radiofrecuencia) constituye un instrumento de control pasivo pero permanente. El filósofo Michel Foucault, en *Vigilar y Castigar* (1975), analizó cómo la arquitectura del panóptico de Jeremy Bentham (1791) encarna la lógica del poder disciplinario: el interno sabe que puede ser observado en todo momento, sin poder verificar si efectivamente lo está siendo, lo que induce un estado de autovigilancia permanente.

### 2.2 El control informal

El control informal es el ejercido por el propio grupo de internos. A menudo resulta más eficaz y temido que el control formal, porque opera las 24 horas del día, en todos los espacios del módulo, incluyendo aquellos a los que no llega la vigilancia funcionarial (celdas compartidas, duchas, esquinas del patio).

Los mecanismos de control informal incluyen:
- **La presión del grupo de iguales**: Normas no escritas sobre qué se puede y qué no se puede hacer. El interno que las transgrede se expone al ostracismo, la intimidación o la agresión.
- **La violencia instrumental**: Utilizada para establecer jerarquías de poder y resolver conflictos sin recurrir a la institución.
- **La economía sumergida**: El tráfico de sustancias, tabaco, teléfonos móviles y otros objetos prohibidos crea redes de dependencia económica y deudas que funcionan como mecanismo de sometimiento.
- **La protección y el patronazgo**: Internos con posición dominante ofrecen protección a cambio de servicios, obediencia o una parte del peculio.

## 3. CÓDIGO DEL RECLUSO, JERGA Y LENGUAJE

### 3.1 El Código del Recluso

El concepto de Código del Recluso fue sistematizado por Gresham M. Sykes y Sheldon L. Messinger en su artículo *The Inmate Social System* (1960). Se trata de un conjunto de normas no escritas que regulan la convivencia entre los internos y definen las expectativas de comportamiento dentro de la comunidad carcelaria. Sus principales mandatos son:

1. **«No delatar» (omertá carcelaria)**: Es la norma suprema del código. Nunca se debe informar a los funcionarios o a la dirección sobre las actividades de otro interno. El «chivato» es el rol más despreciado y peligroso dentro de la jerarquía carcelaria.
2. **«No interferir en los asuntos de otros internos»**: Cada uno debe ocuparse de sus propios problemas.
3. **«No robar a otros internos»**: El hurto entre compañeros es una violación grave del código.
4. **«Mantener la compostura»**: No mostrar debilidad, no quejarse excesivamente, no perder el control emocional.
5. **«No confraternizar con los funcionarios»**: Mantener distancia con la autoridad; la colaboración con el personal es vista como una forma de traición.
6. **«Mostrar solidaridad frente a la administración»**: Los enfrentamientos con la institución deben ser asumidos colectivamente.

El grado de vigencia del Código varía entre establecimientos, módulos y poblaciones. En los módulos de respeto o en las unidades terapéuticas, la lógica del Código se debilita significativamente, sustituida por normas prosociales de autogestión.

### 3.2 Jerga y lenguaje carcelario

Los internos desarrollan un vocabulario propio —la jerga carcelaria o argot— que cumple diversas funciones:
- **Función identitaria**: Refuerza la cohesión grupal y delimita la frontera entre «nosotros» (los presos) y «ellos» (los funcionarios, la sociedad).
- **Función de protección**: Permite comunicar información sensible (ubicación de sustancias, planes de evasión, ajustes de cuentas) sin que el personal la comprenda.
- **Función de jerarquización**: El dominio del argot es un indicador de experiencia carcelaria y, por tanto, de estatus dentro del grupo.

Para el funcionario de vigilancia, conocer la jerga carcelaria es una competencia estratégica que permite detectar amenazas para la seguridad y comprender las dinámicas grupales del módulo.

## 4. SUBCULTURAS CARCELARIAS

### 4.1 Teorías sobre la subcultura carcelaria

Existen dos grandes perspectivas teóricas sobre el origen de la subcultura carcelaria:

**a) Modelo de la deprivación (Sykes, 1958)**: Según Gresham Sykes, en su obra *The Society of Captives*, la subcultura carcelaria es una respuesta adaptativa a las privaciones inherentes al encarcelamiento. Sykes identificó cinco «dolores de la prisión» (*pains of imprisonment*):
1. Privación de libertad.
2. Privación de bienes y servicios.
3. Privación de relaciones heterosexuales.
4. Privación de autonomía.
5. Privación de seguridad (convivencia forzosa con otros delincuentes).

Ante estos dolores, los internos desarrollan roles y normas colectivas (el Código del Recluso) que mitigan parcialmente el sufrimiento mediante la solidaridad grupal.

**b) Modelo de la importación (Irwin y Cressey, 1962)**: Este modelo sostiene que la subcultura carcelaria no nace en la prisión, sino que es importada desde el exterior. Los internos traen consigo los valores, actitudes y hábitos de las subculturas delincuentes de la calle. La prisión no crea una cultura nueva, sino que intensifica y reproduce la cultura criminal previa.

La posición mayoritaria en la Sociología Penitenciaria actual sostiene una integración de ambos modelos: la subcultura carcelaria es el resultado de la interacción entre los factores de deprivación propios del encierro y los valores importados del medio social exterior.

### 4.2 Tipología de adaptaciones al medio carcelario

Clarence Schrag propuso una tipología clásica de roles carcelarios basada en la adaptación del interno al sistema social de la prisión:
- **El «prosocial» o «cuadrado» (*square john*)**: Interno primario, sin gran carrera delictiva, que acepta las normas institucionales y busca cumplir su condena sin conflictos.
- **El «antisocial» o «auténtico preso» (*right guy*)**: Interno con larga trayectoria criminal que encarna los valores del Código del Recluso. Es respetado por sus iguales y hostil hacia la institución.
- **El «pseudosocial» o «político» (*politician*)**: Interno que manipula tanto a los otros presos como al personal para obtener ventajas. Aparenta cumplir las normas pero busca exclusivamente su beneficio personal.
- **El «asocial» o «proscrito» (*outlaw*)**: Interno impredecible, con frecuencia con trastornos de personalidad graves, rechazado tanto por los presos como por el personal. Es fuente constante de conflictos.

## 5. FENÓMENOS DE HACINAMIENTO Y CONDUCTA DEL RECLUSO

### 5.1 Concepto de hacinamiento

El hacinamiento penitenciario se produce cuando la población interna supera la capacidad de diseño del centro. La tasa de ocupación (número de internos / número de plazas × 100) es el indicador básico. Cuando supera el 100%, existe hacinamiento. En España, algunos centros han llegado a registrar tasas superiores al 150%.

### 5.2 Efectos del hacinamiento

Las investigaciones empíricas (Paulus, McCain y Cox, 1978; Ekland-Olson, 1986; Gaes, 1985) han establecido una relación positiva entre hacinamiento y:

- **Aumento de la agresividad y la violencia interpersonal**: La reducción del espacio personal provoca reacciones de estrés y territorialidad. La frecuencia de agresiones (entre internos y hacia funcionarios) se incrementa significativamente.
- **Deterioro de la salud física**: Mayor incidencia de enfermedades infecciosas (tuberculosis, hepatitis, dermatitis), problemas respiratorios por mala ventilación y trastornos gastrointestinales.
- **Deterioro de la salud mental**: Aumento de la ansiedad, depresión, insomnio, ideación suicida y descompensaciones psicóticas.
- **Deterioro de la convivencia**: Incremento de las quejas, las protestas colectivas y los motines.
- **Reducción de la eficacia del tratamiento**: La masificación impide la individualización del tratamiento y dificulta el acceso a programas formativos, ocupacionales y terapéuticos.
- **Sobrecarga del personal**: Los funcionarios ven reducida su capacidad de control, observación individualizada y atención a los internos.

## 6. EFECTOS PSICOLÓGICOS DE LA RECLUSIÓN

### 6.1 Factores determinantes

La intensidad de los efectos psicológicos de la reclusión depende de múltiples factores:

- **Duración de la condena**: Las condenas largas se asocian a mayor prisionización, pero también a una adaptación progresiva al medio carcelario. Las condenas muy cortas pueden generar un impacto agudo sin tiempo para la adaptación.
- **Régimen de internamiento**: El régimen cerrado (art. 10 LOGP, arts. 89-95 RP), con mayor aislamiento y restricción de movimientos, genera efectos más severos que el régimen ordinario o abierto.
- **Características personales previas**: Personalidad, edad, nivel educativo, experiencia carcelaria anterior, presencia de patología mental previa, capacidad de afrontamiento.
- **Apoyo social exterior**: La existencia de vínculos familiares y sociales sólidos actúa como factor protector fundamental. Los internos que reciben comunicaciones y visitas regulares presentan mejor ajuste emocional.
- **Condiciones físicas del centro**: Ventilación, iluminación natural, espacio por interno, disponibilidad de actividades.

### 6.2 Consecuencias físicas y psicosociales

#### Efectos psicológicos

- **Ansiedad y estrés crónico**: La incertidumbre sobre el futuro, la convivencia forzosa, la pérdida de control y la amenaza permanente generan un estado de hiperactivación emocional sostenida.
- **Depresión**: Sentimientos de desesperanza, pérdida de interés, alteraciones del sueño y del apetito. La depresión es uno de los trastornos más prevalentes en la población reclusa.
- **Alteraciones cognitivas**: Dificultades de concentración, déficits de memoria y deterioro de funciones ejecutivas, particularmente en condenas largas.
- **Despersonalización y pérdida de identidad**: El interno pierde progresivamente los roles sociales que definían su identidad exterior (padre, trabajador, ciudadano) y es reducido al rol único de «preso».
- **Infantilismo institucional**: La dependencia de la institución para satisfacer todas las necesidades básicas (alimentación, alojamiento, horarios) genera una regresión a patrones de comportamiento infantil: pasividad, incapacidad para tomar decisiones autónomas, expectativa de que otros resuelvan sus problemas.
- **Autolesiones y conducta suicida**: La tasa de suicidio en prisión es significativamente superior a la de la población general. Los momentos de mayor riesgo son el ingreso en prisión, las comunicaciones judiciales desfavorables y el período previo a la excarcelación.

#### Efectos psicosociales

- **Deterioro de los vínculos familiares**: La distancia geográfica, las limitaciones de comunicación y la duración de la condena erosionan progresivamente las relaciones de pareja y paterno-filiales.
- **Estigmatización social**: El etiquetado de «expresidiario» dificulta la reinserción laboral y social tras la excarcelación.
- **Desocialización**: Pérdida de habilidades sociales necesarias para la vida en libertad. Conductas normalizadas en prisión (desconfianza permanente, agresividad instrumental, sumisión) resultan disfuncionales en la vida exterior.
- **Ansiedad ante la libertad**: Paradójicamente, los internos con larga condena pueden desarrollar miedo a la excarcelación, fenómeno que refleja la profundidad de la adaptación al medio carcelario.

## 7. PRISIONIZACIÓN Y SOCIALIZACIÓN

### 7.1 Concepto de Prisionización

El concepto de prisionización fue acuñado por Donald Clemmer en su obra *The Prison Community* (1940), resultado de su investigación en la prisión estatal de Menard (Illinois). Clemmer definió la prisionización como la asimilación, en mayor o menor grado, de los usos, costumbres, tradiciones y cultura general de la penitenciaría.

### 7.2 Factores de Prisionización

Clemmer identificó los siguientes factores universales que afectan a todo interno:
- Aceptación de un rol inferior en la jerarquía social.
- Acumulación de datos relativos a la organización del establecimiento.
- Desarrollo de nuevos hábitos de alimentación, vestido y sueño.
- Adopción del lenguaje local (jerga carcelaria).

Además, existen factores específicos que determinan el grado de prisionización:
- **Duración de la condena**: A mayor condena, mayor prisionización.
- **Estabilidad de la personalidad previa**: Personalidades menos estructuradas son más vulnerables.
- **Grado de contacto con el mundo exterior**: A menor contacto, mayor prisionización.
- **Integración en grupos primarios de internos**: La pertenencia a grupos carcelarios intensifica la asimilación de valores subcultural.
- **Aceptación ciega o no del código del recluso**.
- **Tipo de delito y extensión de la carrera delictiva**.

### 7.3 Grados de Prisionización

Clemmer distinguió entre:
- **Prisionización superficial o mínima**: Afecta a todo aquel que ingresa en prisión. Implica la asunción básica de las rutinas institucionales.
- **Prisionización máxima o profunda**: El interno adopta completamente los valores, las actitudes y los comportamientos de la subcultura carcelaria; su identidad como «preso» desplaza cualquier otra identidad social.

### 7.4 Socialización versus Prisionización

La socialización es el proceso mediante el cual un individuo interioriza las normas, valores y pautas de conducta de su grupo social para integrarse en la sociedad. El tratamiento penitenciario, tal como lo concibe el artículo 59 de la LOGP, aspira precisamente a la (re)socialización del interno.

Sin embargo, la prisionización opera en dirección contraria: socializa al individuo en los valores del mundo carcelario, que son antagónicos a los de la sociedad libre. Se produce así una paradoja: la institución diseñada para resocializar al delincuente genera, por su propia dinámica interna, un proceso de desocialización y contrasocialización que dificulta la reinserción.

Esta contradicción es uno de los argumentos centrales de la Criminología Crítica para cuestionar la eficacia resocializadora de la prisión y promover alternativas a la privación de libertad (suspensión de la ejecución de penas, trabajos en beneficio de la comunidad, localización permanente, justicia restaurativa).

El reto del sistema penitenciario español actual es mitigar los efectos de la prisionización mediante instrumentos como: la clasificación en tercer grado cuando sea posible (régimen abierto), los permisos de salida para mantener vínculos exteriores, los módulos de Respeto basados en la autogestión y la responsabilización del interno, las Unidades Dependientes integradas en la comunidad (art. 165 RP), y los programas de tratamiento individualizados que fomenten habilidades prosociales.
`;

// ============================================================
// TEMA 3 — EL COMPORTAMIENTO SOCIAL
// ============================================================
const tema3 = `# TEMA 3. EL COMPORTAMIENTO SOCIAL. EL CONCEPTO DE ASERTIVIDAD. HABILIDADES SOCIALES: EVALUACIÓN Y MEDIDA DE LAS HABILIDADES SOCIALES Y SUS DÉFICITS. PROGRAMAS DE ENTRENAMIENTO EN HABILIDADES SOCIALES Y SU APLICACIÓN AL ÁMBITO PENITENCIARIO. LA CONDUCTA ADICTIVA EN PRISIÓN

---

## 1. EL COMPORTAMIENTO SOCIAL

### 1.1 Concepto y dimensiones

El comportamiento social se refiere al conjunto de acciones, cogniciones y emociones que un individuo despliega en su interacción con otros seres humanos. La Psicología Social ha establecido que la conducta humana no puede comprenderse aislada de su contexto interpersonal: somos seres fundamentalmente sociales, y nuestras respuestas están permanentemente moldeadas por la presencia real, imaginada o implícita de los otros (Gordon Allport, 1954).

En el ámbito penitenciario, el estudio del comportamiento social adquiere una relevancia especial por varias razones:

1. **Muchas conductas delictivas tienen su raíz en déficits de competencia social**: La incapacidad para resolver conflictos mediante el diálogo, para controlar impulsos agresivos, para empatizar con la víctima o para resistir la presión de grupo constituyen factores de riesgo directamente vinculados a la habilidad social del sujeto.

2. **La prisión es un entorno social extremo**: La convivencia forzosa, la densidad social, la competencia por recursos escasos y la constante negociación de poder y estatus convierten al módulo penitenciario en un laboratorio de interacciones sociales de alta intensidad.

3. **La reinserción social exige competencia interpersonal**: Para que el interno pueda integrarse en la sociedad tras su excarcelación, necesita disponer de un repertorio de habilidades sociales funcionales: buscar empleo, mantener relaciones de pareja estables, interactuar con la administración, resolver conflictos vecinales, rechazar ofertas de participación delictiva.

### 1.2 Modelos explicativos del comportamiento social

Dos marcos teóricos resultan especialmente relevantes para la intervención penitenciaria:

**a) La Teoría del Aprendizaje Social de Albert Bandura (1977)**: Postula que la mayor parte de la conducta social se adquiere mediante la observación e imitación de modelos (aprendizaje vicario). El individuo no necesita experimentar directamente las consecuencias de una conducta; le basta con observar las consecuencias que recaen sobre un modelo. En el medio penitenciario, los internos con mayor poder y estatus funcionan como modelos de conducta antisocial. Los programas de tratamiento deben proporcionar modelos prosociales alternativos.

**b) El modelo cognitivo de la competencia social**: Enfatiza el papel de los procesos cognitivos (percepción social, atribuciones causales, expectativas de autoeficacia, autoinstrucciones) como mediadores entre la situación social y la respuesta conductual. Un interno puede interpretar una mirada casual como un desafío (atribución hostil), lo que le lleva a responder con agresión. Trabajar la reestructuración cognitiva de estas distorsiones es complementario al entrenamiento conductual.

## 2. EL CONCEPTO DE ASERTIVIDAD

### 2.1 Definición

La asertividad puede definirse como la capacidad de expresar los propios sentimientos, pensamientos, creencias y derechos de forma directa, honesta y adecuada, respetando simultáneamente los sentimientos, pensamientos, creencias y derechos de los demás (Wolpe, 1958; Alberti y Emmons, 1978).

La asertividad se sitúa en un continuo entre dos estilos de comunicación disfuncionales:

### 2.2 Estilos de comunicación

**a) Estilo pasivo o inhibido**: El individuo no defiende sus derechos ni expresa sus necesidades. Se somete a las demandas de los demás, evita el conflicto a toda costa y acumula resentimiento. En prisión, el estilo pasivo convierte al interno en un blanco fácil para el abuso y la explotación por parte de otros reclusos. Suele manifestarse en:
- Evitar contacto visual.
- Hablar en voz baja.
- Aceptar tareas u obligaciones no deseadas.
- No reclamar derechos reconocidos legalmente.

**b) Estilo agresivo**: El individuo defiende sus derechos e intereses de forma hostil, mediante la intimidación, la amenaza o la violencia, sin considerar los derechos de los demás. En prisión, el estilo agresivo es el dominante en las interacciones entre internos y constituye una de las principales conductas problema objeto de intervención. Sus manifestaciones incluyen:
- Gritos, insultos, amenazas.
- Invasión del espacio personal.
- Gestos intimidatorios.
- Agresiones físicas.

**c) Estilo asertivo**: El individuo defiende sus derechos y expresa sus necesidades de forma firme pero respetuosa, manteniendo la autoestima propia y la del interlocutor. Es el estilo que los programas de tratamiento penitenciario tratan de instaurar. Sus características son:
- Contacto visual directo pero no desafiante.
- Postura corporal relajada.
- Expresión clara de deseos y sentimientos en primera persona: «Me siento... cuando tú... y me gustaría que...».
- Capacidad para decir «no» sin agresividad ni culpa.
- Capacidad para hacer y recibir críticas constructivas.
- Capacidad para solicitar cambios de conducta.

### 2.3 Derechos asertivos

Manuel J. Smith, en su obra *When I Say No, I Feel Guilty* (1975), elaboró un catálogo de derechos asertivos básicos que se trabajan habitualmente en los programas penitenciarios:
1. Derecho a juzgar nuestro propio comportamiento, pensamientos y emociones.
2. Derecho a no dar razones ni excusas para justificar nuestro comportamiento.
3. Derecho a decidir si nos hacemos responsables de los problemas de los demás.
4. Derecho a cambiar de opinión.
5. Derecho a cometer errores.
6. Derecho a decir «no lo sé».
7. Derecho a no depender de la aprobación de los demás.
8. Derecho a ser tratado con dignidad.

## 3. HABILIDADES SOCIALES

### 3.1 Concepto

Las habilidades sociales (HH.SS.) pueden definirse como el conjunto de conductas emitidas por un individuo en un contexto interpersonal que expresa sus sentimientos, actitudes, deseos, opiniones o derechos de un modo adecuado a la situación, respetando esas mismas conductas en los demás, y que generalmente resuelve los problemas inmediatos de la situación mientras minimiza la probabilidad de futuros problemas (Caballo, 1986).

Las características esenciales de las HH.SS. son:
- **Son conductas aprendidas**, no innatas. Si se han aprendido inadecuadamente, pueden reaprenderse.
- **Son específicas de la situación**: Una conducta socialmente hábil en un contexto puede no serlo en otro.
- **Implican los tres sistemas de respuesta**: Motor (lo que se dice y hace), cognitivo (lo que se piensa) y fisiológico (lo que se siente).
- **Son interactivas**: Requieren la coordinación con la conducta del interlocutor.

### 3.2 Componentes de las Habilidades Sociales

**a) Componentes conductuales:**
- *Verbales*: Contenido del habla, duración de la intervención, retroalimentación verbal, preguntas.
- *No verbales*: Expresión facial, contacto visual, gestos, postura corporal, distancia interpersonal (proxémica), orientación, apariencia.
- *Paralingüísticos*: Volumen, tono, velocidad, ritmo, fluidez, claridad, pausas.

**b) Componentes cognitivos:**
- Percepción del ambiente de comunicación (formal/informal, privado/público).
- Variables cognitivas del sujeto: expectativas de autoeficacia, atribuciones causales, normas y valores personales, autoinstrucciones y autodeclaraciones.
- Capacidad de ponerse en el lugar del otro (empatía cognitiva).

**c) Componentes fisiológicos:**
- Tasa cardíaca, presión sanguínea, flujo sanguíneo, respuestas galvánicas de la piel, que indican el nivel de activación emocional del sujeto durante la interacción social.

## 4. EVALUACIÓN Y MEDIDA DE LAS HABILIDADES SOCIALES Y SUS DÉFICITS

### 4.1 Modelos de déficit

Es fundamental distinguir entre dos tipos de déficit en habilidades sociales, ya que el tipo de intervención varía según el diagnóstico:

- **Déficit de adquisición (deficiencia en la habilidad)**: El sujeto no posee la habilidad en su repertorio conductual. Nunca la ha aprendido. La intervención requiere enseñar la habilidad desde cero mediante instrucción, modelado y práctica.

- **Déficit de ejecución (deficiencia en el rendimiento)**: El sujeto posee la habilidad pero no la ejecuta de forma adecuada debido a factores emocionales (ansiedad social), cognitivos (creencias irracionales sobre las consecuencias) o motivacionales (no percibe refuerzo por comportarse habilidosamente). La intervención se centra en reducir la ansiedad, reestructurar cogniciones disfuncionales o instaurar contingencias de refuerzo.

### 4.2 Instrumentos de evaluación

La evaluación de las HH.SS. en el medio penitenciario utiliza una combinación de técnicas:

**a) Autoinformes:**
- *Escala de Habilidades Sociales (EHS) de Elena Gismero (2000)*: Evaluación de 6 factores: autoexpresión en situaciones sociales, defensa de los propios derechos, expresión de enfado o disconformidad, decir «no» y cortar interacciones, hacer peticiones, e iniciar interacciones con el sexo opuesto.
- *Inventario de Asertividad de Rathus (1973)*: 30 ítems que evalúan el grado de asertividad del sujeto en diversas situaciones sociales.
- *Escala de Asertividad de Gambrill y Richey (1975)*: Evalúa tanto la probabilidad de respuesta como el grado de malestar asociado a situaciones sociales.

**b) Entrevista conductual**: Permite explorar en profundidad las situaciones problemáticas, los antecedentes, las cogniciones y las consecuencias asociadas a los déficits sociales. Se utiliza habitualmente en la fase de acogida y en la evaluación pre-tratamiento.

**c) Observación sistemática y registros conductuales**: El funcionario, el educador y el psicólogo observan la conducta social del interno en su entorno natural (módulo, patio, talleres) y registran indicadores como frecuencia de interacciones positivas, conflictos interpersonales, aislamiento social, liderazgo prosocial o antisocial.

**d) Role-playing o prueba de desempeño conductual**: Se plantea al interno una situación social simulada (p. ej., «Imagina que un compañero de celda te pide tabaco por tercera vez esta semana y no quieres dárselo. ¿Qué le dirías?»). La respuesta del interno se evalúa en función de los componentes verbales, no verbales y paralingüísticos desplegados.

**e) Registros psicofisiológicos**: Medición de la ansiedad social mediante indicadores como la conductancia de la piel o la frecuencia cardíaca durante tareas de interacción social.

## 5. PROGRAMAS DE ENTRENAMIENTO EN HABILIDADES SOCIALES Y SU APLICACIÓN AL ÁMBITO PENITENCIARIO

### 5.1 Metodología del Entrenamiento en Habilidades Sociales (EHS)

El EHS es un paquete de técnicas cognitivo-conductuales de probada eficacia que sigue una secuencia estructurada de fases:

**1. Instrucción y justificación**: El terapeuta explica qué es la habilidad que se va a trabajar, por qué es importante y qué componentes la integran. Se utilizan ejemplos concretos extraídos de la vida cotidiana del módulo.

**2. Modelado**: El terapeuta o un cointerno entrenado demuestra la habilidad en una situación simulada, mostrando cómo se ejecuta correctamente. Se ofrecen modelos de afrontamiento (que cometen errores y los corrigen) más que modelos de dominio (que ejecutan la habilidad de forma perfecta desde el inicio), ya que resultan más creíbles y motivadores para los internos.

**3. Ensayo de conducta (role-playing)**: El interno practica la habilidad en situaciones simuladas que reproducen las condiciones reales de su vida en prisión o de su vida futura en libertad. Las situaciones se ordenan de menor a mayor dificultad para facilitar experiencias de éxito progresivo.

**4. Retroalimentación (feedback)**: Inmediatamente después del ensayo, el terapeuta y el grupo proporcionan información sobre la ejecución del interno: qué hizo bien (siempre se refuerza primero lo positivo), qué aspectos puede mejorar y cómo hacerlo. Se utiliza retroalimentación verbal y, cuando es posible, grabación en vídeo.

**5. Refuerzo**: Se refuerzan las aproximaciones sucesivas a la conducta objetivo. El refuerzo puede ser social (elogios del terapeuta y del grupo), material (dentro de un programa de Economía de Fichas) o intrínseco (satisfacción personal por el logro).

**6. Generalización y transferencia**: Se diseñan tareas para casa que el interno debe practicar en su entorno natural (módulo, patio, talleres, comunicaciones familiares). En la sesión siguiente se revisan las tareas y se resuelven las dificultades encontradas. La generalización es la fase más crítica y la que con mayor frecuencia fracasa.

### 5.2 Programas específicos de aplicación penitenciaria

En el sistema penitenciario español, los principales programas que incorporan componentes de EHS son:

**a) Programa de Pensamiento Prosocial (PPS)**: Basado en el modelo de Ross y Fabiano (1985). Trabaja habilidades cognitivas (pensamiento alternativo, pensamiento consecuencial, toma de perspectiva social, pensamiento medio-fin), control emocional, razonamiento crítico, habilidades sociales, resolución de problemas y valores prosociales. Es un programa grupal de 35 sesiones.

**b) Programa de Control de la Agresión Sexual (PCAS)**: Destinado a internos condenados por delitos contra la libertad sexual. Incluye componentes de conciencia emocional, empatía con la víctima, distorsiones cognitivas, habilidades de relación interpersonal y prevención de recaídas.

**c) Programa de Intervención con Agresores de Género (PRIA)**: Para internos condenados por violencia de género. Trabaja la reestructuración de creencias sexistas, la gestión de emociones (ira, celos), las habilidades de comunicación asertiva, la empatía y la prevención de recaídas.

**d) Módulos de Respeto (MdR)**: No son un programa terapéutico en sentido estricto, sino una modalidad de gestión de la convivencia basada en la autogestión responsable de los internos, organizados en grupos de tareas (limpieza, cocina, mediación). La convivencia en un MdR exige y fomenta habilidades sociales prosociales de forma continua y naturalista.

**e) Programa de Prevención de Suicidios (PPS)**: Incluye componentes de entrenamiento en habilidades de afrontamiento, regulación emocional y búsqueda de apoyo social.

## 6. LA CONDUCTA ADICTIVA EN PRISIÓN

### 6.1 Prevalencia y problemática

El consumo de drogas es uno de los problemas de salud pública más graves del medio penitenciario. Según datos de la Encuesta Estatal sobre Salud y Drogas entre los Internados en Instituciones Penitenciarias (ESDIP), una mayoría significativa de la población penitenciaria ha consumido sustancias ilegales antes del ingreso en prisión, y una proporción relevante continúa el consumo durante la estancia en el centro.

La problemática adictiva en prisión se manifiesta en múltiples dimensiones:
- **Sanitaria**: Riesgo de infecciones por VIH, VHC y VHB asociadas al consumo intravenoso. Sobredosis. Patología dual (coexistencia de trastorno por uso de sustancias y enfermedad mental).
- **Convivencial**: El tráfico de drogas genera violencia, deudas y redes de extorsión. Es una de las principales fuentes de conflicto en los módulos.
- **Delictiva**: Una proporción significativa de los delitos por los que se encuentran internados los reclusos están directamente relacionados con el consumo o el tráfico de sustancias.
- **Tratamental**: La adicción activa dificulta o impide la participación efectiva en programas de tratamiento y la progresión en grado.

### 6.2 Sustancias más prevalentes

Las sustancias más frecuentes en el medio penitenciario español son:
- **Cannabis (hachís)**: La droga ilegal más consumida, tanto antes del ingreso como durante la estancia en prisión.
- **Cocaína**: Pre-ingreso presenta una alta prevalencia; su consumo disminuye dentro de prisión pero no desaparece.
- **Heroína y opiáceos**: Aunque su consumo ha disminuido respecto a décadas anteriores, sigue siendo significativo, especialmente en inyección.
- **Psicofármacos (benzodiacepinas)**: Frecuentemente prescritos pero también objeto de tráfico y consumo no autorizado. Son la «moneda de cambio» del mercado negro penitenciario junto con el tabaco.
- **Alcohol artesanal**: Elaborado clandestinamente por los internos a partir de fruta fermentada.
- **Nuevas sustancias psicoactivas (NSP)**: Cannabinoides sintéticos y catinonas sintéticas, cuya detección en analíticas convencionales es difícil.

### 6.3 Programas de intervención en drogodependencias

La Secretaría General de Instituciones Penitenciarias desarrolla una estrategia integral de intervención en drogodependencias que abarca:

**a) Programas de prevención y educación para la salud**: Campañas informativas sobre riesgos del consumo, talleres de reducción de daños (uso de material de inyección estéril, programas de intercambio de jeringuillas — PIJ), distribución de preservativos.

**b) Programas de deshabituación y desintoxicación**:
- *Programas de mantenimiento con metadona (PMM)*: Sustitución del consumo de heroína por metadona administrada bajo control médico. Es el programa con mayor número de internos adscritos. Avalado científicamente como tratamiento de primera línea para la dependencia de opiáceos.
- *Programas de mantenimiento con buprenorfina/naloxona (Suboxone)*.
- *Programas de desintoxicación hospitalaria*: Para internos que requieren supervisión médica intensiva durante la retirada de la sustancia.

**c) Programas de rehabilitación psicosocial**:
- *Módulos Terapéuticos o Unidades Terapéuticas y Educativas (UTE)*: Módulos libres de droga con un programa integral de tratamiento que combina intervención psicológica grupal e individual, actividades formativas y ocupacionales, y un sistema de gestión de la convivencia basado en la responsabilización y la ayuda mutua. El interno firma un contrato terapéutico.
- *Comunidades Terapéuticas Extrapenitenciarias*: Para internos clasificados en tercer grado o en cumplimiento de medidas de seguridad, que cumplen condena en centros especializados fuera del ámbito penitenciario (art. 182 RP).
- *Programas ambulatorios*: Desarrollados en los módulos ordinarios, con sesiones grupales e individuales.

**d) Programa de Atención Integral a Enfermos Mentales (PAIEM)**: Destinado a internos con patología dual (trastorno adictivo + enfermedad mental). Incluye intervención psiquiátrica, psicológica, social y ocupacional.

**e) Programas de prevención de recaídas**: Basados en el modelo de Marlatt y Gordon (1985). Trabajan la identificación de situaciones de alto riesgo, el desarrollo de estrategias de afrontamiento alternativas al consumo, la reestructuración cognitiva del «efecto de violación de la abstinencia» (la creencia de que «ya que he recaído, da igual continuar consumiendo»), y el entrenamiento en habilidades de rechazo de la oferta de droga.

### 6.4 Marco normativo

El artículo 116 del Reglamento Penitenciario prevé que los internos que necesiten un tratamiento específico para deshabituación de drogodependencias podrán ser autorizados, previa conformidad del interno, para seguir tratamiento en instituciones extrapenitenciarias o ser asignados a departamentos específicos dentro del centro. El artículo 182 del RP regula las salidas programadas para seguimiento de tratamiento ambulatorio.

La Instrucción 3/2011 de la SGIP establece el marco de intervención en materia de drogas en los centros penitenciarios, articulando los diferentes niveles de intervención (prevención, reducción de daños, tratamiento, reinserción) y definiendo los criterios de derivación y coordinación con los recursos asistenciales comunitarios.

## 7. CONCLUSIÓN

El comportamiento social en el ámbito penitenciario es un campo de intervención prioritario porque la mayoría de las conductas delictivas se originan, se mantienen y se reproducen en un contexto interpersonal. Los déficits en habilidades sociales, la falta de asertividad y la conducta adictiva son los tres pilares sobre los que se asienta una gran parte de la reincidencia delictiva. Por ello, los programas de entrenamiento en habilidades sociales y de intervención en drogodependencias no son un complemento accesorio del sistema penitenciario, sino un elemento nuclear del mandato constitucional de reeducación y reinserción social que inspira toda la legislación penitenciaria española.
`;

async function run() {
    try {
        console.log("Generando PDFs expandidos en:", TARGET_DIR);
        
        await mdToPdf({ content: tema1 }, { dest: path.join(TARGET_DIR, "Tema 1 - Elementos de la Conducta Humana.pdf") });
        console.log("✓ Generado: Tema 1 - Elementos de la Conducta Humana");
        
        await mdToPdf({ content: tema2 }, { dest: path.join(TARGET_DIR, "Tema 2 - Organizacion Social en Prision.pdf") });
        console.log("✓ Generado: Tema 2 - Organizacion Social en Prision");
        
        await mdToPdf({ content: tema3 }, { dest: path.join(TARGET_DIR, "Tema 3 - El Comportamiento Social.pdf") });
        console.log("✓ Generado: Tema 3 - El Comportamiento Social");
        
        console.log("\\nProceso finalizado con éxito. 3 PDFs generados.");
    } catch (e) {
        console.error("Error en la generación:", e);
    }
}

run();
