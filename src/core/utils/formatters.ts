export function formatPriceParts(price: number) {
  const parts = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).formatToParts(price);

  const currency = parts.find(part => part.type === 'currency')?.value || '';
  const number = parts
    .filter(part => part.type !== 'currency' && part.type !== 'literal')
    .map(part => part.value)
    .join('');

  return { currency, number };
}