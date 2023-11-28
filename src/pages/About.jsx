import Cassette from "../Img/cassette.png"
import Image from "../Img/cassettebg.jpg"
import Window from "../Img/split.png"

export default function About() {
	return (
		<div className="relative">
			<div className=" text-6xl font-bold text-blue-500 opacity-100">
				About Us
			</div>
			<div className="md:flex gap-5 justify-between item-center grid">
				<img className="w-72 h-72" src={Cassette} />
				<img className="w-72 h-72 opacity-80" src={Image} />
				<img className="w-72 h-72" src={Window} />
			</div>
			<hr className="bg-slate-400 h-1 w-full my-4" />
			<div className='font-normal text-gray-500 w-30 py-10 text-3xl'>
				<p>
					We are former refrigeration and air-conditioning technicians who dreams to be the one of the best air-conditioning services in Cebu.
				</p>
			</div>
			<div className='font-normal pt-10'>
				<h1 className='text-blue-500 text-5xl'>We make sure that we offer high quality services</h1>
				<p className=' text-gray-500 py-10 w-30 text-3xl'>Our refrigeration and air-conditioning technician are certified with TESDA and had a full knowledge in aircon preventive maintenance, quality repair, installation, refrigerant charging and relocation of units.</p>
			</div>
		</div>
	);
}