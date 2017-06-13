import React from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';
import {
    RkComponent,
    RkButton,
    RkTheme,
    RkText
} from 'react-native-ui-kitten';

import {
    VictoryChart,
    VictoryAxis,
    VictoryArea,
    VictoryPortal,
    VictoryScatter,
    VictoryGroup
} from "victory-native";

import {
    Svg
} from 'react-native-svg';

export class AreaChart extends RkComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {x: 1, y: 1},
                {x: 2, y: 2},
                {x: 3, y: 1},
                {x: 4, y: 2},
                {x: 5, y: 3},
                {x: 6, y: 3},
                {x: 7, y: 4},
            ]
        }
    }

    renderLabelButton(text, i) {
        return (
            <RkButton onPress={() => this.changeData(i)} rkType="clear link">{text}</RkButton>
        )
    }

    changeData(i) {
        this.setState({
            selected: i
        })
    }

    render() {
        return (
            <View>
                <RkText rkType='header4'>VISITORS</RkText>
                <VictoryChart padding={{top: 50, bottom: 50, left: 35, right: 10}} width={300}>
                    <VictoryAxis
                        tickValues={['Sun', 'Mon', 'Tue', ' Wed', 'Thu', 'Fri', 'Sat']}
                        style={{
                            axis: {stroke: "transparent"},
                            tickLabels: {
                                fontSize: 14,
                                stroke: RkTheme.current.colors.text.secondary,
                                fill: RkTheme.current.colors.text.secondary,
                                strokeWidth: 0.5
                            }
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickValues={['50', '100', '150', '200']}
                        style={{
                            axis: {stroke: "transparent"},
                            grid: {stroke: RkTheme.current.colors.disabled, strokeWidth: 0.5},
                            tickLabels: {
                                fontSize: 14,
                                stroke: RkTheme.current.colors.text.secondary,
                                fill: RkTheme.current.colors.text.secondary,
                                strokeWidth: 0.5
                            }
                        }}
                    />
                    <VictoryGroup data={this.state.data}>
                        <VictoryArea
                            style={{
                                data: {
                                    fill: RkTheme.current.colors.info,
                                    fillOpacity: 0.05,
                                    stroke: RkTheme.current.colors.infoActive,
                                    strokeOpacity: 0.8,
                                    strokeWidth: 1.5
                                }
                            }}
                        />
                        <VictoryScatter
                            style={{data: {
                                fill: "white",
                                stroke: RkTheme.current.colors.infoActive,
                                strokeOpacity: 0.8,
                                strokeWidth: 1.5
                            }}}
                        />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        )
    }
}
