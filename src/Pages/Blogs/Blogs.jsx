import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {

    const notify = () => {
        toast("Wow so easy!");
    }

    return (
        <section className="my-container">
            <button onClick={notify} className="my-btn">Button</button>
            <ToastContainer />
        </section>
    );
};

export default Blogs;