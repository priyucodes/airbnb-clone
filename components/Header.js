import Image from 'next/image'
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  Bars3Icon,
} from '@heroicons/react/20/solid'
import { useState } from 'react'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'

const Header = () => {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState('')
  const [noOfGuests, setNoOfGuests] = useState(1)

  const resetInput = () => {
    setSearchInput('')
  }
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      {/* we used flex so it shrinked the height so we gave height to fix */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        {/* Converts it to webp(alot smoller in size) */}
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain" // it wont stretch, keep the aspect ratio
          objectPosition="left"
          alt="airbnb"
        />
      </div>

      {/* MID */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          // pl-5 so we add space to left to border but it didnt cuz input bg is white so we made in transparent
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          // placeholder:text-gray-400 both works

          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* RIGHT */}

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {/* empty strings are falsy */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#fd5861']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-500"
              value={noOfGuests}
              min={1}
              onChange={e => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            {/* these two battle to take max space results in like sorta cenmter and space between sides like space-around  */}
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  )
}
export default Header
