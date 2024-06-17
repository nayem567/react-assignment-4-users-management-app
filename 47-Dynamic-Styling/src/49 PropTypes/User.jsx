import PropTypes from "prop-types";

const User = (props) => {

  console.log(props.userObject);
W
  return (
    <div>
      <h3>{props.userName}</h3>
      <p>{props.userId}</p>
      <p>{props.userObject.name}</p>
      <p>{props.userObject.id}</p>
    </div>
  );
};


User.propTypes = {
    userName: PropTypes.string,
    userId: PropTypes.number,
    userObject: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    })
}

// User.defaultProps = {
//     userName: "Default Name",
//     userId: 0,
// }


export default User;
