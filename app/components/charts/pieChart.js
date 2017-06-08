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
    VictoryPie,
    VictoryLabel,
} from "victory-native";

import {
    Svg
} from 'react-native-svg';

export class PieChart extends RkComponent {

    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            data: [
                {
                    x: 1,
                    y: 120,
                    title: '7000',
                    subTitle: 'CATS',
                    color: RkTheme.current.colors.primary,
                    selectedColor: RkTheme.current.colors.primaryActive,
                },
                {
                    x: 2,
                    y: 150,
                    title: '9500',
                    subTitle: 'DOGS',
                    color: RkTheme.current.colors.info,
                    selectedColor: RkTheme.current.colors.infoActive,
                },
                {
                    x: 3,
                    y: 75,
                    title: '4750',
                    subTitle: 'LOSEY',
                    color: RkTheme.current.colors.success,
                    selectedColor: RkTheme.current.colors.successActive,
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
            <Svg>
                <VictoryPie
                    height={250}
                    width={250}
                    padding={10}
                    animate={{duration: 400}}
                    innerRadius={80}
                    labels={[]}
                    colorScale={this.computeColors()}
                    data={this.state.data}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onPressIn: (evt, props) => this.handlePress(evt, props)
                        }
                    }]}
                >
                </VictoryPie>
                <VictoryLabel
                    textAnchor="middle" verticalAnchor="middle"
                    x={125} y={135}
                    text={[this.state.data[this.state.selected].title, this.state.data[this.state.selected].subTitle]}
                    style={[
                        {
                            fontSize: 45,
                            fontFamily: RkTheme.current.fonts.family.logo,
                            stroke: RkTheme.current.colors.disabled,
                            fill: RkTheme.current.colors.disabled,
                        },
                        {
                            fontSize: 20,
                            stroke: RkTheme.current.colors.disabled,
                            fill: RkTheme.current.colors.disabled,
                            fontFamily: RkTheme.current.fonts.family.logo
                        }]}
                />
            </Svg>
        )
    }
}
