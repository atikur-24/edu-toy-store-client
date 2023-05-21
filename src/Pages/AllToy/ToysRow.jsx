import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const ToysRow = ({ toy }) => {
    const {user} = useContext(AuthContext);

    const { _id, sellerName, name, photo, category, price, quantity } = toy;

    const handleNotification = () => {
        if(!user) {
           return toast("You have to log in first to view details");
        }
    }

    return (
        <tr>
            <td>{sellerName || ""}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Toy" />
                        </div>
                    </div>
                    <div>
                        <div>{name}</div>
                    </div>
                </div>
            </td>
            <td>{category}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <th>
                <Link onClick={handleNotification} to={`/allToy/toyDetails/${_id}`} className="my-btn-outline">Details</Link>
                <ToastContainer />
            </th>
        </tr>
    );
};

export default ToysRow;