export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  size: number | string;
  variantName?: string;
  image: string;
  filter?: string;
  badge?: string;
  color?: string;
  sku?: string;
  quantity: number;
}

export interface OrderSummary {
  subtotal: number;
  discount: number;
  discountRate: number;
  taxableAmount: number;
  tax: number;
  shipping: number;
  total: number;
  totalItems: number;
}

export const VALID_PROMO_CODES: Record<string, number> = {
  MAKLO10: 0.1,
  VIP15: 0.15,
  LAB20: 0.2,
};

export function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function calculateTotalItems(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function validatePromoCode(rawCode: string): { valid: boolean; rate: number; message: string } {
  const code = rawCode.trim().toUpperCase();
  if (!code) {
    return { valid: false, rate: 0, message: 'Please enter a valid promotion code.' };
  }
  if (VALID_PROMO_CODES[code]) {
    const rate = VALID_PROMO_CODES[code];
    return {
      valid: true,
      rate,
      message: `Coupon ${code} applied: ${(rate * 100).toFixed(0)}% discount subtracted.`,
    };
  }
  return { valid: false, rate: 0, message: 'Code unrecognized or expired. Try "MAKLO10".' };
}

export function calculateDiscount(subtotal: number, promoCode: string | null): { discount: number; rate: number } {
  if (!promoCode) return { discount: 0, rate: 0 };
  const res = validatePromoCode(promoCode);
  if (!res.valid) return { discount: 0, rate: 0 };
  return {
    discount: Number((subtotal * res.rate).toFixed(2)),
    rate: res.rate,
  };
}

export function calculateTax(taxableAmount: number, taxRate = 0.08): number {
  return Number((Math.max(0, taxableAmount) * taxRate).toFixed(2));
}

export function calculateOrderSummary(
  items: CartItem[],
  promoCode: string | null = null,
  taxRate = 0.08,
  freeShippingThreshold = 100
): OrderSummary {
  const subtotal = calculateSubtotal(items);
  const totalItems = calculateTotalItems(items);
  const { discount, rate: discountRate } = calculateDiscount(subtotal, promoCode);
  const taxableAmount = Math.max(0, subtotal - discount);
  const tax = calculateTax(taxableAmount, taxRate);
  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 15;
  const total = Number((taxableAmount + tax + shipping).toFixed(2));

  return {
    subtotal: Number(subtotal.toFixed(2)),
    discount,
    discountRate,
    taxableAmount: Number(taxableAmount.toFixed(2)),
    tax,
    shipping,
    total,
    totalItems,
  };
}

export function addItem(items: CartItem[], newItem: Omit<CartItem, 'quantity'> & { quantity?: number }): CartItem[] {
  const qtyToAdd = newItem.quantity && newItem.quantity > 0 ? newItem.quantity : 1;
  const existingIndex = items.findIndex(
    (i) => String(i.id) === String(newItem.id) && String(i.size) === String(newItem.size)
  );

  if (existingIndex >= 0) {
    return items.map((item, idx) =>
      idx === existingIndex ? { ...item, quantity: item.quantity + qtyToAdd } : item
    );
  }

  return [...items, { ...newItem, quantity: qtyToAdd }];
}

export function updateQty(items: CartItem[], id: string | number, size: string | number, delta: number): CartItem[] {
  return items
    .map((item) => {
      if (String(item.id) === String(id) && String(item.size) === String(size)) {
        const nextQty = item.quantity + delta;
        return nextQty > 0 ? { ...item, quantity: nextQty } : null;
      }
      return item;
    })
    .filter((item): item is CartItem => item !== null);
}

export function removeItem(items: CartItem[], id: string | number, size: string | number): CartItem[] {
  return items.filter((item) => !(String(item.id) === String(id) && String(item.size) === String(size)));
}
