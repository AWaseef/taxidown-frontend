"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

// Consent choice is stored as consent=true|false. Rejecting must be as easy as accepting (GDPR/LSSI).
export default function Consent({ text, accept, reject, more, lang }) {
  const [hasChoice, setHasChoice] = useState(true)

  useEffect(() => {
    setHasChoice(/(^|;\s*)consent=(true|false)/.test(document.cookie))
  }, [])

  const choose = (value) => {
    document.cookie = `consent=${value}; path=/; max-age=31536000; SameSite=Lax`
    setHasChoice(true)
  }

  if (hasChoice) return null

  return (
    <div role="dialog" aria-live="polite" className="fixed bottom-0 left-0 right-0 flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 py-6 bg-gray-100 z-2000">
    <span className="text-dark text-base md:mr-16">
        {text}{" "}
        <Link href={`/${lang}/terms#privacy`} className="underline">{more}</Link>
    </span>
    <div className="flex gap-3 shrink-0">
      <button
          className="border border-gray-500 py-2 px-6 rounded text-gray-900 bg-white"
          onClick={() => choose("false")}
      >
          {reject}
      </button>
      <button
          className="bg-green-500 py-2 px-6 rounded text-white"
          onClick={() => choose("true")}
      >
          {accept}
      </button>
    </div>
    </div>
  )
}
