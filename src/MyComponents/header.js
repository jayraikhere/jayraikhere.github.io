import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Home() {
    return (
        <>
            <body>
                <nav className="navbar">
                    <div className="three_lines">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <img src="https://he-s3.s3.amazonaws.com/media/avatars/jayraykhere/resized/160/aoh14gjxlrhp1m3a6w25wepfziuhnglcw3g8grievnou" alt="" />
                    <div className="menu">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/videos">Videos</NavLink>
                        <NavLink to="/blog">Blogs</NavLink>
                        <NavLink to="/contact">Contact me</NavLink>

                        {/* <a href="/">Home</a> */}
                        {/* <a><Link to="/">Home</Link></a> */}
                        {/* <a href="/videos">Videos</a> */}
                        {/* <a href="/blog">Blog</a> */}
                        {/* <a><Link to="/about">About</Link></a> */}
                        {/* <a href="/contact">Contact Me</a> */}
                    </div>
                    <div className="buttons">
                        {/* <!-- <button className="btn">Search</button> --> */}
                        <button className="btn">Login</button>
                        <button className="btn">Sign Up</button>
                    </div>
                </nav>



            </body>
        </>
    )
}


export default Home;