import { Link } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import "./Profile.scss";
const Profile = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/update-profile">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Profile Picture :
              <img
                src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Q8z7LMNUcy7c84k6loduysKVlfQtHyBTEVK7odCwUg&s"
                alt="profile picture"
              />
            </span>
            <span>
              User Name : <b>Jone Doe</b>
            </span>
            <span>
              E-mail : <b>jonedoe@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link>
              <button>Add New Post</button>
            </Link>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
