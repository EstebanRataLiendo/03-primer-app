import {  fireEvent, render,screen } from "@testing-library/react"
import { CounterApp } from "../../src/CounterApp"

describe('Counter App', () => {

    const initialValue=100

    test('Debe hacer match con el snapshot ', () => {
        const {container}= render(<CounterApp value={initialValue} />);
        expect (container).toMatchSnapshot();
    });
    
    test('debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={initialValue} />);
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading', {level:2}).innerHTML).toContain('100');
    })
    
    test('debe sumar 1 al hacer click', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('101')).toBeTruthy();
    })
    
    test('debe restar 1 al hacer click', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByRole('button',{name:'btn-1'}))
        expect(screen.getByText('99')).toBeTruthy();
    })

    test('debe restetear', () => {
        render(<CounterApp value={158358} />);
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByText('158358')).toBeTruthy();
    })
})
