import LoginRegisterFooter from "@/components/loginRegisterFooter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
	return (
		<div className="flex h-dvh w-full">
			<div className="flex flex-col w-full items-center justify-center p-8">
				<div className="max-w-3xl w-full mt-auto mb-4">
					<div id="upper_register" className="flex flex-col items-center mb-6">
						<h1 className="text-2xl font-bold">citysphere.</h1>
						<h1 className="mb-2 text-4xl font-bold">Register</h1>
						<p className="text-xs text-center">
							Welcome to citysphere ! Fill this form to start your journey.
						</p>
					</div>

					<form>
						<div className="flex flex-col space-y-4">
							<div id="form_part1" className="flex flex-col md:flex-row gap-6">
								<div className="w-full">
									<label htmlFor="fname" className="text-sm font-bold">
										First Name
									</label>
									<input
										type="text"
										id="fname"
										name="fname"
										className="w-full rounded-md border border-black p-2 bg-customGray shadow-shadow-hover"
									/>
								</div>

								<div className="w-full">
									<label htmlFor="lname" className="text-sm font-bold">
										Last Name
									</label>
									<input
										type="text"
										id="lname"
										name="lname"
										className="w-full rounded-md border border-black p-2  bg-customGray shadow-shadow-hover"
									/>
								</div>
							</div>

							<div id="form_part2" className="flex flex-col md:flex-row gap-6">
								<div className="w-full">
									<label htmlFor="phoneNum" className="text-sm font-bold">
										Phone Number
									</label>
									<input
										type="tel"
										id="phoneNum"
										name="phoneNum"
										className="w-full rounded-md border border-black p-2  bg-customGray shadow-shadow-hover"
									/>
								</div>

								<div className="w-full">
									<label htmlFor="email" className="text-sm font-bold">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full rounded-md border border-black p-2  bg-customGray shadow-shadow-hover"
									/>
								</div>
							</div>

							<div id="form_part4" className="flex flex-col md:flex-row gap-6">
								<div className="w-full">
									<label htmlFor="password" className="text-sm font-bold">
										Password
									</label>
									<input
										type="password"
										id="password"
										name="password"
										className="w-full rounded-md border border-black p-2  bg-customGray shadow-shadow-hover"
									/>
								</div>

								<div className="w-full">
									<label
										htmlFor="confirm-password"
										className="text-sm font-bold"
									>
										Confirm Password
									</label>
									<input
										type="password"
										id="confirm-password"
										name="confirm-password"
										className="w-full rounded-md border border-black p-2 bg-customGray shadow-shadow-hover"
									/>
								</div>
							</div>
							<div className="flex justify-center items-center">
								<Button type="submit" className="rounded-3xl w-1/2">
									Create Account
								</Button>
							</div>
						</div>
					</form>
				</div>
				<div className="mt-auto mb-auto">
					<div className="flex flex-row text-xs gap-1">
						<p>Already a member?</p>
						<Link href="/login" className="font-bold">
							Sign In.
						</Link>
					</div>
				</div>
				<LoginRegisterFooter />
			</div>
		</div>
	);
}
