import React, {useState} from 'react';
import Panel from '../panel/panel.js';
import './header.scss'


const Header = ({filterOpenNow, filterByDayAndBooking}) => {

  const [toggleModal, setToggleModal] = useState(true);


    return (
      <div className='header-container'>

        <h2 className='title-header'> NSW Covid Testing Clinics </h2>

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
