import { ClientComplaintType } from "types/ClientTypes";
import { ApiComplaintsArrayType, ApiComplaintType } from "types/ServerTypes";

type CleanedComplaintsType = (complaints: ApiComplaintsArrayType) => ClientComplaintType[];

export const cleanedComplaints: CleanedComplaintsType = (complaints) => {
    return complaints.map((complaint: ApiComplaintType): ClientComplaintType => {
        return {
            date: complaint._source.date_received,
            id: complaint._source.complaint_id,
            company: complaint._source.company,
            subIssue: complaint._source.sub_issue,
            subProduct: complaint._source.sub_product,
            complaint:
                complaint._source.complaint_what_happened ||
                complaint._source.issue ||
                "No complaint provided",
            companyResponse:
                complaint._source.company_public_response ||
                "No response provided",
            product: complaint._source.product,
            resolution: complaint._source.company_response,
        };
    });
}