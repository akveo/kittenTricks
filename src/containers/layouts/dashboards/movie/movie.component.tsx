import React from 'react';
import {
  View,
  ScrollView,
  ViewProps,
  Image,
  ImageProps,
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
import { Movie as MovieModel } from '@src/core/model';
import {
  Button,
  ViewPager,
} from '@kitten/ui';

interface ComponentProps {
  movie: MovieModel;
  onBuyTicket: () => void;
}

interface State {
  screenShotIndex: number;
}

export type MovieProps = ThemedComponentProps & ComponentProps;

class MovieComponent extends React.Component<MovieProps, State> {

  public state: State = {
    screenShotIndex: 0,
  };

  private onChangePager = (screenShotIndex: number): void => {
    this.setState({ screenShotIndex });
  };

  private onBuyTicket = (): void => {
    this.props.onBuyTicket();
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

  private renderTopSection = (): React.ReactElement<ViewProps> => {
    const { themedStyle, movie } = this.props;

    return (
      <View style={themedStyle.topSectionContainer}>
        <Image
          style={themedStyle.moviePreview}
          source={{ uri: movie.preview }}/>
        <Text style={[themedStyle.nameLabel, themedStyle.textCentered]}>{movie.name}</Text>
        <Text style={themedStyle.partLabel}>{movie.part}</Text>
        <View style={themedStyle.categoriesContainer}>
          {movie.categories.map(this.renderCategory)}
        </View>
        <RateBar value={movie.rating}/>
      </View>
    );
  };

  private renderScreenShot = (item: string, index: number): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return (
      <Image
        key={index}
        style={themedStyle.screenShot}
        source={{ uri: item }}
      />
    );
  };

  private renderBottomSection = (): React.ReactElement<ViewProps> => {
    const { themedStyle, movie } = this.props;

    return (
      <View style={themedStyle.bottomSectionContainer}>
        <View style={themedStyle.techInfoContainer}>
          <View style={themedStyle.infoItemContainer}>
            <Text style={themedStyle.infoItemLabel}>Year</Text>
            <Text style={themedStyle.infoItemValueLabel}>{movie.year}</Text>
          </View>
          <View style={themedStyle.infoItemContainer}>
            <Text style={themedStyle.infoItemLabel}>Country</Text>
            <Text style={themedStyle.infoItemValueLabel}>{movie.country}</Text>
          </View>
          <View style={themedStyle.infoItemContainer}>
            <Text style={themedStyle.infoItemLabel}>Length</Text>
            <Text style={themedStyle.infoItemValueLabel}>{movie.length}</Text>
          </View>
        </View>
        <Text style={[
          themedStyle.infoItemValueLabel,
          themedStyle.marginHorizontal,
          themedStyle.marginBottom,
        ]}>
          About Movie
        </Text>
        <Text style={[themedStyle.descriptionLabel, themedStyle.marginHorizontal]}>
          {movie.description}
        </Text>
        <Text style={[
          themedStyle.infoItemValueLabel,
          themedStyle.marginHorizontal,
          themedStyle.marginBottom,
        ]}>
          Screenshots
        </Text>
        <ViewPager
          style={themedStyle.screenShotsPager}
          contentWidth={180}
          selectedIndex={this.state.screenShotIndex}
          onSelect={this.onChangePager}>
          {movie.screenshots.map(this.renderScreenShot)}
        </ViewPager>
        <Button
          size='large'
          style={themedStyle.marginHorizontal}
          onPress={this.onBuyTicket}>
          BUY TICKET
        </Button>
      </View>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ScrollView contentContainerStyle={themedStyle.container}>
        {this.renderTopSection()}
        {this.renderBottomSection()}
      </ScrollView>
    );
  }
}

export const Movie = withStyles(MovieComponent, (theme: ThemeType) => ({
  container: {
    flexGrow: 1,
  },
  topSectionContainer: {
    overflow: 'hidden',
    paddingHorizontal: 67,
    paddingVertical: 24,
    alignItems: 'center',
    borderBottomColor: theme['color-basic-200'],
    borderBottomWidth: 1,
  },
  moviePreview: {
    width: 256,
    height: 360,
    borderRadius: 12,
    marginBottom: 24,
  },
  nameLabel: {
    fontFamily: 'opensans-extrabold',
    color: theme['color-black'],
    fontSize: 20,
    lineHeight: 28,
  },
  partLabel: {
    color: theme['color-black'],
    fontSize: 13,
    lineHeight: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    marginBottom: 24,
  },
  category: {
    marginHorizontal: 4,
  },
  categoryLabel: {
    fontSize: 11,
    lineHeight: 16,
  },
  bottomSectionContainer: {
    paddingTop: 24,
    paddingBottom: 32,
  },
  techInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 55,
  },
  infoItemContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  infoItemLabel: {
    fontFamily: 'opensans-bold',
    color: theme['color-basic-600'],
    fontSize: 13,
    lineHeight: 24,
  },
  infoItemValueLabel: {
    fontFamily: 'opensans-bold',
    color: theme['color-black'],
    fontSize: 15,
    lineHeight: 24,
  },
  descriptionLabel: {
    color: theme['color-basic-600'],
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 32,
  },
  screenShotsPager: {
    marginHorizontal: 8,
    overflow: 'hidden',
    marginBottom: 120,
  },
  screenShot: {
    width: 180,
    height: 120,
    marginHorizontal: 8,
    borderRadius: 12,
  },
  textCentered: {
    textAlign: 'center',
  },
  marginHorizontal: {
    marginHorizontal: 16,
  },
  marginBottom: {
    marginBottom: 16,
  },
}));
