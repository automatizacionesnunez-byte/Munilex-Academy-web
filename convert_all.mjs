import fs from 'fs';
import path from 'path';
import { mdToPdf } from 'md-to-pdf';

const TARGET_DIR = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/GUARDIA CIVIL/Temario Especifico (No Juridico)';

async function compilePDFs() {
    console.log("Generando PDFs super extensos desde Markdown...");

    const filesToGenerate = [
        { src: "historia_gc.md", name: "Tema - Historia de la Guardia Civil.pdf" },
        { src: "instituciones.md", name: "Tema - Instituciones Internacionales.pdf" },
        { src: "ciberseguridad.md", name: "Tema - Ciberseguridad CCN-CERT.pdf" },
        { src: "topografia.md", name: "Tema - Topografia.pdf" },
        { src: "ingles.md", name: "Tema - Ingles B1 General.pdf" },
        { src: "lengua.md", name: "Tema - Lengua Ortografia y Gramatica.pdf" }
    ];

    for (const file of filesToGenerate) {
        const dest = path.join(TARGET_DIR, file.name);
        try {
            const content = fs.readFileSync(file.src, 'utf-8');
            const pdf = await mdToPdf({ content }, { dest });
            console.log("✅ Creado PDF V2:", file.name);
        } catch (error) {
            console.error("❌ Fallo en", file.name, error);
        }
    }
}

compilePDFs();
