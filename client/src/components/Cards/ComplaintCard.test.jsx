import React from "react";
import { render, screen } from "@testing-library/react";
import ComplaintCard from "./ComplaintCard";

describe("ComplaintCard", () => {
    it("matches the snapshot", () => {
        const complaints = [
            {
            id: "1",
            date: "2021-01-01",
            company: "Company 1",
            complaint: "Complaint 1",
            subIssue: "SubIssue 1",
            companyResponse: "Company Response 1",
            product: "Product 1",
            subProduct: "SubProduct 1",
            resolution: "Resolution 1",
            },
            {
            id: "2",
            date: "2021-01-02",
            company: "Company 2",
            complaint: "Complaint 2",
            subIssue: "SubIssue 2",
            companyResponse: "Company Response 2",
            product: "Product 2",
            subProduct: "SubProduct 2",
            resolution: "Resolution 2",
            },
        ];
        render(<ComplaintCard complaints={complaints}/>);
        const linkElement = screen.getByText(/Date/i);
        expect(linkElement).toBeInTheDocument();
    });
});
