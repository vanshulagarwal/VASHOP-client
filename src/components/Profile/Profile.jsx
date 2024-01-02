import React from "react";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeAuth } from "../../redux/authReducer";

const Profile = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.auth.user);

    const handleLogout = () => {
        dispatch(removeAuth());
    }

    return (
        <div className="profile">
            <h3>Hello{user ? ", " + user.name : ""}</h3>
            {user
                ? <div>
                    <p>Wishlist</p>
                    <p className="logout"><button onClick={handleLogout}>LOGOUT</button></p>
                </div>
                : <a className="signInBtn" href="/login"><button>Sign In</button></a>
            }
        </div>
    )
}

export default Profile;