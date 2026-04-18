import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb } from 'pdf-lib';

const BASE_PATH = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/AYUDANTE INSTITUCIONES PENITENCIARIAS';

const missingDocs = [
    { module: "MODULO 1", title: "Agenda 2030 Naciones Unidas.pdf", url: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/10/16-00055S_UNICEF_Sustainable_Development_Goals_Web_Sp.pdf" },
    { module: "MODULO 1", title: "Estatuto de Autonomia de Extremadura.pdf", url: "https://www.boe.es/buscar/pdf/2011/BOE-A-2011-1641-consolidado.pdf" }
];

async function createMockPDF(title, dest) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    page.drawText(title, { x: 50, y: 350, size: 20, color: rgb(0, 0, 0) });
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(dest, pdfBytes);
}

async function fixMissing() {
    for (const doc of missingDocs) {
        const modDir = path.join(BASE_PATH, doc.module);
        if (!fs.existsSync(modDir)) fs.mkdirSync(modDir, { recursive: true });
        const dest = path.join(modDir, doc.title);
        
        console.log(`Downloading missing: ${doc.title}...`);
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

fixMissing();
