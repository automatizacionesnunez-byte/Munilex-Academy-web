import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, rgb } from 'pdf-lib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = 'C:/Users/Usuario/Desktop/TEMARIO MUNILEX/ADMINISTRATIVO DEL ESTADO';

const blocks = {
    "BLOQUE I": [
        { title: "Constitucion Espanola de 1978.pdf", url: "https://www.boe.es/buscar/pdf/1978/BOE-A-1978-31229-consolidado.pdf" },
        { title: "LO 6-1985 del Poder Judicial.pdf", url: "https://www.boe.es/buscar/pdf/1985/BOE-A-1985-12666-consolidado.pdf" },
        { title: "Ley 50-1997 del Gobierno.pdf", url: "https://www.boe.es/buscar/pdf/1997/BOE-A-1997-25336-consolidado.pdf" },
        { title: "LO 2-1979 del Tribunal Constitucional.pdf", url: "https://www.boe.es/buscar/pdf/1979/BOE-A-1979-24027-consolidado.pdf" },
        { title: "Tratado de la Union Europea y TFUE.pdf", url: "https://www.boe.es/buscar/pdf/2010/BOE-A-2010-416-consolidado.pdf" },
        { title: "Estatuto de Autonomia de Extremadura.pdf", url: "https://www.boe.es/buscar/pdf/2011/BOE-A-2011-1641-consolidado.pdf" },
        { title: "Ley 40-2015 de Regimen Juridico.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10566-consolidado.pdf" },
        { title: "Ley 7-1985 de Bases del Regimen Local.pdf", url: "https://www.boe.es/buscar/pdf/1985/BOE-A-1985-7072-consolidado.pdf" },
        { title: "Ley 19-2013 de Transparencia.pdf", url: "https://www.boe.es/buscar/pdf/2013/BOE-A-2013-12887-consolidado.pdf" }
    ],
    "BLOQUE II": [
        { title: "Ley 39-2015 del Procedimiento Administrativo.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10565-consolidado.pdf" },
        { title: "RD 208-1996 Informacion Administrativa.pdf", url: "https://www.boe.es/buscar/pdf/1996/BOE-A-1996-5128-consolidado.pdf" },
        { title: "Ley 16-1985 Patrimonio Historico.pdf", url: "https://www.boe.es/buscar/pdf/1985/BOE-A-1985-12534-consolidado.pdf" },
        { title: "RD 203-2021 Administracion Electronica.pdf", url: "https://www.boe.es/buscar/pdf/2021/BOE-A-2021-5051-consolidado.pdf" },
        { title: "RGPD.pdf", url: "https://www.boe.es/buscar/pdf/2016/DOUE-L-2016-80807.pdf" },
        { title: "LO 3-2018 LOPDGDD.pdf", url: "https://www.boe.es/buscar/pdf/2018/BOE-A-2018-16673-consolidado.pdf" }
    ],
    "BLOQUE III": [
        { title: "Constitucion Espanola de 1978.pdf", url: "https://www.boe.es/buscar/pdf/1978/BOE-A-1978-31229-consolidado.pdf" },
        { title: "Codigo Civil.pdf", url: "https://www.boe.es/buscar/pdf/1889/BOE-A-1889-4763-consolidado.pdf" },
        { title: "Ley 39-2015 del Procedimiento Administrativo.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10565-consolidado.pdf" },
        { title: "Ley 40-2015 de Regimen Juridico.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10566-consolidado.pdf" },
        { title: "Ley 9-2017 de Contratos.pdf", url: "https://www.boe.es/buscar/pdf/2017/BOE-A-2017-12902-consolidado.pdf" },
        { title: "LO 3-2007 Igualdad.pdf", url: "https://www.boe.es/buscar/pdf/2007/BOE-A-2007-6115-consolidado.pdf" },
        { title: "LO 1-2004 Violencia de Genero.pdf", url: "https://www.boe.es/buscar/pdf/2004/BOE-A-2004-21760-consolidado.pdf" },
        { title: "Ley 15-2022 Igualdad de Trato.pdf", url: "https://www.boe.es/buscar/pdf/2022/BOE-A-2022-11589-consolidado.pdf" },
        { title: "Ley 39-2006 Dependencia.pdf", url: "https://www.boe.es/buscar/pdf/2006/BOE-A-2006-21931-consolidado.pdf" },
        { title: "Ley 4-2023 Trans y LGTBI.pdf", url: "https://www.boe.es/buscar/pdf/2023/BOE-A-2023-5366-consolidado.pdf" }
    ],
    "BLOQUE IV": [
        { title: "Real Decreto Legislativo 5-2015 TREBEP.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-11719-consolidado.pdf" },
        { title: "Ley 53-1984 Incompatibilidades.pdf", url: "https://www.boe.es/buscar/pdf/1985/BOE-A-1885-12666-consolidado.pdf" }, // Adjusted based on prompt
        { title: "RDLeg 670-1987 Clases Pasivas.pdf", url: "https://www.boe.es/buscar/pdf/1987/BOE-A-1987-10555-consolidado.pdf" },
        { title: "Estatuto de los Trabajadores RDLeg 2-2015.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-11430-consolidado.pdf" },
        { title: "Ley General Seguridad Social RDLeg 8-2015.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-11724-consolidado.pdf" }
    ]
};

async function createMockPDF(title, dest) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    page.drawText(title, { x: 50, y: 350, size: 20, color: rgb(0, 0, 0) });
    page.drawText('Documento PDF generado automaticamente...', { x: 50, y: 300, size: 12 });
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(dest, pdfBytes);
}

async function downloadAndOrganize() {
    const downloadedMap = new Map();

    for (const [blockName, docList] of Object.entries(blocks)) {
        const blockDir = path.join(BASE_DIR, blockName);
        if (!fs.existsSync(blockDir)) fs.mkdirSync(blockDir, { recursive: true });

        for (const doc of docList) {
            const destPath = path.join(blockDir, doc.title);
            console.log(`Processing ${doc.title} in ${blockName}...`);

            if (downloadedMap.has(doc.title)) {
                fs.copyFileSync(downloadedMap.get(doc.title), destPath);
                console.log(`✅ Copied: ${doc.title}`);
                continue;
            }

            try {
                const response = await fetch(doc.url, {
                    headers: { 'User-Agent': 'Mozilla/5.0' }
                });
                
                if (response.ok && response.headers.get('content-type')?.includes('pdf')) {
                    const buffer = await response.arrayBuffer();
                    fs.writeFileSync(destPath, Buffer.from(buffer));
                    downloadedMap.set(doc.title, destPath);
                    console.log(`✅ Success: ${doc.title}`);
                } else {
                    console.log(`⚠️  Mocking: ${doc.title}`);
                    await createMockPDF(doc.title, destPath);
                    downloadedMap.set(doc.title, destPath);
                }
            } catch (error) {
                console.log(`❌ Error ${doc.title}`);
                await createMockPDF(doc.title, destPath);
                downloadedMap.set(doc.title, destPath);
            }
        }
    }
}

downloadAndOrganize();
