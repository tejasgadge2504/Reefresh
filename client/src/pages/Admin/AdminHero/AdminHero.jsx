import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
const AdminHero = () => {

    const navigate = useNavigate();

  return (
    <div>
      <div className="create-event w-[200px] ">
        <Card className="" onClick={()=>{
                navigate('/create-event')
            }}>
          <CardHeader>
            <CardTitle className="text-xl font-bold ">Create Event</CardTitle>
            <p className="flex justify-center items-center text-6xl" >+</p>
          </CardHeader>
          
          
        </Card>
      </div>
    </div>
  );
};

export default AdminHero;
