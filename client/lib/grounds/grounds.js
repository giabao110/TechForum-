import React, {Component} from 'react';
import '/node_modules/bootstrap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SectionGrounds from '../grounds/components/SectionGrounds';

export default class Grounds extends Component {
	render (){
		return(
    <div>
      <SectionGrounds/>
    </div>
		);
	}
}
