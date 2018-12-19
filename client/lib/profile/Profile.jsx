import React from 'react';

export default class Profile extends React.Component {
    render() {
      return (
          <div>
            <div className="header__">
              <div className="header__left">
                <div className="regular f_70">
                  <span>CẬP NHẬT THÔNG TIN NGƯỜI DÙNG</span>
                </div>
              </div>
            </div>
            <br/>
            <form className="regular f_24 frm_grounds">
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label>Tên đăng nhập</label>
                  <input type="text" className="form-control" ref="names" />
                </div>
                <div className="col-md-4 mb-3">
                  <label >Tên thành viên</label>
                  <input type="text" className="form-control" ref="location" />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label >Giới tính</label>
                  <input type="text" className="form-control" ref="img" />
                </div>
                <div className="col-md-4 mb-3">
                  <label >Số điện thoại</label>
                  <input type="text" className="form-control"/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-3 mb-3">
                  <label >Ghi chú</label>
                  <input type="text" className="form-control" ref="price" />
                </div>
                <div className="col-md-1 mb-1">
                  <label >Ngày sinh</label>
                  <input type="text" className="form-control" ref="hoursfree" />
                </div>
              </div>
              {/* <div className="form-row">
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
              </div> */}
              <button className="matchs__btnsz btn-primary" type="submit">Lưu</button>
            </form>
          </div>
          );
        }
      }
    
  