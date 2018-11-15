import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import { Meteor } from 'meteor/meteor';

const customStyles = {
  content : {
    top                   : '52%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -52%)',
    width                 : '695px',
    height             : '646px',
    borderRadius          :0,
    padding: '0px'
  }
};

Modal.setAppElement('body');

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({modalIsOpen: true});
    const name = this.props.name;
    const dayop = this.props.dayop;
    const starttime = this.props.starttime;
    const endtime = this.props.endtime;
    const players = this.props.players;
    const rating = this.props.rating;
    const day = this.props.date;
    const location = this.props.location;
    Meteor.call('matchs.insert',name,dayop,starttime,endtime,players,rating,day,location);
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
        <button onClick={this.openModal} className="stp__3-btn regular f_28 wt">
        <span className="icon-next"></span>
        <span className="stp__3-btntext" > FINISH </span>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          >
          <h2 ref={subtitle => this.subtitle = subtitle}></h2>
          <div className="stp3__">
            <p className="medium f_40"> Completed</p>
            <div className="stp3__location">
              <div className="stp3_locationleft">
                <p className="stp3_locationcontent regular f_28 gr">{this.props.name}</p>
                <p className="regular f_24 g_1">{this.props.location}</p>
              </div>
              <div className="stp3_locationright section__time">
                <div className="stp3_location10 light f_60 gr">{this.props.date}</div>
                <div className="section__time-day regular f_24"> 
                  <span className="section__time-dayabv">{this.props.day}</span>
                  <span className="section__time-daybl">{this.props.month} {this.props.year}</span>
                </div>
                <div className="section__time-from regular f_24">
                  <span className="section__time-dayabv">From:</span>
                  <span className="section__time-dayabv">To:</span>
                </div>
                <div className="stp3_times regular f_24 gr">
                  <span className="section__time-dayabv">{this.props.starttime}</span>
                  <span className="section__time-dayabv">{this.props.endtime}</span>
                </div>
              </div>
            </div>
            <hr className="sexy_line" />
            <form className="form-inline ">
              <input className="stp3__search italic f_22" type="search" placeholder="Search player or team..." aria-label="Search" />
            </form>
            <p className="stp3__suggest regular f_22 g_7">SUGGESTED TEAMS</p>
            <div className="stp3__teamwrap">
              <div className="stp3__teams">
                <form className="stp3__teamsdiv" action="">
                  <div className="stp3__teamslogo">
                    <div className="stp3__teamsloogoimg">
                      <img className="stp3__teamsloogoimgg" src="https://upload.wikimedia.org/wikipedia/vi/thumb/9/91/FC_Barcelona_logo.svg/180px-FC_Barcelona_logo.svg.png" alt=""/>
                    </div>
                  </div>
                  <div>
                    <p className="stp3__nameteams regular f_28 gr">FC Barcelona</p>
                    <p className="regular f_22 g_8">Arístides Maillol, 08028</p>
                  </div>
                  <div>
                    <span className="stp3__stick icon-stick"></span>
                  </div>
                </form>
                <form className="stp3__teamsdiv" action="">
                  <div className="stp3__teamslogo">
                    <div className="stp3__teamsloogoimg">
                      <img className="stp3__teamsloogoimgg" src="https://upload.wikimedia.org/wikipedia/vi/thumb/9/91/FC_Barcelona_logo.svg/180px-FC_Barcelona_logo.svg.png" alt=""/>
                    </div>
                  </div>
                  <div>
                    <p className="stp3__nameteams regular f_28 gr">FC Barcelona</p>
                    <p className="regular f_22 g_8">Arístides Maillol, 08028</p>
                  </div>
                  <div>
                    <span className="stp3__stick icon-stick"></span>
                  </div>
                </form>
              </div>
              <div className="stp3__teams">
                <form className="stp3__teamsdiv" action="">
                  <div className="stp3__teamslogo">
                    <div className="stp3__teamsloogoimg">
                      <img className="stp3__teamsloogoimgg" src="https://images-eu.ssl-images-amazon.com/images/I/71Pq6kR%2BHUL.png" alt=""/>
                    </div>
                  </div>
                  <div>
                    <p className="stp3__nameteams regular f_28 gr">Real Madrid C.F.</p>
                    <p className="regular f_22 g_8">Avda. de Concha Espina </p>
                  </div>
                  <div>
                    <span className="stp3__stick icon-stick"></span>
                  </div>
                </form>
                <form className="stp3__teamsdiv" action="">
                  <div className="stp3__teamslogo">
                    <div className="stp3__teamsloogoimg">
                      <img className="stp3__teamsloogoimgg" src="https://images-eu.ssl-images-amazon.com/images/I/71Pq6kR%2BHUL.png" alt=""/>
                    </div>
                  </div>
                  <div>
                    <p className="stp3__nameteams regular f_28 gr">Real Madrid C.F.</p>
                    <p className="regular f_22 g_8">Avda. de Concha Espina </p>
                  </div>
                  <div>
                    <span className="stp3__stick icon-stick"></span>
                  </div>
                </form>
              </div>
              <div className="stp3__teams">
                <form className="stp3__teamsdiv" action="">
                  <div className="stp3__teamslogo">
                    <div className="stp3__teamsloogoimg">
                      <img className="stp3__teamsloogoimgg" src="https://itviec.com/employers/zigvy/logo/social/zigvy-logo.jpg?reFbyyyi2emJ8RGLLrD3toSa" alt=""/>
                    </div>
                  </div>
                  <div>
                    <p className="stp3__nameteams regular f_28 gr">Zigvy Soccer Club</p>
                    <p className="regular f_22 g_8">Phu Nhuan, HCM</p>
                  </div>
                  <div>
                    <span className="stp3__stick icon-stick"></span>
                  </div>
                </form>
                <form className="stp3__teamsdiv" action="">
                  <div className="stp3__teamslogo">
                    <div className="stp3__teamsloogoimg">
                      <img className="stp3__teamsloogoimgg" src="https://itviec.com/employers/zigvy/logo/social/zigvy-logo.jpg?reFbyyyi2emJ8RGLLrD3toSa" alt=""/>
                    </div>
                  </div>
                  <div>
                    <p className="stp3__nameteams regular f_28 gr">Zigvy Soccer Club</p>
                    <p className="regular f_22 g_8">Phu Nhuan, HCM</p>
                  </div>
                  <div>
                    <span className="stp3__stick icon-stick"></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div></div>
          <div className="stp2__footer">
            <div className="stp2__footerwrap">
              <div className="stp3__footerwrap">
                <span className="icon-cancel"></span>
                <a onClick={this.closeModal} href="" className="stp2__footertext regular f_28 gr">Cancel</a>
              </div>
              <Link className="stp2__a" to="/matchs">
              <button onClick={this.closeModal} className="stp3__footerbtn regular f_28 wt">
              <span className="icon-next"></span>
              <span className="stp__2-btntext"> Send Invite </span>
              </button>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}