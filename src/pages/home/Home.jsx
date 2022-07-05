import React, { Component } from 'react';
import './home.scss';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData, userOptions} from '../../dummyData';
import {WidgetSm} from '../../components/widgetSm/WidgetSm';
import {WidgetLg} from '../../components/widgetLg/WidgetLg';

const userAnalyticsTitle = 'User Analytics';


export default class Home extends Component {

	render() {
		return (
			<div className="home">
				<FeaturedInfo  />
				<Chart dataKey={userOptions} data={userData} title={userAnalyticsTitle}/>
				<div className="homeWidgets">
					<WidgetSm />
					<WidgetLg />
				</div>
			</div>
		);
	}
}
