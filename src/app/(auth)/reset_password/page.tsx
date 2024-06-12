import LoginRegisterFooter from "@/components/loginRegisterFooter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function resetPasswordPage() {
	return (
		<div className="flex h-dvh w-full justify-center">
			<div className="flex flex-col w-full items-center justify-center p-8 max-w-lg">
				<div className="mt-auto mb-auto">
					<div id="upper_reset" className="flex flex-col items-center mb-6">
						<h1 className="text-2xl font-bold mb-3">citysphere.</h1>
						<h1 className="text-3xl font-light mb-3">Reset account password</h1>
						<p className="text-xs text-center max-w-sm">
							Enter new password for noreply@gmail.com
						</p>
					</div>

					<div
						id="middle_reset"
						className="w-full flex flex-col justify-center items-center gap-4"
					>
						<div className="w-full max-w-sm items-center">
							<Label htmlFor="password_reset" className="font-bold">
								Password
							</Label>
							<Input
								type="password"
								id="password_reset"
								className="bg-customGray placeholder:text-xs shadow-shadow-hover border-black"
							/>
						</div>

						<div className="w-full max-w-sm items-center">
							<Label htmlFor="confirmPassword_reset" className="font-bold">
								Confirm Password
							</Label>
							<Input
								type="password"
								id="confirmPassword_reset"
								className="bg-customGray placeholder:text-xs shadow-shadow-hover border-black"
							/>
						</div>

						<Button
							type="submit"
							className="w-full rounded-3xl bg-black mx-20 text-white transition-all duration-300 ease-in-out hover:bg-zinc-900 max-w-sm"
						>
							Reset Password
						</Button>
					</div>
				</div>

				<div id="bottom_reset" className="flex flex-row text-xs mb-auto">
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
