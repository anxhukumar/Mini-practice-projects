import React from 'react'

function GlowingBtn({text, onClick}) {
  return (
    <div className="relative inline-flex  group">
          <div
              className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#b68ef5] via-[#7f1ebb] to-[#793cc9] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
          </div>
          <button onClick={onClick}
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button">
                {text}
          </button>

      </div>
  )
}

export default GlowingBtn