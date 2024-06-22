"use client";

import LoginRegisterFooter from "@/components/loginRegisterFooter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-dvh w-full ">
      <div className="hidden md:block md:w-1/2">
        <Image
          src="/auth/laut.png"
          alt="logo"
          width={960}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
        <div className="mb-auto mt-auto">
          <section id="upper_login">
            <div>
              <h3 className="font-extrabold">citysphere.</h3>
            </div>
            <div className="flex flex-row gap-2 text-wrap py-2 text-2xl font-light md:text-3xl">
              <h1>Hello Again,</h1> <h1 className="font-bold">Spherians!</h1>
            </div>
          </section>

          <section id="middle_login">
            <form>
              <div className="mb-2 flex flex-col space-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Input your email here"
                    className="w-full rounded-md border border-black bg-customGray p-2 placeholder:text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="font-bold">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Input your password here"
                      className="w-full rounded-md border border-black bg-customGray p-2 placeholder:text-sm"
                    />
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <svg
                      onClick={togglePasswordVisibility}
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
                    >
                      <title>
                        {showPassword ? "Hide Password" : "Show Password"}
                      </title>
                      <path
                        d="M14.3331 4.81088C14.4031 4.9325 14.4221 5.07689 14.3861 5.21251C14.35 5.34812 14.2617 5.46396 14.1405 5.53471C14.0605 5.58322 13.9685 5.60851 13.8749 5.60776C13.7808 5.6086 13.6882 5.58445 13.6066 5.53778C13.5249 5.49111 13.4571 5.4236 13.41 5.34213L12.1882 3.23041C11.4712 3.71268 10.6822 4.07804 9.85067 4.31283L10.2358 6.4976C10.2591 6.63656 10.2269 6.77911 10.1462 6.89459C10.0655 7.01008 9.94268 7.08928 9.80418 7.11518H9.71121C9.58617 7.11554 9.46501 7.07179 9.36905 6.99162C9.27309 6.91146 9.20849 6.80001 9.1866 6.6769L8.80809 4.52533C8.37498 4.58991 7.93778 4.6232 7.49989 4.62494C7.05996 4.62515 6.62057 4.59408 6.18504 4.53198L5.80653 6.68354C5.78465 6.80665 5.72004 6.9181 5.62408 6.99826C5.52812 7.07843 5.40696 7.12219 5.28192 7.12182H5.18895C5.05045 7.09592 4.92765 7.01672 4.84693 6.90123C4.76621 6.78575 4.73403 6.6432 4.75731 6.50424L5.1491 4.31283C4.31492 4.07955 3.52351 3.71411 2.80496 3.23041L1.57645 5.35541C1.52899 5.43502 1.462 5.5012 1.38182 5.54768C1.30163 5.59417 1.21091 5.61942 1.11825 5.62104C1.02515 5.62071 0.933777 5.59592 0.853277 5.54916C0.772777 5.5024 0.705979 5.43531 0.659573 5.3546C0.613168 5.2739 0.588785 5.18242 0.588867 5.08932C0.58895 4.99622 0.613495 4.90478 0.660043 4.82416L1.95496 2.57963C1.50246 2.19156 1.08676 1.76252 0.713168 1.29799C0.669017 1.24416 0.636023 1.18208 0.616109 1.11537C0.596195 1.04865 0.589759 0.978644 0.597176 0.909419C0.604592 0.840194 0.625714 0.773138 0.65931 0.712159C0.692905 0.651179 0.738303 0.597497 0.792856 0.554241C0.846274 0.509717 0.90801 0.476259 0.974476 0.455811C1.04094 0.435362 1.11081 0.428332 1.18002 0.435129C1.24922 0.441926 1.31639 0.462415 1.37761 0.495404C1.43882 0.528392 1.49287 0.573223 1.53661 0.627288C1.95229 1.14553 2.42698 1.61353 2.95106 2.02182H2.9577C4.25445 3.03336 5.85532 3.57635 7.49989 3.56244C9.44559 3.56244 10.9397 2.87846 12.0354 2.02846H12.0487C12.5728 1.62017 13.0475 1.15217 13.4632 0.633928C13.5064 0.579376 13.5601 0.533978 13.6211 0.500382C13.6821 0.466787 13.7491 0.445665 13.8183 0.438248C13.8876 0.430831 13.9576 0.437267 14.0243 0.457182C14.091 0.477096 14.1531 0.51009 14.2069 0.554241C14.2615 0.597497 14.3069 0.651179 14.3405 0.712159C14.3741 0.773138 14.3952 0.840194 14.4026 0.909419C14.41 0.978644 14.4036 1.04865 14.3837 1.11537C14.3637 1.18208 14.3308 1.24416 14.2866 1.29799C13.913 1.76252 13.4973 2.19156 13.0448 2.57963L14.3331 4.81088Z"
                        fill="#707070"
                        style={{ display: showPassword ? "none" : "block" }}
                      />
                    </svg>

                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
                      onClick={togglePasswordVisibility}
                      style={{ display: showPassword ? "block" : "none" }}
                    >
                      <title>
                        {showPassword ? "Hide Password" : "Show Password"}
                      </title>
                      <path
                        d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"
                        fill="#707070"
                      />
                    </svg>
                  </div>
                  <Link
                    href="/forgot_password"
                    className="-mt-1 flex justify-end text-xs font-bold"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </form>
          </section>

          <section id="bottom_login">
            <div className="flex flex-col gap-2 py-2 md:flex-row">
              <button
                type="submit"
                className="w-full rounded-3xl bg-zinc-800 p-2 text-white transition-all duration-300 ease-in-out hover:bg-zinc-900"
              >
                <Link href="/home/thread">Login</Link>
              </button>
            </div>
            <div className="flex flex-row gap-1 text-wrap text-xs">
              <p>Not Registered Yet?</p>
              <Link href="/register" className="font-bold">
                Create Account
              </Link>
            </div>
          </section>
        </div>
        <LoginRegisterFooter />
      </div>
    </div>
  );
}
