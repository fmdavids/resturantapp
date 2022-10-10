import { useState } from "react"
import { useDispatch } from "react-redux"
import { addCustomerFood } from "../features/customerSlice"


interface CustomerCardTypes {
  id: string,
  name: string,
  food: string[]
}

export default function CustomerCard({id, name, food}: CustomerCardTypes ){

  const [customerFoodInput, setCustomerFoodInput] = useState('');

  const dispatch = useDispatch()
  
  return (
    <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
              <div className="customer-food">
                {food.map(food => {
                  return <p>{food}</p>
                })}
              </div>
              <div className="customer-food-input-container">
                <input value={customerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value) } />
                <button onClick={ () =>{
                  if(!customerFoodInput) return
                  dispatch(addCustomerFood({
                    id,
                    food: customerFoodInput
                  }))
                  setCustomerFoodInput('')
                }
                }>Add</button>
              </div>
            </div>
          </div>
  )
}

