import React from 'react'
import { Link } from 'react-router-dom';
import './TopPanel.css'

const TopPanel = (props) => {

    const {
        toggleSidePanel
    } = props

    return ( 
        <div className='topPanel'>
            <button 
                className='button btn_nav'
                onClick={() => toggleSidePanel()}
                >Menu</button>
            <div>
                <Link to={'/add-event'}><button className='button btn_nav'>Dodaj</button></Link>
                <Link to={'/list-events'}><button className='button btn_nav'>Lista</button></Link>
                <Link to={'/'}><button className='button btn_nav'>Kalendarz</button></Link>
            </div>
        </div>
     );
}
 
export default TopPanel;