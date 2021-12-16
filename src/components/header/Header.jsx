import React from 'react'
import './header.css'
function Header() {
    return (
        <header>
            <h3>Gallery</h3>
            <div className="text">
                <h3 className="text__title">Your Pictures</h3>
                <p className="text__desc">The place to save your memories</p>
            </div>
        </header>
    )
}

export default Header
