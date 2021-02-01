import { mutate } from 'swr'
import { DOGS_ENDPOINT } from '../../constnts/endpoints'
import http from '../../util/http'
import useRestfulSWR from '../useRestfulSWR'

export const useDogs = () => {
    // fetch a list of users using the useRestfulSWR hook
    const { data: dogs, isValidating: loadingDogs, error } = useRestfulSWR(DOGS_ENDPOINT)

    console.log('dogs', data.dogs)
}

return { dogs, loadingDobs, error }