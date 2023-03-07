import { screen, render } from "@testing-library/react"

import Header from "../components/Header"

describe("Header Test", () => {
  it("Rendering Header Component", () => {
    render(<Header />)

    expect(screen.getByText("AWS Todo App")).toBeTruthy()
  })
})
