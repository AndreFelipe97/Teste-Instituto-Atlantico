import File from '../models/File';

class FileController {
  async store(request, response) {
    const { originalname: name, filename: path } = request.file;

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
