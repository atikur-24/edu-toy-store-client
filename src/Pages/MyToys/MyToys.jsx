import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setmyToys] = useState([]);
    
    const url = `http://localhost:5000/toys?email=${user.email}`;

    useEffect( () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setmyToys(data))
    }, [url])

    return (
        <section className="my-container">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr className="text-[#003366]">
                            <th className="text-sm">Toy Image</th>
                            <th className="text-sm">Toy Name</th>
                            <th className="text-sm">Sub-category</th>
                            <th className="text-sm">Price</th>
                            <th className="text-sm">Available QTY</th>
                            <th className="text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.map(myToy => <MyToyRow key={myToy._id} myToy={myToy} />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyToys;