import { useUsersContext } from "../hooks/useUsersContext";

const User = ({user}) => {
  const {userInfo, setUserInfo} = useUsersContext();

  const handleDelete = (id) => {
    handleDeleteUser(id);
  };
  const handleDeleteUser = (id) => {
    const filteredUser = userInfo.filter((user) => user.id !== id);
    setUserInfo(filteredUser);
  };

  const { name, id } = user;

  return (
    <article className="userCard">
      <h2>Name : {name}</h2>
      <h3>ID : {id}</h3>
      <button className="btn" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </article>
  );
};

export default User;
