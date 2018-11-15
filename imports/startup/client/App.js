import React from 'react';
import  Navigation from '../../../client/lib/components/Navigation';
import  Footer from '../../../client/lib/components/Footer';  

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Navigation count={this.props.incompleteCount} history={this.props.history}/>
        <div className="football__wraper">
          {this.props.children}
        <Footer/>
        </div>
      </div>
    );
    }
  }
