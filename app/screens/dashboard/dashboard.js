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
import {
    LineChart,
    PieChart,
    AreaChart,
    AreaSmoothedChart
} from '../../components/';
import {GradientButton} from '../../components/';


export class Dashboard extends React.Component {

    static navigationOptions = {
        title: 'Dashboard'.toUpperCase()
    };

    constructor(props) {
        super(props);
        this.data = {
            statItems: [
                {
                    name: 'Stars',
                    value: '4,512',
                    icon: 'github',
                    background: RkTheme.current.colors.info
                },
                {
                    name: 'Tweets',
                    value: '2,256',
                    icon: 'twitter',
                    background: RkTheme.current.colors.warning
                },
                {
                    name: 'Likes',
                    value: '1,124',
                    icon: 'facebook',
                    background: RkTheme.current.colors.primary
                },
            ]
        };
    }

    renderStatItem(item) {
        return (
            <View style={[styles.statItemContainer, {backgroundColor: item.background}]} key={item.name}>
                <View>
                    <RkText style={styles.statItemValue}>{item.value}</RkText>
                    <RkText style={styles.statItemName}>{item.name}</RkText>
                </View>
                <RkText rkType='awesome' style={styles.statItemIcon}>{FontAwesome[item.icon]}</RkText>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={styles.screen}>
                <View style={styles.statItems}>
                    {this.data.statItems.map(item => this.renderStatItem(item))}
                </View>
                <View style={styles.chartBlock}>
                    <LineChart/>
                </View>
                <View style={styles.chartBlock}>
                    <PieChart/>
                </View>
                <View style={styles.chartBlock}>
                    <AreaChart/>
                </View>
                <View style={styles.chartBlock}>
                    <AreaSmoothedChart/>
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
        marginTop: 10,
        paddingHorizontal: 10
    },
    statItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 3,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    chartBlock: {
        paddingVertical: 20,
        justifyContent: 'center'
    },
    statItemIcon: {
        alignSelf: 'center',
        marginHorizontal: 10,
        fontSize: 32,
        color: 'white',
    },
    statItemValue: {
        color: 'white',
        fontSize: 20
    },
    statItemName: {
        color: 'white',
        fontSize: 14,
    },
}));


