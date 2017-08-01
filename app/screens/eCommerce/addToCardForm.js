import React from 'react';
import {
	View,
	Keyboard
} from 'react-native';
import {
	RkText,
	RkTextInput,
	RkStyleSheet,
	RkAvoidKeyboard
} from 'react-native-ui-kitten';
import {GradientButton} from '../../components/';
import {PasswordTextInput} from '../../components/passwordTextInput';

export class AddToCardForm extends React.Component {
	static navigationOptions = {
		title: 'Add To Card'.toUpperCase()
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<RkAvoidKeyboard
				style={styles.screen}
				onStartShouldSetResponder={(e) => true}
				onResponderRelease={(e) => Keyboard.dismiss()}>
				<View style={[styles.formContent]}>
					<View>
						<View>
							<View style={[styles.textRow]}>
								<RkText rkType='subtitle'>Card Number</RkText>
							</View>
							<PasswordTextInput/>
						</View>

						<View style={[styles.content]}>
							<View style={[styles.textRow]}>
								<RkText rkType='subtitle'>Expire date</RkText>
							</View>
							<View style={[styles.expireDateBlock]}>
								<RkTextInput style={[styles.expireDateInput]} rkType='rounded'/>
								<View style={[styles.expireDateDelimiter]}/>
								<RkTextInput style={[styles.expireDateInput]} rkType='rounded'/>
							</View>
						</View>

						<View style={[styles.content]}>
							<View style={[styles.textRow]}>
								<RkText rkType='subtitle'>Name On Card</RkText>
							</View>
							<RkTextInput rkType='rounded'/>
						</View>

						<View style={[styles.content]}>
							<View style={[styles.textRow]}>
								<RkText rkType='subtitle'>Card Code</RkText>
							</View>
							<PasswordTextInput/>
						</View>
					</View>
					<View>
						<GradientButton rkType='large' text='ADD TO CARD' onPress={() => {
							this.props.navigation.goBack()
						}}/>
					</View>
				</View>
			</RkAvoidKeyboard>
		)
	}
}

let styles = RkStyleSheet.create(theme => ({
	screen: {
		padding: 15,
		flex: 1,
		backgroundColor: theme.colors.screen.base
	},
	content: {
		marginTop: 10
	},
	formContent: {
		justifyContent: 'space-between',
		flexDirection: 'column',
		flex: 1
	},
	textRow: {
		marginLeft: 20
	},
	expireDateBlock: {
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	expireDateInput: {
		flex: 0.48
	},
	expireDateDelimiter: {
		flex: 0.04
	},
}));