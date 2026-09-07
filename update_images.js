const fs = require('fs');
let content = fs.readFileSync('src/components/ProductsGrid.astro', 'utf8');

const images = [
  '/images/products/Tablero-de-control.jpg',
  '/images/products/tablero-sinc.jpg',
  '/images/products/transferencia.jpg',
  '/images/products/Tableros-potencia.jpg',
  '/images/products/Renta-generador.jpg',
  '/images/products/soporte.jpg'
];

let i = 0;
// We know the first one was already replaced by the sed command (so 5 are left)
// But wait, sed with 's|...|...|' without /g replaces only the first occurrence in EACH LINE, but since they are on different lines, it replaced ALL of them in the file! Let's check!
