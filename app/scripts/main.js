/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import CoordinatesStore from './CoordinatesStore';

import Multiselect from './Multiselect';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


const position = [54.505, -0.09];

// import React from 'react';

// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

var store = new CoordinatesStore();

ReactDOM.render(
	<div>
		<Multiselect label="Multiselect" />
    <br/>
    <br/>
    <br/>
    <div>
    </div>

	</div>,
	document.getElementById('app')
);
