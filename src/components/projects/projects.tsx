import './projects.css';

const Projects = () => {
    return (
        <section id='projects' className="container">
            <div
                style={{ width: "100%" }}
                className="wrapper">
                <h2>Projects</h2>
                <div className="proj-list">
                    <div className="proj-item">

                        <div className='front'>
                            <p className="proj-name">SORK</p>
                            <p className='proj-desc'>
                                A single-page Facebook-like application created with React.js, Typescript, SCSS for front-
                                end and Golang, Sqlite3 for backend API server.
                            </p>
                        </div>
                        <div className='back'>
                            <img src="https://cdn.discordapp.com/attachments/1075493710692876330/1199429701396078774/Screenshot_from_2024-01-23_21-04-47.png?ex=65e76cf5&is=65d4f7f5&hm=b7ed5162bb263eaa6b3847bf9b1d82cf3ad94ec1a45c115a97b7e594335a8a0a&"
                                alt="SORK" />
                            <div className='btn-box'>
                                <a className='btn' href="https://github.com/khaletska/SORK">
                                    Repo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="proj-item">
                        <div className='front'>
                            <p className="proj-name">tetris</p>
                            <p className='proj-desc'>
                                Single player Tetris game developed using vanilla JavaScript with DOM manipulation,
                                without the need for HTML canvas or any frameworks. It utilizes a
                                Golang web server and Gorilla websocket as the backend to display scores.
                            </p>
                        </div>
                        <div className='back'>
                            <img src="https://cdn.discordapp.com/attachments/1075493710692876330/1199431913174212679/Screenshot_from_2024-01-23_21-14-00.png?ex=65e76f04&is=65d4fa04&hm=8c9c8e92f4bb075ea73e4234680956859f8af3e20c3b074ce3d4824fb859fd5d&"
                                alt="tetris" />
                            <div className='btn-box'>
                                <a className='btn' href="https://github.com/khaletska/tetris">
                                    Repo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="proj-item">
                        <div className='front'>
                            <p className="proj-name">forum</p>
                            <p className='proj-desc'>
                                A Golang-based web forum, incorporating user authentication with encrypted passwords
                                in an SQLite database, Docker for containerization.
                            </p>
                        </div>
                        <div className='back'>
                            <img src="https://cdn.discordapp.com/attachments/1075493710692876330/1199431351187820585/Screenshot_from_2024-01-23_21-11-49.png?ex=65e76e7e&is=65d4f97e&hm=ffff9b4e1ad145524933b264488791417aa9ea78ca858e7d03e97c3c51aad898&"
                                alt="forum" />
                            <div className='btn-box'>
                                <a className='btn' href="https://github.com/khaletska/foorum">
                                    Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Projects;