import React from 'react'

function Notes({ titletext, textareatext, onDelete }) {
  return (
  

   <div className="bg-white rounded-xl shadow-lg p-4 min-h-60 flex flex-col relative inset-shadow-sm inset-shadow-gray-500  hover:shadow-xl transition-shadow duration-200">
                <h5 className="font-bold text-lg text-gray-800 mb-2 border-b border-gray-300 pb-1">
        {titletext}
      </h5>
                 <p className="text-sm text-gray-600 leading-relaxed wrap-anywhere  ">
        {textareatext}
      </p>
                <button
                 onClick={onDelete}
               className="bg-red-500 hover:bg-red-600 text-xs px-3 py-1 rounded-full absolute bottom-3 right-3 text-white font-semibold shadow-sm"
                >Delete
                </button>
   </div>
  )
}

export default Notes