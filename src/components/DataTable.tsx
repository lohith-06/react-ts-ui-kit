import React from 'react'
import { clsx } from 'clsx'

export interface Column<T> {
  key: string
  title: string
  dataIndex: keyof T
  sortable?: boolean
  width?: string | number
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
  selectable?: boolean | 'multiple'
  onRowSelect?: (selectedRows: T[]) => void
  emptyText?: string
  className?: string
}

export function DataTable<T extends { id?: string | number }>(props: DataTableProps<T>) {
  const { data, columns, loading, emptyText = 'No data', className } = props
  return (
    <div className={clsx('w-full overflow-x-auto', className)}>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-slate-100 dark:bg-slate-800 text-left">
            {columns.map(c => (
              <th key={c.key} scope="col" className="p-3 font-semibold">{c.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan={columns.length} className="p-6 text-center">Loading...</td></tr>
          ) : data.length === 0 ? (
            <tr><td colSpan={columns.length} className="p-6 text-center">{emptyText}</td></tr>
          ) : (
            data.map((row, i) => (
              <tr key={(row as any).id ?? i} className="border-b">
                {columns.map(c => (
                  <td key={c.key} className="p-3">{String(row[c.dataIndex] ?? '')}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
