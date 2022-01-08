import React, {useEffect, useState} from 'react';
import './app.scss';

import GoogleApiWrapper from './components/map/map.js';
import Header from './components/header/header.js';

const App = () => {

  //Decaring app state//
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [reset, setReset] = useState(true)


  //On first render                             //
  //This function will load all testing clinics //
  //                                            //
  useEffect( () => {
    fetch('https://data.nsw.gov.au/data/dataset/21c72b00-0834-464d-80f1-75fec38454ce/resource/34e9b08c-4a17-4273-bab5-c3dfd37663cb/download/covid-19-test-clinics.json')
      .then(res => res.json())
      .then(data => {
        setData(data.clinicData)
        setFiltered(data.clinicData)
      })
      .then(setLoading(false));
  }, [reset])


  //This function takes in the day selected in the modal form as well as the booking specification requirements and uses this information to filter through, and return the data to state//
  const filterByDayAndBooking = (day, booking) => {

    console.log(booking)
    //if the site (loc) has a day value ([day]) equal to an empty sting, this means the clinic is not open on that day and will not be included in the filtered data below.
    const filteredData = data.filter((loc) => loc[day] !== '')
    setFiltered([...filteredData])

    //If the booking selection in the submitted modal form is 'yes', then we filter through the data and grab sites where the .bookingRequired property value does not equal 'N' (no).
    //If the booking selection in the submitted modal form is 'no', then we filter through the data and grab sites where the .bookingRequired property value does not equal 'Y' (yes).
    //Else, if the user selects 'any', then we simply return all sites so long as they're open on the specific day.
    if (booking === 'yes') {
      const filteredData = data.filter((loc) => loc[day] !== '' && loc.bookingRequired !== 'N')
      setFiltered([...filteredData])
    } else if (booking === 'no') {
      const filteredData = data.filter((loc) => loc[day] !== '' && loc.bookingRequired !== 'Y')
      setFiltered([...filteredData])
    } else {
      const filteredData = data.filter((loc) => loc[day] !== '')
      setFiltered([...filteredData])
    }
  }


  return loading ?
    (
     <h1>loading</h1>
    ) : (
      <div>
          <Header filterByDayAndBooking={filterByDayAndBooking}/>
          <GoogleApiWrapper filtered={filtered} />
      </div>
    )
}

export default App;
