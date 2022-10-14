import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import "./App.css";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./components/CustomerCard";




function App() {

  const [reservationNameInput, setReservationNameInput] = useState("")
  
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
    );
  const customers = useSelector(
    (state: RootState) => state.customers.value
    );

    const dispatch = useDispatch()

  let handleAddReservation = () => {
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput("")
  }


  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h4 className="reservation-header">Reservations</h4>
            <p>Please click name to add menu </p>
            <div className="reservation-cards-container">
            {reservations.map((name, index) => {
              return <ReservationCard name={name} index = {index} />;
            })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input  value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
            <button onClick={handleAddReservation}>Add Name</button>
          </div>
        </div>
        <div className="customer-food-container">
        <p className="reservation-header menu">Menu List</p>
          { customers.map((customer) => {
            return <CustomerCard id = {customer.id} name = {customer.name} food= {customer.food} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
