import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  RkText,
  RkButton,
  RkModalImg,
} from 'react-native-ui-kitten';
import PropTypes from 'prop-types';
import { Ellipsis } from './ellipsis';
import { SocialBar } from './socialBar';

export class Gallery extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  constructor(props) {
    super(props);
    const itemSize = (Dimensions.get('window').width - 12) / 3;
    this.state = {
      data: this.props.items,
      itemSize,
    };
  }

  extractItemKey = (index) => `${index}`;

  renderHeader = (options) => (
    <View style={styles.header}>
      <RkButton rkType='clear contrast' onPress={options.closeImage}>Close</RkButton>
      <RkText rkType='header4'>{`${options.pageNumber}/${options.totalPages}`}</RkText>
      <RkButton rkType='clear'>
        <Ellipsis />
      </RkButton>
    </View>
  );

  renderFooter = () => (
    <SocialBar />
  );

  renderItem = ({ index }) => (
    <RkModalImg
      style={{ width: this.state.itemSize, height: this.state.itemSize }}
      renderHeader={this.renderHeader}
      renderFooter={this.renderFooter}
      source={this.props.items}
      index={index}
    />
  );

  render = () => (
    <View style={styles.images}>
      <FlatList
        data={this.state.data}
        numColumns={3}
        keyExtractor={this.extractItemKey}
        renderItem={this.renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  images: {
    flexDirection: 'row',
    paddingHorizontal: 0.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
