import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb } from 'pdf-lib';

const BASE_PATH = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/POLICIA NACIONAL ESCALA BASICA';

const docs = [
    { title: "Constitucion Espanola de 1978.pdf", url: "https://www.boe.es/buscar/pdf/1978/BOE-A-1978-31229-consolidado.pdf" },
    { title: "Codigo Civil.pdf", url: "https://www.boe.es/buscar/pdf/1889/BOE-A-1889-4763-consolidado.pdf" },
    { title: "Tratado de la Union Europea y TFUE.pdf", url: "https://www.boe.es/buscar/pdf/2010/BOE-A-2010-416-consolidado.pdf" },
    { title: "Ley 40-2015 de Regimen Juridico.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10566-consolidado.pdf" },
    { title: "Ley 39-2015 del Procedimiento Administrativo.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10565-consolidado.pdf" },
    { title: "Real Decreto Legislativo 5-2015 TREBEP.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-11719-consolidado.pdf" },
    { title: "Ley 53-1984 Incompatibilidades.pdf", url: "https://www.boe.es/buscar/pdf/1985/BOE-A-1985-12666-consolidado.pdf" },
    { title: "RD 734-2020 Estructura Ministerio Interior.pdf", url: "https://www.boe.es/buscar/pdf/2020/BOE-A-2020-9111-consolidado.pdf" },
    { title: "LO 2-1986 de Fuerzas y Cuerpos de Seguridad.pdf", url: "https://www.boe.es/buscar/pdf/1986/BOE-A-1986-6859-consolidado.pdf" },
    { title: "RD 240-2007 Libre Circulacion UE.pdf", url: "https://www.boe.es/buscar/pdf/2007/BOE-A-2007-4184-consolidado.pdf" },
    { title: "LO 4-2000 Extranjeria.pdf", url: "https://www.boe.es/buscar/pdf/2000/BOE-A-2000-544-consolidado.pdf" },
    { title: "RD 557-2011 Reglamento Extranjeria.pdf", url: "https://www.boe.es/buscar/pdf/2011/BOE-A-2011-11470-consolidado.pdf" },
    { title: "Ley 12-2009 Derecho de Asilo.pdf", url: "https://www.boe.es/buscar/pdf/2009/BOE-A-2009-17242-consolidado.pdf" },
    { title: "Ley 5-2014 de Seguridad Privada.pdf", url: "https://www.boe.es/buscar/pdf/2014/BOE-A-2014-3648-consolidado.pdf" },
    { title: "LO 4-2015 Seguridad Ciudadana.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-3442-consolidado.pdf" },
    { title: "Ley 8-2011 Infraestructuras Criticas.pdf", url: "https://www.boe.es/buscar/pdf/2011/BOE-A-2011-7630-consolidado.pdf" },
    { title: "RD 704-2011 Reglamento Infraestructuras Criticas.pdf", url: "https://www.boe.es/buscar/pdf/2011/BOE-A-2011-8575-consolidado.pdf" },
    { title: "Ley Organica 10-1995 Codigo Penal.pdf", url: "https://www.boe.es/buscar/pdf/1995/BOE-A-1995-25444-consolidado.pdf" },
    { title: "Ley de Enjuiciamiento Criminal.pdf", url: "https://www.boe.es/buscar/pdf/1882/BOE-A-1882-6036-consolidado.pdf" },
    { title: "Ley 4-2015 Estatuto de la Victima.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-4583-consolidado.pdf" },
    { title: "LO 3-2007 Igualdad.pdf", url: "https://www.boe.es/buscar/pdf/2007/BOE-A-2007-6115-consolidado.pdf" },
    { title: "Ley 15-2022 Igualdad de Trato.pdf", url: "https://www.boe.es/buscar/pdf/2022/BOE-A-2022-11589-consolidado.pdf" },
    { title: "LO 1-2004 Violencia de Genero.pdf", url: "https://www.boe.es/buscar/pdf/2004/BOE-A-2004-21760-consolidado.pdf" },
    { title: "Ley 31-1995 Prevencion de Riesgos Laborales.pdf", url: "https://www.boe.es/buscar/pdf/1995/BOE-A-1995-24292-consolidado.pdf" },
    { title: "RGPD.pdf", url: "https://www.boe.es/buscar/pdf/2016/DOUE-L-2016-80807.pdf" },
    { title: "LO 3-2018 LOPDGDD.pdf", url: "https://www.boe.es/buscar/pdf/2018/BOE-A-2018-16673-consolidado.pdf" }
];

async function createMockPDF(title, dest) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    page.drawText(title, { x: 50, y: 350, size: 20, color: rgb(0, 0, 0) });
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(dest, pdfBytes);
}

async function run() {
    if (!fs.existsSync(BASE_PATH)) fs.mkdirSync(BASE_PATH, { recursive: true });

    for (const doc of docs) {
        const dest = path.join(BASE_PATH, doc.title);
        console.log(`Downloading for CNP: ${doc.title}...`);
        try {
            const res = await fetch(doc.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
            if (res.ok && res.headers.get('content-type')?.includes('pdf')) {
                const buf = await res.arrayBuffer();
                fs.writeFileSync(dest, Buffer.from(buf));
                console.log(`✅ Success: ${doc.title}`);
            } else {
                console.log(`⚠️ Mock: ${doc.title}`);
                await createMockPDF(doc.title, dest);
            }
        } catch (e) {
            console.log(`❌ Error: ${doc.title}`);
            await createMockPDF(doc.title, dest);
        }
    }
}

run();
