import React, {useState, useRef} from 'react';
import './panel.scss';

const Panel = ({filterOpenNow, filterByDayAndBooking}) => {

  const [openTime, setOpenTime] = useState('')
  const [selectedDay, setSelectedDay] = useState(null);
  const [bookingRequired, setBookingRequired] = useState(null);

  const selectionBox = useRef();

  const handleChange = (e) => {
    filterOpenNow(e.target.checked);
  };

  const handleSelection = (e) => {
    setSelectedDay(`${e.target.value.toLowerCase()}OpeningHours`);
     // e.target.selectedIndex = 0;
  }

  const handleRadioSelection = (e) => {
    setBookingRequired(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    filterByDayAndBooking(selectedDay, bookingRequired);
  }



  return (
    <div className='panel-container'>
      <h1 className='title'>Filter Search</h1>

      <div className='filter-container'>


        <h3>Quick Search</h3>
        <div className='filter-item'>
          <label classname='filter-item-title' for='open-now'>Open Today</label>
          <input classname='filter-item-selector' type='checkbox' id='open-now' name='open-now' onChange={handleChange}/>
        </div>


        <form onSubmit={handleSubmit}>

          <h2> Filter </h2>

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

          <div className='radio-buttons' onChange={handleRadioSelection}>
            <input type="radio" value="yes" name="booking-required" /> Yes
            <input type="radio" value="no" name="booking-required" /> No
          </div>

          <button type='submit'>Search</button>
        </form>

      </div>


    </div>

  )

}

export default Panel;
