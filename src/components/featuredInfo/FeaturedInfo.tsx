import React, { Component } from 'react';
import './featuredInfo.scss';
import { ArrowDownwardOutlined,ArrowUpwardOutlined } from '@mui/icons-material';

export default class FeaturedInfo extends Component {
	render() {
		return (
			<div className="featured">
				<div className="featuredItem widget">
					<span className="featuredTitle">Revanue</span>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">$2,415</span>
						<span className="featuredMoneyRate">-11.4 
						<ArrowDownwardOutlined className="featuredIcon negative" /></span>
					</div>
					<span className="featuredSub">Compared to last month</span>
				</div>
				<div className="featuredItem widget">
					<span className="featuredTitle">Sales</span>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">$4,415</span>
						<span className="featuredMoneyRate">-1.4 
						<ArrowDownwardOutlined className="featuredIcon negative" /></span>
					</div>
					<span className="featuredSub">Compared to last month</span>
				</div>
				<div className="featuredItem widget">
					<span className="featuredTitle">Cost</span>
					<div className="featuredMoneyContainer">
						<span className="featuredMoney">$2,225</span>
						<span className="featuredMoneyRate">2.4 
						<ArrowUpwardOutlined className="featuredIcon"/></span>
					</div>
					<span className="featuredSub">Compared to last month</span>
				</div>
			</div>
		);
	}
}
