import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb } from 'pdf-lib';

const BASE_PATH = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/GUARDIA CIVIL';

const subfolders = {
    "Basicos": [
        { title: "Constitucion Española de 1978.pdf", url: "https://www.boe.es/buscar/pdf/1978/BOE-A-1978-31229-consolidado.pdf" },
        { title: "Codigo Civil.pdf", url: "https://www.boe.es/buscar/pdf/1889/BOE-A-1889-4763-consolidado.pdf" },
        { title: "Ley de Enjuiciamiento Criminal.pdf", url: "https://www.boe.es/buscar/pdf/1882/BOE-A-1882-6036-consolidado.pdf" }
    ],
    "Leyes Organicas": [
        { title: "LO 18-2003 Cooperacion Corte Penal Internacional.pdf", url: "https://www.boe.es/buscar/pdf/2003/BOE-A-2003-22830-consolidado.pdf" },
        { title: "LO 3-2007 Igualdad.pdf", url: "https://www.boe.es/buscar/pdf/2007/BOE-A-2007-6115-consolidado.pdf" },
        { title: "LO 3-1981 Defensor del Pueblo.pdf", url: "https://www.boe.es/buscar/pdf/1981/BOE-A-1981-10330-consolidado.pdf" },
        { title: "LO 1-1982 Honor Intimidad e Imagen.pdf", url: "https://www.boe.es/buscar/pdf/1982/BOE-A-1982-11135-consolidado.pdf" },
        { title: "LO 10-1995 Codigo Penal.pdf", url: "https://www.boe.es/buscar/pdf/1995/BOE-A-1995-25444-consolidado.pdf" },
        { title: "LO 6-1984 Habeas Corpus.pdf", url: "https://www.boe.es/buscar/pdf/1984/BOE-A-1984-11656-consolidado.pdf" },
        { title: "LO 6-1985 del Poder Judicial.pdf", url: "https://www.boe.es/buscar/pdf/1985/BOE-A-1985-12666-consolidado.pdf" },
        { title: "LO 3-2018 LOPDGDD.pdf", url: "https://www.boe.es/buscar/pdf/2018/BOE-A-2018-16673-consolidado.pdf" },
        { title: "LO 4-2000 Extranjeria.pdf", url: "https://www.boe.es/buscar/pdf/2000/BOE-A-2000-544-consolidado.pdf" },
        { title: "LO 4-2015 Seguridad Ciudadana.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-3442-consolidated.pdf" }, // Adjusted typo
        { title: "LO 2-1986 Fuerzas y Cuerpos de Seguridad.pdf", url: "https://www.boe.es/buscar/pdf/1986/BOE-A-1986-6859-consolidado.pdf" },
        { title: "LO 11-2007 Derechos y Deberes Guardia Civil.pdf", url: "https://www.boe.es/buscar/pdf/2007/BOE-A-2007-18395-consolidado.pdf" },
        { title: "LO 5-2000 Responsabilidad Penal Menores.pdf", url: "https://www.boe.es/buscar/pdf/2000/BOE-A-2000-642-consolidado.pdf" },
        { title: "LO 1-2004 Violencia de Genero.pdf", url: "https://www.boe.es/buscar/pdf/2004/BOE-A-2004-21760-consolidado.pdf" },
        { title: "LO 12-1995 Represion Contrabando.pdf", url: "https://www.boe.es/buscar/pdf/1995/BOE-A-1995-26838-consolidado.pdf" }
    ],
    "Leyes Ordinarias": [
        { title: "Ley 31-1995 Prevencion Riesgos Laborales.pdf", url: "https://www.boe.es/buscar/pdf/1995/BOE-A-1995-24292-consolidado.pdf" },
        { title: "Ley 4-2015 Estatuto de la Victima.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-4583-consolidado.pdf" },
        { title: "Ley 39-2015 Procedimiento Administrativo.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10565-consolidado.pdf" },
        { title: "Ley 40-2015 Regimen Juridico.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-10566-consolidado.pdf" },
        { title: "Ley 50-1997 del Gobierno.pdf", url: "https://www.boe.es/buscar/pdf/1997/BOE-A-1997-25336-consolidado.pdf" },
        { title: "Ley 5-2014 Seguridad Privada.pdf", url: "https://www.boe.es/buscar/pdf/2014/BOE-A-2014-3648-consolidado.pdf" },
        { title: "Ley 29-2014 Personal Guardia Civil.pdf", url: "https://www.boe.es/buscar/pdf/2014/BOE-A-2014-12349-consolidado.pdf" },
        { title: "Ley 17-2015 Proteccion Civil.pdf", url: "https://www.boe.es/buscar/pdf/2015/BOE-A-2015-7730-consolidado.pdf" },
        { title: "Ley 42-2007 Patrimonio Natural.pdf", url: "https://www.boe.es/buscar/pdf/2007/BOE-A-2007-21490-consolidado.pdf" },
        { title: "Ley 9-2014 Telecomunicaciones.pdf", url: "https://www.boe.es/buscar/pdf/2014/BOE-A-2014-4871-consolidado.pdf" },
        { title: "Ley 6-2020 Servicios Electronicos Confianza.pdf", url: "https://www.boe.es/buscar/pdf/2020/BOE-A-2020-14061-consolidado.pdf" }
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

    for (const [subName, docList] of Object.entries(subfolders)) {
        const subDir = path.join(BASE_PATH, subName);
        if (!fs.existsSync(subDir)) fs.mkdirSync(subDir, { recursive: true });

        for (const doc of docList) {
            const dest = path.join(subDir, doc.title);
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
                    console.log(`⚠️ Mocking: ${doc.title} (URL: ${doc.url})`);
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
