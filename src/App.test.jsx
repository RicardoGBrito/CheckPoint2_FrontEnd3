import "@testing-library/jest-dom"
import {render, fireEvent} from "@testing-library/react"
import { describe, expect} from "vitest"

import {Card} from "./Components/Card"

describe("Testando o componente Card", () => {

    it('Testando se o card está sendo carregado', ()=>{

        const {getByText} = render(<Card/>)

        expect(getByText('Detalhes')).toBeInTheDocument
    })


})