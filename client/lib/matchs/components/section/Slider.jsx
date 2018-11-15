import 'rc-tabs/assets/index.css';
import React from 'react';
import Tabs, { TabPane } from 'rc-tabs/lib';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '',
      key:'',
      today: moment().format('DD'),
    };
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  }

  onTabClick = (key) => {
    const KEY = `${key}`; 
    if (key === this.state.activeKey) {  
      this.setState({
        activeKey: '',
      });
    }
    this.props.handlegetDay(KEY)
  }

  render() {
    return (
      <div>
      <hr className="hr_slider" />
      <Tabs
        renderTabBar={() =>
        <ScrollableInkTabBar onTabClick={this.onTabClick}/>
        }
        renderTabContent={() => 
        <TabContent/>
        }
        activeKey={this.state.activeKey}
        onChange={this.onChange}
        today = {this.state.today}
        >
        <TabPane tab={
        <p className="today">Today</p>
        } key="">
        <hr className="hr_sliderdown"/>
        <br/>
        <div className="section__div-row">
          {this.props.matchs}
        </div>
        </TabPane>
        <TabPane tab={1} key="01">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={2} key="02">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={3} key="03">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={4} key="04">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={5} key="05">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={6} key="06">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={7} key="07">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={8} key="08">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={9} key="09">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={10} key="10">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={11} key="11">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={12} key="12">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={13} key="13">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={14} key="14">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={15} key="15">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={16} key="16">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={17} key="17">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={18} key="18">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={19} key="19">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={20} key="20">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={21} key="21">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={22} key="22">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={23} key="23">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={24} key="24">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={25} key="25">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={26} key="26">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={27} key="27">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={28} key="28">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={29} key="29">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
        <TabPane tab={30} key="30">
          <hr className="hr_sliderdown"/>
          <br/>
          <div className="section__div-row">
            {this.props.matchs}
          </div>
        </TabPane>
      </Tabs>
    </div>
    );
  }
}
