import { motion } from 'framer-motion';
import { Gavel, CheckCircle, Smartphone, Award, CreditCard, ShoppingCart } from 'lucide-react';

const Terminos = () => {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen font-inter">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-[13px] font-black uppercase tracking-[0.3em] text-primary-container mb-6">Condiciones del Servicio SaaS</div>
          <h1 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter mb-8 italic">Términos y Condiciones</h1>
          <p className="text-lg text-on-surface-variant font-medium leading-relaxed max-w-2xl">
             Este documento establece las condiciones que regulan el uso del servicio Munilex como plataforma de inteligencia artificial asistencial para la administración local.
          </p>
        </motion.div>

        <section className="prose prose-slate prose-lg max-w-none text-on-surface-variant font-medium leading-relaxed space-y-12">
          <div>
            <h3 className="text-xl font-black text-secondary flex items-center gap-3">
               <Award className="w-6 h-6 text-primary-container" />
               1. Aceptación de los Términos
            </h3>
            <p>
               Al acceder y utilizar munilex.es, usted acepta íntegramente de forma gratuita los términos y condiciones aquí dispuestos. Si no está de acuerdo, deberá abstenerse de utilizar el servicio de forma inmediata.
            </p>
          </div>

          <div>
             <h3 className="text-xl font-black text-secondary flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-primary-container" />
                2. Descripción del Servicio y Suscripción
             </h3>
             <p>
                Munilex es un servicio SaaS que utiliza inteligencia artificial para ofrecer asistencia jurídica. Se ofrecen diversas modalidades de suscripción (Opositor, Profesional, Institucional). Los pagos se procesan de forma segura a través de Stripe y dan acceso a las funcionalidades descritas en la sección de precios del sitio web.
             </p>
          </div>

          <div className="bg-secondary/5 p-10 rounded-[2.5rem] border border-secondary/10">
             <h3 className="text-xl font-black text-secondary flex items-center gap-3">
                <Gavel className="w-6 h-6 text-secondary" />
                3. Exclusión de Garantías y Responsabilidad
             </h3>
             <p className="italic mb-6">
                El chatbot de Munilex es un asistente consultivo. Las respuestas generadas por la inteligencia artificial se basan exclusivamente en la información procesada y pueden contener errores o estar desactualizadas.
             </p>
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                   <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                   Munilex no sustituye el asesoramiento de un abogado, secretario o interventor colegiado.
                </li>
                <li className="flex items-start gap-3">
                   <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                   El usuario es el único responsable de la validación legal de los resultados obtenidos.
                </li>
             </ul>
          </div>

          <div>
             <h3 className="text-xl font-black text-secondary flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-primary-container" />
                4. Uso Correcto de la Cuenta
             </h3>
             <p>
                Las cuentas son personales e intransferibles. Queda terminantemente prohibido el uso del servicio para fines ilícitos, la ingeniería inversa del chatbot o cualquier acción que comprometa la estabilidad de la plataforma Munilex o de la red de Racks Academy.
             </p>
          </div>

          <div>
             <h3 className="text-xl font-black text-secondary flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-primary-container" />
                5. Cancelación y Reembolsos
             </h3>
             <p>
                El usuario podrá cancelar su suscripción en cualquier momento a través del portal de cliente gestionado por Stripe. Debido a la naturaleza del servicio digital de acceso inmediato, no se admitirán reembolsos por meses ya devengados o utilizados.
             </p>
          </div>

          <div>
             <h3 className="text-xl font-black text-secondary flex items-center gap-3">
                <Gavel className="w-6 h-6 text-primary-container" />
                6. Jurisdicción y Ley Aplicable
             </h3>
             <p>
                Cualquier litigio relativo a la interpretación o ejecución de estos términos se someterá a la jurisdicción de los tribunales de Cáceres, España, renunciando las partes a cualquier otro fuero que pudiera corresponderles.
             </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terminos;
