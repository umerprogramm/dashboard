import { render,fireEvent } from "@testing-library/react"
import Login from '../login/Login'
import {Provider} from 'react-redux'
import { Store } from "../store/Store"
Store.subscribe(()=>console.log(Store.getState()))


test('This is login test',()=>{
    const { queryByText } = render(<Provider store={Store}><Login /></Provider>)
    const  button = queryByText("sumbit")
    fireEvent.click(button)
    expect(button).toBeDisabled();

})