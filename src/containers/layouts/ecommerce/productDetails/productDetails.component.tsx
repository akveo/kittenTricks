import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Input,
  Text,
} from '@kitten/ui';
import { CommentsList } from '@src/components/articles';
import { ProductInfo } from '@src/components/ecommerce';
import {
  Product,
  Comment,
} from '@src/core/model';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  product: Product;
  comments: Comment[];
  currentCommentText: string;
  onCommentSubmit: () => void;
  onCommentTextChange: (text: string) => void;
  onCommentItemPress: (index: number) => void;
  onCommentPress: (index: number) => void;
  onLikePress: (index: number) => void;
  onBuyPress: () => void;
}

interface State {
  selectedColorIndex: number;
}

export type ProductDetailsProps = ThemedComponentProps & ComponentProps;

class ProductDetailsComponent extends React.Component<ProductDetailsProps, State> {

  public state: State = {
    selectedColorIndex: 0,
  };

  private onBuyPress = (): void => {
    this.props.onBuyPress();
  };

  private onProductColorSelect = (selectedColorIndex: number): void => {
    this.setState({ selectedColorIndex });
  };

  private onCommentButtonPress = (index: number) => {
    this.props.onCommentPress(index);
  };

  private onLikeButtonPress = (index: number) => {
    this.props.onLikePress(index);
  };

  private onMoreButtonPress = (index: number) => {
    this.props.onCommentItemPress(index);
  };

  private onCommentTextChange = (text: string): void => {
    this.props.onCommentTextChange(text);
  };

  private handleTextSubmit = () => {
    this.props.onCommentSubmit();
  };

  public render(): React.ReactNode {
    const { themedStyle, product, comments, currentCommentText } = this.props;

    return (
      <ScrollView contentContainerStyle={themedStyle.container}>
        <ProductInfo
          style={themedStyle.infoContainer}
          image={{ uri: product.photo }}
          name={product.name}
          type={product.type}
          price={`${product.cost} ${product.currency}`}
          description={product.description}
          size={product.size}
          colors={product.colors}
          selectedColorIndex={this.state.selectedColorIndex}
          onColorSelect={this.onProductColorSelect}
        />
        <Button
          style={themedStyle.buyButton}
          textStyle={textStyle.button}
          size='giant'
          onPress={this.onBuyPress}>
          BUY
        </Button>
        <View style={themedStyle.commentsContainer}>
          <Text
            style={themedStyle.inputLabel}
            category='s1'>
            Comments
          </Text>
          <Input
            style={themedStyle.input}
            textStyle={textStyle.paragraph}
            placeholder='Write your comment'
            value={currentCommentText}
            onChangeText={this.onCommentTextChange}
            onSubmitEditing={this.handleTextSubmit}
          />
          <CommentsList
            data={comments}
            onMorePress={this.onMoreButtonPress}
            onLikePress={this.onLikeButtonPress}
            onCommentPress={this.onCommentButtonPress}
          />
        </View>
      </ScrollView>
    );
  }
}

export const ProductDetails = withStyles(ProductDetailsComponent, (theme: ThemeType) => ({
  container: {
    flexGrow: 1,
    backgroundColor: theme['color-basic-100'],
  },
  infoContainer: {
    paddingHorizontal: 16,
  },
  commentsContainer: {
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: theme['color-white'],
  },
  input: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  inputLabel: {
    marginBottom: 8,
    marginHorizontal: 16,
    ...textStyle.subtitle,
  },
  buyButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
}));
