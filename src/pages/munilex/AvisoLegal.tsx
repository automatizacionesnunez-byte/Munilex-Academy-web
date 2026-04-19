import { motion } from 'framer-motion';
import { Mail, MapPin, User } from 'lucide-react';

const AvisoLegal = () => {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen font-inter">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-[13px] font-black uppercase tracking-[0.3em] text-primary-container mb-6">Información Obligatoria</div>
          <h1 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter mb-8 italic">Aviso Legal</h1>
          <p className="text-lg text-on-surface-variant font-medium leading-relaxed max-w-2xl">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se exponen los siguientes datos identificativos del titular del sitio web.
          </p>
        </motion.div>

        <div className="space-y-12">
          <section className="bg-white p-10 rounded-[2.5rem] border border-surface-variant/30 shadow-premium">
            <h2 className="text-2xl font-black text-secondary mb-8 flex items-center gap-4">
              <User className="w-6 h-6 text-primary-container" />
              Titularidad del Servicio
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">Nombre del Titular</div>
                <div className="text-lg font-black text-secondary">Jose Maria Nuñez Mejías</div>
                <div className="text-sm font-medium opacity-60">Autónomo / Persona Física</div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">Identificación Fiscal</div>
                <div className="text-lg font-black text-secondary">NIF: 07273618Y</div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">Domicilio Social</div>
                <div className="text-lg font-black text-secondary flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 shrink-0 opacity-40" />
                  C/ Doctor Fleming 12, 2º F, 10001 Cáceres, España
                </div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">Contacto Directo</div>
                <div className="text-lg font-black text-secondary flex items-center gap-2">
                  <Mail className="w-5 h-5 opacity-40" />
                  administracion@munilex.es
                </div>
              </div>
            </div>
          </section>

          <section className="prose prose-slate prose-lg max-w-none text-on-surface-variant font-medium leading-relaxed">
            <h3 className="text-xl font-black text-secondary">1. Objeto y Ámbito de Aplicación</h3>
            <p>
              El presente Aviso Legal regula el acceso, navegación y uso del sitio web munilex.es, así como las responsabilidades derivadas de la utilización de sus contenidos y servicios (en adelante, el "SaaS" o "Chatbot").
            </p>

            <h3 className="text-xl font-black text-secondary">2. Condiciones de Uso</h3>
            <p>
              Munilex proporciona un asistente basado en inteligencia artificial orientado a secretarios, interventores y personal de la administración local. El usuario se compromete a hacer un uso lícito del servicio conforme a las leyes vigentes y el orden público.
            </p>

            <h3 className="text-xl font-black text-secondary">3. Limitación de Responsabilidad</h3>
            <p className="bg-primary/5 p-6 rounded-2xl border border-primary/10 italic">
              Munilex actúa como un asistente de apoyo. La información proporcionada por el chatbot no sustituye, en ningún caso, el asesoramiento jurídico profesional ni exime al usuario de contrastar la normativa vigente ante órganos oficiales. El titular no se responsabiliza de los resultados de las consultas generadas por la IA.
            </p>

            <h3 className="text-xl font-black text-secondary">4. Propiedad Intelectual</h3>
            <p>
              Jose Maria Nuñez Mejías es titular de todos los derechos de propiedad intelectual e industrial de munilex.es, incluyendo su código fuente, diseño, interfaz de usuario y sistemas de inteligencia artificial desarrollados bajo la marca Munilex y en colaboración con el ecosistema de Racks Academy.
            </p>

            <h3 className="text-xl font-black text-secondary">5. Legislación Aplicable</h3>
            <p>
              Estas condiciones se rigen por la legislación española. Para cualquier controversia que pudiera surgir, las partes se someten a los juzgados y tribunales de Cáceres.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;
