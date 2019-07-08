import React from 'react';
import ReactModal from 'react-modal';
import MoreInfo from './MoreInfo.jsx'

ReactModal.setAppElement('#app');

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name:'Restaurant Name',
      location: '',
      currentLocation: '',
      moreInfoOpen: true,
      scheduleInfoOpen: false
    }
    this.toggleSchedule = this.toggleSchedule.bind(this); //required for setState to function while modal is open.
  }

  //Toggles the More info window that opens More Info Component
  toggleHide(){
    this.setState((prevState) => ({
      moreInfoOpen: !prevState.moreInfoOpen
    }));
  }

  //Toggles for the button that opens the ReactModule that contains schedule component
  toggleSchedule(){
    this.setState((prevState) => ({
      scheduleInfoOpen: !prevState.scheduleInfoOpen
    }));
  }

  render(){
    return (
    <div>
      <h1>{this.state.name}</h1>
      <button onClick={this.toggleSchedule}>Estimated Delivery Time goes here</button>
      <ReactModal isOpen={this.state.scheduleInfoOpen} onRequestClose={this.toggleSchedule}>
              <div>This is where the schedule component would go</div>
      </ReactModal>
      <button onClick={()=> this.toggleHide()}>Location Information goes here</button>
      <button onClick={()=> this.toggleHide()}>More Info</button>
      <MoreInfo moreInfoOpen={this.state.moreInfoOpen}/>
    </div>);
  }
}

export default App;