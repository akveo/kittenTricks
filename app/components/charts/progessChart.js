import React from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';
import {
    RkComponent,
    RkText,
    RkTheme
} from 'react-native-ui-kitten';

import {
    VictoryPie,
    VictoryChart,
    VictoryLabel,
    VictoryAxis
} from "victory-native";


export class ProgressChart extends RkComponent {

    typeMapping = {
        options: {},
    };

    constructor(props) {
        super(props);
        this.state = {
            percents: 72
        }
    }

    componentDidMount() {
        this.setStateInterval = setInterval(() => {
            let positive = Math.random() > 0.5;
            if (this.state.percents > 95) {
                positive = false
            } else if (this.state.percents < 60) {
                positive = true
            }
            this.setState({
                percents: positive ? this.state.percents + 1 : this.state.percents - 1
            });
        }, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.setStateInterval);
    }

    getData() {
        return [{x: 1, y: this.state.percents}, {x: 2, y: 100 - this.state.percents}]
    }

    render() {
        return (
            <View>
                <RkText rkType='header4'>FOLLOWERS</RkText>
                <View style={{flexDirection: 'row', justifyContent: 'space-around' ,alignItems: 'center', marginTop: 10}}>
                    <VictoryChart animate={400} padding={0} width={150} height={150}>
                        <VictoryAxis dependentAxis
                                     style={{
                                         axis: {stroke: "transparent"},
                                         tickLabels: {
                                             stroke: 'transparent',
                                             fill: 'transparent'
                                         }
                                     }}
                        />
                        <VictoryAxis
                            style={{
                                axis: {stroke: "transparent"},
                                tickLabels: {
                                    stroke: 'transparent',
                                    fill: 'transparent'
                                }
                            }}
                        />
                        <VictoryPie
                            labels={[]}
                            style={{
                                data: {
                                    fill: (d) => {
                                        const color = RkTheme.current.colors.charts.followersProgress;
                                        return d.x === 1 ? color : "transparent";
                                    }
                                }
                            }}
                            data={this.getData()}
                            cornerRadius={25}
                            innerRadius={50}>
                        </VictoryPie>
                        <VictoryLabel
                            textAnchor="middle" verticalAnchor="middle"
                            x={75} y={75}
                            text={`+${this.state.percents}%` }
                            style={{
                                fontSize: 25,
                                fontFamily: RkTheme.current.fonts.family.regular,
                                stroke: RkTheme.current.colors.text.base,
                                fill: RkTheme.current.colors.text.base,
                            }}
                        />
                    </VictoryChart>
                    <View>
                        <RkText rkType='header4'>REACH</RkText>
                        <RkText rkType='header2'>1 500 356</RkText>
                        <RkText rkType='secondary2'>+6 per day in average</RkText>
                    </View>
                </View>
            </View>
        )
    }
}
