import { type UserEntity } from '../../domain/entities/user';

const UserList = ({
  isLoading,
  error,
  users,
}: {
  isLoading: boolean;
  error: Error | undefined;
  users: UserEntity[];
}) => {
  if (isLoading) return <div>Loading...</div>;
  if (error != null) {
    return <div>Error fetching: {error.message}</div>;
  }

  return (
    <div>
      <h2>List of users</h2>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
