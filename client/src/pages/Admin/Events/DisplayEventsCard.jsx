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

const DisplayEventsCard = ({event}) => {
  return (
    <div className='w-[300px]'>
<Card>
  <CardHeader>
    <img src={event.eventBanner} alt="" />
    <CardTitle>{event.eventName}</CardTitle>
    <CardDescription>{event.date} {event.startTime}</CardDescription>
    <CardAction>Card Action</CardAction>
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

export default DisplayEventsCard