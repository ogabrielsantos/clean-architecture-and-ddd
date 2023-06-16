import { type UserEntity } from '../entities/user';

interface UserRepositoryInterface {
  getUsers: () => Promise<UserEntity[]>;
}

export default UserRepositoryInterface;
