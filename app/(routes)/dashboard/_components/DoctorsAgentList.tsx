import React from 'react'
import {AIDoctorAgents} from '../../../../shared/list'
import Image from 'next/image';
import DoctorAgentCard from './DoctorAgentCard';

function DoctorsAgentList() {
    return (
        <div className='mt-10'>
            <h2 className='font-bold text-xl'>AI Specialist Doctors Agent</h2>
            <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5 gap-4'>
                {AIDoctorAgents.map((agent) => (
                    <div key={agent.id}>
                        {/* <Image src={agent.image} alt={agent.specialist} width={50} height={50} className='rounded-full'/>
                        <h3 className='font-semibold'>{agent.specialist}</h3>
                        <p className='text-sm text-gray-500'>{agent.description}</p> */}
                        <DoctorAgentCard agent={agent} />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default DoctorsAgentList