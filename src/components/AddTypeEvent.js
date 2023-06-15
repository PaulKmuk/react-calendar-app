import React, { useState } from 'react'
import "./AddTypeEvent.css"

const AddTypeEvent = (props) => {

    const {
        addTypeEvent,
        typesEvent
    } = props

    let counter = 1


    const [newType, setNewType] = useState('')
    const [newColor, setNewColor] = useState('#0000ff')

    const handleTypeInput = (e) => {
        setNewType(e.target.value)
    }

    const handleColorInput = (e) => {
        setNewColor(e.target.value)
    }

    const handleAddBtn = () => {
        const newTypeEvent = {
            type: newType,
            color: newColor
        }

        addTypeEvent(newTypeEvent)
    }

    return ( 
        <div className='addTypePanel'>

            <table className='table addTypePanelTable'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Wydarzenia</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {typesEvent.map(type => (
                        <tr key={type.type}>
                            <td>{counter++}</td>
                            <td>{type.type}</td>
                            <td style={{backgroundColor: type.color}}></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='addTypePanelInputs'>
                <label>Dodaj wydarzenie:</label>
                <input 
                    value={newType}
                    onChange={(e) => handleTypeInput(e)}
                    className='addEvent'
                    ></input>
                <label>Kolor:</label>
                <input 
                    value={newColor}
                    onChange={(e) => handleColorInput(e)}
                    type='color'
                    ></input>
            </div>

            <div className='addTypePanelButton'>
                <button
                    onClick={() => handleAddBtn()} 
                    className='button'>Dodaj</button>
            </div>

        </div>
     );
}
 
export default AddTypeEvent;