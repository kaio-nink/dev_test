import { UserDTO } from '../dtos/user-dto';
import { UserRepository } from '../repositories/user-repository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(user: UserDTO) {
    const existingUser = await this.userRepository.getByEmail(user.email);
    if (existingUser) throw new Error('This email is already in use.');

    const createdUser = await this.userRepository.create(user);
    return createdUser;
  }
}