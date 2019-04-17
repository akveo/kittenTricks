import React from 'react';
import {
  View,
  ViewProps,
  ScrollView,
  Image,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  Text,
  Chips,
  ChipsProps,
  RateBar,
} from '@src/components/common';
import {
  Button,
  Input,
} from '@kitten/ui';
import {
  Book,
  Comment as CommentModel,
} from '@src/core/model';
import { CommentsList1 } from '@src/containers/layouts/messaging/commentsList1/commentsList1.component';

interface ComponentProps {
  book: Book;
  comments: CommentModel[];
  currentCommentText: string;
  onBuyBook: () => void;
  onCommentSubmit: () => void;
  onCommentTextChange: (text: string) => void;
  onCommentItemPress: (index: number) => void;
  onCommentPress: (index: number) => void;
  onLikePress: (index: number) => void;
}

export type BookDetailsProps = ThemedComponentProps & ComponentProps;

class BookDetailsComponent extends React.Component<BookDetailsProps> {

  private onBuyBook = (): void => {
    this.props.onBuyBook();
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

  private renderCategory = (item: string, index: number): React.ReactElement<ChipsProps> => {
    const { themedStyle } = this.props;

    return (
      <Chips
        style={themedStyle.category}
        key={index}>
        <Text style={themedStyle.categoryLabel}>{item}</Text>
      </Chips>
    );
  };

  private renderCommonInfoSection = (): React.ReactElement<ViewProps> => {
    const { themedStyle, book } = this.props;

    return (
      <View style={themedStyle.commonContainer}>
        <View style={themedStyle.commonTopContainer}>
          <Image
            style={themedStyle.previewImage}
            source={{ uri: book.preview }}
          />
          <View style={themedStyle.topRightContainer}>
            <Text style={[themedStyle.primaryLabel, themedStyle.marginBottomSmall]}>
              {book.name}
            </Text>
            <Text style={[themedStyle.authorLabel, themedStyle.marginBottomLarge]}>
              {`Author: ${book.author}`}
            </Text>
            <View style={[themedStyle.categoriesContainer, themedStyle.marginBottomLarge]}>
              {book.categories.map(this.renderCategory)}
            </View>
            <RateBar
              style={themedStyle.marginBottomLarge}
              value={book.rating}
            />
            <Text style={themedStyle.primaryLabel}>{`${book.currency} ${book.price}`}</Text>
          </View>
        </View>
        <Button onPress={this.onBuyBook}>BUY BOOK</Button>
      </View>
    );
  };

  private renderDescriptionSection = (): React.ReactElement<ViewProps> => {
    const { themedStyle, book } = this.props;

    return (
      <View style={themedStyle.descriptionContainer}>
        <Text style={[themedStyle.primaryLabel, themedStyle.marginBottomLarge]}>
          About Book
        </Text>
        <Text style={themedStyle.descriptionLabel}>{book.description}</Text>
      </View>
    );
  };

  private renderCommentsSection = (): React.ReactElement<ViewProps> => {
    const {
      themedStyle,
      currentCommentText,
      comments,
    } = this.props;

    return (
      <View style={themedStyle.commentsContainer}>
        <View style={themedStyle.inputContainer}>
          <Text style={[themedStyle.primaryLabel, themedStyle.marginBottomMedium]}>
            Comments
          </Text>
          <Input
            placeholder='Write your comment'
            value={currentCommentText}
            onChangeText={this.onCommentTextChange}
            onSubmitEditing={this.handleTextSubmit}
          />
        </View>
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
    return (
      <ScrollView>
        {this.renderCommonInfoSection()}
        {this.renderDescriptionSection()}
        {this.renderCommentsSection()}
      </ScrollView>
    );
  }
}

export const BookDetails = withStyles(BookDetailsComponent, (theme: ThemeType) => ({
  commonContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  commonTopContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  previewImage: {
    width: 140,
    height: 180,
    borderRadius: 12,
  },
  topRightContainer: {
    marginLeft: 24,
  },
  primaryLabel: {
    fontFamily: 'opensans-bold',
    color: theme['color-black'],
    fontSize: 15,
    lineHeight: 24,
  },
  authorLabel: {
    color: theme['color-basic-600'],
    fontSize: 11,
    lineHeight: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  category: {
    marginRight: 8,
  },
  categoryLabel: {
    fontSize: 11,
    lineHeight: 16,
  },
  descriptionContainer: {
    backgroundColor: theme['color-basic-100'],
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  descriptionLabel: {
    color: theme['color-basic-600'],
    fontSize: 15,
    lineHeight: 20,
  },
  commentsContainer: {
    paddingVertical: 24,
  },
  inputContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  marginBottomSmall: {
    marginBottom: 4,
  },
  marginBottomMedium: {
    marginBottom: 8,
  },
  marginBottomLarge: {
    marginBottom: 16,
  },
}));
