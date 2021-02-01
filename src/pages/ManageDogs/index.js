import React from 'react'
import { useDogs } from '../../hooks/resources/useDogs' 

export const ManageDogs = () => {

    const { dogs, loadingDobs, error } = useDogs()
    console.log('dogs', dogs)
}