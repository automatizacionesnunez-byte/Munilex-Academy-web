import React from 'react';

const LegalPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-[#E5E2E1]">
    <h1 className="text-4xl font-black mb-12 tracking-tighter">{title}</h1>
    <div className="space-y-8 text-white/70 leading-relaxed font-inter">
      <section>
        <h2 className="text-xl font-bold text-white mb-4">1. Información General</h2>
        <p>En cumplimiento con lo dispuesto en la normativa vigente, se informa que este sitio web es propiedad de Munilex Academy.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-4">2. Propiedad Intelectual</h2>
        <p>Todos los contenidos de la academia, incluyendo textos, diseños e inteligencia artificial aplicada, están protegidos por derechos de autor.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-4">3. Uso de la Plataforma</h2>
        <p>El acceso a la plataforma de formación está sujeto a las condiciones de contratación y uso responsable de los materiales.</p>
      </section>
    </div>
  </div>
);

export const AvisoLegal = () => <LegalPage title="Aviso Legal" />;
export const Privacidad = () => <LegalPage title="Política de Privacidad" />;
export const Terminos = () => <LegalPage title="Términos y Condiciones" />;
