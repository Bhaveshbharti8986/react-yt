import React, { useState } from 'react'
import Notes from './component/Notes';

function App() {

const [titletext, settitletext] = useState('');
const Titlevalue=(e)=>{
  settitletext(e.target.value); 
}
const [textareatext, settextareatext] = useState('');
const textareavalue=(e)=>{
  settextareatext(e.target.value); 
  
} 
const [notes, setnotes] = useState([]);
const onsubmit = (e) => {
    e.preventDefault();
    if (!titletext.trim() || !textareatext.trim()) return; // prevent empty notes
    setnotes([...notes, { titletext, textareatext }]);
    settitletext('');
    settextareatext('');
  };
  const deleteNote = (index) => {
    setnotes(notes.filter((_, i) => i !== index));
  };
  return (
  
    <div className='w-full h-screen lg:flex  bg-cyan-950  ' >
      
        <form 
          onSubmit={onsubmit} 
            action= "" className='flex flex-col items-center gap-4 px-5 py-3  lg:w-1/2 w-full pb-8  lg:border-r border-amber-50 bg-cyan-950'>
          <p className=' font-black  text-xl text-white '>Add Notes</p>
          <input 
          value={titletext} 
           onChange={Titlevalue}
          type="text"

           placeholder='Enter Title'
            className='w-full px-5 py-1 font-black rounded text-2xl bg-zinc-500 text-white' />
          <textarea
            value={textareatext}
          onChange={textareavalue}
           type="text" 
           placeholder='Write Details'
            className='w-full   px-5 py-3 font-medium rounded text-xl bg-zinc-500 text-white'/>
          <button

           className='w-full p-1 font-black text-xl bg-white  text-black rounded border'
            > Add Notes</button>
        </form>



        <div className='  bg-cyan-950 w-full h-auto lg:w-1/2 lg:h-auto  py-3 px-5 lg:overflow-y-scroll  '>
          <div className='w-full h-auto flex justify-center  '>  
            <h2 className=' font-black  text-xl text-white bg-cyan-950    '>Your Notes</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 mt-5 w-full'>
            {
              notes.map((note,index)=>{
                return <Notes 
                  key={index}
                  titletext={note.titletext} 
                  textareatext={note.textareatext}
                  onDelete={() => deleteNote(index)}  
              />
              })
            }    
          </div>
      </div> 

    </div>
  )
}

export default App