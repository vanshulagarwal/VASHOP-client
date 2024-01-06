import React from "react";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeAuth, setAuth } from "../../redux/authReducer";
import { makeRequest } from "../../makeRequest";

const Profile = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.auth.user);

    const handleLogout = async () => {
        // dispatch(removeAuth());
        try {
            const data = await makeRequest.get('/logout', {
                withCredentials: true
            });
            if (data.data) {
                console.log({ data: data.data });
                dispatch(setAuth(data.data));
            }
            else {
                console.log({ error: data.error })
            }
        } catch (err) {
            console.log(err);
            console.log({
                success: false,
                status: err.response.status,
                error: `${err.response.data.error}`
            })
        }
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