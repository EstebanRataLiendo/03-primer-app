import { render } from "@testing-library/react"
import { FirstApp } from "../../src/FirstApp"


describe('Pruebas en FirstApp.jsx', () => {
    test('Debe hacer match con el snapshot ', () => {
        const subTitle ='Hola mundo'
        const {container}= render(<FirstApp subTitle= {subTitle} />);
        expect (container).toMatchSnapshot();
    });
    
    test('debe mostrar el titulo en un h1', () => {
        const title ='Hola, mundo!'
        const {container, getByText,getByTestId}= render(<FirstApp title= {title} />)
        expect(getByText(title)).toBeTruthy()

        expect(getByTestId('test-title').innerHTML).toBe(title)

        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toBe(title)
    })
    
    test('debe mostrar el subtitulo mostrado por props ', () => {
        const title ='Hola mundo'
        const subTitle ='Subtitulo Mundo'
        const {getByText}= render(
            <FirstApp 
                title= {title} 
                subTitle= {subTitle} 
            />);
        expect (getByText(subTitle)).toBeTruthy();
    })
    
});