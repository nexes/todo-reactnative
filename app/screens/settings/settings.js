import React from 'react';
import { TimeAndTitle } from '../../component/titlecard';
import { Header } from '../../component/header';
import { Style } from './style';
import {
	SafeAreaView,
	SectionList,
	Text,
	Switch,
	View,
} from 'react-native';


export class Settings extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			completedFlag: false,
			notifyFlag: false,
		};

		this.data = [
			{ data: [{ name: 'Show finished tasks' }], title: 'List Items' },
			{ data: [{ name: 'Color' }], title: 'Theme' },
			{ data: [{ name: 'Approaching due date' }], title: 'Notification' },
		];

		this.renderRow = this.renderRow.bind(this);
		this.toggleFlag = this.toggleFlag.bind(this);
	}

	toggleFlag(flag, value) {
		if (flag === 'complete') {
			this.setState({ completedFlag: value });

		} else if (flag === 'notify') {
			this.setState({ notifyFlag: value });
		}
	}

	//	This is a quick hack, we need to abstract our row items into a component.
	renderRow({ item, section }) {
		if (section.title === 'List Items') {
			return (
				<View style={Style.listItemView}>
					<Text style={Style.listItemText}>{item.name}</Text>
					<Switch
						style={Style.toggleSwitch}
						value={this.state.completedFlag}
						onValueChange={(v) => this.toggleFlag('complete', v)}
					/>
				</View>
			);

		} else if (section.title === 'Theme') {
			return (
				<View style={Style.colorItemView}>
					<Text style={Style.listItemText}>{item.name}</Text>
					<Text style={{ alignSelf: 'flex-end', fontSize: 12 }}>color</Text>
				</View>
			);

		} else {
			return (
				<View style={Style.notificationItemView}>
					<Text style={Style.listItemText}>{item.name}</Text>
					<Switch
						style={Style.toggleSwitch}
						value={this.state.notifyFlag}
						onValueChange={(v) => this.toggleFlag('notify', v)}
					/>
				</View>
			);
		}
	}

	renderHeader({ section }) {
		return <Header title={section.title} />;
	}

	render() {
		return (
			<SafeAreaView style={Style.container}>
				<TimeAndTitle style={Style.todayCard} title="Settings"/>
				<View style={Style.settingsList}>
					<SectionList
						keyExtractor={(item, index) => index}
						renderItem={this.renderRow}
						renderSectionHeader={this.renderHeader}
						sections={this.data}
					/>
				</View>
			</SafeAreaView>
		);
	}
}