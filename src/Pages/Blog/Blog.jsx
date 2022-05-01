import React from 'react';
import "./Blog.css"
const Blog = () => {
    return (
        <div className='blogs-section container'>
            <h3 className='fs-3 mb-5'>Question About <span className='sub-heading-title overview'>Bikers</span></h3>
            <div className="question mb-5 w-75 mx-auto text-start">
                <p><strong className='fs-4 fw-bold'>Question : 1 : </strong> What is the difference NodeJS and JS ?</p>
                <hr />
                <p><strong className='fs-4 fw-bold'>Answer : </strong> JS is a scripting language for writing code into the browser whereas NodeJS is the runtime enviroment which helps to JS for writing code in the server also. ANd another basic difference is that JS can play with the DOM whereas NodeJS doesn't have this capability.
                    NodeJS written in C,C++ whereas JS runs with the V8 engine. </p>
            </div>
            <div className="question mb-5 w-75 mx-auto text-start">
                <p><strong className='fs-4 fw-bold'>Question : 2 : </strong> When should you use NodeJS and MongoDB  ?</p>
                <hr />
                <p><strong className='fs-4 fw-bold'>Answer : </strong>  <strong>Why MongoDB ?</strong>
                    <br />
                    MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node.
                    <br />
                    <strong>Why NodeJS ?</strong>
                    <br />
                    Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
                    For this easy manaagement we use NodeJS.
                </p>

            </div>
            <div className="question mb-5 w-75 mx-auto text-start">
                <p><strong className='fs-4 fw-bold'>Question : 3 : </strong> What is the difference SQL and mySQL?</p>
                <hr />
                <p><strong className='fs-4 fw-bold'>Answer :
                </strong> <span>SqL or the Structured Query Language is a programming language that enables the function of retrieving, managing, storing the data in the relational database management system.
                    MySQL, now owned and managed by Oracle Corporation, is a type of relational database management system. It is an open-source platform that allows one to store, retrieve and manage relational databases.
                    Sql is a query programming language that manage RDMS and mySQL is a relational database management system that uses sql. </span></p>
            </div>
            <div className="question mb-5 w-75 mx-auto text-start">
                <p><strong className='fs-4 fw-bold'>Question : 4 : </strong> What is the purpose of JWT ?</p>
                <hr />
                <p><strong className='fs-4 fw-bold'>Answer : </strong> JWT means JSON Web Token. Primary and main purpose of jwt is to save the data of a website by using a cryptographical format.Now a days most modern web applications use JWT for authentication reasons like scalability and mobile device authentication.</p>
            </div>
        </div>
    );
};

export default Blog;