import {render,screen}from "@testing-library/react"

import userEvent from "@testing-library/user-event"

import Emoji from "./index"

describe("Emoji Search testleri",() =>{
    let input;
 

    test("Arama yapıldığında filtrelenmeli", () =>{
        render(<Emoji />)
        input = screen.getByPlaceholderText("Search")
        const input = "Smile"
        userEvent.type(input);

        expect(screen.getByText(input)).toBeInTheDocument();
    })
})