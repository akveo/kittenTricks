import React from 'react';

import {CategoryMenu} from './categoryMenu';
import * as Routes from '../../config/routes';

export class LoginMenu extends React.Component {
  static navigationOptions = {
    title: 'Login'.toUpperCase()
  };
  render() {
    return (
     <CategoryMenu navigation={this.props.navigation} items={Routes.LoginRoutes}/>
    )
  }
}

export class NavigationMenu extends React.Component {
  static navigationOptions = {
    title: 'Navigation'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.NavigationRoutes}/>
    )
  }
}

export class SocialMenu extends React.Component {
  static navigationOptions = {
    title: 'Social'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.SocialRoutes}/>
    )
  }
}

export class ArticleMenu extends React.Component {
  static navigationOptions = {
    title: 'Articles'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.ArticleRoutes}/>
    )
  }
}

export class MessagingMenu extends React.Component {
  static navigationOptions = {
    title: 'Messaging'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.MessagingRoutes}/>
    )
  }
}

export class DashboardMenu extends React.Component {
  static navigationOptions = {
    title: 'Dashboards'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.DashboardRoutes}/>
    )
  }
}
export class WalkthroughMenu extends React.Component {
  static navigationOptions = {
    title: 'Walkthrough'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.WalkthroughRoutes}/>
    )
  }
}
export class EcommerceMenu extends React.Component {
  static navigationOptions = {
    title: 'Ecommerce'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.EcommerceRoutes}/>
    )
  }
}
export class OtherMenu extends React.Component {
  static navigationOptions = {
    title: 'Other'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.OtherRoutes}/>
    )
  }
}
