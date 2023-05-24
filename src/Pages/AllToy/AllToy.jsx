import { useEffect, useState } from "react";
import ToysRow from "./ToysRow";
import TopBanner from "../Shared/TopBanner/TopBanner";
import useTitle from "../../hooks/useTitle.";

const AllToy = () => {
    useTitle('All toys');
    const [toys, setToys] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch = () => {
        fetch(`http://localhost:5000/getbyTitle/${searchName}`)
          .then((res) => res.json())
          .then((data) => {
            setToys(data);
          });
      };

    return (
        <section className="my-container">
            <TopBanner>
                All Toys
                <div className="form-control mt-4">
                    <div className="input-group">
                        <input onChange={(e) => setSearchName(e.target.value)} type="text" placeholder="Search" className="input input-bordered input-info w-full max-w-xs" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </TopBanner>
            <div className="overflow-x-auto w-full mt-10">
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