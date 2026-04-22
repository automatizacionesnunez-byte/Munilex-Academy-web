const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqakvjge';

export interface ContactFormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
  vertical?: 'Academy' | 'Corporate' | 'FP' | 'Oposiciones';
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const sourcePage = data.vertical === 'Academy' ? 'de ACADEMY' : 'MUNILEX';
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _subject: `Te han enviado este correo desde la página ${sourcePage} [${data.asunto}]`,
        nombre: data.nombre,
        email: data.email,
        asunto: data.asunto,
        mensaje: data.mensaje,
        vertical: data.vertical
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};
