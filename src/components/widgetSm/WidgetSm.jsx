import React, { Component } from 'react';
import './widgetSm.scss';
import {VisibilityOutlined} from '@mui/icons-material';

export  class WidgetSm extends Component {
	render() {
		return (
			<div className="widgetSm widget">
				<span className="widgetSmTitle">New Join Members</span>
				<ul className="widgetSmList">
				<li className="widgetSmListItem">
					<img className="widgetSmImg" src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg" alt="" />
				    <div className="widgetSmUser">
				    	<span className="widgetSmUserName">Anna Keller</span>
				    	<span className="widgetSmUserTitle">Software Engeneer</span>
				    </div>
				    <button className="widgetSmButton">
				    	<VisibilityOutlined className="widgetSmBtnIcon" />
				    	Display
				    </button>
				</li>	<li className="widgetSmListItem">
					<img className="widgetSmImg" src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg" alt="" />
				    <div className="widgetSmUser">
				    	<span className="widgetSmUserName">Anna Keller</span>
				    	<span className="widgetSmUserTitle">Software Engeneer</span>
				    </div>
				    <button className="widgetSmButton">
				    	<VisibilityOutlined className="widgetSmBtnIcon" />
				    	Display
				    </button>
				</li>	<li className="widgetSmListItem">
					<img className="widgetSmImg" src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg" alt="" />
				    <div className="widgetSmUser">
				    	<span className="widgetSmUserName">Anna Keller</span>
				    	<span className="widgetSmUserTitle">Software Engeneer</span>
				    </div>
				    <button className="widgetSmButton">
				    	<VisibilityOutlined className="widgetSmBtnIcon" />
				    	Display
				    </button>
				</li>	<li className="widgetSmListItem">
					<img className="widgetSmImg" src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg" alt="" />
				    <div className="widgetSmUser">
				    	<span className="widgetSmUserName">Anna Keller</span>
				    	<span className="widgetSmUserTitle">Software Engeneer</span>
				    </div>
				    <button className="widgetSmButton">
				    	<VisibilityOutlined className="widgetSmBtnIcon" />
				    	Display
				    </button>
				</li>	<li className="widgetSmListItem">
					<img className="widgetSmImg" src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg" alt="" />
				    <div className="widgetSmUser">
				    	<span className="widgetSmUserName">Anna Keller</span>
				    	<span className="widgetSmUserTitle">Software Engeneer</span>
				    </div>
				    <button className="widgetSmButton">
				    	<VisibilityOutlined className="widgetSmBtnIcon" />
				    	Display
				    </button>
				</li>
				</ul>
			</div>
		);
	}
}
