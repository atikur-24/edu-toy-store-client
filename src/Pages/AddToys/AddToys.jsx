import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToys = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const sellerName = form?.name?.value;
        const email = form?.email?.value;
        const photo = form.photo.value;
        const name = form.toyName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const newToy = {
            sellerName, email, photo, name, price, quantity,category, rating
        }
        console.log(newToy);

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <section className="my-container">
            <div>
                <form onSubmit={ handleAddToy } className="card-body bg-base-200 mt-24 rounded-lg p-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Seller Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Seller Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Your email" defaultValue={ user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Picture URL of the toy</span>
                            </label>
                            <input name='photo' type="text" placeholder="Toy picture url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Toy Name</span>
                            </label>
                            <input name='toyName' type="text" placeholder="Toy name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Price</span>
                                </label>
                                <input name='price' type="number" placeholder="Toy price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Available quantity</span>
                                </label>
                                <input name='quantity' type="text" placeholder="Available quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span className="label-text">Choose the sub-category</span>
                            </label>
                            <select name="category" className="select select-bordered">
                                <option>Engineering Toy</option>
                                <option>Math Toy</option>
                                <option>Language Toy</option>
                            </select>
                        </div>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Rating</span>
                                </label>
                                <input name='rating' type="text" placeholder="Rating" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Detail description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered h-28 resize-none" placeholder="Detail description"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="my-btn" type="submit" value="Add New Toy" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddToys;