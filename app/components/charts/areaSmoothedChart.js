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

export class AreaSmoothedChart extends RkComponent {

    constructor(props) {
        super(props);
        this.state = {
            opacityTrigger: true,
            data: [
                [
                    {x: 1, y: 1, key: 0},
                    {x: 2, y: 3, key: 1},
                    {x: 3, y: 1, key: 2},
                    {x: 4, y: 2, key: 3},
                    {x: 5, y: 2, key: 4},
                    {x: 6, y: 3, key: 5},
                    {x: 7, y: 2, key: 6}
                ],
                [
                    {x: 1, y: 2, key: 0},
                    {x: 2, y: 1, key: 1},
                    {x: 3, y: 3, key: 2},
                    {x: 4, y: 3, key: 3},
                    {x: 5, y: 1, key: 4},
                    {x: 6, y: 2, key: 5},
                    {x: 7, y: 1, key: 6}
                ]
            ]
        }
    }

    handlePress(){
        console.log('press');
        let newData = this.state.data.map(data => {
            return data.map(item => {
                item.y = Math.floor(Math.random() * 3) + 1;
                return item
            })
        });
        this.setState({
            data: newData,
            opacityTrigger: !this.state.opacityTrigger
        })
    }



    render() {
        return (
            <View>
                <VictoryChart padding={{left: 20, right: 20, top: 20}}
                              animate={{duration: 400}}
                >
                    <VictoryAxis
                        tickValues={[]}
                        style={{
                            axis: {stroke: "transparent"},
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickValues={['', '2013', '2014', '2015', '2016',  '']}
                        style={{
                            axis: {stroke: "transparent"},
                            grid: {stroke: RkTheme.current.colors.disabled, strokeWidth: 0.5},
                            tickLabels: {
                                fontSize: 14,
                                stroke: "transparent",
                                fill: "transparent",
                                strokeWidth: 0.5
                            }
                        }}
                    />
                    <VictoryArea
                        interpolation="natural"
                        style={{
                            data: {
                                fill: RkTheme.current.colors.danger,
                                fillOpacity: this.state.opacityTrigger ? 0.2 : 0.4,
                                stroke: RkTheme.current.colors.dangerActive,
                                strokeOpacity: 0.8,
                                strokeWidth: 1.5
                            }
                        }}
                        events={[{
                                  target: "data",
                                  eventHandlers: {
                                      onPressIn: (evt, props) => this.handlePress(evt, props)
                                  }
                              }]}
                        data={this.state.data[0]}
                    />
                    <VictoryArea
                        interpolation="natural"
                        events={[{
                                  target: "data",
                                  eventHandlers: {
                                      onPressIn: (evt, props) => this.handlePress(evt, props)
                                  }
                              }]}
                        style={{
                            data: {
                                fill: RkTheme.current.colors.warning,
                                fillOpacity: this.state.opacityTrigger ? 0.4 : 0.2,
                                stroke: RkTheme.current.colors.warningActive,
                                strokeOpacity: 0.8,
                                strokeWidth: 1.5
                            }
                        }}
                        data={this.state.data[1]}
                    />
                </VictoryChart>
            </View>
        )
    }
}
