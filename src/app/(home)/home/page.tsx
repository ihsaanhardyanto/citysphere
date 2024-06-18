import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";


export default function Home() {
	return (
		<>
			<Navbar />
			<main className="w-full h-screen flex flex-row">
				<section id="left_sidebar" className="w-1/6 h-full bg-white	border-r-2 border-black">
					<Sidebar />
				</section>

				<section className="flex flex-col p-10 w-3/4 gap-5">
					<h1 className="text-4xl text-neutral-200">Dashboard</h1>
					<div className="flex justify-center w-full h-80 border border-neutral-500/50 bg-neutral-800/20 rounded">
						<div className="flex justify-center items-center gap-5 w-full ">
							<div className="border-neutral-500/50 h-72 w-1/2 bg-neutral-800/20 rounded border" />
						</div>
					</div>
				</section>

				<section id="right_sidebar" className="w-1/4 h-full bg-gray-800/50 p-4">
					<h1>Right Sidebar</h1>
				</section>
			</main>
		</>
	);
}
