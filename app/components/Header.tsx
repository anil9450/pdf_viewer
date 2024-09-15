"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { LiaSignOutAltSolid } from "react-icons/lia";

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-7xl items-center justify-between p-2 lg:px-8 shadow-sm">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 hidden lg:block">
            <h1 className="font-bold text-blue-500 text-2xl">
              Search study resources
            </h1>
            <span className="text-sm text-gray-500">
              Find solved assignments, academic reports, presentations,
              dissertations, class notes and more.
            </span>
          </a>
        </div>
        <div className="flex lg:hidden p-2 justify-between">
          <button className="p-2 bg-blue-500 rounded-full text-white">
            <Bars3Icon className="h-6 w-6" />
          </button>
          <div className="flex">
            <button className="text-white bg-blue-500 p-2 rounded-full">
              Subscribe Now
            </button>
            <button className="flex text-blue-500 border-blue-500 p-2 border rounded-full ml-2">
              <LiaSignOutAltSolid className="mt-1" />
              <span className="ml-3">Login</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
