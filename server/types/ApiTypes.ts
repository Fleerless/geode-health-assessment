export type ApiComplaintsArrayType = ApiComplaintType[]

export type ApiComplaintType = {
    sort: SortType,
    _id: string,
    _index: string,
    _score: number,
    _type: string,
    _source: SourceType,
};

type SortType = [
    number,
    string
]

type SourceType = {
    company: string,
    company_public_response: string,
    company_response: string,
    complaint_id: string,
    complaint_what_happened: string,
    consumer_consent_provided: string,
    consumer_disputed: string,
    date_received: string,
    date_sent_to_company: string,
    has_narrative: string,
    issue: string,
    product: string,
    state: string,
    sub_issue: string,
    sub_product: string,
    submitted_via: string,
    tags: string,
    timely: string,
    zip_code: string,
};