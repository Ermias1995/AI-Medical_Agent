"use client"
import {useState} from 'react'
import Image from 'next/image';

const HistoryList = () => {
    const [historyList, setHistoryList] = useState([]);
    return (
        <div>
            <h1>History</h1>
            {historyList.length == 0 ?
            <div>
                <Image src={'/medical-assistance.png'} alt='empty' width={200} height={200} />
            </div>:
            <div>List</div>}
        </div>
    )
}

export default HistoryList