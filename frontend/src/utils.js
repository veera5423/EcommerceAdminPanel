// Smart categorization utility
export function suggestCategory(productName = '', description = '') {
  const text = `${productName} ${description}`.toLowerCase();
  if (/laptop|smartphone|headphone|camera|tablet/.test(text)) return 'Electronics';
  if (/shirt|jeans|dress|jacket|t-shirt|skirt/.test(text)) return 'Apparel';
  if (/book|novel|magazine|comic/.test(text)) return 'Books';
  if (/sofa|table|chair|bed|desk/.test(text)) return 'Furniture';
  if (/toy|game|puzzle|lego/.test(text)) return 'Toys';
  // Add more as needed
  return '';
} 