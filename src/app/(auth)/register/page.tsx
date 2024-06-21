import LoginRegisterFooter from "@/components/loginRegisterFooter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="flex h-full w-full">
      <div className="flex w-full flex-col items-center justify-center p-8">
        <div className="mb-4 mt-auto w-full max-w-3xl">
          <div id="upper_register" className="mb-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold">citysphere.</h1>
            <h1 className="mb-2 text-4xl font-bold">Register</h1>
            <p className="text-center text-xs">
              Welcome to citysphere ! Fill this form to start your journey.
            </p>
          </div>

          <form>
            <div className="flex flex-col space-y-4">
              <div id="form_part1" className="flex flex-col gap-6 md:flex-row">
                <div className="w-full">
                  <label htmlFor="fname" className="text-sm font-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="w-full rounded-md border border-black bg-customGray p-2 shadow-shadow-hover"
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
                    className="w-full rounded-md border border-black bg-customGray  p-2 shadow-shadow-hover"
                  />
                </div>
              </div>

              <div id="form_part2" className="flex flex-col gap-6 md:flex-row">
                <div className="w-full">
                  <label htmlFor="phoneNum" className="text-sm font-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNum"
                    name="phoneNum"
                    className="w-full rounded-md border border-black bg-customGray  p-2 shadow-shadow-hover"
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
                    className="w-full rounded-md border border-black bg-customGray  p-2 shadow-shadow-hover"
                  />
                </div>
              </div>

              <div id="form_part4" className="flex flex-col gap-6 md:flex-row">
                <div className="w-full">
                  <label htmlFor="password" className="text-sm font-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full rounded-md border border-black bg-customGray  p-2 shadow-shadow-hover"
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
                    className="w-full rounded-md border border-black bg-customGray p-2 shadow-shadow-hover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button type="submit" className="w-1/2 rounded-3xl">
                  Create Account
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="mb-auto mt-auto">
          <div className="flex flex-row gap-1 text-xs">
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
