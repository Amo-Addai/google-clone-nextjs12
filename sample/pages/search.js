import Head from 'next/head'

import responses from '../fixtures/responses.json'
import SearchHeader from '../../components/SearchHeader'


export default ({
    results
}) => (
    <div>
        <Head>
            <title>Search Page</title>
        </Head>

        {/* Search Header */}

        <SearchHeader />

        {/* Search Results */}



    </div>
)


export const getServerSideProps = // * returns props for this 'search' component
    async (
        context, // contains next/router query params (from index.js)
        data = null
    ) => (
        data = // * cannot: responses || await fetch - responses is an object (not array); can be null / empty {} - not falsy / have entries
            Object.entries(responses ?? {}) // so have to explicitly check for responses .entries length; empty {} will not default to fetch request
                  .length
                    ? responses
                    : await fetch(
                    `https://www.googleapis.com/customsearch/v1?key=${
                        process.env.GOOGLE_API_KEY
                    }&cx=${
                        process.env.GOOGLE_API_CONTEXT_KEY
                    }&q=${
                        (context.query?.term ?? '')
                        + (context.query?.searchType && '&searchType=image')
                    }`
                ).then(response => response.json()),
        {
            props: { results: data } // results prop of search component
        }
    )
