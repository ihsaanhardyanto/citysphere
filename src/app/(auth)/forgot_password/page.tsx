import LoginRegisterFooter from "@/components/loginRegisterFooter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function forgotPasswordPage() {
	return (
		<div className="flex h-dvh w-full justify-center">
			<div className="flex flex-col w-full items-center justify-center p-8 max-w-lg">
				<div className="mt-auto mb-auto">
					<div id="upper_forgot" className="flex flex-col items-center mb-6">
						<h1 className="text-2xl font-bold mb-3">citysphere.</h1>
						<p className="text-xs text-center max-w-sm">
							Enter the email address associated with your account and we’ll
							send you a link to reset your password.
						</p>
					</div>

					<div
						id="middle_forgot"
						className="w-full flex flex-col justify-center items-center gap-4"
					>
						<div className="w-full max-w-sm items-center">
							<Label htmlFor="email" className="font-bold">
								Email
							</Label>
							<Input
								type="email"
								id="email"
								placeholder="Input your email here"
								className="bg-customGray placeholder:text-xs shadow-shadow-hover border-black"
							/>
						</div>
						<Button
							type="submit"
							className="w-full rounded-3xl bg-black mx-20 text-white transition-all duration-300 ease-in-out hover:bg-zinc-900 max-w-sm"
						>
							Continue
						</Button>
					</div>
				</div>

				<div id="upperBottom_forgot" className="flex flex-row text-xs mb-auto">
					<div className="flex flex-row gap-1 text-wrap text-xs">
						<p>Don&apos;t have an account?</p>
						<Link href="/register" className="font-bold">
							Create Account
						</Link>
					</div>
				</div>

				<div id="bottom_forgot" className="flex flex-row text-xs mb-auto">
					<LoginRegisterFooter />
					<div className="px-4 py-2 text-gray-300 md:py-4">
						<div className="flex flex-row justify-center gap-2 text-wrap align-text-bottom">
							<p className="text-gray-400">Contact</p>
						</div>
					</div>
					<div className="px-8 py-2 text-gray-300 md:py-4">
						<div className="flex flex-row justify-center gap-2 text-wrap align-text-bottom">
							<p className="text-gray-400">Privacy & Terms</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
