import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToyInfo = () => {
  const loadToy = useLoaderData();
  const { _id, name, price, quantity, description } = loadToy || {};

  const handleUpdateToy = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateToy = {name, price, quantity, description};

    if( name === '' || price === '' || quantity === '' || description === '' ) {
      return Swal.fire({
        title: 'Warning!',
        text: 'Pleas fill up input field',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }

    fetch(`https://edu-toys-server-eight.vercel.app/toys/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateToy)
    })
      .then(res => res.json())
      .then(data => {
          if(data.modifiedCount > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'Toy Updated successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
        
      })
};

    return (
      <section className="my-container">
        <form onSubmit={ handleUpdateToy } className="bg-slate-100 py-12 px-28 rounded-lg shadow-lg">
         <div className="mb-8">
          <label className="label">
            <span className="font-semibold text-[17px]">Name</span>
          </label>
         <input
            type="text"
            placeholder="Enter toy name"
            className="input w-full border-[#003366] focus:ring-2"
            name="name"
            defaultValue={name}
          />
         </div>
         <div className="mb-8">
          <label className="label">
            <span className="font-semibold text-[17px]">Price</span>
          </label>
         <input
            type="text"
            placeholder="Enter toy price"
            className="input w-full border-[#003366] focus:ring-2"
            name="price"
            defaultValue={price}
          />
         </div>
         <div className="mb-8">
          <label className="label">
            <span className="font-semibold text-[17px]">Available quantity</span>
          </label>
         <input
            type="text"
            placeholder="Enter available toy quantity"
            className="input w-full border-[#003366] focus:ring-2"
            name="quantity"
            defaultValue={quantity}
          />
         </div>
         <div className="mb-8">
            <label className="label">
                <span className="font-semibold text-[17px]">Detail description</span>
            </label>
            <textarea defaultValue={description} name='description' className="textarea h-28 resize-none w-full border-[#003366] focus:ring-2" placeholder="Detail description"></textarea>
         </div>

          <button className="my-btn w-full">Update Toy Details</button>
        </form>
    </section>
    );
};

export default UpdateToyInfo;