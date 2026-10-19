import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSubtotal,
  calculateTotalItems,
  validatePromoCode,
  calculateOrderSummary,
  addItem,
  updateQty,
  removeItem,
} from './cartStore.ts';
import type { CartItem } from './cartStore.ts';

test('calculateSubtotal sums up item prices times quantity', () => {
  const items: CartItem[] = [
    { id: '1', name: 'Jordan 1', price: 220, size: 10, image: '', quantity: 1 },
    { id: '2', name: 'Pegasus 34', price: 110, size: 9.5, image: '', quantity: 2 },
  ];
  assert.equal(calculateSubtotal(items), 440);
  assert.equal(calculateTotalItems(items), 3);
});

test('validatePromoCode handles valid and invalid codes correctly', () => {
  const valid = validatePromoCode('MAKLO10');
  assert.equal(valid.valid, true);
  assert.equal(valid.rate, 0.1);

  const lowercase = validatePromoCode('maklo10');
  assert.equal(lowercase.valid, true);
  assert.equal(lowercase.rate, 0.1);

  const invalid = validatePromoCode('INVALID');
  assert.equal(invalid.valid, false);
});

test('calculateOrderSummary computes tax, discount, and total accurately', () => {
  const items: CartItem[] = [
    { id: '1', name: 'Jordan 1', price: 220, size: 10, image: '', quantity: 1 },
    { id: '2', name: 'Pegasus 34', price: 110, size: 9.5, image: '', quantity: 1 },
    { id: '3', name: 'Structure 20', price: 120, size: 10, image: '', quantity: 1 },
  ];
  // Subtotal = 450
  // Promo MAKLO10 => 10% discount = 45
  // Taxable = 405
  // Tax 8% = 32.4
  // Shipping = 0 (>= 100)
  // Total = 437.4
  const summaryWithPromo = calculateOrderSummary(items, 'MAKLO10');
  assert.equal(summaryWithPromo.subtotal, 450);
  assert.equal(summaryWithPromo.discount, 45);
  assert.equal(summaryWithPromo.taxableAmount, 405);
  assert.equal(summaryWithPromo.tax, 32.4);
  assert.equal(summaryWithPromo.shipping, 0);
  assert.equal(summaryWithPromo.total, 437.4);

  // Without promo: subtotal 450, tax 36 (8%), total 486
  const summaryWithoutPromo = calculateOrderSummary(items, null);
  assert.equal(summaryWithoutPromo.subtotal, 450);
  assert.equal(summaryWithoutPromo.discount, 0);
  assert.equal(summaryWithoutPromo.tax, 36);
  assert.equal(summaryWithoutPromo.total, 486);
});

test('cart immutable actions: addItem, updateQty, removeItem', () => {
  let cart: CartItem[] = [];
  cart = addItem(cart, { id: 'shoe-1', name: 'Pegasus', price: 110, size: 9, image: '' });
  assert.equal(cart.length, 1);
  assert.equal(cart[0].quantity, 1);

  // Adding same id and same size increments quantity
  cart = addItem(cart, { id: 'shoe-1', name: 'Pegasus', price: 110, size: 9, image: '' });
  assert.equal(cart.length, 1);
  assert.equal(cart[0].quantity, 2);

  // Adding same id but different size creates separate item
  cart = addItem(cart, { id: 'shoe-1', name: 'Pegasus', price: 110, size: 10, image: '' });
  assert.equal(cart.length, 2);

  // Decrement quantity
  cart = updateQty(cart, 'shoe-1', 9, -1);
  assert.equal(cart.find((i) => i.size === 9)?.quantity, 1);

  // Decrement to zero removes item
  cart = updateQty(cart, 'shoe-1', 9, -1);
  assert.equal(cart.find((i) => i.size === 9), undefined);
  assert.equal(cart.length, 1);

  // Remove item
  cart = removeItem(cart, 'shoe-1', 10);
  assert.equal(cart.length, 0);
});
