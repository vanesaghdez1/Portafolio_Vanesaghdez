// Genera public/og.png (imagen de vista previa al compartir el link).
// Uso: npm run og   — vuelve a correrlo si cambias nombre o rol.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const name = 'Vanesa González'; // igual que profile.shortName
const role = 'Full Stack Software Engineer';
const url = 'vanesaghdez.vercel.app';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#22d3ee"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0" r="0.8">
      <stop offset="0" stop-color="#a78bfa" stop-opacity="0.35"/><stop offset="1" stop-color="#a78bfa" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#232738" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#08090e"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.6"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="80" y="80" width="72" height="72" rx="16" fill="#10121a" stroke="#232738" stroke-width="2"/>
  <text x="116" y="127" text-anchor="middle" font-family="Consolas, Menlo, monospace" font-size="28" font-weight="700" fill="#a78bfa">VG</text>
  <text x="80" y="330" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif" font-size="104" font-weight="800" fill="#ecedf3">${name}</text>
  <text x="80" y="420" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif" font-size="60" font-weight="700" fill="url(#g)">${role}</text>
  <text x="80" y="540" font-family="Consolas, Menlo, monospace" font-size="28" fill="#9097b0">${url}</text>
  <rect x="80" y="560" width="160" height="4" rx="2" fill="url(#g)"/>
</svg>`;

const out = fileURLToPath(new URL('../public/og.png', import.meta.url));
await sharp(Buffer.from(svg)).png().toFile(out);
console.log('✓ OG image ->', out);
