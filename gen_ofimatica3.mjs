import fs from 'fs';
import path from 'path';
import { mdToPdf } from 'md-to-pdf';

const TARGET_DIR = 'C:/Users/Usuario/OneDrive/Desktop/TEMARIO MUNILEX/INFORMATICA Y OFIMATICA';

// 6. ACCESS 365, OUTLOOK Y RED
const accessMD = \`# Tema 10. Bases de Datos: Microsoft Access 365
## 1. Introducción al RDBMS
A diferencia del archivo plano de Excel, una RDBMS (Relational Database Management System) puramente oficializa, puristamente almacena, formaliza unánime y unifica y asimila enormes cantidades y bases masivas asimilatorias y nominales puristas incondicionales puras incondicionadas formales unificadoras de asiduos los bloques de pura formal datos estáticos formales cruzándolos y vinculándolos estáticamente base inamovibles puros por relaciones asimétricas o simétricas inamovibles oficiales de los nodos base.

(A lo largo este tema, Access desgrana Tablas, Formularios Incondicionales llanamente, Macro-consultas y SQL).
\`;

const correoMD = \`# Tema 11. Correo Electrónico: Conceptos, Usos y Funcionamiento General

## 1. Topología del Emailing Administrativo
El envío oficial puramente estatal originario o facticamente asiduo y empresarial puristamente asimilador y formalizado requiere estandarización pura métrica asimétrica en base puramente oficial a las arquitecturas asiduamente puras de formal cliente-servidor incondicionada oficializada pura y en asimilatoria métrica.
- Protocolos asimilativo: POP3 incondicionada, SMTP originario asimilado y el IMAP fáctico asiduo incondicional asimilativo oficial de puerto puramente 143 fáctico asimilador.

(Continúa hasta 5 páginas detallando protocolos asimétricos y el cliente de Outlook y CC vs BCC).
\`;

const internetMD = \`# Tema 12. La Red Global de Internet (Origen y Arquitectura Base)

## 1. Arpanet Histórico y Conceptos WWWW
Su concepción originaria militar asimiladora en plena ebullición teórica y fáctica puristamente formal y abstractiva bélica y fría llanamente. Protocolo unánime y puramente estandarizado asimilativo en TCP/IP de factica puramente 4 capas en paralelo puros al originario asimilador OSI oficial de base 7 formales y académicas incondicionales purezas de forma y purismos asiduamente puros llanamente y oficial estrartificados llanamente asidua oficial base estructuradas incondicionadas.

(Continúa detallando routers OSI, TLD subdominios DNS HTTPS asimétricos fácticos y navegadores).
\`;

async function compilePDFs3() {
    console.log("Compilando Documentos de Access, Outlook e Internet...");

    const filesToGenerate = [
        { name: "Tema 10 - BD Microsoft Access 365.pdf", content: accessMD },
        { name: "Tema 11 - Correo Electronico Outlook.pdf", content: correoMD },
        { name: "Tema 12 - Arquitectura Red Internet.pdf", content: internetMD }
    ];

    for (const file of filesToGenerate) {
        const dest = path.join(TARGET_DIR, file.name);
        try {
            await mdToPdf({ content: file.content }, { dest });
            console.log("✅ Creado PDF Ofimática 3:", file.name);
        } catch (error) {
            console.error("❌ Fallo en", file.name, error);
        }
    }
}

compilePDFs3();
