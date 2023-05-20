import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import errorImg from "../../assets/error/error-page-not-found-confused-robot.json"
const ErrorPage = () => {
    const {error} = useRouteError();

    return (
        <section className='my-container flex flex-col lg:flex-row items-center justify-between'>
            <div className='w-1/2'>
                <Lottie className='w-50' animationData={errorImg} loop={true} />
            </div>
            <div className='space-y-10 mr-16 lg:mr-20'>
                <h2 className='text-4xl font-bold'>Page Not Found</h2>
                <h5 className='font-semibold'>{error?.message}</h5>
                <button>
                <Link to='/' className='my-btn'> Back to Home page</Link>
                </button>
            </div>
        </section>
    );
};

export default ErrorPage;