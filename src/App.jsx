import './App.css'
import { Link, } from 'react-router-dom'

export default function App() {
    return (
        <>
            <div className="nav-bar">
                <nav>
                    <Link to="/" >Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to='/languages'>Languages</Link>
                </nav>
            </div>
        </>
    )
}