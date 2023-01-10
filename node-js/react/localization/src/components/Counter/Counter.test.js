import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Counter from "./index";


describe("Counter Tests", () => {
    let count, increaseBtn,decreaseBtn
    beforeEach(() =>{
        render(<Counter />);
        
         count = screen.getByText("0");
         increaseBtn = screen.getByText("Increase");
         decreaseBtn = screen.getByText("Decrease");
         console.log("her testten önce bir kere çalışacağım")
    })

    afterEach(() => {
        console.log("Her testten sonra bir kere çalışacağım")
    })
    beforeAll(()=>{
        console.log("Basta bir kere çalişacağım")
    })

    afterAll(() => {
        console.log("En sonda bir kere çalışacağım ")
    })

    test("increase btn",() => {
    
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });
    
    test("decrease btn", () =>{
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1")
    });
} );


