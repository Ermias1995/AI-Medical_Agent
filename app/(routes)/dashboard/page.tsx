import React from 'react'
import HistoryList from './_components/HistoryList'
import { Button } from '@/components/ui/button'

function Dashboard() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>My Dashboard</h2>
                <Button>+ Consult With Doctor</Button>
            </div>
            <HistoryList />
        </div>
    )
}

export default Dashboard