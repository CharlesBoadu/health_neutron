import React from 'react';
import { useRouter } from "next/router";
import BookingForm from '../../components/BookingForm';

function bookedItem() {
  const router = useRouter();

  const { name, amount } = router.query;

  return (
    <div>
      Welcome to Booking Forms page
      <BookingForm name={name} amount={amount}/>
    </div>
  )
}

export default bookedItem