import { User } from '../entity/User';

export class UserRepository {
  dbConn;
  userRepo: any;
  constructor(dbConn: any) {
    this.dbConn = dbConn
    this.userRepo = this.dbConn.getRepository(User);
  }

  async createUser(first_name: string, last_name: string, email: string): Promise<User> {
    const user = await this.userRepo.save({ first_name, last_name, email });
    return user;
  }

  async getById(id: number): Promise<User | null> {
    return await this.userRepo.findOne(id);
  }
}