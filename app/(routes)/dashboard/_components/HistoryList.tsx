"use client"
import {useState} from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AddNewSessionDialog from './AddNewSessionDialog';

const HistoryList = () => {
    const [historyList, setHistoryList] = useState([]);
    return (
        <div>
            <h1>History</h1>
            {historyList.length == 0 ?
            <div className='flex items-center flex-col justify-center p-7 border border-dashed border-gray-300 rounded-lg'>
                <Image src={'/medical-assistance.png'} alt='empty' width={200} height={200} />
                <h2 className='font-bold text-xl mt-2'>No history available</h2>
                <p>It looks like you haven't interacted with the medical assistant yet.</p>
                <AddNewSessionDialog />
            </div>:
            <div>List</div>}
        </div>
    )
}

export default HistoryList