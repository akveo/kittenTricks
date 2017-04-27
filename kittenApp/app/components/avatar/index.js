import React from 'react';
import {
  Image,
  View
} from 'react-native';
import {
  RkComponent,
  RkText
} from 'react-native-ui-kitten';

export class Avatar extends RkComponent {
  componentName = 'Avatar';
  typeMapping = {
    container: {},
    image: {},
    username: {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {container, image, username} = this.defineStyles();

    return (
      <View style={container}>
        <Image style={image} source={this.props.img}/>
        <View>
          <RkText style={username}>{this.props.name}</RkText>
        </View>
      </View>
    )
  }
}
