// Genera public/og.png (imagen de vista previa al compartir el link).
// Uso: npm run og   — vuelve a correrlo si cambias nombre o rol.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const name = 'Vanesa González'; // igual que profile.shortName
const role = 'Full Stack Software Engineer';
const detail = 'C# · .NET · Vue.js · SQL Server · AWS';
const url = 'vanesaghdez.vercel.app';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="band" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e2eef9"/><stop offset="1" stop-color="#f6f9fc"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#band)"/>
  <rect x="0" y="0" width="16" height="630" fill="#2b6cb0"/>
  <rect x="96" y="88" width="72" height="72" rx="36" fill="#ffffff" stroke="#c9dcef" stroke-width="2"/>
  <text x="132" y="134" text-anchor="middle" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif" font-size="26" font-weight="700" fill="#2b6cb0">VG</text>
  <text x="96" y="320" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif" font-size="96" font-weight="700" fill="#0f2236">${name}</text>
  <text x="96" y="400" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif" font-size="48" font-weight="600" fill="#2b6cb0">${role}</text>
  <text x="96" y="460" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif" font-size="30" fill="#4b5d72">${detail}</text>
  <line x1="96" y1="518" x2="1104" y2="518" stroke="#d9e3ee" stroke-width="2"/>
  <text x="96" y="566" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif" font-size="26" fill="#4b5d72">${url}</text>
</svg>`;

const out = fileURLToPath(new URL('../public/og.png', import.meta.url));
await sharp(Buffer.from(svg)).png().toFile(out);
console.log('✓ OG image ->', out);
