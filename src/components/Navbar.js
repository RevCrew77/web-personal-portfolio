import {react} from 'react';
import 'Navbar.css';

export default function Navbar () {
    return (
        <header className="nav">
            <div className="logo">

            </div>
            <div className="things">
                <a href="#" className="about">
                    About Me
                </a>
                <a href="#" className="childhood">
                    Childhood
                </a>
                <a href="#" className="contacts">
                    Contacts
                </a>
                <a href="#" className="about">
                    About
                </a>
            </div>
        </header>
    )
}