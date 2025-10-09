import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { IconArrowRight } from '@tabler/icons-react';

function AddNewSessionDialog(){
    return (
        <Dialog>
        <DialogTrigger>
            <Button className='w-full mt-2'>Start Consultation <IconArrowRight /></Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}

export default AddNewSessionDialog;