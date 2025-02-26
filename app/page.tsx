"use client"

import CasaEnVenta from "../page"
import { ThemeProvider } from '@/context/ThemeContext'
import '@/styles/globals.css'

export default function SyntheticV0PageForDeployment() {
  return (
    <ThemeProvider>
      <CasaEnVenta />
    </ThemeProvider>
  )
}