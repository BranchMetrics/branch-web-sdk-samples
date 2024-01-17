'use client'
import * as React from "react";
import { useState } from 'react'
import { Button } from "../components/ui/button"
 
export default function Counter() {
    
    const handleClick = (e) =>  {
        console.log('sent an event');
        window.branch.logEvent("some event");
    }
  return (
    <div>
      <Button variant="outline" onClick={handleClick}>Log event</Button>
    </div>
  )
}