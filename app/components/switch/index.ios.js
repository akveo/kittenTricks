import React from 'react';
import {
  Switch,
} from 'react-native';
import {RkComponent} from 'react-native-ui-kitten'


export class RkSwitch extends RkComponent {
  componentName = 'RkSwitch';
  typeMapping = {
    container: {
      onColor: 'onColor',
      offColor: 'offColor'
    },
    main: {}
  };
  selectedType = 'selected';

  constructor(props) {
    super(props);
    this.onChange = this.props.onValueChange ?
      this.props.onValueChange
      : () => true;
  }

  render() {
    let {main, container} = this.defineStyles();
    let onColor = this.extractNonStyleValue(container, 'onColor');
    let offColor = this.extractNonStyleValue(container, 'offColor');

    return (
      <Switch style={this.props.style}
              value={this.props.value}
              onValueChange={(value) => this.onChange(value)}
              onTintColor={onColor}/>
    )
  }
}