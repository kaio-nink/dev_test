import { PostDTO } from '../dtos/post-dto';
import { PostRepository } from '../repositories/post-repository';
import { UserRepository } from '../repositories/user-repository';

export class PostService {
  constructor(private userRepository: UserRepository, private postRepository: PostRepository) {}

  async createPost(data: PostDTO) {
    const { userId, ...post } = data;
    const user = await this.userRepository.get(data.userId);
    if (!user) throw new Error(`Couldn't find the specified user.`);

    const createdPost = await this.postRepository.create({ ...post, user })
    return createdPost;
  }
}