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
                    name: 'Comments',
                    color: RkTheme.current.colors.primary,
                    selectedColor: RkTheme.current.colors.primaryActive,
                },
                {
                    x: 2,
                    y: 540,
                    title: '54%',
                    name: 'Likes',
                    color: RkTheme.current.colors.info,
                    selectedColor: RkTheme.current.colors.infoActive,
                },
                {
                    x: 3,
                    y: 120,
                    title: '12%',
                    name: 'People',
                    color: RkTheme.current.colors.success,
                    selectedColor: RkTheme.current.colors.successActive,
                },
                {
                    x: 4,
                    y: 100,
                    title: '10%',
                    name: 'Shares',
                    color: RkTheme.current.colors.warning,
                    selectedColor: RkTheme.current.colors.warningActive,
                }
            ]
        }
    }

    computeColors() {
        return this.state.data.map((item, i) => {
            return i == this.state.selected ? item.selectedColor : item.color
        })
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
                    <VictoryChart padding={20} width={300} height={300}>

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
                            viewBox={"0, 0, 100, 100"}
                            labels={[]}
                            colorScale={this.computeColors()}
                            data={this.state.data}
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
                            x={150} y={150}
                            text={this.state.data[this.state.selected].title}
                            style={{
                                fontSize: 45,
                                fontFamily: RkTheme.current.fonts.family.regular,
                                stroke: RkTheme.current.colors.text.base,
                                fill: RkTheme.current.colors.text.base,
                            }}
                        />
                    </VictoryChart>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    {this.state.data.map((item, i) => {
                        return (
                            <View key={item.name} style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor: i == this.state.selected ? item.selectedColor : item.color,
                                    marginRight: 5
                                }}/>
                                <RkText rkType="primary3">{item.name}</RkText>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }
}
