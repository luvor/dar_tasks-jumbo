import "../assets/css/User.css";

interface UserProps {
  adminView: boolean;
  user: {
    readonly id: number;
    name: string;
    avatar?: string;
    age: number;
    role: string;
    email: string;
    theme: string;
  };
}

function User(props: UserProps) {
  const { user, adminView } = props;
  return (
    <div className="user_card">
      <img src={user.avatar} alt="" className="user_card__avatar" />
      <div className="user_card__info">
        {adminView ? <p className="user_card__id">{user.id}</p> : null}
        <h3 className="user_card__name">{user.name}</h3>
        <p className="user_card__age">
          <span className="user_card__field_text">Age: </span>
          {user.age}
        </p>
        <p
          className={
            "user_card__role " + (user.role === "god" ? "role_god" : "")
          }
        >
          <span className="user_card__field_text">Role: </span>
          {user.role}
        </p>
        <p className="user_card__email">
          <span className="user_card__field_text">Email: </span>
          {user.email}
        </p>
        <div className={"user_card__theme theme_" + user.theme}></div>
      </div>
    </div>
  );
}

export default User;
