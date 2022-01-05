import React from 'react';
import './panel.scss';

const Panel = () => {

  return (
    <div className='panel-container'>
      <h1 className='title'>Filter Search</h1>

      <div className='filter-container'>

        <div className='filter-item'>
          <label classname='filter-item-title' for='open-now'>Open Now</label>
          <input classname='filter-item-selector' type='checkbox' id='open-now' name='open-now' />
        </div>

        <div className='filter-item'>
          <label for='open-now'>Open Monday</label>
          <input type='checkbox' id='open-now' name='open-now' />
        </div>

        <div className='filter-item'>
          <label for='open-now'>Open Tuesday</label>
          <input type='checkbox' id='open-now' name='open-now' />
        </div>

        <div className='filter-item'>
          <label for='open-now'>Open Wednesday</label>
          <input type='checkbox' id='open-now' name='open-now' />
        </div>

        <div className='filter-item'>
          <label for='open-now'>Open Thursday</label>
          <input type='checkbox' id='open-now' name='open-now' />
        </div>

        <div className='filter-item'>
          <label for='open-now'>Open Friday</label>
          <input type='checkbox' id='open-now' name='open-now' />
        </div>

        <div className='filter-item'>
          <label for='open-now'>Open Saturday</label>
          <input type='checkbox' id='open-now' name='open-now' />
        </div>

        <div className='filter-item'>
          <label for='open-now'>Open Sunday</label>
          <input type='checkbox' id='open-now' name='open-now' />
        </div>


      </div>


    </div>

  )

}

export default Panel;
