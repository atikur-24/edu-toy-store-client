import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle.';
import TopBanner from '../Shared/TopBanner/TopBanner';

const Blogs = () => {
    useTitle('Blogs')

    return (
        <section className='my-container'>
            <TopBanner />
            <div className='mt-20'>

                <div className='p-3 mb-6 border border-inherit rounded-md'>
                    <h2 className='text-2xl font-extrabold text-[#003366] tracking-wide mb-4'>1.(a) What is an access token and refresh token?</h2>
                    <p className='text-gray-500 leading-relaxed tracking-wide'>Access Token: An access token is a credential that is issued by an authentication server (such as an OAuth 2.0 provider) after a successful authentication and authorization process. It is a string of characters that represents the permissions and identity of the user or application that requested it. The access token is typically short-lived and has an expiration time. It is used to authenticate subsequent API requests by including it in the request headers or query parameters. The access token allows the server to verify the identity and authorization of the requester and grant or deny access to the requested resources accordingly.</p>
                    <p className='text-gray-500 leading-relaxed tracking-wide'>Refresh Token: A refresh token is also issued by the authentication server during the initial authentication and authorization process. It is a long-lived credential with a longer expiration time compared to the access token. The refresh token is used to obtain a new access token without requiring the user to re-authenticate. When the access token expires, the application can use the refresh token to request a new access token from the authentication server. This process is known as token refreshing. Refresh tokens are securely stored and should be kept confidential, as they can be used to obtain new access tokens on behalf of the user or application.</p>
                </div>

                <div className='p-7 mb-6 border border-inherit rounded-md'>
                    <h2 className='text-2xl font-extrabold text-[#003366] tracking-wide mb-4'>
                        1.(b) How do work access and refresh token and where should we store them on the client-side?
                        </h2>
                    <p className='text-gray-500 leading-relaxed tracking-wide'>
                    Access and refresh tokens work together to provide secure authentication and authorization in client-server interactions. Heres an overview of how they work and where they should be stored on the client-side: Access tokens have a relatively short lifespan, typically ranging from a few minutes to a few hours. Once an access token expires, the client needs to obtain a new one to continue accessing protected resources. on the other side: When the access token expires, the client can use the refresh token to request a new access token. The client sends a token refresh request to the authentication server, including the refresh token.
                    </p>
                </div>

                <div className='p-7 mb-6 border border-inherit rounded-md'>
                    <h2 className='text-2xl font-extrabold text-[#003366] tracking-wide mb-4'>2. Compare SQL and NoSQL databases?</h2>
                    <p className='text-gray-500 leading-relaxed tracking-wide'>
                    SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database systems with distinct characteristics. Heres a comparison between SQL and NoSQL databases: SQL: SQL databases are based on a structured data model that uses tables with predefined schemas.NoSQL: NoSQL databases utilize various data models, including key-value, document, columnar, and graph SQL: SQL databases use the structured query language (SQL) for querying and manipulating data NoSQL: NoSQL databases typically offer query languages specific to their data models. While some NoSQL databases support SQL-like query languages, many provide APIs or custom query languages tailored to their respective data models.
                    </p>
                </div>

                <div className='p-7 mb-6 border border-inherit rounded-md'>
                    <h2 className='text-2xl font-extrabold text-[#003366] tracking-wide mb-5'>3.(a) What is express js?</h2>
                    <p className='text-gray-500 leading-relaxed'>
                    Express.js is a popular web application framework for Node.js. It provides a simple, minimalistic, and flexible approach to building web applications and APIs. Express.js is designed to streamline the development process by providing a set of features and utilities for handling routes, requests, responses, middleware, and more. It is important to note that Express.js is a framework built on top of Node.js and leverages its features, including the non-blocking and event-driven nature of Node.js, which enables efficient handling of concurrent requests.
                    </p>
                </div>
                <div className='p-7 mb-6 border border-inherit rounded-md'>
                    <h2 className='text-2xl font-extrabold text-[#003366] tracking-wide mb-5'>3.(b) What is Nest JS?</h2>
                    <p className='text-gray-500 leading-relaxed'>
                    NestJS is a powerful and extensible Node.js framework for building scalable and maintainable server-side applications. It is designed to provide a robust architecture and developer-friendly features inspired by Angular, one of the most popular front-end frameworks. NestJS is widely used for building server-side applications and APIs, including web applications, microservices, and real-time applications. Its modular and scalable architecture, TypeScript support, and extensive tooling make it a compelling choice for developers who value clean code, maintainability, and productivity in their Node.js projects.
                    </p>
                </div>
                <div className='p-7 mb-6 border border-inherit rounded-md'>
                    <h2 className='text-2xl font-extrabold text-[#003366] tracking-wide mb-5'>3.(b) What is MongoDB aggregate and how does it work?</h2>
                    <p className='text-gray-500 leading-relaxed'>
                    In MongoDB, the aggregate operation is a powerful way to perform advanced data processing and analysis on collections of documents. It allows you to combine multiple stages of operations to transform, filter, group, and analyze data in a flexible and efficient manner.
The aggregate operation follows a pipeline approach, where you define a sequence of stages that are applied to the documents in the collection. Each stage performs a specific operation on the documents and passes the result to the next stage. The aggregate operation in MongoDB is a powerful tool for performing complex data analysis, generating reports, and deriving insights from your data collections. It offers great flexibility and performance, making it a preferred choice for handling advanced data processing tasks.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;