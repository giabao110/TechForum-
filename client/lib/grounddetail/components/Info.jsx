import React from 'react';
import Step1 from './Step1';
import  Rate from '../../components/Rating';
import { withRouter } from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import { GroundsCol } from '../../../../imports/api/grounds';
import TextHistory1 from './TextHistory1.jsx';



class Info extends React.Component {
 
  renderGrounds = () =>{
    let groundss= this.props.groundss;
    return groundss.map((groundss) =><TextHistory1 key={groundss._id} grounds={groundss}/>)
  }


    render() {
        if(this.props.grounds.length === 0) return ''
        let ngaydang = moment(this.props.grounds[0].createdAt).format("MMM Do YY"); 
        this.props.grounds[0].createdAt = ngaydang;
        let myStr = this.props.grounds[0].content;
        return (
        <div>
          <title className="info__right-title title medium f_60">{this.props.grounds[0].namesta}</title>
          <span className="title f_22 g_3" >Người đăng: <span className=" gr f_24" >{this.props.grounds[0].username}</span>          
          <span className="info__right-hour f_22 g_3">  Ngày đăng:<span className="gr f_24">{this.props.grounds[0].createdAt}</span></span>
          </span>
        <div className="info">
        <div className="info__left">
          <img className="info__left-img" src={this.props.grounds[0].image} alt=""/>
          <div className="infoo">
          <hr className="info__right-rate-border"/>
          <a href="tags/apple/" className="Tinhte_XenTag_TagLink">Apple</a> cho biết họ sẽ nâng cấp phần mềm của <a href="tags/iphone/" className="Tinhte_XenTag_TagLink">iPhone</a> tại <a href="tags/trung-quoc/" className="Tinhte_XenTag_TagLink">Trung Quốc</a> trong thời gian tới để cố gắng giải quyết vấn đề tranh chấp pháp lý đe doạ ngăn công ty bán các dòng iPhone cũ hơn.<br />
<br />
Cùng với nhà cung cấp Chip lâu năm của họ - <a href="tags/qualcomm/" className="Tinhte_XenTag_TagLink">Qualcomm</a> đã đấu tranh trước toà về việc Apple sử dụng công nghệ của Qualcomm vào ngày 30 tháng 11 vừa qua. Toà án phán quyết Apple phải ngưng bán các mẫu iPhone cũ tại Trung Quốc vì nó đã <a href="tags/vi-pham/" className="Tinhte_XenTag_TagLink">vi phạm</a> 2 <a href="tags/bang-sang-che/" className="Tinhte_XenTag_TagLink">bằng sáng chế</a> của Qualcomm. <br />
<br />
Nhưng Apple cho biết họ sẽ không ngừng bán, họ đã lập luận rằng các điện thoại sẽ không chịu ảnh hưởng bởi phán quyết toà án vì họ đang chạy phần mềm mới cho các dòng iPhone, sẽ không còn liên quan đến vụ kiện trong phiên toà.<br />
<br />
Trong thứ 6 vừa qua, Apple phán quyết sẽ cập nhật phần mềm cho iPhone cũ tại Trung Quốc trong vòng 1 tuần tới để giải quyết mọi lo ngại, công ty nói vẫn sẽ tuân thủ theo đơn hàng tại Trung Quốc, sẽ không có chuyện ngưng bán các dòng iPhone cũ. Phần mềm mới sẽ thay đổi giao diện, chuyển đổi giữa các Apps, thay đổi kích thước và diện mạo của hình chụp.<br />
<br />
Don Rosenberg, phó chủ tịch điều hành và cố vấn của Qualcomm, người đã tuyên bố Apple vi phạm tại toà án:<br />
- &quot;Họ phải có nghĩa vụ pháp lý và phải ngưng bán iPhone tại Trung Quốc ngay lập tức&quot;<br />
Qualcomm tuần này đã yêu cầu Toà án Nhân dân trung cấp Phúc Châu thực thi lệnh <a href="tags/cam-ban/" className="Tinhte_XenTag_TagLink">cấm bán</a> cho Apple.<br />
<br />
Một luật sư của Qualcomm tại Trung Quốc nói với Thời Báo Tài chính tuần này rằng công ty cũng sẽ tìm kiếm lệnh cấm bán iPhone mới nhất của Apple chứ không chỉ các mẫu iPhone cũ, vì cho rằng họ cũng đang vi phạm bằng sáng chế của Qualcomm.<br />
<br />
          </div>
        </div>
        <div className="info__right">

            <div className="sectionground-div">
                      <div className="sectionground-div-tagdetail">
            {/* <Link to="/" className="sectionground-title bold g_3 f_30" href="/">CỘNG ĐỒNG</Link> */}
                <div className="sectionground-div-child">
                <div className="headerground__title">
                <span className="re g_3">CÓ THỂ BẠN QUAN TÂM</span>
        </div>
        <div className="headerground-wrap">
          {this.renderGrounds()}
        </div>
                </div>
             
            </div>
          </div>
       
        
         
          </div>
        </div>
        </div>
        );
      }
    }
  export default withRouter(withTracker((props) => {
    Meteor.subscribe('grounds');
    return {
      grounds: GroundsCol.find({_id: new Mongo.ObjectID(props.match.params.GroundID)}, { sort: { createdAt: -1 } }).fetch(),
      groundss: GroundsCol.find({}, { sort: { createdAt: -1} }).fetch(),  
    };
  })(Info)) 

