import useSWRImmutable from 'swr/immutable'

const usePage = (page) => {
    return useSWRImmutable( page, {
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            if (retryCount >= 3) return
            revalidate({ retryCount })
        },
    })
}

export default usePage
