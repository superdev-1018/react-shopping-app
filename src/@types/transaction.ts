interface TransactionType {
	id: string
  avatarUrl: string
  name: string
  project: string
  amount: number
  date: Date
  rate: number
  status: 'sent'|'canceled'|'pending'
}