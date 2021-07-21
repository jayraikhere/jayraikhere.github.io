import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
function Home() {
    return (
        <>
            <body>
                <div className="container1">
                    <img src="https://he-s3.s3.amazonaws.com/media/avatars/jayraykhere/resized/160/aoh14gjxlrhp1m3a6w25wepfziuhnglcw3g8grievnou" alt="not found" id="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit voluptatem, animi fuga laboriosam vero. Earum ad quaerat illum aperiam ullam? Consequuntur vero aliquid debitis, consequatur laudantium magnam quis voluptate magni laboriosam. Ipsa distinctio sapiente beatae doloribus? Suscipit maxime error quia nulla et, nam aspernatur.</p>
                </div>
                <div className="card">
                    <div>
                        <img src="https://www.codewithharry.com/assets/img/home-img-1.jpg" alt="" />
                        <h2>Free Video Courses</h2>
                        <p>Get your programming career started with these free video courses. Source code is available with all the videos for amazing learning experience</p>
                        <button className="btn">Browse video course</button>
                    </div>
                    <div>
                        <img src="https://www.codewithharry.com/assets/img/home-img-2.jpg" alt="" />
                        <h2>Coding Articles</h2>
                        <p>Some of the latest coding information compiled in the form of coding articles. Keep your programming knowledge up to date with these articles.</p>
                        <button className="btn">Go to Blog</button>
                    </div>
                    <div>
                        <img src="https://www.codewithharry.com/assets/img/home-img-3.jpg" alt="" />
                        <h2>Contact Me</h2>
                        <p>Learn programming from these free courses. Examples are available with these tutorials. You can contact me for any doubt and I will get back to you!</p>
                        <button className="btn">Contact me</button>
                    </div>
                </div>
            </body>
        </>
    )
}


export default Home;