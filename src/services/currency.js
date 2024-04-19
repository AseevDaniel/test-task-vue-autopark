export const getFormattedPrice = (value, currency) => {
  return _formatPrice(value) + ' ' + currency
}

export const getCreditText = (value, currencySymbol) => {
  return `от ${value}${currencySymbol}/мес`
}

const _formatPrice = (value) => new Intl.NumberFormat('ru-RU').format(value)
