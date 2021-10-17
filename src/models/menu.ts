interface LineStatus {
    id: number;
    lineId: string;
    statusSeverity: number;
    statusSeverityDescription: string;
    reason?: string;
}

interface ServiceType {
    name: string;
    uri: string;
}

export interface TFLService {
    id: string;
    name: string;
    lineStatuses: Array<LineStatus>;
    serviceTypes: Array<ServiceType>;
}