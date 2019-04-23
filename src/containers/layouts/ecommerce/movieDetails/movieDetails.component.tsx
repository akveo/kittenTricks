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
import { Button } from '@kitten/ui';
import {
  MovieDetailList,
  MovieHeader,
  MovieScreenshotList,
} from '@src/components/ecommerce';
import { Text } from '@src/components/common';
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
          image={{uri: movie.preview}}
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
          <Text style={themedStyle.sectionLabel}>About Movie</Text>
          <Text style={themedStyle.descriptionLabel}>
            {movie.description}
          </Text>
          <Text style={themedStyle.sectionLabel}>Screenshots</Text>
          <MovieScreenshotList
            contentContainerStyle={themedStyle.screenshotList}
            selectedIndex={this.state.screenShotIndex}
            onSelect={this.onChangePager}
            data={movie.screenshots.map(this.createScreenshotSource)}
          />
          <Button
            style={themedStyle.buyButton}
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
    fontFamily: 'opensans-bold',
    fontSize: 15,
    lineHeight: 24,
    color: theme['color-black'],
  },
  descriptionLabel: {
    marginHorizontal: 16,
    marginBottom: 32,
    color: theme['color-basic-600'],
    fontSize: 15,
    lineHeight: 24,
  },
  screenshotList: {
    marginHorizontal: 8,
    marginBottom: 24,
  },
  buyButton: {
    marginHorizontal: 16,
  },
}));
