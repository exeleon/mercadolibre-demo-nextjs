import { Currency } from "@mercadolibre-demo-nextjs/api-interfaces";

export function currencyFormat(value: Currency): string {
  const currencyCode: string = value.currency ?? 'USD';

  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value.amount);
}
