import React, { useState } from 'react'
import AddEventModal from './components/AddEventModal'
import './Calendar.css'

const Calendar = (props) => {

    const {
        typesEvent,
        events,
        addEvent
    } = props

    const x = new Date()

    const [showAddEventModal, setShowAddEventModal] = useState(false)
    const [selectYear, setSelectYear] = useState(x.getFullYear())
    const [selectMonth, setSelectMonth] = useState(x.getMonth() + 1)
    const [selectDay, setSelectDay] = useState(x.getDate())

    const months = [
        'Styczeń', 
        'Luty', 
        'Marzec', 
        'Kwiecień', 
        'Maj', 
        'Czerwiec', 
        'Lipiec', 
        'Sierpień', 
        'Wrzesień', 
        'Październik', 
        'Listopad', 
        'Grudzień'
    ]

    const week = [
        'Poniedziałek', 
        'Wtorek', 
        'Środa', 
        'Czwartek', 
        'Piątek', 
        'Sobota', 
        'Niedziela'
    ]

    const days = []

    const prevDays = []


    // --- zwraca ilość dni w podanym miesiącu ---
    const selectDate = new Date(selectYear, selectMonth, 0)
    // console.log(selectDate.getDate());
    // --- zwraca ilość dni w podanym miesiącu ---
    
    
    // --- zwraca dzień tygodnia 1 dnia miesiąca ---
    const y = new Date(selectYear, selectMonth -1, 1)
    // console.log(y.getDay());

    const prevDate = new Date(selectYear, selectMonth-1, 0)
    // console.log(prevDate.getDate());


    // y.getDay() === 0 && y.getDay() = 7

    if(y.getDay() === 0){
        for(let i = prevDate.getDate(); i > prevDate.getDate() - 7 + 1; i--) {
            prevDays.push(i)
        }
    } else { 

        for(let i = prevDate.getDate(); i > prevDate.getDate() - y.getDay() + 1; i--) {
            prevDays.push(i)
        }
    }

    for(let i = 1; i <= selectDate.getDate(); i++) {
        days.push(i)
    }

    const handleLeftButton = () => {

        selectMonth > 2 && setSelectMonth(selectMonth - 1)
    }
    const handleRightButton = () => {

        selectMonth < 12 && setSelectMonth(selectMonth + 1)
    }

    const toggleAddEventModal = () => {
        setShowAddEventModal(!showAddEventModal)
    }

    const setSelectDate = (day) => {
        toggleAddEventModal()
        setSelectDay(day)
    }

    return ( 
        <div className='calendar'>
            <div>
                <div className='month'>
                    <button
                        onClick={() => handleLeftButton()}
                        className='button'
                        >left</button>
                    <h2>{months[selectMonth-1]}</h2>
                    <button
                        onClick={() => handleRightButton()}
                        className='button'
                        >right</button>
                </div>
                <div className='week'>
                    <ul>
                        {week.map(day => (
                            <li 
                                key={day}
                                ><p>{day}</p></li>
                        ))}
                    </ul>
                </div>
                <div className='days'>
                    <ul>
                        {prevDays.reverse().map(day=> (
                            <li 
                                className='prevLi'
                                key={day}
                                ><p>{day}</p></li>
                        ))}
                        {days.map(day => (
                            <li 
                                onClick={() => setSelectDate(day)}
                                key={day}
                                >
                                    <p className='nrDay'>{day}</p>
                                    {events.map(event => {
                                        if(day === event.date.day && selectMonth === event.date.month) {
                                            return (
                                                <div
                                                    style={{backgroundColor: event.color}} 
                                                    className='event'
                                                    key={event._id}>
                                                        <p>{event.type}</p>
                                                        <p>{event.time}</p>
                                                </div>
                                            )
                                        } else {return null}
                                    })}
                                </li>
                        ))}
                    </ul>
                </div>
            </div>

            {showAddEventModal && <AddEventModal
                selectDay={selectDay}
                selectMonth={selectMonth} 
                toggleAddEventModal={() => toggleAddEventModal()}
                typesEvent={typesEvent}
                addEvent={(event) => addEvent(event)}
                />}

        </div>
     );
}
 
export default Calendar;