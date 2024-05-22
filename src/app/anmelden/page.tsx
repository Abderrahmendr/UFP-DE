import React from 'react';

function anmelden() {
  return (
    <div className="flex flex-col sm:flex-row lg:justify-center lg:items-center md:justify-center md:items-center sm:justify-end sm:mr-10">
      <form className="relative flex flex-col sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto sm:mx-0 bg-white rounded p-8 shadow-md">
        <div className="flex justify-center mb-6">
          <a href="/registrieren" className="mr-2">
            <button className="py-2 px-6 border-2 border-teal-700 hover:bg-teal-700 hover:text-white text-black rounded font-bold hover:opacity-95">
              Neu hier
            </button>
          </a>
          <a href="anmelden">
            <button className="py-2 px-6 border-2 border-teal-700 hover:bg-teal-700 hover:text-white text-black rounded font-bold hover:opacity-95">
              Anmelden
            </button>
          </a>
        </div>
        <h1 className="text-3xl text-black font-extrabold border-b-2 pb-4 border-teal-700 mb-6 text-center">
          Anmelden
        </h1>
        <div className="relative z-0 mb-6">
          <input
            type="text"
            name="email"
            id="email"
            placeholder=" "
            className="block w-full px-4 py-2 border-2 border-slate-800 rounded bg-white text-black focus:outline-none focus:border-teal-700"
          />
         <label
              for=" "
              class="pointer-events-none bg-white absolute  ml-2 -mt-16 text-sm max-w-[90%] origin-[0_0] truncate pt-[0.0rem] pl-2 text-md leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > E-mail-Adresse
            </label>
        </div>
        <div className="relative z-0 mb-6">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            className="block w-full px-4 py-2 border-2 border-slate-800 rounded bg-white text-black focus:outline-none focus:border-teal-700"
          />
         <label
              for=" "
              class="pointer-events-none bg-white absolute ml-2 -mt-16 text-sm max-w-[90%] origin-[0_0] truncate pt-[0.0rem] pl-2 text-md leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              > Passwort
            </label>
          <p className="text-right pt-2 pr-4 text-black">Passwort vergessen?</p>
        </div>
        <a href="#">
          <button className="w-full bg-teal-600 hover:bg-teal-700 py-2 rounded text-white font-bold hover:opacity-95">
            Anmelden
          </button>
        </a>
      </form>
    </div>
  );
}

export default anmelden;
