import File from '../models/File';
import stringFormat from '../../util/stringFormat';

class FileController {
  async store(request, response) {
    const { originalname, filename: path } = request.file;
    const name = stringFormat(originalname, request.body.project, request.body.version);

    if (!request.userUpload_file) {
      return response.status(400).json({ error: 'User does not have permission' });
    }

    const file = await File.create({
      name,
      path,
    });

    return response.status(200).json(file);
  }
}

export default new FileController();
