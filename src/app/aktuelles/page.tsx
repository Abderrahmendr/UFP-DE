import React from 'react'

function aktuelles() {
  return (
        
<section className="p-4 lg:p-8 w-full  bg-slate-900 text-white">
  
  <div className="container mx-auto space-y-12">
    <h1 className='flex m-10  mb-5 p-10 hover:cursor-pointer   border-b-2 border-[#04cecf] justify-center items-center text-3xl font-extrabold'>Pressetexte und Presseberichte</h1>
  <div className="flex  flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
    
    <img src="/Asus_Presse_KW17_2024_Blog.webp" alt="" className="h-80 mr-10 dark:bg-gray-500 aspect-video" />
    <span className=' absolute   right-6'>25. APRIL 2024</span>

    <div className="flex flex-col justify-center flex-1 p-6 mt-4 ">

       <h2 className="text-3xl font-bold">ASUS und UFP geben strategische Partnerschaft bekannt – Erste Verfügbarkeit der neuen ExpertBook B3 und B5-Serie im deutschen Markt
 </h2>
      <p className="my-6 ">
      ASUS hat heute zusammen mit der UFP (Union Francaise de Papeterie), einem renommierten Handelsunternehmen für PBS-Produkte, seine strategische Partnerschaft bekannt gegeben. Die Zusammenarbeit zielt darauf ab, die Reichweite und Verfügbarkeit der hochmodernen Fokusprodukte der ASUS Business Unit Systems zu erweitern und gleichzeitig die Marktposition beider Unternehmen zu stärken.</p>
       
    </div>
  </div>

  <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
  <span className=' absolute   left-14 ml-16  '>01. April 2023</span>

    <img src="/Markus_Dierkes_-_Vertriebsleiter.png" alt="" className="h-80 dark:bg-gray-500 aspect-video contain" />

    <div className="flex flex-col justify-center flex-1 p-6 ">
       <h2 className="text-3xl font-bold ml-16">   Neue Vertriebsleitung bei UFP

 </h2>
      <p className="my-6   ml-16">
 
      Markus Dierkes hat ab dem 01. April 2023 die Gesamtvertriebsleitung für den Bereich Handel übernommen.

Nach seinem erfolgreichen Berufseinstieg bei Fellowes, wechselte Dierkes im Jahr 2001 zum Druckerhersteller Brother, wo er zuletzt als Verkaufsleiter Retail für Deutschland und Österreich tätig war. Als versierter Vertriebsprofi hat sich Dierkes erfolgreich gezeigt und kann auf einschlägige Erfolge verweisen. Mit 22 Jahren Markt- und reichlich Führungserfahrung bei Brother, ist Markus Dierkes der ideale Fachmann, den UFP-Vertrieb erfolgreich zu entwickeln und voranzutreiben.

</p>
       
    </div>
  </div>
  
  
</div>
</section>   )
}

export default aktuelles