
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
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
          <Link className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
