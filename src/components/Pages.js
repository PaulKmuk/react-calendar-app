import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Calendar from './Pages/Calendar';
import ListEvent from './Pages/ListEvent';
import AddEvent from './Pages/AddEvent';

const Pages = (props) => {

    const { 
        typesEvent,
        events,
        addEvent
    } = props

    return ( 
        <div className='pages'>
            <Routes>

                <Route path='/' element={<Calendar 
                    events={events}
                    typesEvent={typesEvent}
                    addEvent={(event) => addEvent(event)}
                    />}/>

                <Route path='/list-events' element={<ListEvent />}/>
                
                <Route path='/add-event' element={<AddEvent />}/>

            </Routes>
        </div>
     );
}
 
export default Pages;