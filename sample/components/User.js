import {
    useSession,
    signIn,
    signOut
} from 'next-auth/react'


export default ({
    className,
    session = null
}) => (
    { data: session } = useSession(),
    !!session
    ? <>
        <img
            className={`h-10 w-10 p-1 rounded-full hover:bg-gray-200 cursor-pointer ${className}`}
            onClick={signOut}
            src={session?.user?.image || 'http://placehold.it/'}
            alt={'user-image'}
        >
    </>
    : <>
        <button
            onClick={signIn}
            className={`px-6 py-2 font-medium rounded-md bg-blue-500 text-white hover:brightness-105 hover:shadow-md ${className}`}
        >
            Sign in
        </button>
    </>
)
