import User from "./User";
import { useUsersContext } from "../hooks/useUsersContext";

const Users = () => {
  const {userInfo} = useUsersContext();
  return (
    <section>
        {userInfo.map(user => <User key={user.id} user={user}  />)}
    </section>
  );
};

export default Users;
