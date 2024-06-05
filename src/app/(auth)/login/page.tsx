import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex h-dvh w-full">
      <div className="hidden md:block md:w-1/2">
        <Image
          src="/auth/laut.png"
          alt="logo"
          width={960}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-center p-8 md:w-1/2">
        <div>
          <h1 className="py-2 text-3xl font-bold">Login</h1>
          <form>
            <div className="flex flex-col space-y-4">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full rounded-md border border-gray-300 p-2"
                  />
                </div>

                <div className="flex flex-col gap-2 py-4 md:flex-row">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-zinc-800 p-2 text-white transition-all duration-300 ease-in-out hover:bg-zinc-900 md:w-1/2"
                  >
                    Login
                  </button>

                  <Link
                    href="/register"
                    className="w-full rounded-md border py-2 text-center transition-all duration-300 ease-in-out hover:bg-zinc-100 md:w-1/2"
                  >
                    <p>Register</p>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
