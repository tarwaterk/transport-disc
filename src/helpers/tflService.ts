import { TFLService, LineStatus } from '../models/menu';

export const serviceDisruptions = (service?: TFLService): Array<LineStatus> => {
    if (service) {
        return service.lineStatuses.filter((lineStatus: LineStatus) => {
            return lineStatus.statusSeverity !== 10;
        });
    }
    return [];
};
