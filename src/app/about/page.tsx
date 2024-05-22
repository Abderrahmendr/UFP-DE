import React from 'react'
import { MdOutlinePlace } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";

function about() {
  return (
    <div>
        
<section className="p-4 lg:p-8 w-full  bg-slate-900 text-white">
  
    <div className="container mx-auto space-y-12">
       
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="/ufp_logo.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
 				<h2 className="text-3xl font-bold">Historie </h2>
				<p className="my-6 dark:text-gray-600">

                Im Jahre 1981 wurde die UFP (Union Francaise de Papeterie) als Handelsgesellschaft für PBS-Produkte gegründet. Zunehmend spezialisierte sich UFP auf den Bereich Druckersupplies und Speichermedien und schloss im Jahre 1987 bereits den ersten Direktvertrag mit IBM. 1994 begann die europäische Expansion.

Seit dem Jahre 1997 gehört UFP Deutschland GmbH, Kamp-Lintfort, 
zur UFP-Gruppe mit Sitz in Paris und Standorten in Großbritannien, Spanien, Österreich und den Niederlanden.
 Mit mehr als 750 Mitarbeiterinnen und Mitarbeitern und einem Umsatzvolumen von über 
 1.2 Milliarden Euro ist die UFP-Gruppe einer der wichtigsten europäischen Distributoren 
 der Branche und arbeitet als pan-europäischer Partner mit den größten Herstellern zusammen.</p>
				 
			</div>
		</div>


		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="/UFP_Karte_Europa_2024.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video contain" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
 				<h2 className="text-3xl font-bold">   UFP Deutschland GmbH </h2>
				<p className="my-6 dark:text-gray-600   ml-16">
              <MdOutlinePlace className='flex justify-center items-center size-9 mb-4 ml-8' />

                 René Wolfrum <br/> 
                Carl-Friedrich-Gauss-Straße 11 <br/> 
                47475 Kamp-Lintfort <br/> 
                <span className='flex gap-1'><CiPhone /> +49 2159 699 - 1300
                    </span>  
<span className='cursor-pointer flex gap-1'>
<IoMailOutline /> IT-Ausbildung@ufp.de

</span>
</p>
				 
			</div>
		</div>
        <h1 className='flex justify-center items-center   text-3xl font-bold '>Warum UFP</h1>

		<div className="grid grid-cols-2 gap-4  overflow-hidden rounded-md shadow-sm lg:flex-row  ">
        <article className="rounded-xl hover:opacity-90  bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
  <div className="flex  items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center  "
      aria-hidden="true"
    >
      <div className="flex items-center gap-1">
        <img
        src="/ufp_logo.jpg"
        />
      </div>
    </div>

    <div>
      

      <h3 className="mt-4  text-slate-900 text-lg font-medium sm:text-xl"> Wir setzen auf gegenseitige Wertschätzung.
      </h3>

      <p className="mt-1 text-sm text-slate-700 block">
      Jeder Mensch ist besonders und wertvoll. Unsere Unternehmenskultur stützt sich auf gegenseitige Wertschätzung. 
      Dies ist verbunden mit Respekt und Anerkennung und drückt sich in Freundlichkeit, Interesse und Aufmerksamkeit aus.

      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
           
         </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        
      </div>
    </div>
  </div>
</article>

<article className="rounded-xl hover:opacity-90 bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center  "
      aria-hidden="true"
    >
      <div className="flex items-center gap-1">
        <img
        src="/ufp_logo.jpg"
        />
      </div>
    </div>

    <div>
      

      <h3 className="mt-4  text-slate-900 text-lg font-medium sm:text-xl"> Wir übernehmen Verantwortung.

      </h3>

      <p className="mt-1 text-sm text-slate-700 block">
      Wir sind uns der Verantwortung gegenüber Mitarbeitern und Kunden, aber auch gegenüber der Gesellschaft, bewusst. Unternehmerisch verantwortliches Handeln wird bei jedem Mitarbeiter gestärkt und unterstützt.

      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
           
         </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        
      </div>
    </div>
  </div>
</article>


<article className="rounded-xl hover:opacity-90 bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center  "
      aria-hidden="true"
    >
      <div className="flex items-center gap-1">
        <img
        src="/ufp_logo.jpg"
        />
      </div>
    </div>

    <div>
      

      <h3 className="mt-4  text-slate-900 text-lg font-medium sm:text-xl">       Mehrwert durch Qualität.

      </h3>

      <p className="mt-1 text-sm text-slate-700 block">
Durch ständige Verbesserung unserer internen Prozesse leben wir Qualität in allen unseren Unternehmensbereichen. Daraus resultiert ein Mehrwert für unsere Kunden und Mitarbeiter.
      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
           
         </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        
      </div>
    </div>
  </div>
</article>


<article className="rounded-xl hover:opacity-90 bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center  "
      aria-hidden="true"
    >
      <div className="flex items-center gap-1">
        <img
        src="/ufp_logo.jpg"
        />
      </div>
    </div>

    <div>
      

      <h3 className="mt-4  text-slate-900 text-lg font-medium sm:text-xl">       Wir schaffen Vertrauen durch Transparenz.

      </h3>

      <p className="mt-1 text-sm text-slate-700 block">
 Der Schlüssel zu einer vertrauensvollen Zusammenarbeit liegt in der Transparenz unserer unternehmerischen Entscheidungen. Die daraus entstehende Sicherheit macht uns zu einem wertvollen Partner.
      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
           
         </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        
      </div>
    </div>
  </div>
</article>

		</div>
	</div>
</section> 
    </div>
 )
}

export default about;