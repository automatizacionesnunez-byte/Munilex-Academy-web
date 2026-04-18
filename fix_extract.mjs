import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

const files = [
  'C:/Users/Usuario/Downloads/Tema 1_ Elementos de la Conducta Humana y su Evaluación en el Medio Penitenciario.pdf',
  'C:/Users/Usuario/Downloads/Informe de Estudio_ La Organización Social en el Medio Penitenciario.pdf',
  'C:/Users/Usuario/Downloads/Tema 3_ El Comportamiento Social en el Ámbito Penitenciario.pdf',
];

let fullText = '';

for (const f of files) {
  try {
    const buf = fs.readFileSync(f);
    const data = await pdf(buf);
    fullText += `\n\n========================================\n`;
    fullText += `FILE: ${f.split('/').pop()}\n`;
    fullText += `========================================\n\n`;
    fullText += data.text;
  } catch (err) {
    fullText += `\n\nERROR READING FILE: ${f}\n${err.message}\n`;
  }
}

fs.writeFileSync('extracted_content.txt', fullText, 'utf8');
console.log('Extraction complete. Check extracted_content.txt');
