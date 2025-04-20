import { User } from '../lib/type';

export const RenderUserTable = (prop: { userList: User[] }) => {

  const userTable = (
    <table className="user-table">
      <tr>
        <th>ID</th>
        <th>username</th>
        <th>password</th>
        <th>membershipTier</th>
      </tr>
      {prop.userList.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.membershipTier}</td>
          </tr>
        );
      })}
    </table>
  );

  return prop.userList && userTable;
};
