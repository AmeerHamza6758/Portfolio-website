import React from 'react';
import './Project.css'
import pro1 from '../../images/pro1.png'
import pro2 from '../../images/pro2.png'
import pro3 from '../../images/pro3.png'
import pro4 from '../../images/pro4.png'
import pro5 from '../../images/pro5.png'
const Project = () => {
    return (
        <section id="projects">
            <div className="projects container">
                <div className="projects-header">
                    <h1 className="section-title">
                        Recent <span>Projects</span>
                    </h1>
                </div>
                <div className="all-projects">
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 1</h1>
                            <h2>Dark mode and access data from Github</h2>
                            <p>
                                Embark on a personalized digital journey with my React-based web app, effortlessly retrieving your GitHub data. Seamlessly integrated with the GitHub API, it allows you to fetch and display repositories effortlessly. Elevate your experience with a customizable dark mode for enhanced aesthetics and user comfort. Effortlessly navigate your GitHub world, toggling between light and dark modes to suit your preferences. Experience the perfect blend of functionality and design in this tailored web app, making GitHub exploration engaging and visually pleasing.
                            </p>
                            <p />
                        </div>
                        <div className="project-img">
                            <img src={pro1} alt="img" />
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Prject 2</h1>
                            <h2>SCube pakistan</h2>
                            <p>
                            I've crafted and built a website for SCube Pakistan, leveraging a blend of frontend and backend technologies. 
                            On the frontend, I utilized React.js, Tailwind CSS, JavaScript (ES6), Swiper.js, AOS for scroll animations, 
                            and implemented form validation. For the backend, I employed Node.js, Nest.js, and MySQL DB, integrating Passport.js for authentication and authorization.
                            </p>
                        </div>
                        <div className="project-img">
                            <img src={pro2} alt="img" />
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 3</h1>
                            <h2>DZ Food Web App</h2>
                            <p>
                            I've developed a fully functional food website, focusing on frontend development. I utilized React.js, CSS3, HTML5, and JavaScript (ES6), alongside Redux for state management.
                             Authentication was implemented using Google Firebase. The website is fully responsive,
                             ensuring seamless user experience across all screen sizes, and operates as a single-page application.
                            </p>
                        </div>
                        <div className="project-img">
                            <figure>
                            <img src={pro3} alt="img" />
                            </figure>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 4</h1>
                            <h2>TODO </h2>
                            <p>
                                Step into productivity with my elegantly crafted TODO app.
                                Seamlessly manage your daily tasks by effortlessly adding,
                                organizing, and tracking them in a sleek and intuitive interface.
                                This thoughtfully designed TODO app enhances your daily routine,
                                providing a user-friendly platform to stay organized and focused.
                                Experience the simplicity of task management as you prioritize and
                                check off your goals, making every day a step closer to success.
                            </p>
                        </div>
                        <div className="project-img">
                            <img src={pro4} alt="img" />
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 5</h1>
                            <h2>Password generator</h2>
                            <p>
                            As a React developer, I've created a password generator tool that's particularly useful for login portals.
                             This tool is built using React.js and JavaScript (ES6). Users have the flexibility to select the range of characters they want in their passwords, including numbers, characters, and symbols. 
                             Additionally, I've set minimum and maximum length constraints for the generated passwords. 
                            Users can easily copy the generated password, ensuring they have access to strong and secure passwords.
                            </p>
                        </div>
                        <div className="project-img">
                            <img src={pro5} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
