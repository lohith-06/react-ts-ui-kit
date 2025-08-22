import React from 'react'
import {InputField, DataTable, Column } from './components'
import { motion } from 'framer-motion'

interface User { id: number; name: string; email: string; age: number }

const mock: User[] = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@math.org', age: 36 },
  { id: 2, name: 'Alan Turing', email: 'alan@ai.uk', age: 41 },
  { id: 3, name: 'Grace Hopper', email: 'grace@navy.mil', age: 85 }
]

const cols: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true, width: 100 }
]

export default function App() {
  const [val, setVal] = React.useState('')

  return (
    <div className="mx-auto max-w-5xl p-6 space-y-12 text-slate-900 dark:text-slate-50">
      {/* Header */}
      <motion.header 
  initial={{ opacity: 0, y: -20 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.7 }}
  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
>
  <div className="text-center sm:text-left">
    
  <motion.div 
  className="text-center sm:text-left inline-block"
  initial="initial"
  whileHover="hovered"
  animate="initial"
>
  <motion.h1
    variants={{
      initial: { scale: 1 },
      hovered: { scale: 1.05 }
    }}
    transition={{ duration: 0.3 }}
    className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow cursor-pointer"
  >
    🚀 React TS UI Kit
  </motion.h1>

  <motion.p
    variants={{
      initial: { opacity: 0, x: 50 },
      hovered: { opacity: 1, x: 0 }
    }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-indigo-600 dark:text-indigo-300 font-medium mt-2"
  >
    Hi, Team Uzence ✨
  </motion.p>
</motion.div>



  </div>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => document.documentElement.classList.toggle('dark')}
    className="px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-colors"
  >
    Toggle Theme
  </motion.button>
</motion.header>

      {/* InputField Section with card shadow */}
      <motion.section
        whileHover={{ scale: 1.01 }}
        className="space-y-4 p-6 rounded-2xl shadow-lg dark:shadow-md dark:shadow-purple-900/40 bg-white dark:bg-slate-800"
      >
        <motion.h2
        whileHover={{ scale: 1.05, color: '#2563eb' }}
        className="text-2xl font-semibold"
        >InputField</motion.h2>

        <InputField
          label="Email"
          placeholder="you@example.com"
          helperText="We'll never share your email."
          value={val}
          onChange={(e) => setVal(e.target.value)}
          variant="outlined"
          clearable
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Search" placeholder="Type..." variant="filled" size="sm" clearable />
          <InputField label="Password" placeholder="••••••" type="password" passwordToggle />
          <InputField label="Loading" placeholder="Fetching" loading />
          <InputField label="Error" placeholder="Oops" invalid errorMessage="Required field" />
        </div>
      </motion.section>

      {/* DataTable Section with responsive design & card shadow */}
      <motion.section
        whileHover={{ scale: 1.01 }}
        className="space-y-4 p-6 rounded-2xl shadow-lg dark:shadow-md dark:shadow-indigo-900/40 bg-white dark:bg-slate-800"
      >
       <motion.h2
        whileHover={{ scale: 1.05, color: '#2563eb' }}
        className="text-2xl font-semibold"
        >DataTable</motion.h2>

        <div className="overflow-x-auto rounded-lg shadow-md dark:shadow-inner dark:shadow-slate-700/40">
          <DataTable<User>
            data={mock}
            columns={cols}
            selectable="multiple"
            onRowSelect={(rows) => console.log('selected', rows)}
          />
        </div>
      </motion.section>
      
      <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-6 mt-12 border-t border-slate-200 dark:border-slate-700 
                 text-center text-sm text-slate-600 dark:text-slate-400 
                 bg-white dark:bg-slate-900 shadow-inner"
    >
      <p className="transition-colors duration-300 hover:text-indigo-500 dark:hover:text-indigo-300">
        © 2022-2023 <span className="font-semibold">Uzence</span>. All rights reserved.
      </p>
    </motion.footer>
    </div>
    
  )

}
