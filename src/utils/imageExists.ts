import { access } from 'fs/promises';
import { constants } from 'fs';

const imageExists = async (Path: string): Promise<boolean> => {
  try {
    await access(Path, constants.R_OK | constants.W_OK);
    console.log('Path Exists!');
    return true;
  } catch (err) {
    return false;
  }
};

export default imageExists;
