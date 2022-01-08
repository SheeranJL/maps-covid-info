import React, {useState, useRef} from 'react';
import './panel.scss';

const Panel = ({filterOpenNow, filterByDayAndBooking}) => {

  //Local state variables for each of the dropdown filtering selection options within the modal//
  const [openTime, setOpenTime] = useState('')
  const [selectedDay, setSelectedDay] = useState(null);
  const [bookingRequired, setBookingRequired] = useState(null);

  //When a user selects a day from the dropdown, it will save the value as a string which will later be used as the property value on the object we will use to filter through options.
  const handleSelection = (e) => {
    setSelectedDay(`${e.target.value.toLowerCase()}OpeningHours`);
  }

  //We will save the value of the users radio button selection within the setBookingRequired state variable
  const handleRadioSelection = (e) => {
    setBookingRequired(e.target.value);
  }

  //On submit, we take both values of the selected day, and the booking required radio buttons and pass this through to our filterByDayAndBooking function in App.js to return the filtered locations.
  const handleSubmit = (e) => {
    e.preventDefault();
    filterByDayAndBooking(selectedDay, bookingRequired);
  }



  return (
    <div className='panel-container'>

        <form onSubmit={handleSubmit}>

          <div className='drop-down-menu'>
            <h3 className='day-select-header' for="days">Select a day</h3>
            <select className='select-box' name="days" id="days" onChange={handleSelection}>
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

          <h3 className='booking-required-header'>Booking required?</h3>
          <div className='radio-buttons' onChange={handleRadioSelection}>
            <div className='radio-box'>
              <label for="booking-required">Yes</label>
              <input type="radio" value="yes" name="booking-required" />
            </div>
            <div className='radio-box'>
              <label for="booking-required">No</label>
              <input type="radio" value="no" name="booking-required" />
            </div>
            <div className='radio-box'>
              <label for="booking-required">Any</label>
              <input type="radio" value="any" name="booking-required" />
            </div>
          </div>

          <div className='submit-modal-button'>
            <button type='submit'>Search</button>
          </div>

        </form>
    </div>
  )
}

export default Panel;
