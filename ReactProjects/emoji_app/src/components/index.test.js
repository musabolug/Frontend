import {fireEvent, render,screen}from "@testing-library/react"

import userEvent from "@testing-library/user-event"

import Emoji from "./index"

describe("Emoji Search testleri",() =>{
    let input;
 

    test("Arama yapıldığında filtrelenmeli", () =>{
        render(<Emoji />)
        input = screen.getByTitle("input")
        const emoji = "Smile"
        fireEvent.change(input,{target:{value:emoji}})

        expect(screen.getByText(emoji)).toBeInTheDocument();
    })
})