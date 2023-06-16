import { type UserEntity } from '../entities/user';
import type UserRepositoryInterface from '../repository/userRepositoryInterface';

const getUsers =
  (userRepository: UserRepositoryInterface) =>
  async (): Promise<UserEntity[]> => {
    return await userRepository.getUsers();
  };

export { getUsers };
