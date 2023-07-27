const sharp = require('sharp');
const fs = require('fs');

function fileNameNormalizer(name){
  let normalizedName = name.split(' ').join('_').split('.');
  const poping = normalizedName.pop();
  normalizedName = normalizedName.join('.');
  return normalizedName;
}

const imageCompression = async (req, res, next) => {
  if (!req.file){
    console.log('hello');
    return next();
  }
  fs.access("./images", (error) => {
    if (error) {
      fs.mkdirSync("./images");
    }
  });
  const { buffer, originalname } = req.file;
  const name = fileNameNormalizer(originalname);
  const ref = name + Date.now();
  await sharp(buffer)
    .webp({ quality: 100 })
    .toFile('./images/' + ref + '.webp');
  req.file.filename = ref + '.webp';
  next();
}

module.exports = imageCompression;