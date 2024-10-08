import React from 'react'
import {
    getProviders,
    signIn
} from 'next-auth/react'

import Header from '../../components/Header'


// * server-side

export const getServerSideProps = async (
    providers
) => (
    providers = await getProviders(),
    { props: { providers }}
)


// client-side

export default ({
    providers
}) =>
    <>
        <Header />
        <div className={'mt-40'}>
            {Object.values(providers)
                    .map(provider =>
                        <div
                            key={provider?.name ?? ''}
                            className={'flex flex-col items-center'}
                        >
                            <img
                                className={'w-52 object-cover'}
                                // TODO: Replace with Google Logo
                                src={'https://images.app.goo.gl/f6FZ7XsxcLZnFkfV6'}
                                alt={'google'}
                            />
                            <p className={'my-10 text-center text-sm italic'}>
                                This website is created for learning purposes
                            </p>
                            <button
                                className={'p-3 rounded-lg text-white bg-red-400 hover:bg-red-500'}
                                onClick={
                                    () => signIn(
                                        provider?.id ?? '',
                                        { callbackUrl: '/' }
                                    )
                                }
                            >
                                Sign in with {provider?.name || '-'}
                            </button>
                        </div>
                    )}
        </div>
    </>
