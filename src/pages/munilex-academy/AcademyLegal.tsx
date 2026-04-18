import React from 'react';

const LegalPage = ({ title }: { title: string }) => (
  <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto text-on-surface font-inter">
    <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter uppercase leading-none">{title}</h1>
    <div className="space-y-12 text-on-surface-variant leading-loose font-semibold text-lg">
      <section className="bg-white p-10 rounded-[2.5rem] border border-outline-variant shadow-ambient">
        <h2 className="text-xs font-black text-police-gold mb-6 uppercase tracking-[0.3em]">01. Información General</h2>
        <p className="opacity-80">En cumplimiento con lo dispuesto en la normativa vigente, se informa que este sitio web es propiedad de Munilex Academy. Nuestra plataforma está diseñada para ofrecer la máxima excelencia académica apoyada en inteligencia artificial.</p>
      </section>
      <section className="bg-white p-10 rounded-[2.5rem] border border-outline-variant shadow-ambient">
        <h2 className="text-xs font-black text-police-gold mb-6 uppercase tracking-[0.3em]">02. Propiedad Intelectual</h2>
        <p className="opacity-80">Todos los contenidos de la academia, incluyendo textos, diseños e inteligencia artificial aplicada, están protegidos por derechos de autor y propiedad intelectual de Munilex.</p>
      </section>
      <section className="bg-white p-10 rounded-[2.5rem] border border-outline-variant shadow-ambient">
        <h2 className="text-xs font-black text-police-gold mb-6 uppercase tracking-[0.3em]">03. Uso de la Plataforma</h2>
        <p className="opacity-80">El acceso a la plataforma de formación está sujeto a las condiciones de contratación y uso responsable de los materiales. El uso indebido o distribución no autorizada será perseguido legalmente.</p>
      </section>
    </div>
  </div>
);

export const AvisoLegal = () => <LegalPage title="Aviso Legal" />;
export const Privacidad = () => <LegalPage title="Política de Privacidad" />;
export const Terminos = () => <LegalPage title="Términos y Condiciones" />;
