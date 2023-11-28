import Image from "../Img/splitbg.jpg"

export default function Profile() {


	return (
		<>
			<div className="relative">
				
				<div className="sm:absolute top-5 mx-5 text-5xl font-bold text-blue-500 lg:text-1xl">
					Refregeration & <br/> Air-conditioning<br/> Services
				</div>
				<img src={Image}/>
				<hr className="bg-slate-400 h-1 w-full my-4" />
				<div className="block mx-10">
					<h5 className="my-6 mt-10 font-normal tracking-tight text-blue-500 text-5xl">
						Our Services
					</h5>
					<p className="font-normal text-gray-500 w-30 text-2xl">We offer Air-conditioning installation, repair, reprocess, and preventive maintenance of cassette, split, floor-mounted and window-type air-condition.</p>
					<p className="font-normal text-gray-500"></p>
				</div>
				<div className="block mx-10">
					<h5 className="my-6 mt-10 font-normal tracking-tight text-blue-500 text-5xl">
						Why Choose Us
					</h5>
					<p className="font-normal text-gray-500 w-30 text-2xl">We are fully committed to our customers and meet the airconditioning standard procedure in installation, and preventive maintenance.</p>
					
				</div>
			</div>
		</>
	);
}