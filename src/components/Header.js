import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    render() {
        
        return(
            <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light col-md-9 mx-auto">
                <Link className="navbar-brand" to='/'>Rule of Thumb</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/past">Past Trials</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/how-it-works">How it works</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/login-signup">Log In/Sign Up</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}



export default Header;
