import { useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {
    MicrophoneIcon,
    SearchIcon,
    XIcon
} from '@heroicons/react/solid'

import User from './User'
import SearchHeaderOptions from "./SearchHeaderOptions";


export default ({
    router = null,
    searchInputRef = null,
    search = null
}) => (
    router = useRouter(),
    searchInputRef = useRef(null),
    search = (
        e,
        input = null // requires default value (event-listener - only e arg)
    ) => (
        e.preventDefault(),
        input =
            searchInputRef.current
                          ?.value,
        !!input
        && router.push(
            `/search?term=${input.trim()}&searchType=`
        )
    ),
    <header className={'sticky top-0 bg-white'}>
        <div className={'w-full p-6 flex items-center'}>
            <Image
                width={'120'} height={'40'}
                className={'cursor-pointer'}
                // TODO: Replace with Google Logo
                src={'https://images.app.goo.gl/f6FZ7XsxcLZnFkfV6'}
                alt={'google'}
                objectFit={'contain'}
                onClick={() => router.push('/')}
            />
            <form className={'max-w-3xl ml-10 mr-5 px-6 py-3 flex flex-grow border border-gray-200 rounded-full shadow-lg items-center'}>
                <input
                    type={'text'}
                    defaultValue={router.query?.term ?? ''}
                    ref={searchInputRef}
                    className={'w-full focus:outline-none'}
                />
                <XIcon className={'h-7 text-gray-500 cursor-pointer sm:mr-3'} onClick={() => ( searchInput.current.value = '' )} />
                <MicrophoneIcon className={'h-6 mr-3 pl-4 text-blue-500 border-l-2 border-gray-300 hidden sm:inline-flex'} />
                <SearchIcon className={'h-6 text-blue-500 hidden sm:inline-flex'} />
                <button type={'submit'} onClick={search} hidden></button>
            </form>
            <User className={'ml-auto whitespace-nowrap'} />
        </div>
        <SearchHeaderOptions />
    </header>
)
