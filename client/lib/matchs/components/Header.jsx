import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.sortrate = React.createRef();
    this.search = React.createRef();
  }

  handleSearch = (event)=>{
    event.preventDefault();
    const text = this.search.current.value;
    this.props.onClickSearchGo(text);
  }

  handleSortRate(event){
    event.preventDefault();
    const rate = this.sortrate.current.value;
    this.props.onClickSortRate(rate);
  }

    render() {
      return (
        <div className="header__">
          <div className="header__left">
            <div className="regular f_70">
              <span>DIỄN ĐÀN</span>
            </div>
            <div className="header__box">
              <div className="header__col-nearest ">
                <div className="input-group">
                  <select className="regular header__border f_24">
                    <option value="1">Bài viết gần đây</option>
                    <option value="2">Nearest</option>
                    <option value="3">Nearest</option>
                  </select>
                </div>
              </div>
              <div className="header__col-rating ">
                <div className="input-group">
                  <select className="regular header__border f_24" ref={this.sortrate} onChange={this.handleSortRate.bind(this)}>
                    <option value="">Đánh giá</option>
                    <option value="1" >1</option>
                    <option value="1.5" >1.5</option>
                    <option value="2" >2</option>
                    <option value="2.5" >2.5</option>
                    <option value="3" >3</option>
                    <option value="3.5" >3.5</option>
                    <option value="4" >4</option>
                    <option value="4.5" >4.5</option>
                    <option value="5" >5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="header__right">
            <input onChange={this.handleSearch} className="header__search regular f_22" list="matchs" type="search" placeholder="Tìm kiếm chủ đề" ref={this.search} />
            {/* <button type="button" className="header_button regular f_28">Quick Match</button> */}
          </div>
        </div>
      );
    }
  }

