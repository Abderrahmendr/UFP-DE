import React from 'react'

function registrieren() {
  return (
<div className="flex flex-col sm:flex-row lg:justify-center lg:mr-10 lg:items-center md:justify-center md:items-center sm:justify-end sm:mr-10">
<form className="  relative flex flex-col sm:w-1/2 lg:w-1/3  xl:w-1/3 mx-auto md:justify-center md:items-center sm:mx-0 bg-white rounded p-8 shadow-md  ">
<div className="flex justify-center mb-6">
          <a href="/registrieren" className="mr-2">
            <button className="py-2 px-6 border-2 border-teal-700 hover:bg-teal-700 hover:text-white text-black rounded font-bold hover:opacity-95">
              Neu hier
            </button>
          </a>
          <a href="/anmelden">
            <button className="py-2 px-6 border-2 border-teal-700 hover:bg-teal-700 hover:text-white text-black rounded font-bold hover:opacity-95">
              Anmelden
            </button>
          </a>
        </div>
<h1 className=' m-10 text-black text-3xl flex justify-center items-center  font-extrabold border-b-2 pb-4 border-teal-700  '>Registrieren</h1>
<div className='relative z-0 mb-5 group'>
<input 
type="text"
 name="floating_name" 
 id="floating_name"
 placeholder='  Nachname'
 className='mt-5 mx-8   peer min-h-[auto] w-5/6 rounded border-2  border-slate-800 bg-transparent p-10
 px-5 py-[0.70rem] leading-[2.15] outline-none 
 transition-all duration-200  bg-white
 easy-linear text-black focus:placeholder:opacity-100
 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100
 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300
 dark:autofill:shadow-autofill dark:peer-focus:text-primary
  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
 '/> 
 <label
              for="exampleFormControlInput2"
              class="pointer-events-none bg-white absolute left-10 top-8 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.0rem] pl-2 text-md leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >Nachname
            </label>
</div>


<div className='relative z-0 mb-5 group'>
<input 
type="text"
 name="floating_name" 
 id="floating_name"
 placeholder='  Nachname'
 className='mt-5 mx-8   peer min-h-[auto] w-5/6 rounded border-2  border-slate-800 bg-transparent p-10
 px-5 py-[0.70rem] leading-[2.15] outline-none 
 transition-all duration-200  bg-white
 easy-linear text-black focus:placeholder:opacity-100
 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100
 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300
 dark:autofill:shadow-autofill dark:peer-focus:text-primary
  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
 '/> 
 <label
              for="exampleFormControlInput2"
              class="pointer-events-none bg-white absolute left-10 top-8 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.0rem] pl-2 text-md leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > Vorname
            </label>
</div>

<div className='relative z-0 mb-5 group'>
<input 
type="text"
 name="floating_name" 
 id="floating_name"
 placeholder='  E-Mail Adress'
 className='mt-5 mx-8   peer min-h-[auto] w-5/6 rounded border-2  border-slate-800 bg-transparent p-10
 px-5 py-[0.70rem] leading-[2.15] outline-none 
 transition-all duration-200  bg-white
 easy-linear text-black focus:placeholder:opacity-100
 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100
 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300
 dark:autofill:shadow-autofill dark:peer-focus:text-primary
  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
 '/> 
 <label
              for="exampleFormControlInput2"
              class="pointer-events-none bg-white absolute left-10 top-8 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.0rem] pl-2 text-md leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > E-Mail-Adresse
            </label>
</div>
<div className='relative z-0 mb-5 group'>
<input 
type="password"
 name="floating_name" 
 id="floating_name"
 placeholder='  Nachname'
 className='mt-5 mx-8   peer min-h-[auto] w-5/6 rounded border-2  border-slate-800 bg-transparent p-10
 px-5 py-[0.70rem] leading-[2.15] outline-none 
 transition-all duration-200  bg-white
 easy-linear text-black focus:placeholder:opacity-100
 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100
 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300
 dark:autofill:shadow-autofill dark:peer-focus:text-primary
  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
 '/> 
 <label
              for="exampleFormControlInput2"
              class="pointer-events-none bg-white absolute left-10 top-8 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.0rem] pl-2 text-md leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >Passwort
            </label>
</div>
<div className='relative z-0 mb-5 group'>
<input 
type="text"
 name="floating_name" 
 id="floating_name"
 placeholder='  Straße'
 className='mt-5 mx-8   peer min-h-[auto] w-5/6 rounded border-2  border-slate-800 bg-transparent p-10
 px-5 py-[0.70rem] leading-[2.15] outline-none 
 transition-all duration-200  bg-white
 easy-linear text-black focus:placeholder:opacity-100
 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100
 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300
 dark:autofill:shadow-autofill dark:peer-focus:text-primary
  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
 '/> 
 <label
              for="exampleFormControlInput2"
              class="pointer-events-none bg-white absolute left-10 top-8 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.0rem] pl-2 text-md leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >Straße
            </label>
</div>

<div className='relative z-0 mb-5 group'>
<input 
type="text"
 name="floating_name" 
 id="floating_name"
 placeholder='  Hausnummer'
 className='mt-5 mx-8   peer min-h-[auto] w-5/6 rounded border-2  border-slate-800 bg-transparent p-10
 px-5 py-[0.70rem] leading-[2.15] outline-none 
 transition-all duration-200  bg-white
 easy-linear text-black focus:placeholder:opacity-100
 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100
 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300
 dark:autofill:shadow-autofill dark:peer-focus:text-primary
  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
 '/> 
 <label
              for="exampleFormControlInput2"
              class="pointer-events-none bg-white absolute left-10 top-8 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.0rem] pl-2 text-md leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > Hausnummer
            </label>
</div>
<div className='relative z-0 mb-5 group'>
<input 
type="text"
 name="floating_name" 
 id="floating_name"
 placeholder='  Postleizahl'
 className='mt-5 mx-8   peer min-h-[auto] w-5/6 rounded border-2  border-slate-800 bg-transparent p-10
 px-5 py-[0.70rem] leading-[2.15] outline-none 
 transition-all duration-200  bg-white
 easy-linear text-black focus:placeholder:opacity-100
 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100
 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300
 dark:autofill:shadow-autofill dark:peer-focus:text-primary
  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
 '/> 
 <label
              for="exampleFormControlInput2"
              class="pointer-events-none bg-white absolute left-10 top-8 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.0rem] pl-2 text-md leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >Postleizahl
            </label>
</div>
<div className='relative z-0 mb-5 group'>
<input 
type="text"
 name="floating_name" 
 id="floating_name"
 placeholder=' Stadt'
 className='mt-5 mx-8   peer min-h-[auto] w-5/6 rounded border-2  border-slate-800 bg-transparent p-10
 px-5 py-[0.70rem] leading-[2.15] outline-none 
 transition-all duration-200  bg-white
 easy-linear text-black focus:placeholder:opacity-100
 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100
 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300
 dark:autofill:shadow-autofill dark:peer-focus:text-primary
  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
 '/> 
 <label
              for="exampleFormControlInput2"
              class="pointer-events-none bg-white absolute left-10 top-8 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.0rem] pl-2 text-md leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >Stadt
            </label>
</div>
<a href="">

<button  className="w-5/6 bg-teal-600 hover:bg-teal-700 p-6 ml-8 rounded hover:text-white hover:font-bold hover:opacity-95">
  Jetzt registrieren kostenlos
</button>

</a>
 </form>
    
     </div>

    
  )
}

export default registrieren;