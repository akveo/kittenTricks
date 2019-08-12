import React from 'react';
import { View } from 'react-native';
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
import { CommentsList1 } from '@src/components/articles';
import { ProductInfo } from '@src/components/ecommerce';
import {
  Product,
  Comment,
} from '@src/core/model';
import {
  ContainerView,
  textStyle,
} from '@src/components/common';

interface ComponentProps {
  product: Product;
  comments: Comment[];
  currentCommentText: string;
  onCommentSubmit: () => void;
  onCommentTextChange: (text: string) => void;
  onCommentMorePress: (index: number) => void;
  onCommentReplyMorePress: (index: number) => void;
  onCommentLikePress: (index: number) => void;
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

  private onCommentLikePress = (index: number) => {
    this.props.onCommentLikePress(index);
  };

  private onCommentMorePress = (index: number) => {
    this.props.onCommentMorePress(index);
  };

  private onCommentReplyMorePress = (index: number) => {
    this.props.onCommentReplyMorePress(index);
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
      <ContainerView style={themedStyle.container}>
        <ProductInfo
          image={product.photo.imageSource}
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
          <CommentsList1
            data={comments}
            onLikePress={this.onCommentLikePress}
            onMorePress={this.onCommentMorePress}
            onReplyMorePress={this.onCommentReplyMorePress}
          />
        </View>
      </ContainerView>
    );
  }
}

export const ProductDetails = withStyles(ProductDetailsComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-1'],
  },
  commentsContainer: {
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: theme['background-basic-color-2'],
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
