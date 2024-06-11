import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-6">
			<div>
				<h1 className="text-7xl font-bold">citysphere</h1>
			</div>
			<div className="flex flex-wrap gap-3">
				<Link href="/login">
					<Button>Login</Button>
				</Link>
				<Link href="/register">
					<Button>Register</Button>
				</Link>
			</div>
		</div>
	);
}
