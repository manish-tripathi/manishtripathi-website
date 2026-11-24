// Builds the 1200x630 share image (public/og-image.jpg) from SVG with sharp.
// Run with `npm run og` after changing the name or positioning line.
// Text renders with the system's fonts: install Newsreader and Inter locally
// for the intended look (falls back to Georgia and the system sans otherwise).
import sharp from 'sharp';

const name = 'Manish Tripathi';
const lines = [
  'I lead data from source to decision: sourcing and',
  'licensing it, building the pipelines, and running',
  'the teams behind them.',
];

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f7f4ee"/>
  <rect x="80" y="96" width="1040" height="2" fill="#1d1c1a"/>
  <text x="80" y="140" font-family="Inter, sans-serif" font-size="22" font-weight="600" letter-spacing="3" fill="#0e6359">DATA PRODUCT AND ANALYTICS LEADERSHIP</text>
  <text x="80" y="262" font-family="Newsreader 16pt, Newsreader, Georgia, serif" font-size="104" font-weight="500" fill="#1d1c1a">${name}</text>
  ${lines
    .map((l, i) => `<text x="80" y="${348 + i * 50}" font-family="Newsreader 16pt, Newsreader, Georgia, serif" font-size="40" fill="#3a3732">${l}</text>`)
    .join('\n  ')}
  <rect x="80" y="526" width="1040" height="1" fill="#d8d1c4"/>
  <text x="80" y="568" font-family="Inter, sans-serif" font-size="24" fill="#5f5a52">manishtripathi.co.in</text>
  <text x="1120" y="568" text-anchor="end" font-family="Inter, sans-serif" font-size="24" fill="#5f5a52">Product Manager, Aurora Energy Research</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 88, mozjpeg: true }).toFile('public/og-image.jpg');
console.log('Wrote public/og-image.jpg');
