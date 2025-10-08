import React from 'react'
import Image from 'next/image';
import { IconArrowRight } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

type doctorAgent={
    id:number,
    specialist:string,
    description:string,
    image:string,
    agentPrompt:string
}

function DoctorAgentCard({ agent }: { agent: doctorAgent }) {
  return (
    <div className=''>
      <Image src={agent.image} alt={agent.specialist} width={200} height={300} className='w-full h-[250px] object-cover rounded-xl'/>
       <h2 className='font-bold mt-1'>{agent.specialist}</h2>
      <p className='line-clamp-2 text-sm text-gray-500'>{agent.description}</p>
      {/* <p className='text-sm text-gray-500'>{agent.agentPrompt}</p> */}
      <Button className='w-full mt-2'>Start Consultation <IconArrowRight /></Button>
    </div>
  )
}

export default DoctorAgentCard