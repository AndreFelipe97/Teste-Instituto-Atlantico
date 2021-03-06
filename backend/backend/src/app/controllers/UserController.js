import User from '../models/User';

class UserController {
  async store(request, response) {
    const userExists = await User.findOne({ where: { email: request.body.email } });

    if (userExists) {
      return response.status(400).json({ error: 'User already exists' });
    }

    const {
      id, name, email, upload_file,
    } = await User.create(request.body);

    return response.status(200).json({
      id, name, email, upload_file,
    });
  }
}

export default new UserController();
