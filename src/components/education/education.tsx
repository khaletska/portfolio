import './education.css';
import JSlogo from '../../svg/JSlogo';
import HTMLlogo from '../../svg/HTMLlogo';
import CSSlogo from '../../svg/CSSlogo';
import TSlogo from '../../svg/TSlogo';
import ReactLogo from '../../svg/ReactLogo';
import AstroLogo from '../../svg/AstroLogo';
import SwiftLogo from '../../svg/Swiftlogo';
import GITlogo from '../../svg/GITlogo';
import GHlogo from '../../svg/GHlogo';
import AtlassianLogo from '../../svg/AtlassianLogo';
import GOlogo from '../../svg/GOlogo';
import NodeLogo from '../../svg/NodeLogo';
import DockerLogo from '../../svg/DockerLogo';
import SQLiteLogo from '../../svg/SQLiteLogo';

const Education = () => {
    return (
        <section id='education' className="container">
            <div className="wrapper">
                <h2>Education</h2>
                <ul className="list">
                    <li className="list-item">
                        <div className='list-first-line'>
                            <div className="left">
                                <p className="date">2024</p>
                                <p className="specialization">Full-Stack developer</p>
                            </div>
                            <p className="degree"></p>
                        </div>
                        <div className='list-second-line'>
                            <p className="alma-mater">kood/Johvi</p>
                        </div>
                    </li>
                    <li className="list-item">
                        <div className='list-first-line'>
                            <div className="left">
                                <p className="date">2021</p>
                                <p className="specialization">Space research</p>
                            </div>
                            <p className="degree">Master's degree</p>
                        </div>
                        <div className='list-second-line'>
                            <p className="alma-mater">Samara University</p>
                        </div>
                    </li>
                    <li className="list-item">
                        <div className='list-first-line'>
                            <div className="left">
                                <p className="date">2016</p>
                                <p className="specialization">Mechanical engineering</p>
                            </div>
                            <p className="degree">Bachelor's degree</p>
                        </div>
                        <div className='list-second-line'>
                            <p className="alma-mater">Don State Technical University</p>
                        </div>
                    </li>
                </ul>
                <h2 id='skills'>Skills</h2>
                <div className='slider'>
                    <div className="slide-track">
                        <HTMLlogo />
                        <CSSlogo />
                        <JSlogo />
                        <TSlogo />
                        <ReactLogo />
                        <AstroLogo />
                        <SwiftLogo />
                        <GITlogo />
                        <GHlogo />
                        <AtlassianLogo />
                        <GOlogo />
                        <NodeLogo />
                        <DockerLogo />
                        <SQLiteLogo />
                        <HTMLlogo />
                        <CSSlogo />
                        <JSlogo />
                        <TSlogo />
                        <ReactLogo />
                        <AstroLogo />
                        <SwiftLogo />
                        <GITlogo />
                        <GHlogo />
                        <AtlassianLogo />
                        <GOlogo />
                        <NodeLogo />
                        <DockerLogo />
                        <SQLiteLogo />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;