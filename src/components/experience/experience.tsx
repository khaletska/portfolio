import './experience.css';

const Experience = () => (
    <section className="container">
        <div className="wrapper">
            <h2>Experience</h2>
            <ul className="exp-list">
                <li className="exp-list-item">
                    <div className='exp-list-first-line'>
                        <p className="exp-date">2023.09 - 2023.12</p>
                        <p className="position">Front-End Developer</p>
                    </div>
                    <div className='company-box'>
                        <a
                            className='company'
                            href='https://minds.ee/'
                            target='_blank'
                            title='Open in new tab'
                            rel="noreferrer"
                        >MindSee</a>
                    </div>
                </li>
                <li className="exp-list-item">
                    <div className='exp-list-first-line'>
                        <p className="exp-date">2023.05 - 2023.07</p>
                        <p className="position">iOS Intern</p>
                    </div>

                    <div className='company-box'>
                        <a
                            className='company'
                            href='https://proekspert.com/'
                            target='_blank'
                            title='Open in new tab'
                            rel="noreferrer"
                        >Proekspert AS</a>
                    </div>
                </li>
                <li className="exp-list-item">
                    <div className='exp-list-first-line'>
                        <p className="exp-date">2021.12 - 2022.07</p>
                        <p className="position">Design Engineer</p>
                    </div>
                    <div className='company-box'>
                        <a
                            className='company'
                            href='https://urartu.com/'
                            target='_blank'
                            title='Open in new tab'
                            rel="noreferrer"
                        >Urartu Systems</a>
                    </div>
                </li>
                <li className="exp-list-item">
                    <div className='exp-list-first-line'>
                        <p className="exp-date">2019.01 - 2021.12</p>
                        <p className="position">Engineer</p>
                    </div>
                    <div className='company-box'>
                        <a
                            className='company'
                            href='https://cps63.ru/en/'
                            target='_blank'
                            title='Open in new tab'
                            rel="noreferrer"
                        >CPS technology</a>
                    </div>
                </li>
                <li className="exp-list-item">
                    <div className='exp-list-first-line'>
                        <p className="exp-date">2016.10 - 2018.07</p>
                        <p className="position">Product Manager</p>
                    </div>

                    <div className='company-box'>
                        <p className="company">Prof-press</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
)

export default Experience;