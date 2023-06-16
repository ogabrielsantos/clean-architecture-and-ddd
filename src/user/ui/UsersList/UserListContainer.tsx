import UserList from './UserList';
import { getUsers } from '../../domain/useCases/getUsers';
import userRepositoryFake from '../../infra/repository/userRepositoryFake';
import { type FetcherInterface } from '../../domain/data/fetcherInterface';
import { type UserEntity } from '../../domain/entities/user';
import useReactQueryFetcher from '../data/useReactQueryFetcher';

const UserListContainer = ({
  useFetcher,
  getUsersUseCase,
}: {
  useFetcher: FetcherInterface<UserEntity[]>;
  getUsersUseCase: () => Promise<UserEntity[]>;
}) => {
  const { isLoading, error, data } = useFetcher('users', getUsersUseCase);

  return <UserList isLoading={isLoading} users={data || []} error={error} />;
};

const propsToMap = {
  useFetcher: useReactQueryFetcher,
  getUsersUseCase: getUsers(userRepositoryFake()),
};

const connectPropsToComponent =
  (propsToMap: object, Component: any) => (props: any) => {
    return <Component {...propsToMap} {...props} />;
  };

export default connectPropsToComponent(propsToMap, UserListContainer);
