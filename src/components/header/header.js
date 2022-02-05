import React, {useState} from 'react';
import Panel from '../panel/panel.js';
import './header.scss'


const Header = ({filterOpenNow, filterByDayAndBooking}) => {

  //Setting our local state for whether or not our 'filter' button has been clicked. If true, the modal will show, if false, it will not.
  const [toggleModal, setToggleModal] = useState(false);


    return (
      <div className='header-container'>

        <div className='title-container'>
          <h2 className='title-header'> Testing clinics </h2>
        </div>

        <div className='filter-option'>
          <h3 onClick={() => setToggleModal(!toggleModal)}>Filter</h3>
        </div>

      <div className='modal' style={{display : `${toggleModal ? '' : 'none'}`}}>
        <Panel filterOpenNow={filterOpenNow} filterByDayAndBooking={filterByDayAndBooking}/>
      </div>

    </div>
    )


}

export default Header;
