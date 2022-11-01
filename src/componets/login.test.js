import { render,fireEvent } from "@testing-library/react"
import Login from '../login/Login'
import {Provider} from 'react-redux'
import { Store } from "../store/Store"
import * as Realm from 'realm-web'
Store.subscribe(()=>console.log(Store.getState()))

test('Before clicking on button',()=>{
    const { queryByText } = render(<Provider store={Store}><Login /></Provider>)
    const  button = queryByText("sumbit")
    expect(button).toBeEnabled();
    expect(button).toHaveTextContent("sumbit")

})

test('When button clicked',()=>{
    const { queryByText } = render(<Provider store={Store}><Login /></Provider>)
    const  button = queryByText("sumbit")
    fireEvent.click(button)
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent("loading...")

})
