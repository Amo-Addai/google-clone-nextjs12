import { useRouter } from 'next/router'


export default ({
    title,
    // camelcase prop 'Icon' can be used as sub-component (receives component-value - Icon)
    Icon,
    selected,
    router = null,
    selectTab = null
}) => (
    router = useRouter(),
    selectTab = (title) => (
        router.push(
            `/search?term=${router.query?.term ?? ''}&searchType=${
                title === 'Images' && 'images'
            }`
        )
    ),
    <div
        className={
            `pb-3 flex items-center space-x-1 border-b-4 border-transparent cursor-pointer hover:text-blue-500 hover:border-blue-500 ${
                selected && 'text-blue-500 border-blue-500'
            }`
        }
        {/* TODO: check: if event-listener can be called 'not as a functor', if title arg is already a component-prop */}
        onClick={() => selectTab(title)}
    >
        <Icon className={'h-4'} />
        <p>{title}</p>
    </div>
)
