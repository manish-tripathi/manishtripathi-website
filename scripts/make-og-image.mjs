// Builds the 1200x630 share image (public/og-image.jpg) from SVG with sharp,
// in the site's warm ivory palette. Run with `npm run og` after changing the
// name or positioning line. Text renders with the system's fonts: install
// Cormorant Garamond and Inter locally for the intended look (it falls back to
// Georgia and the system sans otherwise).
import sharp from 'sharp';

const name = 'Manish Tripathi';
const lines = [
  'I lead data from source to decision: sourcing and',
  'licensing it, building the pipelines, and running',
  'the teams behind them.',
];
const serif = 'Cormorant Garamond Light, Cormorant Garamond, Georgia, serif';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f5f0e7"/>
  <rect x="0" y="0" width="1200" height="12" fill="#2b2019"/>
  <text x="80" y="128" font-family="Inter, sans-serif" font-size="20" font-weight="500" letter-spacing="6" fill="#66584c">DATA PRODUCT AND ANALYTICS LEADERSHIP</text>
  <rect x="80" y="160" width="64" height="2" fill="#7d5b20"/>
  <text x="76" y="276" font-family="${serif}" font-size="116" font-weight="500" fill="#2b2019">${name}</text>
  ${lines
    .map((l, i) => `<text x="80" y="${356 + i * 48}" font-family="${serif}" font-style="italic" font-size="42" fill="#2b2019">${l}</text>`)
    .join('\n  ')}
  <rect x="80" y="526" width="1040" height="1" fill="#d6cbb9"/>
  <text x="80" y="570" font-family="Inter, sans-serif" font-size="20" letter-spacing="4" fill="#66584c">MANISHTRIPATHI.CO.IN</text>
  <text x="1120" y="570" text-anchor="end" font-family="Inter, sans-serif" font-size="20" letter-spacing="2" fill="#7d5b20">Product Manager, Aurora Energy Research</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 88, mozjpeg: true }).toFile('public/og-image.jpg');
console.log('Wrote public/og-image.jpg');
