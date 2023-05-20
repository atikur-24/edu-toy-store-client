import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyToyRow = ({ myToy, controls, setControls }) => {
    const { _id, name, photo, category, price, quantity } = myToy;

    // delete single toy data
    const handleDeleteToy = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/toys/${id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Chocolate has been Deleted',
                        'success'
                      )                    
                      setControls(!controls);
                }
              })
            }
          })
    }

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
                <div className="inline-flex gap-7 text-xl">
                    <button>
                        <FaEdit className="text-[#003366] hover:text-[#2396DC]" />
                    </button>
                    <button onClick={ () => handleDeleteToy(_id) }>
                        <FaTrash className="text-orange-700 hover:text-orange-600" />
                    </button>
                </div>
            </th>
        </tr>
    );
};

export default MyToyRow;