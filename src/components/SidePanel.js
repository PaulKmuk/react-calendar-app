import React from 'react'
import AddTypeEvent from './AddTypeEvent';
import './SidePanel.css'

const SidePanel = (props) => {

    const {
        addTypeEvent,
        typesEvent
    } = props

    return ( 
        <div className='sidePanel activePanelSide'>
            <AddTypeEvent 
                addTypeEvent={(type) => addTypeEvent(type)}
                typesEvent={typesEvent}
                />
        </div>
     );
}
 
export default SidePanel;