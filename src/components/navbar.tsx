"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	const links = [
		{
			path: "/",
			name: "Home",
		},
		{
			path: "/events",
			name: "Events",
		},
		{
			path: "/community",
			name: "Community",
		},
		{
			path: "/maps",
			name: "Maps",
		},
		{
			path: "/faq",
			name: "FAQ",
		},
	];

	return (
		<nav className="border-b-4 border-red-600 p-5 bg-black sticky top-0">
			<ul className="flex justify-between items-center text-white">
				<li className="flex-shrink-0">
					<div className="flex flex-row gap-3">
						<Link href="/">
							<Image
								src="/logo.png"
								width={30}
								height={30}
								alt="Citysphere Logo"
							/>
						</Link>
						<h1 className="font-bold text-[20px]">citysphere.</h1>
					</div>
				</li>

				<div className="flex flex-row gap-12">
					{links.map((link) => {
						return (
							<li key={link.path} className="flex justify-center items-center">
								<div className="">
									<Link href={link.path}>
										<span>{link.name}</span>
									</Link>
								</div>
							</li>
						);
					})}
				</div>

				<li className="flex-shrink-0 flex gap-6">
					<div id="location" className="flex flex-row gap-2">
						<div id="location_svg">
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="mt-[3px]"
							>
								<path
									d="M8 1.5C5.51562 1.5 3.5 3.41844 3.5 5.78125C3.5 8.5 6.5 12.8084 7.60156 14.2966C7.64729 14.3594 7.70722 14.4105 7.77646 14.4457C7.84571 14.481 7.9223 14.4994 8 14.4994C8.0777 14.4994 8.15429 14.481 8.22354 14.4457C8.29278 14.4105 8.35271 14.3594 8.39844 14.2966C9.5 12.8091 12.5 8.50219 12.5 5.78125C12.5 3.41844 10.4844 1.5 8 1.5Z"
									stroke="white"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M8 7.5C8.82843 7.5 9.5 6.82843 9.5 6C9.5 5.17157 8.82843 4.5 8 4.5C7.17157 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17157 7.5 8 7.5Z"
									stroke="white"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>

						<span>Location</span>
					</div>
					<div id="settings">
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="14" cy="14" r="13.5" stroke="white" />
							<path
								d="M16.8 14.4487C16.8 14.8164 16.7276 15.1805 16.5869 15.5202C16.4462 15.8599 16.2399 16.1686 15.9799 16.4286C15.7199 16.6886 15.4112 16.8948 15.0715 17.0355C14.7318 17.1763 14.3677 17.2487 14 17.2487C13.6323 17.2487 13.2682 17.1763 12.9285 17.0355C12.5888 16.8948 12.2801 16.6886 12.0201 16.4286C11.7601 16.1686 11.5539 15.8599 11.4131 15.5202C11.2724 15.1805 11.2 14.8164 11.2 14.4487C11.2 13.7061 11.495 12.9939 12.0201 12.4688C12.5452 11.9437 13.2574 11.6487 14 11.6487C14.7426 11.6487 15.4548 11.9437 15.9799 12.4688C16.505 12.9939 16.8 13.7061 16.8 14.4487Z"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M21.2088 16.1263C21.6264 16.0135 21.8352 15.9567 21.9176 15.8495C22 15.7415 22 15.5687 22 15.2223V13.6751C22 13.3287 22 13.1551 21.9176 13.0479C21.8352 12.9407 21.6264 12.8839 21.2088 12.7719C19.6488 12.3511 18.672 10.7199 19.0744 9.1695C19.1856 8.7431 19.2408 8.5295 19.188 8.4047C19.1352 8.2799 18.9832 8.1935 18.68 8.0215L17.3 7.2375C17.0024 7.0695 16.8536 6.9847 16.72 7.0023C16.5864 7.0199 16.4352 7.1703 16.1336 7.4719C14.9664 8.6359 13.0352 8.6359 11.8672 7.4719C11.5656 7.1711 11.4152 7.0207 11.2816 7.0023C11.148 6.9847 10.9992 7.0687 10.7016 7.2383L9.3216 8.0215C9.0176 8.1935 8.8656 8.2799 8.8136 8.4055C8.7608 8.5295 8.816 8.7431 8.9264 9.1695C9.3288 10.7199 8.352 12.3511 6.7912 12.7719C6.3736 12.8839 6.1648 12.9399 6.0824 13.0479C6 13.1559 6 13.3287 6 13.6751V15.2223C6 15.5687 6 15.7423 6.0824 15.8495C6.1648 15.9567 6.3736 16.0135 6.7912 16.1263C8.3512 16.5471 9.328 18.1783 8.9256 19.7279C8.8144 20.1543 8.7592 20.3679 8.812 20.4927C8.8648 20.6175 9.0168 20.7039 9.32 20.8767L10.7 21.6591C10.9976 21.8287 11.1464 21.9127 11.28 21.8951C11.4136 21.8775 11.5648 21.7271 11.8664 21.4255C13.0344 20.2599 14.9672 20.2599 16.1352 21.4255C16.4368 21.7263 16.5872 21.8767 16.7208 21.8951C16.8544 21.9127 17.0032 21.8287 17.3016 21.6591L18.6808 20.8759C18.9848 20.7039 19.1368 20.6175 19.1888 20.4919C19.2408 20.3663 19.1864 20.1543 19.076 19.7279C18.6728 18.1783 19.6488 16.5471 21.2088 16.1263Z"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div id="notifications">
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="14" cy="14" r="13.5" stroke="white" />
							<path
								d="M9.6 19.6V12.4C9.6 11.1269 10.1057 9.90604 11.0059 9.00586C11.9061 8.10569 13.127 7.59998 14.4 7.59998C15.673 7.59998 16.8939 8.10569 17.7941 9.00586C18.6943 9.90604 19.2 11.1269 19.2 12.4V19.6M9.6 19.6H19.2M9.6 19.6H8M19.2 19.6H20.8M13.6 22H15.2"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M14.3999 7.6C14.8417 7.6 15.1999 7.24183 15.1999 6.8C15.1999 6.35817 14.8417 6 14.3999 6C13.9581 6 13.5999 6.35817 13.5999 6.8C13.5999 7.24183 13.9581 7.6 14.3999 7.6Z"
								stroke="white"
							/>
						</svg>
					</div>
				</li>
			</ul>
		</nav>
	);
}
