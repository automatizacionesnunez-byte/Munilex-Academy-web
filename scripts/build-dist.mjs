import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const mode = process.argv[2]; // 'academy' or 'corporate'
if (!mode) {
  console.error('Specify mode: academy or corporate');
  process.exit(1);
}

const outDir = mode === 'academy' ? 'dist-academy' : 'dist-corporate';
process.env.VITE_SITE_MODE = mode;

console.log(`Building for ${mode}...`);

try {
  // Execute vite build
  execSync(`npx vite build --outDir ${outDir}`, { stdio: 'inherit', env: { ...process.env, VITE_SITE_MODE: mode } });

  // Add .htaccess for SPAs
  const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`;

  fs.writeFileSync(path.join(outDir, '.htaccess'), htaccess);
  console.log(`Successfully built to ${outDir}`);

} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
