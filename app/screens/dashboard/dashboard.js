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
    ProgressChart,
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
                    <PieChart/>
                </View>
                <View style={styles.chartBlock}>
                    <AreaChart/>
                </View>
                <View style={styles.chartBlock}>
                    <ProgressChart/>
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
        backgroundColor: theme.colors.screen.alter,
        paddingHorizontal: 15,
    },
    statItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    statItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 3,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    statItemIcon: {
        alignSelf: 'center',
        marginLeft: 10,
        fontSize: 30,
        width: 30,
        color: 'white',
    },
    statItemValue: {
        color: 'white',
        fontSize: 18
    },
    statItemName: {
        color: 'white',
        fontSize: 14,
    },
    chartBlock: {
        padding: 15,
        marginBottom: 15,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
}));


