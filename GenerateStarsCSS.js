const fs = require('fs');

const generateCSS = (numStars) => {
  let css = '';

  for (let i = 1; i <= numStars; i++) {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    css += `.star-background .star:nth-child(${i}) { top: ${top}%; left: ${left}%; }\n`;
  }

  return css;
};

const cssContent = generateCSS(500);
fs.writeFileSync('src/front/js/component/StarPositions.css', cssContent, 'utf8');
console.log('CSS file generated successfully.');
