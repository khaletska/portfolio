import { useState } from 'react';
import ListItem from './list-item';
import experienceData from '../../data/experience.json';
import { expItem } from '../../models/experience';
import './experience.css';

const experience = experienceData as expItem[];

const Experience = () => {
    const [chosen, setChosen] = useState<number | null>(null)

    const onChoice = (id: number) => {
        setChosen(id)
    }

    return (
        <section id='experience' className={`exp-container ${chosen !== null ? ' chosen' : ''}`}>
            <div className="wrapper">
                <h2 className='exp-header'>Experience</h2>
                {chosen ? (
                    <div className='list'>
                        <svg className='small-svg' onClick={() => setChosen(null)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <p className='desc'>
                            {experience.find(item => item.id === chosen)?.desc}
                        </p>
                    </div>
                ) : (
                    <ul className="list">
                        {experience.map((item, index) => (
                            <ListItem item={item} onChoice={onChoice} key={`exp${index}`} />
                        ))}
                    </ul>
                )
                }
            </div>
        </section >
    )
}

export default Experience;