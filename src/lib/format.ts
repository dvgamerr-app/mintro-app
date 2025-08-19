export const formatNumberTH = (n: number): string =>
  new Intl.NumberFormat('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n)

export const formatTHB = (n: number): string => formatNumberTH(n) + ' บาท'

// small helpers for common formatting needs
export const formatPct = (n: number, digits = 2): string => n.toFixed(digits)
