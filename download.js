import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, rgb } from 'pdf-lib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.join(__dirname, 'TEMARIO MUNILEX', 'TEMARIO AUXILIAR ADMINISTRATIVO');

if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
}

const docs = [
    { title: "Tema 1 - Constitucion Espanola de 1978.pdf", url: "https://www.boe.es/buscar/pdf/1978/BOE-A-1978-31229-consolidado.pdf" },
    { title: "Tema 2 - LO 2-1979 del Tribunal Constitucional.pdf", url: "https://www.boe.es/buscar/pdf/1979/BOE-A-1979-24027-consolidado.pdf" },
    { title: "Tema 3 - Reglamento del Congreso.pdf", url: "https://www.boe.es/buscar/pdf/1982/BOE-A-1982-5365-consolidado.pdf" }, 
    { title: "Tema 3 - Reglamento del Senado.pdf", url: "https://www.boe.es/buscar/pdf/1994/BOE-A-1994-10255-consolidado.pdf" },
    { title: "Tema 4 - LO 6-1985 del Poder Judicial.pdf", url: "https://www.boe.es/buscar/pdf/1985/BOE-A-1985-12666-consolidado.pdf" },
    { title: "Tema 5 - Ley 50-1997 del Gobierno.pdf", url: "https://www.boe.es/buscar/pdf/1997/BOE-A-1997-25336-consolidado.pdf" },
    { title: "Tema 5 y 8 - Ley 40-2015 de Regimen Juridico.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10566-consolidado.pdf" },
    { title: "Tema 6 y 7 - Ley 19-2013 de Transparencia.pdf", url: "https://www.boe.es/buscar/pdf/2013/BOE-A-2013-12887-consolidado.pdf" },
    { title: "Tema 8 - Ley 6-1997 LOFAGE.pdf", url: "https://www.boe.es/buscar/pdf/1997/BOE-A-1997-7878-consolidado.pdf" }, 
    { title: "Tema 9 - Estatuto de Autonomia de Extremadura.pdf", url: "https://www.boe.es/buscar/pdf/2011/BOE-A-2011-1641-consolidado.pdf" },
    { title: "Tema 10 - Tratado de la Union Europea y TFUE.pdf", url: "https://www.boe.es/buscar/pdf/2010/BOE-A-2010-416-consolidado.pdf" },
    { title: "Tema 11 - Ley 39-2015 del Procedimiento Administrativo.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10565-consolidado.pdf" },
    { title: "Tema 12 - RGPD.pdf", url: "https://www.boe.es/buscar/pdf/2016/DOUE-L-2016-80807.pdf" }, 
    { title: "Tema 12 - LO 3-2018 LOPDGDD.pdf", url: "https://www.boe.es/buscar/pdf/2018/BOE-A-2018-16673-consolidado.pdf" },
    { title: "Tema 13 y 14 - RDLeg 5-2015 TREBEP.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-11719-consolidado.pdf" },
    { title: "Tema 15 - Ley 47-2003 General Presupuestaria.pdf", url: "https://www.boe.es/buscar/pdf/2003/BOE-A-2003-21614-consolidado.pdf" },
    { title: "Tema 16 - LO 3-2007 Igualdad.pdf", url: "https://www.boe.es/buscar/pdf/2007/BOE-A-2007-6115-consolidado.pdf" },
    { title: "Tema 16 - LO 1-2004 Violencia de Genero.pdf", url: "https://www.boe.es/buscar/pdf/2004/BOE-A-2004-21760-consolidado.pdf" }
];

async function createMockPDF(title, dest) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    page.drawText(title, { x: 50, y: 350, size: 20, color: rgb(0, 0, 0) });
    page.drawText('Documento PDF generado automaticamente debido a que no se pudo', { x: 50, y: 300, size: 12 });
    page.drawText('descargar el original de la fuente oficial en este momento.', { x: 50, y: 280, size: 12 });
    page.drawText('Por favor, sustituya este fichero por el PDF oficial.', { x: 50, y: 260, size: 12 });
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(dest, pdfBytes);
}

async function downloadFiles() {
    for (const doc of docs) {
        const destPath = path.join(TARGET_DIR, doc.title);
        console.log(`Downloading ${doc.title}...`);
        try {
            const response = await fetch(doc.url, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
            });
            
            if (response.ok && response.headers.get('content-type')?.includes('pdf')) {
                const buffer = await response.arrayBuffer();
                fs.writeFileSync(destPath, Buffer.from(buffer));
                console.log(`✅ Success: ${doc.title}`);
            } else {
                console.log(`⚠️  Not a PDF or failed: ${doc.title}. Creating mock...`);
                await createMockPDF(doc.title, destPath);
            }
        } catch (error) {
            console.log(`❌ Error for ${doc.title}. Creating mock...`);
            await createMockPDF(doc.title, destPath);
        }
    }
}

downloadFiles();
