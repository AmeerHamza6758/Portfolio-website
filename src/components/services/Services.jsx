import React from 'react';
import './Services.css';
import web1 from '../../images/web1.png';
import web2 from '../../images/web2.png';
import web3 from '../../images/web3.png';
import web4 from '../../images/web4.png';
const Services = () => {
    return (
        <section id="services">
            <div className="services container">
                <div className="service-top">
                    <h1 className="section-title">
                        S<span>ki</span>lls
                    </h1>
                    <p>
                        🚀Passionate about Frontend development,
                        I thoroughly enjoy coding and crafting
                        solutions that elevate user experiences.
                        I've mastered &#x2611; React, &#x2611; Redux Toolkit &#x2611; JavaScript &#x2611; Tailwind CSS &#x2611; Ant Design &#x2611; MUI &#x2611; Responsive Designs || For Api Integration &#x2611; Rtk Query / Axios / Fetch /GraphQl || API Testing Tool &#x2611; Postman/Thunder client and
                        integrated diverse libraries to enhance
                        web app functionality and user
                        interfaces. Join us in transforming your ideas into extraordinary digital experiences. 🤝 Let's build a future of digital excellence together! 🌈
                    </p>
                </div>
                <div className="service-bottom">
                    <div className="service-item">
                        <div className="icon">
                            <img src={web1} alt='Web' />
                            <h2>Responsive UI/UX Design</h2>
                        </div>
                        <p>
                            As a React Frontend Developer, I specialize in crafting visually
                            stunning, responsive interfaces for seamless user experiences.
                            Leveraging React's dynamic capabilities, I create engaging designs
                            that captivate users across devices. My focus is on harmonizing
                            aesthetics and functionality for an exceptional, user-centric
                            experience.
                        </p>
                    </div>
                    <div className="service-item">
                        <div className="icon">
                            <img src={web2} alt='Web2' />
                            <h2>Component-Based Development</h2>
                        </div>
                        <p>
                            I excel in component-based development, leveraging React's modular
                            structure to build scalable and maintainable frontends. Each component
                            is meticulously designed and implemented, contributing to a cohesive
                            and efficient overall user interface.
                        </p>
                    </div>
                    <div className="service-item">
                        <div className="icon">
                            <img src={web3} alt='Web' />
                            <h2>Performance Optimization</h2>
                        </div>
                        <p>
                            With a focus on performance, I employ React's virtual DOM to optimize
                            rendering speed, resulting in snappy and efficient web applications. I
                            meticulously fine-tune code to guarantee a smooth and responsive user
                            experience, enhancing overall satisfaction.
                        </p>
                    </div>
                    <div className="service-item">
                        <div className="icon">
                            <img src={web4} alt='web' />
                            <h2>Collaborative Problem Solving</h2>
                        </div>
                        <p>
                            Beyond code, I excel in collaborative problem-solving. Engaging with
                            cross-functional teams, I grasp project requirements to seamlessly
                            integrate frontend and backend components. Committed to effective
                            communication and teamwork, I contribute significantly to project
                            success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
