import { derived } from 'svelte/store'
import { settings } from './settings'

export type Dict = Record<string, string>

const en: Dict = {
  appName: 'Mintro',
  dashboard: 'Dashboard',
  transactions: 'Transactions',
  analytics: 'Analytics',
  settings: 'Settings',
  docs: 'Documentation',
  filter: 'Filter',
  addItem: 'Add Item',
  summary: 'Summary',
  today: 'Today',
  yesterday: 'Yesterday',
  income: 'Income',
  expenses: 'Expenses',
  investment: 'Investment',
  savings: 'Savings',
  language: 'Language',
  thai: 'Thai',
  english: 'English',
  currencyList: 'Currencies',
  selectedCurrency: 'Selected Currency',
  categories: 'Categories',
  startupPage: 'Startup Page',
  add: 'Add',
  remove: 'Remove',
  save: 'Save',
  reset: 'Reset',
  saved: 'Saved',
}

const th: Dict = {
  appName: 'Mintro',
  dashboard: 'แดชบอร์ด',
  transactions: 'ธุรกรรม',
  analytics: 'วิเคราะห์',
  settings: 'ตั้งค่า',
  docs: 'เอกสาร',
  filter: 'กรอง',
  addItem: 'เพิ่มรายการ',
  summary: 'สรุป',
  today: 'วันนี้',
  yesterday: 'เมื่อวาน',
  income: 'รายรับ',
  expenses: 'รายจ่าย',
  investment: 'การลงทุน',
  savings: 'เงินออม',
  language: 'ภาษา',
  thai: 'ไทย',
  english: 'อังกฤษ',
  currencyList: 'สกุลเงิน',
  selectedCurrency: 'สกุลเงินที่เลือก',
  categories: 'หมวดหมู่',
  startupPage: 'หน้าเริ่มต้น',
  add: 'เพิ่ม',
  remove: 'ลบ',
  save: 'บันทึก',
  reset: 'รีเซ็ต',
  saved: 'บันทึกแล้ว',
}

const dicts: Record<'en' | 'th', Dict> = { en, th }

export const t = derived(settings, ($s) => {
  const d = dicts[$s.lang] || en
  return (key: string) => d[key] ?? key
})
