import React from "react";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeAuth, setAuth } from "../../redux/authReducer";
import { makeRequest } from "../../makeRequest";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
                toast.success("Logged Out!", {
                    position: toast.POSITION.TOP_LEFT
                });
            }
            else {
                console.log({ error: data.error })
                toast.error(data.error, {
                    position: toast.POSITION.TOP_LEFT
                });
            }
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.error, {
                position: toast.POSITION.TOP_LEFT
            });
            console.log({
                success: false,
                status: err.response.status,
                error: `${err.response.data.error}`
            })
        }
    }

    return (
        <div className="profile">
            {/* <h3>Hello{user ? ", " + user.name : ""}</h3> */}
            {user
                ? <div>
                    <h3>{user.name}</h3>
                    <h5>{user.email}</h5>
                    <p>Orders</p>
                    <p>Wishlist</p>
                    <p>Coupons</p>
                    <p>Saved Addresses</p>
                    <p>Change Password</p>
                    <p className="logout"><button onClick={handleLogout}>LOGOUT</button></p>
                </div>
                : <div>
                    <h3>Hello</h3>
                    <p>Become a member</p>
                    {/* <a className="signInBtn" href="/login"><button>SIGN IN</button></a> */}
                    <Link className="link signInBtn" to={"/login"}><button>SIGN IN</button></Link>
                </div>
            }
        </div>
    )
}

export default Profile;