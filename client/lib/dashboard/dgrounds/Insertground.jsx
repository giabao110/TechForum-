import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class Insertground extends React.Component {
  constructor(props) {
    super(props);
      this.names = React.createRef();
      this.location = React.createRef();
      this.price = React.createRef();
      this.rating = React.createRef();
      this.hoursfree = moment().format('MMMM Do YYYY, h:mm:ss a');
      this.img = React.createRef();
      this.content = React.createRef();
      this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
      this.status = React.createRef();
      this.starttime = React.createRef();
      this.endtime = React.createRef();
      this.starttime = React.createRef();
      this.players = React.createRef();
  }

  InsertThisGrounds = (e) =>{
    e.preventDefault();
    const name =  this.names.current.value;
    const location =  this.location.current.value;
    const price =  this.price.current.value;
    const rating = this.rating.current.value;
    const hoursfree = moment().format('MMMM Do YYYY, h:mm:ss a');
    const image =  this.img.current.value;
    const content =  this.content.current.value;
    const dateop =  moment().format('MMMM Do YYYY, h:mm:ss a');
    const starttime = this.starttime.current.value;
    const endtime = this.endtime.current.value;
    const players = this.players.current.value;
    
    if (this.status.current.value == "true")
    {
      var bool = true;
      var status = bool.valueOf();
    }
    else
    {
      var bool = false;
      var status = bool.valueOf();
    }
  
    Meteor.call('grounds.insert',name.toString(),content,location,dateop,starttime,endtime,price,rating,hoursfree,image,status,players);

    this.names.current.value = "";
    this.location.current.value = "";
    this.price.current.value = ""; 
  this.date = "";
    this.img.current.value = "";
    this.content.current.value = "";
    this.date = "";
    this.starttime.current.value = "";
    this.endtime.current.value = "";
    this.players.current.value = "";

    return swal({
      title: "Bài viết đã được đăng thành công !!!",
      timer: 1700,
  });
  }  

  render() {
    // const item = this.props.edit;
    // console.log(this.date);
    // if(this.props.edit._id !== ""){
    //     this.price = item.price;
    // }
      return (
        <div>
        <div className="header__">
          <div className="header__left">
            <div className="light f_70">
              <span>Thêm bài viết</span>
            </div>
          </div>
        </div>
        <br/>
        <form className="regular f_24 frm_grounds" onSubmit={this.InsertThisGrounds.bind(this)}>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label>Tiêu đề bài viết</label>
              <input type="text" className="form-control" ref={this.names} placeholder="Name Stadium"/>
            </div>
            <div className="col-md-4 mb-3">
              <label >Location</label>
              <input type="text" className="form-control" ref={this.location} placeholder="Location" />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-8 mb-8">
              <label >Nội dung bài viết</label>
              <input type="text" className="form-control" ref={this.content} placeholder="Content" />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label> Ngày viết</label>
              {/* <input defaultValue="2018/10/02" type="date" ref={this.date} /> */}
            </div>
            <div className="col-md-2 mb-2">
              <label >Start time: </label>
              <input type="time" id="startTime" ref={this.starttime}/>
            </div>
            <div className="col-md-2 mb-2">
              <label >End time: </label>
              <input type="time" id="endTime" ref={this.endtime}/>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-1 mb-1">
              <label >Price</label>
              <input type="text" className="form-control" placeholder="Price" ref={this.price}/>
              {/* defaultValue={this.state.price} */}
            </div>
            <div className="col-md-2 mb-2">
              <label >Players</label>
              <input type="text" className="form-control"  ref={this.players} placeholder="Players"/>
            </div>
            <div className="col-md-1 mb-1">
              <label >Hour</label>
              <input type="text" className="form-control" ref={this.hoursfree} placeholder="Hour" />
            </div>
            <div className="col-md-4 mb-3">
              <label >URL image</label>
              <input type="text" className="form-control"  ref={this.img} placeholder="URL image" required/>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-2 mb-2">
              <label >Rating</label>
              <select type="text" className="form-control" ref={this.rating} required>
                <option value="5">5</option>
                <option value="4.5">4.5</option>
                <option value="4">4</option>
                <option value="3.5">3.5</option>
                <option value="3">3</option>
                <option value="2.5">2.5</option>
                <option value="2">2</option>
                <option value="1.5">1.5</option>
                <option value="1">1</option>
              </select>
            </div>
            <div className="col-md-2 mb-2">
              <label >Status</label>
              <select type="text" className="form-control" ref={this.status} required>
                <option value="true">On</option>
                <option value="false">Off</option>
              </select>
            </div>
          </div>
          <button className="matchs__btnsz btn-primary" type="submit">Insert</button>
        </form>
      </div>
      );
      }
      }
        