import React from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';
import {
    RkComponent,
    RkText,
    RkTheme,
    RkStyleSheet
} from 'react-native-ui-kitten';

import {
    VictoryPie,
    VictoryChart,
    VictoryLabel,
    VictoryAxis
} from "victory-native";

import Svg from 'react-native-svg';

export class DoughnutChart extends RkComponent {

    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            data: [
                {
                    x: 1,
                    y: 240,
                    title: '24%',
                    name: 'Likes',
                    color: RkTheme.current.colors.charts.doughnut[0],
                },
                {
                    x: 2,
                    y: 270,
                    title: '27%',
                    name: 'Comments',
                    color: RkTheme.current.colors.charts.doughnut[1],
                },
                {
                    x: 3,
                    y: 170,
                    title: '17%',
                    name: 'Shares',
                    color: RkTheme.current.colors.charts.doughnut[2],
                },
                {
                    x: 4,
                    y: 320,
                    title: '32%',
                    name: 'People',
                    color: RkTheme.current.colors.charts.doughnut[3],
                }
            ]
        }
    }

    computeColors() {
        return this.state.data.map(i => i.color)
    }

    handlePress(e, props) {
        this.setState({
            selected: props.index
        })
    }

    render() {
        return (
            <View>
                <RkText rkType='header4'>AUDIENCE OVERVIEW</RkText>
                <View style={{alignSelf: 'center'}}>
                    <Svg width={300} height={300} viewBox="0 0 400 400" style={{ width: "100%", height: "auto" }}>
                        <VictoryPie
                            labels={[]}
                            colorScale={this.computeColors()}
                            data={this.state.data}
                            standalone={false}
                            innerRadius={80}
                            events={[{
                                target: "data",
                                eventHandlers: {
                                    onPressIn: (evt, props) => this.handlePress(evt, props)
                                }
                            }]}>
                        </VictoryPie>
                        <VictoryLabel
                            textAnchor="middle" verticalAnchor="middle"
                            x={200} y={200}
                            text={this.state.data[this.state.selected].title}
                            style={{
                                fontSize: 45,
                                fontFamily: RkTheme.current.fonts.family.regular,
                                stroke: RkTheme.current.colors.text.base,
                                fill: RkTheme.current.colors.text.base,
                            }}
                        />
                    </Svg>
                </View>
                <View style={styles.legendContainer}>
                    {this.state.data.map(item => {
                        return (
                            <View key={item.name} style={styles.legendItem}>
                                <View style={[styles.itemBadge, {backgroundColor: item.color}]}/>
                                <RkText rkType="primary3">{item.name}</RkText>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    legendContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemBadge: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 5
    }
}));