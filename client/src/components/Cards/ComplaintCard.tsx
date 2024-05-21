import React from 'react';

interface Complaint {
    date: string;
    company: string;
    complaint: string;
    subIssue: string;
    companyResponse: string;
    product: string;
    subProduct: string;
    resolution: string;
    id: string;
}

interface ComplaintCardProps {
    complaints: Complaint[];
}

const ComplaintCard: React.FC<ComplaintCardProps> = ({ complaints }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Id</th>
            <th>Company</th>
            <th>Complaint</th>
            <th>Subissue</th>
            <th>Company Response</th>
            <th>Product</th>
            <th>Subproduct</th>
            <th>Resolution</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint, index) => (
            <tr key={index}>
              <td>{complaint.date}</td>
              <td>{complaint.id}</td>
              <td>{complaint.company}</td>
              <td>{complaint.complaint}</td>
              <td>{complaint.subIssue}</td>
              <td>{complaint.companyResponse}</td>
              <td>{complaint.product}</td>
              <td>{complaint.subProduct}</td>
              <td>{complaint.resolution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default ComplaintCard;