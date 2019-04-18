import React from 'react';
import {
  View,
  ScrollView,
  Image,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  RadioGroup,
  Radio,
  RadioProps,
  Button,
  Input,
} from '@kitten/ui';
import { Text } from '@src/components/common';
import {
  Product as ProductModel,
  Comment as CommentModel,
} from '@src/core/model';
import { CommentsList1 } from '@src/containers/layouts/messaging';

interface ComponentProps {
  product: ProductModel;
  comments: CommentModel[];
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

  private onSelectColorIndex = (selectedColorIndex: number): void => {
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

  private renderColorRadio = (color: string, index: number): React.ReactElement<RadioProps> => {
    const { themedStyle } = this.props;

    return (
      <Radio
        style={themedStyle.radioItem}
        key={index}
        text={color}
      />
    );
  };

  private renderInfoContainer = (): React.ReactElement<ViewProps> => {
    const { themedStyle, product } = this.props;

    return (
      <View style={themedStyle.infoContainer}>
        <View style={[themedStyle.nameContainer, themedStyle.bottomSpace]}>
          <View>
            <Text style={[themedStyle.nameLabel, themedStyle.labelBottomSpace]}>
              {product.name}
            </Text>
            <Text style={themedStyle.typeLabel}>{product.type}</Text>
          </View>
          <Text style={themedStyle.costLabel}>{`${product.cost} ${product.currency}`}</Text>
        </View>
        <Text style={[themedStyle.descriptionText, themedStyle.bottomSpace]}>
          {product.description}
        </Text>
        <Text style={[themedStyle.nameLabel, themedStyle.labelBottomSpace]}>Size</Text>
        <Text style={[themedStyle.descriptionText, themedStyle.bottomSpace]}>
          {product.size}
        </Text>
        <Text style={[themedStyle.nameLabel, themedStyle.labelBottomSpace]}>Color</Text>
        <RadioGroup
          style={[themedStyle.colorSelector, themedStyle.bottomSpace]}
          selectedIndex={this.state.selectedColorIndex}
          onChange={this.onSelectColorIndex}>
          {product.colors.map(this.renderColorRadio)}
        </RadioGroup>
        <Button
          size='large'
          onPress={this.onBuyPress}>Buy</Button>
      </View>
    );
  };

  private renderCommentsSection = (): React.ReactElement<ViewProps> => {
    const {
      themedStyle,
      comments,
      currentCommentText,
    } = this.props;

    return (
      <View style={themedStyle.commentsContainer}>
        <Text style={themedStyle.inputLabel}>Comments</Text>
        <Input
          style={themedStyle.input}
          placeholder='Write your comment'
          value={currentCommentText}
          onChangeText={this.onCommentTextChange}
          onSubmitEditing={this.handleTextSubmit}
        />
        <CommentsList1
          comments={comments}
          onMorePress={this.onMoreButtonPress}
          onLikePress={this.onLikeButtonPress}
          onCommentPress={this.onCommentButtonPress}
        />
      </View>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, product } = this.props;

    return (
      <ScrollView contentContainerStyle={themedStyle.container}>
        <Image
          style={[themedStyle.productImage, themedStyle.bottomSpace]}
          source={{ uri: product.photo }}
        />
        {this.renderInfoContainer()}
        {this.renderCommentsSection()}
      </ScrollView>
    );
  }
}

export const ProductDetails = withStyles(ProductDetailsComponent, (theme: ThemeType) => ({
  container: {
    flexGrow: 1,
  },
  productImage: {
    flex: 1,
    height: 340,
  },
  infoContainer: {
    backgroundColor: theme['color-basic-100'],
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameLabel: {
    color: theme['color-black'],
    fontFamily: 'opensans-extrabold',
    fontSize: 20,
    lineHeight: 28,
  },
  typeLabel: {
    color: theme['color-basic-600'],
    fontSize: 13,
    lineHeight: 16,
  },
  costLabel: {
    color: theme['color-black'],
    fontFamily: 'opensans-bold',
    fontSize: 26,
    lineHeight: 32,
  },
  descriptionText: {
    color: theme['color-basic-600'],
    fontSize: 15,
    lineHeight: 20,
  },
  colorSelector: {
    flexDirection: 'row',
  },
  radioItem: {
    marginRight: 16,
  },
  bottomSpace: {
    marginBottom: 24,
  },
  labelBottomSpace: {
    marginBottom: 8,
  },
  commentsContainer: {
    backgroundColor: theme['color-white'],
    paddingVertical: 24,
  },
  input: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  inputLabel: {
    color: theme['color-black'],
    fontFamily: 'opensans-bold',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    marginHorizontal: 16,
  },
}));
