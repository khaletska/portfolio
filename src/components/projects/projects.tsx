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
                            <img src="https://media.discordapp.net/attachments/1075493710692876330/1199429701396078774/Screenshot_from_2024-01-23_21-04-47.png?ex=65c282f5&is=65b00df5&hm=24d22a153620e66d6f8e8630bb0246cdaa9a2ae6a0a767907afd7a58ae15900d&=&format=webp&quality=lossless&width=627&height=489"
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
                            <img src="https://media.discordapp.net/attachments/1075493710692876330/1199431913174212679/Screenshot_from_2024-01-23_21-14-00.png?ex=65c28504&is=65b01004&hm=8446fe1a37aad02b931555f301fdf317921c6c843c178ccd3c3200ef4dcc693c&=&format=webp&quality=lossless&width=632&height=489"
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
                            <img src="https://media.discordapp.net/attachments/1075493710692876330/1199431351187820585/Screenshot_from_2024-01-23_21-11-49.png?ex=65c2847e&is=65b00f7e&hm=72d15cddd49db0ca5bbec843259a0c8bf547ef31bd113edea55f50b809152c38&=&format=webp&quality=lossless&width=632&height=489"
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