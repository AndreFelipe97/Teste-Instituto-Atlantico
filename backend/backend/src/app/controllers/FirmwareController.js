import Firmware from '../models/Firmware';
import File from '../models/File';

class FirmwareController {
  async store(request, response) {
    const {
      id, name, board,
    } = await Firmware.create(request.body);

    return response.status(200).json({
      id, name, board,
    });
  }

  async listing(request, response) {
    const firmwares = await Firmware.findAll({
      attributes: ['id', 'version', 'project', 'board', 'file_id'],
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['id', 'name', 'path', 'url'],
        },
      ],
    });

    return response.status(200).json(firmwares);
  }
}

export default new FirmwareController();
