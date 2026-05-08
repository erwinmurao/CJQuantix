import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutGrid, Factory, ClipboardList, Box } from 'lucide-react'

const menuItems = [
  { to: '/dashboard', label: 'Overview', Icon: LayoutGrid },
  { to: '/manufacturing', label: 'Manufacturing', Icon: Factory },
  { to: '/orders', label: 'Orders', Icon: ClipboardList },
  { to: '/inventory', label: 'Inventory', Icon: Box },
]

const Dashboard = () => {
  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8">
      <div className="rounded-[32px] border border-slate-800 bg-slate-950/95 p-6 shadow-[0_32px_120px_-48px_rgba(15,23,42,0.75)]">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Manufacturing Dashboard
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Control center
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {menuItems.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-700 text-white shadow-lg shadow-slate-950/20'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-800 bg-slate-900 p-6">
          <section>
            <h2 className="text-xl font-semibold text-white">Overview</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Use the menu to navigate from Dashboard into Inventory, Manufacturing, and Orders.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Click any section above to open the matching route and view the page contents.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
