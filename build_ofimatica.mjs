import fs from 'fs';
import path from 'path';
import { mdToPdf } from 'md-to-pdf';

// ═══════════════════════════════════════════════════════════════════
// Script de Conversión y Distribución — Bloque VI Informática/Ofimática
// Estos 8 temas son COMUNES a:
//   - Auxiliar Administrativo del Estado (C2): Temas 5-12
//   - Administrativo del Estado (C1): Bloque VI
//   - Temario compartido de referencia
// ═══════════════════════════════════════════════════════════════════

const SRC_DIR = 'c:/Users/Usuario/.gemini/antigravity/munilex-v3/ofimatica';

// Carpetas de destino — el bloque es COMÚN, va a ambas OPOs y a la carpeta compartida
const DEST_DIRS = [
  'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/INFORMATICA Y OFIMATICA',
  'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/TEMARIO AUXILIAR ADMINISTRATIVO',
  'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/ADMINISTRATIVO DEL ESTADO',
];

// Mapa de archivos MD → nombre PDF final
const FILES = [
  { md: 'tema05_informatica_basica.md',  pdf: 'Tema 5 - Informatica Basica Hardware y Software.pdf' },
  { md: 'tema06_windows11.md',           pdf: 'Tema 6 - Sistema Operativo Windows 11.pdf' },
  { md: 'tema07_explorador_w11.md',      pdf: 'Tema 7 - El Explorador de Archivos Windows 11.pdf' },
  { md: 'tema08_word365.md',             pdf: 'Tema 8 - Procesador de Textos Word 365.pdf' },
  { md: 'tema09_excel365.md',            pdf: 'Tema 9 - Hoja de Calculo Excel 365.pdf' },
  { md: 'tema10_access365.md',           pdf: 'Tema 10 - Base de Datos Access 365.pdf' },
  { md: 'tema11_correo_outlook.md',      pdf: 'Tema 11 - Correo Electronico y Outlook 365.pdf' },
  { md: 'tema12_internet.md',            pdf: 'Tema 12 - La Red Internet.pdf' },
];

// Crear carpetas si no existen
for (const dir of DEST_DIRS) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function run() {
  console.log('═══════════════════════════════════════════════════════');
  console.log(' MUNILEX — Generador de PDFs Informática & Ofimática');
  console.log('═══════════════════════════════════════════════════════\n');

  for (const file of FILES) {
    const srcPath = path.join(SRC_DIR, file.md);
    
    if (!fs.existsSync(srcPath)) {
      console.error(`❌ No encontrado: ${srcPath}`);
      continue;
    }

    const mdContent = fs.readFileSync(srcPath, 'utf-8');
    const wordCount = mdContent.split(/\s+/).length;
    
    console.log(`📄 Procesando: ${file.md} (${wordCount} palabras)`);

    // Generar PDF en la carpeta principal INFORMATICA Y OFIMATICA
    const primaryDest = path.join(DEST_DIRS[0], file.pdf);
    
    try {
      await mdToPdf(
        { content: mdContent },
        { 
          dest: primaryDest,
          pdf_options: {
            format: 'A4',
            margin: { top: '20mm', bottom: '20mm', left: '18mm', right: '18mm' },
            printBackground: true,
          },
          stylesheet: null,
          css: `
            body { font-family: 'Segoe UI', Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #1a1a1a; }
            h1 { font-size: 18pt; color: #1a3c6e; border-bottom: 2px solid #1a3c6e; padding-bottom: 6px; }
            h2 { font-size: 15pt; color: #2a5298; margin-top: 20px; }
            h3 { font-size: 13pt; color: #3a6bc5; }
            h4 { font-size: 11.5pt; color: #4a7bd0; }
            table { border-collapse: collapse; width: 100%; margin: 10px 0; font-size: 10pt; }
            th { background-color: #1a3c6e; color: white; padding: 6px 8px; text-align: left; }
            td { border: 1px solid #ccc; padding: 5px 8px; }
            tr:nth-child(even) { background-color: #f2f6fc; }
            code { background: #eef3fa; padding: 1px 4px; border-radius: 3px; font-size: 10pt; }
            pre { background: #1e293b; color: #e2e8f0; padding: 12px; border-radius: 6px; font-size: 9.5pt; }
            blockquote { border-left: 3px solid #1a3c6e; padding-left: 12px; color: #555; }
            hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }
          `,
        }
      );
      
      console.log(`   ✅ PDF generado → ${primaryDest}`);
      
      // Copiar el PDF a las carpetas de Auxiliar y Administrativo
      for (let i = 1; i < DEST_DIRS.length; i++) {
        const copyDest = path.join(DEST_DIRS[i], file.pdf);
        fs.copyFileSync(primaryDest, copyDest);
        console.log(`   📋 Copiado a → ${DEST_DIRS[i].split('TEMARIO MUNILEX/')[1]}`);
      }
      
    } catch (err) {
      console.error(`   ❌ Error al generar ${file.pdf}:`, err.message);
    }
    
    console.log('');
  }

  // Limpieza de PDFs antiguos con contenido de padding
  const oldFiles = [
    'Tema 5 - Informatica Basica y Arquitectura.pdf',
    'Tema 6 - Intro SO Windows 11.pdf',
    'Tema 7 - El Explorador W11 Avanzado.pdf',
    'Tema 8 - Microsoft Word 365 Examen.pdf',
    'Tema 9 - Microsoft Excel 365 Formulas.pdf',
    'Tema 10 - BD Microsoft Access 365.pdf',
    'Tema 11 - Correo Electronico Outlook.pdf',
    'Tema 12 - Arquitectura Red Internet.pdf',
  ];
  
  let cleaned = 0;
  for (const old of oldFiles) {
    const oldPath = path.join(DEST_DIRS[0], old);
    if (fs.existsSync(oldPath)) {
      fs.unlinkSync(oldPath);
      cleaned++;
    }
  }
  if (cleaned > 0) {
    console.log(`🧹 Eliminados ${cleaned} PDFs antiguos con contenido de padding.`);
  }

  console.log('\n═══════════════════════════════════════════════════════');
  console.log(' ✅ COMPLETADO: 8 PDFs de Informática generados y distribuidos');
  console.log('    → INFORMATICA Y OFIMATICA (carpeta principal)');
  console.log('    → TEMARIO AUXILIAR ADMINISTRATIVO (copia C2)');
  console.log('    → ADMINISTRATIVO DEL ESTADO (copia C1)');
  console.log('═══════════════════════════════════════════════════════');
}

run().catch(console.error);
