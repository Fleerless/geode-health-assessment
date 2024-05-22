import { ClientComplaintType } from "types/ClientTypes";
import { ApiComplaintType } from "types/ApiTypes";
import { CleanedComplaintsType } from "types/FunctionTypes";
import moment from "moment";

export const cleanedComplaints: CleanedComplaintsType = (complaints) => {
    return complaints?.map((complaint: ApiComplaintType): ClientComplaintType => {
        return {
            date: moment(complaint._source.date_received).format("MM/DD/YYYY"),
            id: complaint._source.complaint_id,
            company: complaint._source.company,
            subProduct: complaint._source.sub_product,
            complaint:
            complaint._source.complaint_what_happened ||
            complaint._source.issue ||
            "No complaint provided",
            subIssue: complaint._source.sub_issue,
            companyResponse:
                complaint._source.company_public_response ||
                "No response provided",
            product: complaint._source.product,
            resolution: complaint._source.company_response,
        };
    });
}