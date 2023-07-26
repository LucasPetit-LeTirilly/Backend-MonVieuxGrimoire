const sharp = require('sharp');
const fs = require('fs');


const imageCompression = async (req, res, next) => {
  fs.access("./images", (error) => {
    if (error) {
      fs.mkdirSync("./images");
    }
  });
  const { buffer, originalname } = req.file;
  const timestamp = Date.now();
  const ref = `${timestamp}-${originalname}.webp`;
  await sharp(buffer)
    .webp({ quality: 100 })
    .toFile("./images/" + ref);
  next();
} 

module.exports = imageCompression;