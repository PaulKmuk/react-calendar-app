import React, { Component } from 'react'

import './App.css';

import SidePanel from './components/SidePanel';
import TopPanel from './components/TopPanel';
import Pages from './components/Pages';


class App extends Component {

	state = { 
		_id: 100,
		showSidePanel: false,
		typesEvent: [
			{
				_id: 1,
				type: 'Spotknie z klientem',
				color: 'blueviolet'
			},
			{
				_id: 2,
				type: 'Trening',
				color: 'rgb(7, 95, 7)'
			},
			{
				_id: 3,
				type: 'Zakupy',
				color: 'blue'
			},
		],
		events: [
			{
				_id: 1,
				type: 'Trening',
				date: {
					day: 15,
					month: 6
				},
				time: '10:30',
				place: 'Rzeszów',
				otherInfo: '',
				color: 'rgb(7, 95, 7)'
			},
			{
				_id: 2,
				type: 'Spotkanie z klientem',
				date: {
					day: 23,
					month: 6
				},
				time: '11:30',
				place: 'Rzeszów',
				otherInfo: '',
				color: 'blueviolet'
			},
		]		
	}

	addEvent = (event) => {

		const typesEvent = [...this.state.typesEvent]
		let color 

		typesEvent.map(type => {
			if(type.type === event.type) {
				color = type.color
			}
		})

		const newEvent = {
			_id: this.state._id,
			type: event.type,
			date: event.date,
			time: event.time,
			place: event.place,
			otherInfo: event.otherInfo,
			color: color,
		}

		const events = [...this.state.events]
		events.push(newEvent)

		this.setState({
			events,
			_id: this.state._id + 1
		})
	}

	addTypeEvent = (type) => {
		const newType = {
			_id: this.state._id,
			type: type.type,
			color: type.color
		}

		const typesEvent = [...this.state.typesEvent]
		typesEvent.push(newType)

		this.setState({
			typesEvent,
			_id: this.state._id + 1
		})
	}

	toggleSidePanel = () => {
		this.setState({
			showSidePanel: !this.state.showSidePanel
		})
	}

	render() { 
		return ( 
			<div className='app'>
				{this.state.showSidePanel && (
					<SidePanel 
						addTypeEvent={(type) => this.addTypeEvent(type)}
						typesEvent={this.state.typesEvent}
					/>
				)}
				<div className='main'>
					<TopPanel 
						toggleSidePanel={() => this.toggleSidePanel()}
						/>
					<Pages 
						addEvent={(event) => this.addEvent(event)}
						events={this.state.events}
						typesEvent={this.state.typesEvent}
						/>
				</div>
			</div>
		 );
	}
}
 
export default App;
