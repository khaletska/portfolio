import './education.css';

const Education = () => {
    return (
        <section className="container">
            <div className="wrapper">
                <h2>Education</h2>
                <ul className="list">
                    <li className="list-item">
                        <div className='list-first-line'>
                            <p className="date">2024</p>
                            <p className="specialization">Full-Stack developer</p>
                        </div>
                        <div className='list-second-line'>
                            <p className="degree"></p>
                            <p className="alma-mater">kood/Johvi</p>
                        </div>
                    </li>
                    <li className="list-item">
                        <div className='list-first-line'>
                            <p className="date">2021</p>
                            <p className="specialization">Space research</p>
                        </div>
                        <div className='list-second-line'>
                            <p className="degree">Master's degree</p>
                            <p className="alma-mater">Samara University</p>
                        </div>
                    </li>
                    <li className="list-item">
                        <div className='list-first-line'>
                            <p className="date">2016</p>
                            <p className="specialization">Mechanical engineering</p>
                        </div>
                        <div className='list-second-line'>
                            <p className="degree">Bachelor's degree</p>
                            <p className="alma-mater">Don State Technical University</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Education;