import React, {useState, useRef} from 'react';
import './panel.scss';

const Panel = ({filterOpenNow, filterByDay}) => {

  const [openTime, setOpenTime] = useState('')

  const handleChange = (e) => {
    filterOpenNow(e.target.checked)
  };

  const handleSelection = (e) => {
    filterByDay(`${e.target.value.toLowerCase()}OpeningHours`)
  }

  return (
    <div className='panel-container'>
      <h1 className='title'>Filter Search</h1>

      <div className='filter-container'>

        <div className='filter-item'>
          <label classname='filter-item-title' for='open-now'>Open Today</label>
          <input classname='filter-item-selector' type='checkbox' id='open-now' name='open-now' onChange={handleChange}/>
        </div>

        <label for="days">Select a day</label>

        <select name="days" id="days" onChange={handleSelection}>
          <option value="" selected disabled hidden>Choose here</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>



      </div>


    </div>

  )

}

export default Panel;
