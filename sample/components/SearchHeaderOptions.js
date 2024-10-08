import { useRouter } from 'next/router'
import {
    SearchIcon,
    PhotographIcon
} from '@heroicons/react/outline'

import SearchHeaderOptions from "./SearchHeaderOptions";


export default ({
    router = null
}) => (
    router = useRouter(),
    <div className={'w-full mx-auto flex justify-center text-sm text-gray-700 border-b space-x-8 select-none lg:pl-52 lg:justify-start'}>
        {/*
            camelcase prop 'Icon' can be used as sub-component,
            with a component value (Icon component-value from @heroicons)
        */}
        <SearchHeaderOption
            title={'All'}
            Icon={SearchIcon}
            selected={
                !router.query?.searchType?.length
                // replaces: empty string / null check
                // router.query?.searchType === '' || !router.query?.searchType
            }
        />
        <SearchHeaderOption
            title={'Images'}
            Icon={PhotographIcon}
            selected={
                router.query?.searchType === 'image'
            }
        />
    </div>
)
