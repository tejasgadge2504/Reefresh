import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const PeventsCard = ({key, event}) => {
  return (
    <div className='w-[300px]'>
<Card>
  <CardHeader>
    <CardTitle>{event.eventName}</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
    </div>
  )
}

export default PeventsCard