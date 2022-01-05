import React, {useEffect, useState} from 'react';
import './app.scss';

import GoogleApiWrapper from './components/map/map.js';
import Panel from './components/panel/panel.js'

const App = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [reset, setReset] = useState(true)

  useEffect( () => {
    fetch('https://data.nsw.gov.au/data/dataset/21c72b00-0834-464d-80f1-75fec38454ce/resource/34e9b08c-4a17-4273-bab5-c3dfd37663cb/download/covid-19-test-clinics.json')
      .then(res => res.json())
      .then(data => {
        setData(data.clinicData)
        setFiltered(data.clinicData)
      })
      .then(setLoading(false));
  }, [reset])


  const filterOpenNow = (value) => {

    if (value) {
      function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ';
        return strTime;
      }

      let dayString;
      const time = formatAMPM(new Date);
      const dateNow = new Date();
      const day = dateNow.getDay();

      if (day === 0) {
        dayString = 'sundayOpeningHours'
      } else if (day === 1) {
        dayString = 'mondayOpeningHours'
      } else if (day === 2) {
        dayString = 'tuesdayOpeningHours'
      } else if (day === 3) {
        dayString = 'wednesdayOpeningHours'
      } else if (day === 4) {
        dayString = 'thursdayOpeningHours'
      } else if (day === 5) {
        dayString = 'fridayOpeningHours'
      } else if (day === 6) {
        dayString = 'saturdayOpeningHours'
      }

      const filteredData = data.filter((loc) => loc[dayString] !== '')
      setFiltered([...filteredData])

    } else {
      setReset(!reset)
    }
  }

  const filterByDay = (day) => {
    const filteredData = data.filter((loc) => loc[day] !== '')
    setFiltered([...filteredData])

  }



  return loading ?
    (
     <h1>loading</h1>
    ) : (
      <div className='app-container'>

        <div className='left-side-panel'>
          <Panel filterOpenNow={filterOpenNow} filterByDay={filterByDay}/>
        </div>

        <div className='main-content-container'>
          <GoogleApiWrapper filtered={filtered} />
        </div>

      </div>
    )
}

export default App;
