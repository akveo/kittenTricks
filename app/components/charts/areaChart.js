import React from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';
import {
    RkComponent,
    RkButton,
    RkTheme
} from 'react-native-ui-kitten';

import {
    VictoryChart,
    VictoryAxis,
    VictoryArea,
} from "victory-native";

import {
    Svg
} from 'react-native-svg';

export class AreaChart extends RkComponent {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            data: [
                [
                    {x: 1, y: 2},
                    {x: 2, y: 3},
                    {x: 3, y: 5},
                    {x: 4, y: 4},
                    {x: 5, y: 7},
                    {x: 6, y: 6},
                    {x: 7, y: 5},
                    {x: 8, y: 7},
                    {x: 9, y: 3},
                    {x: 10, y: 4},
                    {x: 11, y: 3},
                    {x: 12, y: 5}
                ], [{
                    "x": 1,
                    "y": 3
                }, {
                    "x": 2,
                    "y": 2
                }, {
                    "x": 3,
                    "y": 2
                }, {
                    "x": 4,
                    "y": 7
                }, {
                    "x": 5,
                    "y": 3
                }, {
                    "x": 6,
                    "y": 3
                }, {
                    "x": 7,
                    "y": 3
                }, {
                    "x": 8,
                    "y": 7
                }, {
                    "x": 9,
                    "y": 2
                }, {
                    "x": 10,
                    "y": 3
                }, {
                    "x": 11,
                    "y": 8
                }, {
                    "x": 12,
                    "y": 8
                }],
                [{
                    "x": 1,
                    "y": 2
                }, {
                    "x": 2,
                    "y": 7
                }, {
                    "x": 3,
                    "y": 3
                }, {
                    "x": 4,
                    "y": 5
                }, {
                    "x": 5,
                    "y": 3
                }, {
                    "x": 6,
                    "y": 8
                }, {
                    "x": 7,
                    "y": 6
                }, {
                    "x": 8,
                    "y": 8
                }, {
                    "x": 9,
                    "y": 5
                }, {
                    "x": 10,
                    "y": 7
                }, {
                    "x": 11,
                    "y": 5
                }, {
                    "x": 12,
                    "y": 8
                }],
                [{
                    "x": 1,
                    "y": 2
                }, {
                    "x": 2,
                    "y": 4
                }, {
                    "x": 3,
                    "y": 6
                }, {
                    "x": 4,
                    "y": 5
                }, {
                    "x": 5,
                    "y": 8
                }, {
                    "x": 6,
                    "y": 8
                }, {
                    "x": 7,
                    "y": 8
                }, {
                    "x": 8,
                    "y": 6
                }, {
                    "x": 9,
                    "y": 6
                }, {
                    "x": 10,
                    "y": 4
                }, {
                    "x": 11,
                    "y": 2
                }, {
                    "x": 12,
                    "y": 6
                }],
                [{
                    "x": 1,
                    "y": 4
                }, {
                    "x": 2,
                    "y": 4
                }, {
                    "x": 3,
                    "y": 5
                }, {
                    "x": 4,
                    "y": 3
                }, {
                    "x": 5,
                    "y": 8
                }, {
                    "x": 6,
                    "y": 5
                }, {
                    "x": 7,
                    "y": 7
                }, {
                    "x": 8,
                    "y": 8
                }, {
                    "x": 9,
                    "y": 6
                }, {
                    "x": 10,
                    "y": 3
                }, {
                    "x": 11,
                    "y": 4
                }, {
                    "x": 12,
                    "y": 3
                }]
            ]
        }
    }

    renderLabelButton(text, i){
        return (
            <RkButton onPress={() => this.changeData(i)} rkType="clear link">{text}</RkButton>
        )
    }

    changeData(i){
        this.setState({
            selected: i
        })
    }

    render() {
        return (
            <View>
                <VictoryChart padding={{left: 70, right: 50, top: 50}} animate={{duration: 400}}>
                    <VictoryAxis
                        tickValues={[]}
                        style={{
                            axis: {stroke: "transparent"},
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickValues={['$100', '$200', '$300', '$400', '$500', '$600', '$700', '$800']}
                        style={{
                            axis: {stroke: "transparent"},
                            grid: {stroke: RkTheme.current.colors.disabled, strokeWidth: 0.5},
                            tickLabels: {
                                fontSize: 14,
                                stroke: RkTheme.current.colors.disabled,
                                fill: RkTheme.current.colors.disabled,
                                strokeWidth: 0.5
                            }
                        }}
                    />
                    <VictoryArea
                        style={{
                            data: {
                                fill: RkTheme.current.colors.success,
                                fillOpacity: 0.05,
                                stroke: RkTheme.current.colors.successActive,
                                strokeOpacity: 0.8,
                                strokeWidth: 1.5
                            }
                        }}
                        data={this.state.data[this.state.selected]}
                    />
                </VictoryChart>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    {this.renderLabelButton('MON', 0)}
                    {this.renderLabelButton('TUE', 1)}
                    {this.renderLabelButton('WED', 2)}
                    {this.renderLabelButton('THU', 3)}
                    {this.renderLabelButton('FRI', 4)}
                </View>
            </View>
        )
    }
}
