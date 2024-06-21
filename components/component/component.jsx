import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Libre_Franklin, Chivo } from 'next/font/google';


const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
});

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
});

export function Component() {
  return (
    <div className={`flex flex-col min-h-[100dvh] ${libreFranklin.className}`}>
      <header className="px-4 lg:px-2 h-14 flex items-center bg-gradient-to-r from-teal-500 to-teal-700 shadow-lg">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <ComputerIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Steam Trading</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-8 lg:py-16 xl:py-24 bg-gradient-to-b from-teal-50 to-teal-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-teal-900 sm:text-5xl xl:text-6xl/none">
                    Kauppa - Effective and Seamless Steam Trading
                  </h1>
                  <p className="max-w-[600px] text-teal-700 md:text-xl">
                    Revolutionize your Steam trading experience with our cutting-edge platform. Enjoy real-time market analysis, secure transactions, and a user-friendly interface.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-8 text-sm font-medium text-white shadow transition-transform transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-teal-300 bg-white px-8 text-sm font-medium text-teal-700 shadow-sm transition-transform transform hover:scale-105 hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download
                  </Link>
                </div>
              </div>
              <img
                src="https://art-u3.infcdn.net/articles_uploads/2/2910/Steam2.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py bg-teal-200" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-300 px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-teal-900">
                  Elevate Your Steam Trading Experience
                </h2>
                <p className="max-w-[900px] text-teal-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a suite of powerful tools to streamline your Steam trading journey. Enjoy automatized AI-bargains, transactions, real-time market insights, and a user-friendly interface.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://static4.tgstat.ru/channels/_0/74/749003d604c082fe1a08407c11d0ef0c.jpg"
                width="550"
                height="310"
                alt="Secure Trading"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last transition-transform transform hover:scale-105"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-teal-900">AI-bargains</h3>
                  <p className="text-teal-700">
                  Next-generation AI will save you time to automate negotiations.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-teal-900">Real-Time Market Analysis</h3>
                  <p className="text-teal-700">
                    Stay ahead of the curve with our real-time market insights, empowering you to make informed trading decisions.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-teal-900">User-Friendly Interface</h3>
                  <p className="text-teal-700">
                    Enjoy a seamless and intuitive trading experience with our well-designed platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="pricing">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-teal-900">
                Unlock the Power of Seamless Steam Trading
              </h2>
              <p className="max-w-[600px] text-teal-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our flexible pricing plans and start trading with confidence today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-8 text-sm font-medium text-white shadow transition-transform transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Pricing
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-teal-300 bg-white px-8 text-sm font-medium text-teal-700 shadow-sm transition-transform transform hover:scale-105 hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50" id="about">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-200 px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-teal-900">
                  Revolutionizing the Steam Trading Landscape
                </h2>
                <p className="max-w-[900px] text-teal-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Steam Trading, our mission is to empower users with a secure, efficient, and user-friendly platform for their Steam trading needs. We're a team of passionate gamers and tech enthusiasts committed to transforming the way you approach Steam trading.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t" id="contact">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-teal-900">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-teal-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or need support? Our team is here to help.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit" className="bg-teal-600 text-white hover:bg-teal-700 transition-colors transform hover:scale-105">Contact Us</Button>
              </form>
              <p className="text-xs text-teal-600">
                We&apos;ll get back to you as soon as possible.{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-teal-900 text-white">
        <p className="text-xs">&copy; 2024 Kauppa. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Facebook
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Twitter
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Instagram
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function ComputerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
}
