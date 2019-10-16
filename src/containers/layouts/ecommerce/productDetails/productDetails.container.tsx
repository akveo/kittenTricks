import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ModalService } from '@kitten/theme';
import {
  Comment,
  Product,
  Profile,
} from '@src/core/model';
import { products } from '@src/core/data/product';
import { comments } from '@src/core/data/comment';
import {
  profile1,
  profile2,
  profile3,
  profile4,
} from '@src/core/data/profile';
import { ProductDetails } from './productDetails.component';
import { BuyProductModal } from './buyProduct.modal';

const profiles: Profile[] = [
  profile1,
  profile2,
  profile3,
  profile4,
];

export interface BuyActionModel {
  title: string;
  action: () => void;
}

interface State {
  product: Product;
  comments: Comment[];
  currentCommentText: string;
}

export class ProductDetailsContainer extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    product: products[1],
    comments: comments,
    currentCommentText: '',
  };

  private modalId: string;

  private onContinueShopping = (): void => {

  };

  private onGoToCart = (): void => {

  };

  private buyActions: BuyActionModel[] = [
    {
      title: 'Continue Shopping',
      action: this.onContinueShopping,
    },
    {
      title: 'Go To Card',
      action: this.onGoToCart,
    },
  ];

  private onBuyPress = (): void => {
    this.modalId = ModalService.show(
      <BuyProductModal
        product={this.state.product}
        shoppingItemsCount={2}
        actionItems={this.buyActions}
        onCancel={this.closeModal}
      />,
      {
        allowBackdrop: true,
        onBackdropPress: this.closeModal,
      },
    );
  };

  private onCommentPress = (index: number) => {

  };

  private onLikePress = (index: number) => {

  };

  private onCommentItemPress = (index: number) => {

  };

  private onCommentTextChange = (text: string) => {
    this.setState({ currentCommentText: text });
  };

  private onCommentSubmit = () => {
    const commentsCopy: Comment[] = this.state.comments;
    commentsCopy.push({
      author: profiles[Math.floor(Math.random() * profiles.length)],
      text: this.state.currentCommentText,
      likesCount: 1,
      date: 'Today 10:36 pm',
    });
    this.setState({
      comments: commentsCopy,
      currentCommentText: '',
    });
  };

  private closeModal = (): void => {
    ModalService.hide(this.modalId);
  };

  public render(): React.ReactNode {
    return (
      <ProductDetails
        product={this.state.product}
        comments={this.state.comments}
        currentCommentText={this.state.currentCommentText}
        onBuyPress={this.onBuyPress}
        onCommentTextChange={this.onCommentTextChange}
        onCommentSubmit={this.onCommentSubmit}
        onCommentLikePress={this.onLikePress}
        onCommentMorePress={this.onCommentItemPress}
        onCommentReplyMorePress={this.onCommentPress}
      />
    );
  }
}
