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

		this.data = [
			{ data: [{ name: 'Show finished tasks' }], title: 'List Items' },
			{ data: [{ name: 'Color' }], title: 'Theme' },
			{ data: [{ name: 'Approaching due date' }], title: 'Notification' },
		];

		this.renderRow = this.renderRow.bind(this);
	}

	async componentDidMount() {
		try {
			const settings = await AsyncStorage.getItem('setting');

			if (settings)
				this.props.initStore(JSON.parse(settings));

		} catch (e) {
			console.log('Error reading settings from redux ', e);
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
						value={this.props.visible}
						onValueChange={(v) => this.props.changeVisibility(v)}
					/>
				</View>
			);

			//	TODO pick the color of the top bar
		} else if (section.title === 'Theme') {
			return (
				<View style={Style.colorItemView}>
					<Text style={Style.listItemText}>{item.name}</Text>
					<Text style={{ alignSelf: 'flex-end', fontSize: 12 }}>{this.props.color}</Text>
				</View>
			);

		} else {
			return (
				<View style={Style.notificationItemView}>
					<Text style={Style.listItemText}>{item.name}</Text>
					<Switch
						style={Style.toggleSwitch}
						value={false} //TODO
						// onValueChange={(v) => this.toggleFlag('notify', v)} //TDOD
					/>
				</View>
			);
		}
	}

	render() {
		return (
			<SafeAreaView style={Style.container}>
				<TimeAndTitle style={Style.todayCard} title="Settings"/>
				<View style={Style.settingsList}>
					<SectionList
						keyExtractor={(item, index) => index}
						renderItem={this.renderRow}
						renderSectionHeader={({ section }) => <Header title={section.title} />}
						sections={this.data}
					/>
				</View>
			</SafeAreaView>
		);
	}
}
