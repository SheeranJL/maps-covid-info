import React, {useEffect, useState} from 'react';
import './app.scss';

import GoogleApiWrapper from './components/map/map.js';
import Panel from './components/panel/panel.js'

const App = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect( () => {
    fetch('https://data.nsw.gov.au/data/dataset/21c72b00-0834-464d-80f1-75fec38454ce/resource/34e9b08c-4a17-4273-bab5-c3dfd37663cb/download/covid-19-test-clinics.json')
      .then(r => r.json())
      .then(d => setData(d))
      .then(setLoading(false));
  }, [])

  return loading ?
    (
     <h1>loading</h1>
    ) : (
      <div className='app-container'>

        <div className='left-side-panel'>
          <Panel />
        </div>

        <div className='main-content-container'>
          <GoogleApiWrapper data={data}/>
        </div>
        
      </div>
    )
}

export default App;
