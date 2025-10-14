import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import './index.css';

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    const onClickHamburger = () => {
        setOpen(prev => !prev);
    }

    return (
        <>
            <div className="header-container">
                <Link to="/" className="link-style">
                    <h3 className="header-name">Mohammed Shibili K</h3>
                </Link>

                <div className="header-options-container">
                    <div className="hamburger-wrapper">
                        <button className="hamburger-btn" type="button" onClick={onClickHamburger}>
                            <GiHamburgerMenu size={24} color="#f2f2f2"/>
                        </button>

                        {isOpen && (
                            <div className="header-options-mobile-device">
                                <Link to="/" className="link-style"><h3 className="header-options">Home</h3></Link>
                                <Link to="/education" className="link-style"><h3 className="header-options">Education</h3></Link>
                                <Link to="/projects" className="link-style"><h3 className="header-options">Projects</h3></Link>
                                <Link to="/certificates" className="link-style"><h3 className="header-options">Certificates</h3></Link>
                                <Link to="/contact" className="link-style"><h3 className="header-options">Contact</h3></Link>
                            </div>
                        )}
                    </div>

                    <div className="header-options-larger-device">
                        <Link to="/" className="link-style"><h3 className="header-options">Home</h3></Link>
                        <Link to="/education" className="link-style"><h3 className="header-options">Education</h3></Link>
                        <Link to="/projects" className="link-style"><h3 className="header-options">Projects</h3></Link>
                        <Link to="/certificates" className="link-style"><h3 className="header-options">Certificates</h3></Link>
                        <Link to="/contact" className="link-style"><h3 className="header-options">Contact</h3></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
