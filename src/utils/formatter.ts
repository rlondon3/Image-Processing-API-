import sharp from 'sharp';
import config from '../configuration';

const formatter = async (
  file: string,
  width: number,
  height: number
): Promise<void> => {
  const imagePath = `${config.ASSETS_FOLDER}/img/${file}.jpg`;
  const outputPath = `${config.ASSETS_FOLDER}/thumb/${file}${width}X${height}.jpg`;
  console.log(imagePath);
  try {
    await sharp(imagePath)
      .resize(width, height, { fit: sharp.fit.contain })
      .toFile(outputPath);
  } catch (err) {
    console.error('Error with image formatting', err);
    throw err;
  }
};

export default formatter;
