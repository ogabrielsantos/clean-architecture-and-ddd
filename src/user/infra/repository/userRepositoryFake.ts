import type UserRepositoryInterface from '../../domain/repository/userRepositoryInterface';
import { type UserEntity } from '../../domain/entities/user';

const fakeUsers: UserEntity[] = [
  {
    id: 1,
    name: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
  },
  {
    id: 2,
    name: 'Foo',
    lastName: 'Bar',
    email: 'foo_bar@email.com',
  },
];

const UserRepositoryFake = (): UserRepositoryInterface => ({
  getUsers: async (): Promise<UserEntity[]> =>
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          reject(new Error('API timeout'));
        }

        resolve(fakeUsers);
      }, 1000);
    }),
});

export default UserRepositoryFake;
