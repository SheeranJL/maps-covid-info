import React, {useState} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import {modalPopupStyle, modalTitleStyle, clinicInfoStyle, openingHoursStyle, mapContainerStyle} from './map-styles.js';
import apiKey from '../../keys.js';

const MapContainer = (props) => {

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  //This function will run whenever a user clicks on a map marker to view the opening times etc.
  const onMarkerClick = (props, marker, info) => {
     setLoading(true)
     setSelectedPlace(props.position);
     setActiveMarker(marker);
     setShowingInfoWindow(true);
     setLoading(false)
  }


  return (
    <div>
    <Map google = {props.google} style={mapContainerStyle} zoom = {10} initialCenter = {{lat: -33.868820, lng: 151.209290}}>

      { props.filtered.map((site, index) => <Marker title={site.title} name={site.locationInstructions} position={{lat: site.Latitude, lng: site.Longitude}} data={site} onClick={onMarkerClick}/>) }

        <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
          {
            loading
            ? (
              <div style={modalPopupStyle}>
                <h1>Loading</h1>
              </div>
            ): (
              <div style={modalPopupStyle}>
                <h1 style={modalTitleStyle}>{activeMarker.data.title}</h1>
                <div style={{borderBottom: '1px solid grey'}}/>

                <div style={clinicInfoStyle}>

                  <h3 style={{marginBottom: '5px'}}> Opening Hours </h3>
                  <h2 style={{fontSize: '12px', marginTop: '0', marginBottom: '3px'}}>{ `(Last updated: ${activeMarker.data.lastUpdated})` }</h2>

                  <div style={openingHoursStyle}>
                    <p style={{width: '30%', textAlign: 'left'}}>Monday</p>
                    <p style={{width: 'auto'}}>{ `${activeMarker.data.mondayOpeningHours} - ${activeMarker.data.mondayClosingHours}`  }</p>
                  </div>

                  <div style={openingHoursStyle}>
                    <p style={{width: '30%', textAlign: 'left'}}>Tuesday</p>
                    <p style={{width: 'auto'}}>{ `${activeMarker.data.tuesdayOpeningHours} - ${activeMarker.data.tuesdayClosingHours}`  }</p>
                  </div>

                  <div style={openingHoursStyle}>
                    <p style={{width: '30%', textAlign: 'left'}}>Wednesday</p>
                    <p style={{width: 'auto'}}>{ `${activeMarker.data.wednesdayOpeningHours} - ${activeMarker.data.wednesdayClosingHours}`  }</p>
                  </div>

                  <div style={openingHoursStyle}>
                    <p style={{width: '30%', textAlign: 'left'}}>Thursday</p>
                    <p style={{width: 'auto'}}>{ `${activeMarker.data.thursdayOpeningHours} - ${activeMarker.data.thursdayClosingHours}`  }</p>
                  </div>

                  <div style={openingHoursStyle}>
                    <p style={{width: '30%', textAlign: 'left'}}>Friday</p>
                    <p style={{width: 'auto'}}>{ `${activeMarker.data.fridayOpeningHours} - ${activeMarker.data.fridayClosingHours}`  }</p>
                  </div>

                  <div style={openingHoursStyle}>
                    <p style={{width: '30%', textAlign: 'left'}}>Saturday</p>
                    <p style={{width: 'auto'}}>{ `${activeMarker.data.saturdayOpeningHours} - ${activeMarker.data.saturdayClosingHours}`  }</p>
                  </div>

                  <div style={openingHoursStyle}>
                    <p style={{width: '30%', textAlign: 'left'}}>Sunday</p>
                    <p style={{width: 'auto'}}>{ `${activeMarker.data.sundayOpeningHours} - ${activeMarker.data.sundayClosingHours}`  }</p>
                  </div>

                  <h3 style={{marginBottom: '5px'}}> Additional Info </h3>

                  <div style={openingHoursStyle}>
                    <p style={{width: '40%', textAlign: 'left'}}><b>Walk in?</b> </p>
                    <p style={{width: 'auto'}}>{activeMarker.data.walkInAllowed === 'Y' ? <p style={{color: 'green', fontWeight: 'bold'}}> YES </p> : <p style={{color: 'red', fontWeight: 'bold'}}> NO </p>}</p>
                  </div>

                  <div style={openingHoursStyle}>
                    <p style={{width: '40%', textAlign: 'left'}}><b>Booking link:</b></p>
                    <p style={{width: 'auto'}}>{activeMarker.data.bookingLink ? <a href={`${activeMarker.data.bookingLink}`}>Click here</a> : 'None provided'}</p>
                  </div>

                  <div style={openingHoursStyle}>
                    <p style={{width: '40%', textAlign: 'left'}}><b>Booking Phone:</b></p>
                    <p style={{width: 'auto'}}>{activeMarker.data.bookingPhoneNumber ? activeMarker.data.bookingPhoneNumber : 'None provided'}</p>
                  </div>
                </div>
              </div>
            )
          }
        </InfoWindow>
    </Map>
    </div>
  )
}

//Wrapping our google maps API within the neccessary wrapper with our API key.
export default GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer);
