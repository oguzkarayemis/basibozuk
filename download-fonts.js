import fs from 'fs';
import https from 'https';

const url = 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
  let css = '';
  res.on('data', d => css += d);
  res.on('end', () => {
    let match;
    const regex = /url\((https:\/\/[^\)]+\.woff2)\)/g;
    let i = 1;
    while ((match = regex.exec(css)) !== null) {
      const fontUrl = match[1];
      const filename = `public/fonts/merriweather-${i}.woff2`;
      const file = fs.createWriteStream(filename);
      https.get(fontUrl, response => {
        response.pipe(file);
        console.log(`Downloaded ${filename}`);
      });
      i++;
    }
    fs.writeFileSync('public/fonts/fonts.css', css);
  });
});
