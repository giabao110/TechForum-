import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Step3 from './Step3';

const customStyles = {
  content : {
    top                   : '54%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '613px',
    maxHeight             : '567px',
    borderRadius          :0,
    padding: '0px'
  }
};

Modal.setAppElement('body');

export default class Step2 extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () =>  {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () =>  {
    this.subtitle.style.color = '#f00';
  }

  closeModal = () =>  {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
      <button onClick={this.openModal} className="stp__2-btn regular f_28 wt">
      <span className="icon-next"></span>
      <span className="stp__2-btntext"> NEXT</span>
      </button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <h2 ref={subtitle => this.subtitle = subtitle}></h2>
        <div className="stp2__">
          <p className="medium f_40"> Completed</p>
          <div className="stp2__logo icon-logostick"></div>
          <p className="stp2__logotext light f_48">Your Booking has been Issued!</p>
          <div className="join__location">
            <div className="join__location-left">
              <div className="join__locationimg">
                <img className="join__locationimgg" src="https://i.pinimg.com/originals/db/0d/0a/db0d0ab65cf3e30f2ef6ede74ac82423.png" alt=""/>
              </div>
            </div>
            <div className="join__location-right">
              <p className="join__location-righttitle regular f_28 gr">{this.props.name}</p>
              <p className="regular f_24 g_1">{this.props.location}</p>
              <div className="section__time">
                <div className="section__time-number light f_60 gr">{this.props.date}</div>
                <div className="section__time-day regular f_24"> 
                  <span className="section__time-dayabv">{this.props.day}</span>
                  <span className="section__time-daybl">{this.props.month} {this.props.year}</span>
                </div>
                <div className="section__time-from regular f_24">
                  <span className="section__time-dayabv">From:</span>
                  <span className="section__time-dayabv">To:</span>
                </div>
                <div className="regular f_24 gr">
                  <span className="section__time-dayabv">{this.props.starttime}</span>
                  <span className="section__time-dayabv">{this.props.endtime}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="stp2__location">
            <div className="join__right regular f_24">
              <button className="stp2__celendar">
              <span className="icon-celendar"></span>
              <a className="join__right- g_3" href="">Add to Calendar</a>
              </button>  
              <button className="stp2__share">
              <span className="icon-share"></span>
              <a className="join__right- g_3" href="">Share</a>
              </button>
            </div>
          </div>
        </div>
        <div className="stp2__footer">
          <div className="stp2__footerwrap">
            <div>
              <span className="icon-plus"></span>
              <a href="" className="stp2__footertext regular f_28 gr">Invite a Team</a>
              <p className="stp2__footertext2 regular f_24 gray">( You can do it later in your match management page )</p>
            </div>
            <div>
              <Step3  team={this.props.team}
                name={this.props.name} 
                location={this.props.location} 
                team={this.props.team}
                day = {this.props.day}
                date = {this.props.date}
                month = {this.props.month}
                year = {this.props.year}
                starttime = {this.props.starttime}
                endtime = {this.props.endtime}
                players = {this.props.players}
                dayop = {this.props.dayop}
                rating = {this.props.rating}/>
            </div>
          </div>
        </div>
      </Modal>
    </div>
    );
  }
}