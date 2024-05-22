import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonContainer from "./ButtonContainer";

describe("ButtonContainer", () => {
    it("matches the snapshot", () => {
        render(<ButtonContainer searchTerms="" setComplaints={() => {}} setSearchTerms={() => {}} />);
        const linkElement = screen.getByText(/Search by terms:/i);
        expect(linkElement).toBeInTheDocument();
    });
});

