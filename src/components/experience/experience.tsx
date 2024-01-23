import './experience.css';

const Experience = () => {
    return (
        <section className="container">
            <div className="wrapper">
                <h2>Experience</h2>
                <ul className="list">
                    <li className="list-item">
                        <div className='list-first-line'>
                            <p className="date">2023.09 - 2023.12</p>
                            <p className="position">Front-End Developer</p>
                        </div>

                        <a href='https://minds.ee/' target='_blank' title='Open in new tab' rel="noreferrer" className="company">MindSee</a>
                        {/* <p className="work-desc">Bla-bla-bla experience skills stuff</p> */}
                    </li>
                    <li className="list-item">
                        <div className='list-first-line'>
                            <p className="date">2023.05 - 2023.07</p>
                            <p className="position">iOS Intern</p>
                        </div>

                        <a href='https://proekspert.com/' target='_blank' title='Open in new tab' rel="noreferrer" className="company">Proekspert AS</a>
                        {/* <p className="work-desc">Bla-bla-bla experience skills stuff</p> */}
                    </li>
                    <li className="list-item">
                        <div className='list-first-line'>

                            <p className="date">2021.12 - 2022.07</p>
                            <p className="position">Design Engineer</p>
                        </div>

                        <a href='https://urartu.com/' target='_blank' title='Open in new tab' rel="noreferrer" className="company">Urartu Systems</a>
                        {/* <p className="work-desc">Bla-bla-bla experience skills stuff</p> */}
                    </li>
                    <li className="list-item">
                        <div className='list-first-line'>
                            <p className="date">2019.01 - 2021.12</p>
                            <p className="position">Engineer</p>
                        </div>

                        <a href='https://cps63.ru/en/' target='_blank' title='Open in new tab' rel="noreferrer" className="company">CPS technology</a>
                        {/* <p className="work-desc">Bla-bla-bla experience skills stuff</p> */}
                    </li>
                    <li className="list-item">
                        <div className='list-first-line'>
                            <p className="date">2016.10 - 2018.07</p>
                            <p className="position">Product Manager</p>
                        </div>

                        <p className="company">Prof-press</p>
                        {/* <p className="work-desc">Bla-bla-bla experience skills stuff</p> */}
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Experience;