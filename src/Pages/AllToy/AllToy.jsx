import { useEffect, useState } from "react";
import ToysRow from "./ToysRow";
import TopBanner from "../Shared/TopBanner/TopBanner";

const AllToy = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <section className="my-container">
            <TopBanner>
                All Toys
            </TopBanner>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr className="text-[#003366]">
                            <th className="text-sm">Seller Name</th>
                            <th className="text-sm">Toy Name</th>
                            <th className="text-sm">Sub-category</th>
                            <th className="text-sm">Price</th>
                            <th className="text-sm">Available QTY</th>
                            <th className="text-sm"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map(toy => <ToysRow key={toy._id} toy={toy} />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllToy;