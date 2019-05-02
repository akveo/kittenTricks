import React from 'react';
import {
  View,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import {
  MovieDetailList,
  MovieHeader,
  MovieScreenshotList,
} from '@src/components/ecommerce';
import { textStyle } from '@src/components/common';
import { Movie as MovieModel } from '@src/core/model';

interface ComponentProps {
  movie: MovieModel;
  onBuyTicket: () => void;
}

interface State {
  screenShotIndex: number;
}

export type MovieProps = ThemedComponentProps & ComponentProps;

class MovieDetailsComponent extends React.Component<MovieProps, State> {

  public state: State = {
    screenShotIndex: 0,
  };

  private onChangePager = (screenShotIndex: number): void => {
    this.setState({ screenShotIndex });
  };

  private onBuyTicket = (): void => {
    this.props.onBuyTicket();
  };

  private createScreenshotSource = (source: string): ImageSourcePropType => {
    return { uri: source };
  };

  public render(): React.ReactNode {
    const { themedStyle, movie } = this.props;

    return (
      <ScrollView contentContainerStyle={themedStyle.container}>
        <MovieHeader
          style={themedStyle.movieHeader}
          image={{ uri: movie.preview }}
          title={movie.name}
          description={movie.part}
          categories={movie.categories}
          rating={movie.rating}
        />
        <View style={themedStyle.bottomSectionContainer}>
          <MovieDetailList
            style={themedStyle.techInfoContainer}
            data={movie.details}
          />
          <Text
            style={themedStyle.sectionLabel}
            category='s1'>
            About Movie
          </Text>
          <Text
            style={themedStyle.descriptionLabel}
            appearance='hintDark'
            category='s1'>
            {movie.description}
          </Text>
          <Text
            style={themedStyle.sectionLabel}
            category='s1'>
            Screenshots
          </Text>
          <MovieScreenshotList
            contentContainerStyle={themedStyle.screenshotList}
            selectedIndex={this.state.screenShotIndex}
            onSelect={this.onChangePager}
            data={movie.screenshots.map(this.createScreenshotSource)}
          />
          <Button
            style={themedStyle.buyButton}
            textStyle={textStyle.button}
            size='large'
            onPress={this.onBuyTicket}>
            BUY TICKET
          </Button>
        </View>
      </ScrollView>
    );
  }
}

export const Movie = withStyles(MovieDetailsComponent, (theme: ThemeType) => ({
  container: {
    flexGrow: 1,
  },
  movieHeader: {
    paddingHorizontal: 64,
    paddingVertical: 24,
    borderBottomColor: theme['color-basic-200'],
    borderBottomWidth: 1,
  },
  bottomSectionContainer: {
    paddingTop: 24,
    paddingBottom: 32,
  },
  techInfoContainer: {
    justifyContent: 'space-between',
    marginHorizontal: 48,
    marginBottom: 32,
  },
  sectionLabel: {
    marginHorizontal: 16,
    marginBottom: 16,
    ...textStyle.subtitle,
  },
  descriptionLabel: {
    marginHorizontal: 16,
    marginBottom: 32,
    ...textStyle.subtitle,
  },
  screenshotList: {
    marginHorizontal: 8,
    marginBottom: 24,
  },
  buyButton: {
    marginHorizontal: 16,
  },
}));
