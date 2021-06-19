export function numberFormat(value: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('es-AR', {
    currency,
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
