import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  StyledComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  BottomEndTooltip,
  BottomStartTooltip,
  BottomTooltip,
  IconTooltip,
  LeftEndTooltip,
  LeftStartTooltip,
  LeftTooltip,
  RightEndTooltip,
  RightStartTooltip,
  RightTooltip,
  TopEndTooltip,
  TopStartTooltip,
  TopTooltip,
} from './showcase';

type ComponentProps = NavigationStackScreenProps & StyledComponentProps;

class TooltipContainerComponent extends React.Component<ComponentProps> {

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <Showcase style={themedStyle.container}>
        <ShowcaseSection title='Accessories'>
          <ShowcaseItem title='Icon'>
            <IconTooltip/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Placement'>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom'>
            <BottomTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom Start'>
            <BottomStartTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom End'>
            <BottomEndTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.rightItem} title='Right'>
            <RightTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.rightItem} title='Right Start'>
            <RightStartTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.rightItem} title='Right End'>
            <RightEndTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.leftItem} title='Left'>
            <LeftTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.leftItem} title='Left Start'>
            <LeftStartTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.leftItem} title='Left End'>
            <LeftEndTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.topItem} title='Top'>
            <TopTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.topItem} title='Top Start'>
            <TopStartTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.topItem} title='Top End'>
            <TopEndTooltip/>
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

export const TooltipContainer = withStyles(TooltipContainerComponent, (theme: ThemeType) => ({
  container: {},
  bottomItem: {
    justifyContent: 'flex-start',
  },
  rightItem: {
    flexDirection: 'row-reverse',
  },
  leftItem: {},
  topItem: {
    justifyContent: 'flex-start',
  },
}));
