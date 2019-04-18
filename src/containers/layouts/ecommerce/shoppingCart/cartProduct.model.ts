import { Product } from '@src/core/model';

interface CartProductModel {
  count: number;
}

export type CartProduct = CartProductModel & Product;
