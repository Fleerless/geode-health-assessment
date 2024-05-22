import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonContainer from "./ButtonContainer";

describe("ButtonContainer", () => {
    test("ButtonContainer component renders", () => {
        it("matches the snapshot", () => {
                render(<ButtonContainer searchTerms="" setComplaints={() => {}} setSearchTerms={() => {}} />);
                const linkElement = screen.getByText(/learn react/i);
                expect(linkElement).toBeInTheDocument();
        });
    });
});

