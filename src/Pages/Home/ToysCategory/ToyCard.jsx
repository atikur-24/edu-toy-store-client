
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);

  const notify = () => {
    if(!user) {
      return toast("You have to log in first to view details");
    }
}

  const { _id, name, price, rating, photo } = toy || {};

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} className="h-64" alt="toy" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p className='text-xl font-semibold text-gray-500'>$ {price}</p>
        <div className="flex justify-between items-center">
          <div className='inline-flex items-center gap-3'>
            <Rating className='py-3' style={{maxWidth: 100}} readOnly  value={rating} /> <span className='font-bold text-gray-500'>{rating}</span>
          </div>
          <Link onClick={notify} to={`/details/${_id}`} className="btn btn-primary">View Details</Link>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
