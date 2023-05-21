import { useLoaderData } from "react-router-dom";
import { Rating, ThinStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaArrowRight } from "react-icons/fa";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}

const ToyDetails = () => {
  const loadToy = useLoaderData();
  const { photo, name, price, rating, sellerName, email, quantity, description } = loadToy;

  return (
    <section className="my-24">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col items-start lg:flex-row justify-between w-full">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold tracking-wide text-center pb-5">{name}</h1>
            <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="lg:ml-20 py-5">
              <Rating className='py-3' style={{maxWidth: 200}} readOnly  value={rating} itemStyles={myStyles} />
            </div>
          </div>
          <div className="mr-auto lg:ml-32 space-y-5">
              <p className="text-xl font-medium">Seller Name: <span className="text-gray-600 font-normal">{sellerName}</span> </p>
              <p className="text-xl font-medium">Seller Email: <span className="text-gray-600 font-normal">{email}</span> </p>
              <p className="text-xl font-medium">Available Quantity: <span className="text-gray-600 font-normal">{quantity}</span> </p>
              <p className="text-xl font-medium">Price: <span className="text-[#003366] font-semibold">$ {price}</span> </p>
              <p className="text-xl font-medium py-6">Description: <span className="text-gray-600 text-[16px] font-normal">{description}</span> </p>   
              <button className="my-btn inline-flex items-center gap-7">Buy Now <span><FaArrowRight /></span>  </button>
          </div>
        </div>
    </div>
    </section>
  );
};

export default ToyDetails;