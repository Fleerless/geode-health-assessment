import { ClientComplaintsArrayType } from "types/ClientTypes";
import { ApiComplaintsArrayType } from "types/ApiTypes";

export type CleanedComplaintsType = (complaints: ApiComplaintsArrayType) => ClientComplaintsArrayType;
