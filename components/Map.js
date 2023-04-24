import React, { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import {getCenter}  from 'geolib';

function Map({searchResults}) {
    const point = [-20,-10];

   

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })

    console.log(searchResults)


    return (<ReactMapGL
        mapStyle={'mapbox://styles/joed3rd/cldlsbab0000y01q9goujxjfk'}
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onMove = {(nextViewport) => setViewport(nextViewport.viewState)}
    >

        {searchResults.map(result => (
            <div key={result.long}>
                <Marker
                longitude={result.long}
                latitude={result.lat}

                >
                 
                </Marker>
            </div>
            
        ))}

    </ReactMapGL>

    )
}

export default Map