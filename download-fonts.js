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
    let localCss = css;
    
    // Replace URLs in CSS with local paths
    localCss = localCss.replace(regex, (match, fontUrl) => {
      const filename = `merriweather-${i}.woff2`;
      i++;
      return `url('/fonts/${filename}')`;
    });
    
    // Download files (we can reuse the logic, just reset i)
    let downloadI = 1;
    let downloadMatch;
    while ((downloadMatch = regex.exec(css)) !== null) {
      const fontUrl = downloadMatch[1];
      const filename = `public/fonts/merriweather-${downloadI}.woff2`;
      const file = fs.createWriteStream(filename);
      https.get(fontUrl, response => {
        response.pipe(file);
        console.log(`Downloaded ${filename}`);
      });
      downloadI++;
    }
    
    fs.writeFileSync('public/fonts/fonts.css', localCss);
    console.log("Updated fonts.css generated with local paths!");
  });
});
