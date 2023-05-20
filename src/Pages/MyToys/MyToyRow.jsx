import { FaEdit, FaTrash } from "react-icons/fa";

const MyToyRow = ({ myToy }) => {
    const { name, photo, category, price, quantity } = myToy;

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={photo} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{category}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <th>
                <div className="inline-flex gap-5 text-xl">
                    <FaEdit className="text-[#003366]" />
                    <FaTrash className="bg-orange-500/50 p-2 cursor-pointer hover:bg-orange-700" />
                </div>
            </th>
        </tr>
    );
};

export default MyToyRow;