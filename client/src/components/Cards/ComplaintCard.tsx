import React from 'react';
import {
  ComplaintResponseArrayType,
  ComplaintResponseType,
} from "types/ResponseTypes";
import { Table, TableHeader, TableLabel, TableRow, TableData } from 'components/Cards/styled/TableElements';

interface ComplaintCardProps {
    complaints: ComplaintResponseArrayType;
}

const ComplaintCard: React.FC<ComplaintCardProps> = ({ complaints }) => {
    return (
      <Table>
        <TableHeader>
          <TableLabel>Date</TableLabel>
          <TableLabel>Id</TableLabel>
          <TableLabel>Company</TableLabel>
          <TableLabel>Complaint</TableLabel>
          <TableLabel>Subissue</TableLabel>
          <TableLabel>Company Response</TableLabel>
          <TableLabel>Product</TableLabel>
          <TableLabel>Subproduct</TableLabel>
          <TableLabel>Resolution</TableLabel>
        </TableHeader>
        {complaints.map((complaint: ComplaintResponseType, index: number) => (
          <TableRow key={complaint.id} isEven={!!(index % 2)}>
            <TableData>{complaint.date}</TableData>
            <TableData>{complaint.id}</TableData>
            <TableData>{complaint.company}</TableData>
            <TableData>{complaint.complaint}</TableData>
            <TableData>{complaint.subIssue}</TableData>
            <TableData>{complaint.companyResponse}</TableData>
            <TableData>{complaint.product}</TableData>
            <TableData>{complaint.subProduct}</TableData>
            <TableData>{complaint.resolution}</TableData>
          </TableRow>
        ))}
      </Table>
    );
};

export default ComplaintCard;