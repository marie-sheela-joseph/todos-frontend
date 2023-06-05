import {render,screen} from '@testing-library/react'
import Todos from './Todos'
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe("Todos",()=>{
    test("renders h1",()=>{
        render(<Provider store={store}><Todos/></Provider>)
        const headingElement=screen.getByRole('heading')
        expect(headingElement).toBeInTheDocument()
    })
})