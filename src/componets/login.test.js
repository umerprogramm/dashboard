import { render,fireEvent, screen, waitForElement, waitFor } from "@testing-library/react"
import Login from '../login/Login'
import {Provider} from 'react-redux'
import { Store } from "../store/Store"

 
Store.subscribe(()=>console.log(Store.getState()))

test('Before clicking on button',()=>{
    const { queryByText } = render(<Provider store={Store}><Login /></Provider>)
    const button =  screen.getByRole('button' , {name : "submit"})
    expect(button).toBeEnabled()

})



test('When the input is empty',async ()=>{
    render(<Provider store={Store}><Login /></Provider>)
    const BeforeStateChange =  screen.getByRole('button' , {name : "submit"})
    fireEvent.click(BeforeStateChange) 
    const AfterstateChange =  await screen.findByRole('button' , {name : "loading..."})
    expect(AfterstateChange).toBeDisabled()
     const btn = await waitFor(()=>  screen.findByRole('button' , {name : "submit"}) , { timeout: 15000 })
     expect(btn).toBeEnabled()


    


})
