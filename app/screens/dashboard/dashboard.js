import React from 'react';
import {
    View,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import {
    RkText,
    RkCard,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';
import {StockLineChart} from '../../components/';
import {GradientButton} from '../../components/';


export class Dashboard extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.data = {
            statItems: [
                {
                    name: 'Users',
                    value: 228,
                    icon: 'twitter',
                    gradientColors: RkTheme.current.colors.gradients.visa
                },
                {
                    name: 'Income',
                    value: 1470,
                    icon: 'google',
                    gradientColors: RkTheme.current.colors.gradients.mastercard
                },
                {
                    name: 'Percents',
                    value: '88%',
                    icon: 'facebook',
                    gradientColors: RkTheme.current.colors.gradients.axp
                },
            ]
        };
    }

    renderStatItem(item) {
        return (
            <GradientButton rkType='statItem' key={item.name} colors={item.gradientColors}>
                <View style={styles.statItemContainer}>
                    <RkText rkType='awesome' style={styles.statItemIcon}>{FontAwesome[item.icon]}</RkText>
                    <View>
                        <RkText style={styles.statItemValue}>{item.value}</RkText>
                        <RkText style={styles.statItemName}>{item.name}</RkText>
                    </View>
                </View>
            </GradientButton>
        )
    }

    render() {
        return (
            <ScrollView style={styles.screen}>
                <View style={styles.headBlock}>
                    <RkCard rkType='backImg'>
                        <Image rkCardImg source={require('../../data/img/photo4.png')}/>
                        <View rkCardImgOverlay rkCardContent style={{justifyContent: 'flex-end'}}>
                            <RkText rkType='header2 inverseColor'>DashBoard</RkText>
                            <RkText rkType='secondary2 inverseColor'>second</RkText>
                        </View>
                    </RkCard>
                </View>
                <View style={styles.statItems}>
                    {this.data.statItems.map(item => this.renderStatItem(item))}
                </View>
                <View style={styles.chartBlock}>
                    <StockLineChart/>
                </View>
            </ScrollView>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    screen: {
        backgroundColor: theme.colors.screen.base
    },
    headBlock: {},
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginHorizontal: 5
    },
    statItems: {
        flexDirection: 'row',
        marginTop: 10
    },
    statItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    chartBlock: {
        paddingVertical: 20
    },
    statItemIcon: {
        // TODO color
        alignSelf: 'center',
        marginHorizontal: 10,
        color: 'white',
    },
    statItemValue: {
        color: 'white',
        fontSize: 16
    },
    statItemName: {
        color: 'white',
        fontSize: 16,
    },
}));


