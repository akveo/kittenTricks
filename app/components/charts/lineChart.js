import React from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';
import {
    RkComponent,
    RkTheme
} from 'react-native-ui-kitten';

import {
    VictoryChart,
    VictoryAxis,
    VictoryLine,
} from "victory-native";



export class LineChart extends RkComponent {

    componentName = 'Avatar';
    typeMapping = {
        options: {},
    };

    constructor(props) {
        super(props);
        this.state = {
            lineToUpdate: 0,
            lineUpdated: false,
            lines: [
                {
                    data: [
                        {x: 1, y: 3, key: 0},
                        {x: 2, y: 5, key: 1},
                        {x: 3, y: 3, key: 2},
                        {x: 4, y: 4, key: 3},
                        {x: 5, y: 4, key: 4},
                        {x: 6, y: 6, key: 5},
                        {x: 7, y: 4, key: 6}
                    ],
                    color: RkTheme.current.colors.gradients.axp,
                    colorIndex: 0
                },
                {
                    data: [
                        {x: 1, y: 4, key: 0},
                        {x: 2, y: 3, key: 1},
                        {x: 3, y: 5, key: 2},
                        {x: 4, y: 6, key: 3},
                        {x: 5, y: 2, key: 4},
                        {x: 6, y: 4, key: 5},
                        {x: 7, y: 2, key: 6}
                    ],
                    color: RkTheme.current.colors.gradients.visa,
                    colorIndex: 0
                },
                {
                    data: [
                        {x: 1, y: 6, key: 0},
                        {x: 2, y: 4, key: 1},
                        {x: 3, y: 5, key: 2},
                        {x: 4, y: 2, key: 3},
                        {x: 5, y: 5, key: 4},
                        {x: 6, y: 3, key: 5},
                        {x: 7, y: 5, key: 6}
                    ],
                    color: RkTheme.current.colors.gradients.mastercard,
                    colorIndex: 0
                },
                {
                    data: [
                        {x: 1, y: 1, key: 0},
                        {x: 2, y: 7, key: 1},
                    ],
                    color: ['transparent'],
                    colorIndex: 0
                }

            ]
        };
    }

    componentDidMount() {
        this.setStateInterval = setInterval(() => {
            let newState = {};
            let lines = this.state.lines;
            if (this.state.lineUpdated) {
                lines[this.state.lineToUpdate].colorIndex = 0;
                newState.lineToUpdate = this.state.lineToUpdate + 1;
                newState.lineToUpdate = newState.lineToUpdate == 3 ? 0 : newState.lineToUpdate;
            } else {
                lines[this.state.lineToUpdate].colorIndex = 1;
            }
            newState.lineUpdated = !this.state.lineUpdated;
            this.setState(newState);
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.setStateInterval);
    }

    renderLine(line) {
        return (
            <VictoryLine
                style={{
                    data: {
                        stroke: line.color[line.colorIndex],
                        strokeWidth: 3
                    },
                }}
                interpolation="natural"
                data={line.data}
            />
        )
    }


    render() {
        return (

            <VictoryChart padding={{bottom: 20}}
                          scale="time"
                          height={120}
                          animate={{duration: 500}}
                          easing="linear">
                <VictoryAxis
                    tickValues={['', '2013', '2014', '2015', '2016', '2017', '']}
                    style={{
                        axis: {stroke: "transparent"},
                        grid: {stroke: RkTheme.current.colors.disabled},
                        tickLabels: {
                            fontSize: 14,
                            padding: 5,
                            stroke: RkTheme.current.colors.disabled,
                            strokeWidth: 0.7
                        }
                    }}
                />
                <VictoryAxis dependentAxis style={{
                    axis: {stroke: "transparent"},
                    grid: {stroke: RkTheme.current.colors.disabled}
                }}/>
                {this.renderLine(this.state.lines[0])}
                {this.renderLine(this.state.lines[1])}
                {this.renderLine(this.state.lines[2])}
                {this.renderLine(this.state.lines[3])}
            </VictoryChart>

        )
    }
}
