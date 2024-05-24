import React from "react";
import Image from "next/image";

function products() {
	return (
		<div className="bg-white w-full xs:grid-cols-1  justify-center items-center -mt-64 m-8 overflow-hidden   " >
			<div class=" flex justify-center items-center  p-2  xs:mb-3 ">
			<img 
			src="/UFP_Logo.png" 
			alt="UFP Logo" 
			className="opacity-20"
			src="/UFP_logo.png" 
			alt="" />
			<p className="flex justify-center items-center -ml-44 mt-12  text-3xl pb-16 font-extrabold
			
			
			"
			
			> UFP Empfiehlt </p>
				</div>

<div className="  -mt-28 grid ml-8 p-28  shadow-sm transition hover:shadow-lg sm:p-6 gap-16 xs:grid-cols-1 xs:text-center sm:grid-cols-1 sm:text-center md:space-x-2  md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-8 w-full">
 				 
				{/* /*-----------------------------------------------------------PRODUCT--01--*/ }
				<div class=" relative  rounded-xl mb-1 hover:shadow-md transition hover:-translate-y-8   ">
				<a
					class=" relative block   w-60     rounded-lg  bg-gray-900  group"
					href="/adapter"
				>
					<img
						class="absolute inset-0 object-scale-down h-72 w-96 
								w-full h-full group-hover:opacity-50 rounded-lg  shadow-2xl  shadow-gray-600 "
						src="/d-link.jpg"
					/>
					<div class="relative p-5">
						<div class="mt-40">
							{/* Hidden content */}
							<div
								class="transition-all transform 
								translate-y-8 opacity-0 
								group-hover:opacity-100 
								group-hover:translate-y-0"
							>
								<div class="p-2">
									<p class="text-lg text-white ">
										Adapter <br/>
										D-Link <br/>
									</p>
									<button
									href="/adapter"
										class="px-4 py-2 text-sm 
											text-white bg-[#04cecf] rounded-sm"
									>
										Mehr Erfahren
									</button>
								</div>
							</div>
							{/* End of hidden content */}
						</div>
					</div>
				</a>
			</div>

			{/* /*-----------------------------------------------------------PRODUCT--02--*/ }
			<div class=" relative  rounded-xl mb-1 hover:shadow-md transition hover:-translate-y-8   ">
				<a
					class=" relative block   w-60     rounded-lg  bg-gray-900  group"
					href="/aktenvernichter"
				>
					<img
						class="absolute inset-0 object-scale-down h-72 w-96 
								w-full h-full group-hover:opacity-50 rounded-lg  shadow-2xl  shadow-gray-600 "
						src="/AKTENVERNICHTER.jpg"
					/>
					<div class="relative p-5">
						<div class="mt-40">
							{/* Hidden content */}
							<div
								class="transition-all transform 
								translate-y-8 opacity-0 
								group-hover:opacity-100 
								group-hover:translate-y-0"
							>
								<div class="p-2">
									<p class="text-lg text-white">
									Aktenvernichter<br/>
									SILB-SCHW
									</p>
									
									<button
									 href="/aktenvernichter"
										class="px-4 py-2 text-sm 
											text-white bg-[#04cecf] rounded-sm"
									>
										Mehr Erfahren
									</button>
								</div>
							</div>
							{/* End of hidden content */}
						</div>
					</div>
				</a>
			</div>
	 

	 {/* /*-----------------------------------------------------------PRODUCT--03--*/ }
	 <div class=" relative  rounded-xl mb-1 hover:shadow-md transition hover:-translate-y-8   ">
				<a
					class=" relative block   w-60     rounded-lg  bg-gray-900  group"
					href="/repeater"
				>
					<img
						class="absolute inset-0 object-scale-down h-72 w-96 
								w-full h-full group-hover:opacity-50 rounded-lg  shadow-2xl  shadow-gray-600 "
						src="/repeater.jpg"
					/>
					<div class="relative p-5">
						<div class="mt-40">
							{/* Hidden content */}
							<div
								class="transition-all transform 
								translate-y-8 opacity-0 
								group-hover:opacity-100 
								group-hover:translate-y-0"
							>
								<div class="p-2">
									<p class="text-lg text-white">
										Repeater <br/>
										TP-LINK AC1750
									</p>
									<button
										class="px-4 py-2 text-sm 
											text-white bg-[#04cecf] rounded-sm"
									>
										Mehr Erfahren
									</button>
								</div>
							</div>
							{/* End of hidden content */}
						</div>
					</div>
				</a>
			</div>

			{/* /*-----------------------------------------------------------PRODUCT--04--*/ }
			<div class=" relative  rounded-xl mb-1 hover:shadow-md transition hover:-translate-y-8   ">
				<a
					class=" relative block   w-60     rounded-lg  bg-gray-900  group"
					href="/laserdruck"
				>
					<img
						class="absolute inset-0 object-scale-down h-72 w-96 
								w-full h-full group-hover:opacity-50 rounded-lg  shadow-2xl  shadow-gray-600 "
						src="/LASERDRUCKER.jpg"
					/>
					<div class="relative p-5">
						<div class="mt-40">
							{/* Hidden content */}
							<div
								class="transition-all transform 
								translate-y-8 opacity-0 
								group-hover:opacity-100 
								group-hover:translate-y-0"
							>
								<div class="p-2">
									<p class="text-lg text-white">
										Laserdruck <br/>
										Ricoh PC200W
									</p>
									<button
										class="px-4 py-2 text-sm 
											text-white bg-[#04cecf] rounded-sm"
									>
										Mehr Erfahren
									</button>
								</div>
							</div>
							{/* End of hidden content */}
						</div>
					</div>
				</a>
			</div>




			{/* /*-----------------------------------------------------------PRODUCT--05--*/ }
			<div class=" relative  rounded-xl mb-1 hover:shadow-md transition hover:-translate-y-8   ">
				<a
					class=" relative block   w-60     rounded-lg  bg-gray-900  group"
					href="/papier"
				>
					<img
						class="absolute inset-0 object-scale-down h-72 w-96 
								w-full h-full group-hover:opacity-50 rounded-lg  shadow-2xl  shadow-gray-600 "
						src="/papier.jpg"
					/>
					<div class="relative p-5">
						<div class="mt-40">
							{/* Hidden content */}
							<div
								class="transition-all transform 
								translate-y-8 opacity-0 
								group-hover:opacity-100 
								group-hover:translate-y-0"
							>
								<div class="p-2">
									<p class="text-lg text-white">
										Double A <br/>
										Papier A4
									</p>
									<button
										class="px-4 py-2 text-sm 
											text-white bg-[#04cecf] rounded-sm"
									>
										Mehr Erfahren
									</button>
								</div>
							</div>
							{/* End of hidden content */}
						</div>
					</div>
				</a>
			</div>


			{/* /*-----------------------------------------------------------PRODUCT--06--*/ }
			<div class=" relative  rounded-xl mb-1 hover:shadow-md transition hover:-translate-y-8   ">
				<a
					class=" relative block   w-60     rounded-lg  bg-gray-900  group"
					href="/tastatur"
				>
					<img
						class="absolute inset-0 object-scale-down h-72 w-96 
								w-full h-full group-hover:opacity-50 rounded-lg  shadow-2xl  shadow-gray-600 "
						src="/GAMING TASTATUR.jpg"
					/>
					<div class="relative p-5">
						<div class="mt-40">
							{/* Hidden content */}
							<div
								class="transition-all transform 
								translate-y-8 opacity-0 
								group-hover:opacity-100 
								group-hover:translate-y-0"
							>
								<div class="p-2">
									<p class="text-lg text-white">
									Nacon Tastaur <br/>
									Gaming Tastaur
									</p>
									<button
										class="px-4 py-2 text-sm 
											text-white bg-[#04cecf] rounded-sm"
									>
										Mehr Erfahren
									</button>
								</div>
							</div>
							{/* End of hidden content */}
						</div>
					</div>
				</a>
			</div>

			{/* /*-----------------------------------------------------------PRODUCT--07--*/ }
			<div class=" relative  rounded-xl mb-1 hover:shadow-md transition hover:-translate-y-8   ">
				<a
					class=" relative block   w-60     rounded-lg  bg-gray-900  group"
					href="/BARCODESCANNER"
				>
					<img
						class="absolute inset-0 object-scale-down h-72 w-96 
								w-full h-full group-hover:opacity-50 rounded-lg  shadow-2xl  shadow-gray-600 "
						src="/BARCODESCANNER.jpg"
					/>
					<div class="relative p-5">
						<div class="mt-40">
							{/* Hidden content */}
							<div
								class="transition-all transform 
								translate-y-8 opacity-0 
								group-hover:opacity-100 
								group-hover:translate-y-0"
							>
								<div class="p-2">
									<p class="text-lg text-white">
									Barcodescanner<br/>
									Granit
									</p>
									<button
										class="px-4 py-2 text-sm 
											text-white bg-[#04cecf] rounded-sm"
									>
										Mehr Erfahren
									</button>
								</div>
							</div>
							{/* End of hidden content */}
						</div>
					</div>
				</a>
			</div>

			{/* /*-----------------------------------------------------------PRODUCT--08--*/ }
			<div class=" relative  rounded-xl mb-1 hover:shadow-md transition hover:-translate-y-8   ">
				<a
					class=" relative block   w-60     rounded-lg  bg-gray-900  group"
					href="/rdx"
				>
					<img
						class="absolute inset-0 object-scale-down h-72 w-96 
								w-full h-full group-hover:opacity-50 rounded-lg  shadow-2xl  shadow-gray-600 "
						src="/hp_RDX.jpg"
					/>
					<div class="relative p-5">
						<div class="mt-40">
							{/* Hidden content */}
							<div
								class="transition-all transform 
								translate-y-8 opacity-0 
								group-hover:opacity-100 
								group-hover:translate-y-0"
							>
								<div class="p-2">
									<p class="text-lg text-white">
									 Etikettendrucker<br/>
										Brother QL1100C 
									</p>
									<button
										class="px-4 py-2 text-sm 
											text-white bg-[#04cecf] rounded-sm"
									>
										Mehr Erfahren
									</button>
								</div>
							</div>
							{/* End of hidden content */}
						</div>
					</div>
				</a>
			</div>

			
		</div>

		</div>


	  
			

	 
      
	 
	);
}

export default products;
