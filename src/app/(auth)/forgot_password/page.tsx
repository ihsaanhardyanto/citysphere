"use client";

import { useRouter } from "next/navigation";
import LoginRegisterFooter from "@/components/loginRegisterFooter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const router = useRouter();
  return (
    <div className="flex h-dvh w-full justify-center">
      <div className="flex w-full max-w-lg flex-col items-center justify-center p-8">
        <div className="mb-auto mt-auto">
          <div id="upper_forgot" className="mb-6 flex flex-col items-center">
            <h1 className="mb-3 text-2xl font-bold">citysphere.</h1>
            <p className="max-w-sm text-center text-xs">
              Enter the email address associated with your account and we’ll
              send you a link to reset your password.
            </p>
          </div>

          <div
            id="middle_forgot"
            className="flex w-full flex-col items-center justify-center gap-4"
          >
            <div className="w-full max-w-sm items-center">
              <Label htmlFor="email" className="font-bold">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Input your email here"
                className="border-black bg-customGray shadow-shadow-hover placeholder:text-xs"
              />
            </div>
            <Button
              type="submit"
              className="mx-20 w-full max-w-sm rounded-3xl bg-black text-white transition-all duration-300 ease-in-out hover:bg-zinc-900"
              onClick={() => router.push("/reset_password")}
            >
              Continue
            </Button>
          </div>
        </div>

        <div id="upperBottom_forgot" className="mb-auto flex flex-row text-xs">
          <div className="flex flex-row gap-1 text-wrap text-xs">
            <p>Don&apos;t have an account?</p>
            <Link href="/register" className="font-bold">
              Create Account
            </Link>
          </div>
        </div>

        <div id="bottom_forgot" className="mb-auto flex flex-row text-xs">
          <LoginRegisterFooter />
          <div className="w-max px-2 py-2 text-gray-300 md:py-4">
            <div className="flex flex-row justify-center gap-2 text-wrap align-text-bottom">
              <p className="text-gray-400">Contact</p>
            </div>
          </div>
          <div className="w-max px-2 py-2 text-gray-300 md:py-4">
            <div className="flex flex-row justify-center gap-2 text-wrap align-text-bottom">
              <p className="text-gray-400">Privacy & Terms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
