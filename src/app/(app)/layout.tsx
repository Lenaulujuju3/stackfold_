import SidebarNav from 'components/dashboard/SidebarNav'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-dusk to-midnight">
      <SidebarNav />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
