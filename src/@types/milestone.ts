interface MilestoneType {
	id: string
  avatarUrl: string
  name: string
  project: string
  pendingAmount: number
  paidAmount: number
  date: Date
  rate: number
  method: 'mastercard'|'visa'|'paypal'
  milestone: 'request'
  isUnreadMessage: boolean
  status: 'awaiting'|'complete'|'canceled'
}