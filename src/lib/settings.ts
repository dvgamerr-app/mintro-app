import { writable } from 'svelte/store'

export type Settings = {
  currencies: string[]
  selectedCurrency: string
  categories: string[]
  startPage: string
  lang: 'en' | 'th'
}

const defaultSettings: Settings = {
  currencies: ['฿', '$', '€'],
  selectedCurrency: '฿',
  categories: ['Home', 'Health', 'Personal'],
  startPage: '/transactions',
  lang: 'en',
}

function createSettingsStore() {
  let initial = defaultSettings
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem('settings')
      if (raw) {
        const parsed = JSON.parse(raw)
        initial = { ...defaultSettings, ...parsed }
      }
    } catch (_) { }
  }

  const store = writable<Settings>(initial)

  if (typeof window !== 'undefined') {
    store.subscribe((v) => {
      try {
        localStorage.setItem('settings', JSON.stringify(v))
      } catch (_) { }
    })
  }

  return store
}

export const settings = createSettingsStore()
