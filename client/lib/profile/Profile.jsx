import React from 'react';

export default class Profile extends React.Component {
    render() {
      return (
          <div>
            <div className="header__">
              <div className="header__left">
                <div className="light f_70">
                  <span>Update Profile User</span>
                </div>
              </div>
            </div>
            <br/>
            <form className="regular f_24 frm_grounds">
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label>User Name </label>
                  <input type="text" className="form-control" ref="names" placeholder="User Name"/>
                </div>
                <div className="col-md-4 mb-3">
                  <label >Location</label>
                  <input type="text" className="form-control" ref="location" placeholder="Location" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label >Team</label>
                  <input type="text" className="form-control" ref="img" placeholder="Team" />
                </div>
                <div className="col-md-4 mb-3">
                  <label >Username</label>
                  <input type="text" className="form-control" placeholder="Username" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-3 mb-3">
                  <label >Price</label>
                  <input type="text" className="form-control" ref="price" placeholder="Price" />
                </div>
                <div className="col-md-1 mb-1">
                  <label >Hour</label>
                  <input type="text" className="form-control" ref="hoursfree" placeholder="Hour" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-1 mb-1">
                  <label >Rating</label>
                  <select type="text" className="form-control" ref="rating" required>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
                </div>
                <div className="col-md-2 mb-2">
                  <label >Status</label>
                  <select type="text" className="form-control" ref="status" required>
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
    
  