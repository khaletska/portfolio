import './projects.css';

const Projects = () => {
    return (
        <section className="container">
            <div style={{ width: "calc(100% - 2rem)" }} className="wrapper">
                <h2>Projects</h2>
                <div className="proj-list">
                    <a className="proj-item" href="https://github.com/khaletska/SORK">
                        <p className="proj-name">SORK</p>

                        <img src="https://media.discordapp.net/attachments/1075493710692876330/1199429701396078774/Screenshot_from_2024-01-23_21-04-47.png?ex=65c282f5&is=65b00df5&hm=24d22a153620e66d6f8e8630bb0246cdaa9a2ae6a0a767907afd7a58ae15900d&=&format=webp&quality=lossless&width=627&height=489"
                            alt="SORK" />
                    </a>
                    <a className="proj-item" href="https://github.com/khaletska/tetris">
                        <p className="proj-name">tetris</p>

                        <img src="https://media.discordapp.net/attachments/1075493710692876330/1199431913174212679/Screenshot_from_2024-01-23_21-14-00.png?ex=65c28504&is=65b01004&hm=8446fe1a37aad02b931555f301fdf317921c6c843c178ccd3c3200ef4dcc693c&=&format=webp&quality=lossless&width=632&height=489"
                            alt="tetris" />
                    </a>
                    <a className="proj-item" href="https://github.com/khaletska/foorum">
                        <p className="proj-name">forum</p>

                        <img src="https://media.discordapp.net/attachments/1075493710692876330/1199431351187820585/Screenshot_from_2024-01-23_21-11-49.png?ex=65c2847e&is=65b00f7e&hm=72d15cddd49db0ca5bbec843259a0c8bf547ef31bd113edea55f50b809152c38&=&format=webp&quality=lossless&width=632&height=489"
                            alt="forum" />
                    </a>

                </div>
            </div>
        </section>
    )
}

export default Projects;