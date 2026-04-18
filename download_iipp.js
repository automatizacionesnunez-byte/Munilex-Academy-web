import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, rgb } from 'pdf-lib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_PATH = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/AYUDANTE INSTITUCIONES PENITENCIARIAS';

const modules = {
    "MODULO 1": [
        { title: "Constitucion Espanola de 1978.pdf", url: "https://www.boe.es/buscar/pdf/1978/BOE-A-1978-31229-consolidado.pdf" },
        { title: "LO 6-1985 del Poder Judicial.pdf", url: "https://www.boe.es/buscar/pdf/1985/BOE-A-1985-12666-consolidado.pdf" },
        { title: "LO 2-1979 del Tribunal Constitucional.pdf", url: "https://www.boe.es/buscar/pdf/1979/BOE-A-1979-24027-consolidado.pdf" },
        { title: "Ley 50-1997 del Gobierno.pdf", url: "https://www.boe.es/buscar/pdf/1997/BOE-A-1997-25336-consolidado.pdf" },
        { title: "Tratado de la Union Europea y TFUE.pdf", url: "https://www.boe.es/buscar/pdf/2010/BOE-A-2010-416-consolidado.pdf" },
        { title: "RD 734-2020 Estructura Ministerio Interior.pdf", url: "https://www.boe.es/buscar/pdf/2020/BOE-A-2020-9111-consolidado.pdf" },
        { title: "Real Decreto Legislativo 5-2015 TREBEP.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-11719-consolidado.pdf" },
        { title: "Ley 30-1984 Medidas Reforma Funcion Publica.pdf", url: "https://www.boe.es/buscar/pdf/1984/BOE-A-1984-17387-consolidado.pdf" },
        { title: "RD 364-1995 Reglamento Ingreso AGE.pdf", url: "https://www.boe.es/buscar/pdf/1995/BOE-A-1995-8729-consolidado.pdf" },
        { title: "Ley 53-1984 Incompatibilidades.pdf", url: "https://www.boe.es/buscar/pdf/1985/BOE-A-1985-12666-consolidado.pdf" },
        { title: "Ley 9-2017 de Contratos.pdf", url: "https://www.boe.es/buscar/pdf/2017/BOE-A-2017-12902-consolidado.pdf" },
        { title: "Ley 39-2015 del Procedimiento Administrativo.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10565-consolidado.pdf" },
        { title: "Ley 40-2015 de Regimen Juridico.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10566-consolidado.pdf" },
        { title: "Codigo Civil.pdf", url: "https://www.boe.es/buscar/pdf/1889/BOE-A-1889-4763-consolidado.pdf" },
        { title: "Ley 19-2013 de Transparencia.pdf", url: "https://www.boe.es/buscar/pdf/2013/BOE-A-2013-12887-consolidado.pdf" },
        { title: "Ley 45-2015 de Voluntariado.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-11072-consolidado.pdf" },
        { title: "Ley 47-2003 General Presupuestaria.pdf", url: "https://www.boe.es/buscar/pdf/2003/BOE-A-2003-21614-consolidado.pdf" }
    ],
    "MODULO 2": [
        { title: "Ley Organica 10-1995 Codigo Penal.pdf", url: "https://www.boe.es/buscar/pdf/1995/BOE-A-1995-25444-consolidado.pdf" },
        { title: "Ley de Enjuiciamiento Criminal.pdf", url: "https://www.boe.es/buscar/pdf/1882/BOE-A-1882-6036-consolidado.pdf" },
        { title: "LO 6-1985 del Poder Judicial.pdf", url: "https://www.boe.es/buscar/pdf/1985/BOE-A-1985-12666-consolidado.pdf" },
        { title: "Ley 50-1981 Estatuto Ministerio Fiscal.pdf", url: "https://www.boe.es/buscar/pdf/1981/BOE-A-1981-30467-consolidado.pdf" }
    ],
    "MODULO 3": [
        { title: "Ley Organica 1-1979 General Penitenciaria.pdf", url: "https://www.boe.es/buscar/pdf/1979/BOE-A-1979-23708-consolidado.pdf" },
        { title: "RD 190-1996 Reglamento Penitenciario.pdf", url: "https://www.boe.es/buscar/pdf/1996/BOE-A-1996-3307-consolidado.pdf" },
        { title: "LO 6-1985 del Poder Judicial.pdf", url: "https://www.boe.es/buscar/pdf/1985/BOE-A-1985-12666-consolidado.pdf" },
        { title: "RD 782-2001 Relacion Laboral Penados.pdf", url: "https://www.boe.es/buscar/pdf/2001/BOE-A-2001-15076-consolidado.pdf" },
        { title: "Reglas Penitenciarias Europeas.pdf", url: "https://rm.coe.int/CoERMPublicCommonSearchServices/DisplayDCTMContent?documentId=09000016806f36b0" },
        { title: "Reglas Mandela Naciones Unidas.pdf", url: "https://www.unodc.org/documents/justice-and-prison-reform/Nelson_Mandela_Rules-S.pdf" }
    ]
};

async function createMockPDF(title, dest) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    page.drawText(title, { x: 50, y: 350, size: 20, color: rgb(0, 0, 0) });
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(dest, pdfBytes);
}

async function runTask() {
    const downloaded = new Map();

    for (const [modName, docs] of Object.entries(modules)) {
        const modDir = path.join(BASE_PATH, modName);
        if (!fs.existsSync(modDir)) fs.mkdirSync(modDir, { recursive: true });

        for (const doc of docs) {
            const dest = path.join(modDir, doc.title);
            if (downloaded.has(doc.title)) {
                fs.copyFileSync(downloaded.get(doc.title), dest);
                continue;
            }

            try {
                const res = await fetch(doc.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
                if (res.ok && res.headers.get('content-type')?.includes('pdf')) {
                    const buf = await res.arrayBuffer();
                    fs.writeFileSync(dest, Buffer.from(buf));
                    downloaded.set(doc.title, dest);
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
}

runTask();
