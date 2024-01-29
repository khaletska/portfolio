import './header.css';

const Header = () => {
    return (
        <header>
            <div className='link-wrap'>
                <a href="#education">Education</a>
            </div>
            <div className='link-wrap'>
                <a href="#skills">Skills</a>
            </div>
            <div className='link-wrap'>
                <a href="#experience">Experience</a>
            </div>
            <div className='link-wrap'>
                <a href="#projects">Projects</a>
            </div>
            <div className='link-wrap'>
                <a href="mailto:khaletska.e@gmail.com">Reach out</a>
            </div>
        </header>
    )
}

export default Header;