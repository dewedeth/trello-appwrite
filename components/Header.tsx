"use client"

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from 'react-avatar';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-slate-300/10 rounded-b-2xl">

        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-indigo-400 to-[#d1002d] rounded-md filter blur-3xl opacity-50 -z-50"/>

        <Image
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
          height={100}
          width={300}
          src="https://links.papareact.com/c2cdd5"
          alt="Logo"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 hover:cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/* Icons */}

          {/* Avatar */}
          <Avatar name="Yousef Abdelkhaleq" round size="50"/>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#d1002d]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#d1002d] mr-1" /> 

          GPT is summarising your tasks for the day...
        </p>
      </div>
    </header>
  );
};

export default Header;
