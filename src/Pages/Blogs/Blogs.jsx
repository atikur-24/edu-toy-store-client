import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopBanner from '../Shared/TopBanner/TopBanner';
import useTitle from '../../hooks/useTitle.';

const Blogs = () => {

    useTitle('Blogs')

    const notify = () => {
        toast("Wow so easy!");
    }

    return (
        <section className="my-container">
            <TopBanner>Blogs</TopBanner>
            <button onClick={notify} className="my-btn">Button</button>
            <ToastContainer />
        </section>
    );
};

export default Blogs;