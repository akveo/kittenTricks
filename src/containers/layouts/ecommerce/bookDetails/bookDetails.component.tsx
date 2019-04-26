import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  Button,
  Input,
  Text,
} from '@kitten/ui';
import { BookHeader } from '@src/components/ecommerce';
import { CommentsList } from '@src/components/articles';
import {
  Book,
  Comment,
} from '@src/core/model';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  book: Book;
  comments: Comment[];
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

  public render(): React.ReactNode {
    const { themedStyle, book, comments, currentCommentText } = this.props;

    return (
      <ScrollView>
        <BookHeader
          style={themedStyle.bookHeader}
          image={{ uri: book.preview }}
          title={book.name}
          author={book.author}
          categories={book.categories}
          rating={book.rating}
          price={`${book.currency} ${book.price}`}
        />
        <Button
          style={themedStyle.buyButton}
          onPress={this.onBuyBook}>
          BUY BOOK
        </Button>
        <View style={themedStyle.descriptionContainer}>
          <Text
            style={[themedStyle.sectionLabel, themedStyle.aboutLabel]}
            category='s1'>
            About Book
          </Text>
          <Text
            style={themedStyle.descriptionLabel}
            appearance='hintDark'>
            {book.description}
          </Text>
        </View>
        <View style={themedStyle.commentsContainer}>
          <View style={themedStyle.inputContainer}>
            <Text
              style={[themedStyle.sectionLabel, themedStyle.commentsLabel]}
              category='s1'>
              Comments
            </Text>
            <Input
              placeholder='Write your comment'
              value={currentCommentText}
              onChangeText={this.onCommentTextChange}
              onSubmitEditing={this.handleTextSubmit}
            />
          </View>
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

export const BookDetails = withStyles(BookDetailsComponent, (theme: ThemeType) => ({
  bookHeader: {
    paddingHorizontal: 16,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: theme['color-basic-100'],
  },
  commentsContainer: {
    paddingVertical: 24,
  },
  inputContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionLabel: textStyle.subtitle,
  aboutLabel: {
    marginBottom: 16,
  },
  commentsLabel: {
    marginBottom: 8,
  },
  descriptionLabel: textStyle.paragraph,
  buyButton: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
}));
