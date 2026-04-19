import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Smartphone, Search, Database, Lock } from 'lucide-react';

const Privacidad = () => {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen font-inter">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-[13px] font-black uppercase tracking-[0.3em] text-primary-container mb-6">Protección de Datos Soberanos</div>
          <h1 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter mb-8 italic">Política de Privacidad</h1>
          <p className="text-lg text-on-surface-variant font-medium leading-relaxed max-w-2xl">
             En Munilex, la seguridad de la información es el pilar de nuestra soberanía jurídica. Tratamos sus datos bajo los más estrictos estándares del RGPD y el Esquema Nacional de Seguridad (ENS).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 text-center">
          <div className="bg-white p-10 rounded-[2.5rem] border border-surface-variant/30 shadow-sm transition-all hover:bg-primary-container/10">
             <div className="flex justify-center mb-6">
                <ShieldCheck className="w-16 h-16 text-primary-container" />
             </div>
             <div className="text-xl font-black text-secondary mb-4 tracking-tighter">Certificado ENS</div>
             <p className="text-sm font-medium opacity-60">Infraestructura blindada bajo los requisitos del Esquema Nacional de Seguridad para el sector público.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] border border-surface-variant/30 shadow-sm transition-all hover:bg-secondary/10">
             <div className="flex justify-center mb-6">
                <UserCheck className="w-16 h-16 text-secondary" />
             </div>
             <div className="text-xl font-black text-secondary mb-4 tracking-tighter">Cumplimiento RGPD</div>
             <p className="text-sm font-medium opacity-60">Garantía total de los derechos ARCO y anonimización de consultas legislativas sensibles.</p>
          </div>
        </div>

        <section className="prose prose-slate prose-lg max-w-none text-on-surface-variant font-medium leading-relaxed space-y-12">
          <div>
            <h3 className="text-xl font-black text-secondary flex items-center gap-3">
               <Database className="w-6 h-6 text-primary-container" />
               1. Responsable del Tratamiento
            </h3>
            <p>
               El responsable del tratamiento de sus datos es Jose Maria Nuñez Mejías (en adelante "El Titular"), con NIF 07273618Y y domicilio en C/ Doctor Fleming 12, 10001, Cáceres. Email: administracion@munilex.es.
            </p>
          </div>

          <div>
             <h3 className="text-xl font-black text-secondary flex items-center gap-3">
                <Search className="w-6 h-6 text-primary-container" />
                2. Finalidad del Tratamiento
             </h3>
             <p>
                Tratamos los datos facilitados por los usuarios con el único fin de gestionar el acceso al SaaS Munilex, realizar el soporte técnico y facturación de servicios, y optimizar el rendimiento del chatbot mediante análisis estadístico anonimizado.
             </p>
          </div>

          <div>
             <h3 className="text-xl font-black text-secondary flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary-container" />
                3. Conservación de los Datos
             </h3>
             <p>
                Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales y tributarias.
             </p>
          </div>

          <div>
             <h3 className="text-xl font-black text-secondary flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-primary-container" />
                4. Cesión a Terceros
             </h3>
             <p className="bg-primary/5 p-8 rounded-[2rem] border border-primary/10 italic">
                Munilex no cederá sus datos a terceros salvo obligación legal. Los datos de pago son procesados exclusivamente por Stripe (nuestro socio de pagos) bajo sus propias políticas de seguridad cifrada.
             </p>
          </div>

          <div>
             <h3 className="text-xl font-black text-secondary flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary-container" />
                5. Derechos del Usuario
             </h3>
             <p>
                Usted tiene derecho a obtener confirmación sobre si el Responsable está tratando sus datos personales, así como a solicitar el acceso, rectificación, supresión, limitación del tratamiento u oposición al mismo enviando un email a administracion@munilex.es adjuntando copia de su DNI.
             </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacidad;
