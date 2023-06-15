import React, { useState } from 'react'
import './AddEventModal.css'

const AddEventModal = (props) => {

    const {
        toggleAddEventModal,
        selectDay,
        selectMonth,
        typesEvent,
        addEvent
    } = props

    const [selectTime, setSelectTime] = useState('')
    const [selectTypeEvent, setSelectTypeEvent] = useState('')
    const [selectPlace, setSelectPlace] = useState('')
    const [selectOtherInfo, setSelectOtherInfo] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    const handleTypeEvent = (e) => {
        setSelectTypeEvent(e.target.value)
    }
    const handleTimeEvent = (e) => {
        setSelectTime(e.target.value)
    }
    const handlePlaceEvent = (e) => {
        setSelectPlace(e.target.value)
    }
    const handleOtherInfoEvent = (e) => {
        setSelectOtherInfo(e.target.value)
    }

    const handleSaveBtn = () => {
        const newEvent = {
            type: selectTypeEvent,
            date: {
                day: selectDay,
                month: selectMonth
            },
            time: selectTime,
            place: selectPlace,
            otherInfo: selectOtherInfo
        }

        if(selectTypeEvent !== '' && selectTypeEvent !== '-- wybierz --' && selectTime !== '') {
            addEvent(newEvent)
            toggleAddEventModal()
            setShowAlert(false)
        } else {
            setShowAlert(true)
        }

    }

    return ( 
        <div className='addEventModal'>
            <div className='addEventModalPanel'>
                <label>{selectDay < 10 ? '0'+selectDay : selectDay} / {selectMonth < 10 ? '0'+selectMonth : selectMonth} / 2023</label>
                
                <label>Wydarzenie:</label>
                <select 
                    value={selectTypeEvent}
                    onChange={(e) => handleTypeEvent(e)}>
                        <option>-- wybierz --</option>
                        {typesEvent.map(event => (
                            <option key={event._id}>{event.type}</option>
                        ))}
                </select>
                
                <label>Godzina:</label>
                <input 
                    type='time'
                    value={selectTime}
                    onChange={(e) => handleTimeEvent(e)}
                    ></input>
                
                <label>Miejsce:</label>
                <input 
                    value={selectPlace}
                    onChange={(e) => handlePlaceEvent(e)}
                    type='text'
                    ></input>
                
                <label>inne:</label>
                <textarea 
                    type='text'
                    value={selectOtherInfo}
                    onChange={(e) => handleOtherInfoEvent(e)}
                    ></textarea>
                {showAlert && (
                                <p 
                                    className='alertInfo'
                                    >Aby zapisć wydarzenie wybierz rodzaj oraz podaj godzinę</p>
                )}
                <div className='addEventModalPanelButton'>
                    <button 
                        onClick={() => toggleAddEventModal()}
                        className='button'
                        >Anuluj</button>
                    <button 
                        className='button'
                        onClick={() => handleSaveBtn()}
                        >Zapisz</button>
                </div>

            </div>
        </div>
     );
}
 
export default AddEventModal;