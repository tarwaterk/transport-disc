export const secondarySort = (primaryKey: string, secondaryKey: string) => (a: any, b: any) => {
    if (a[primaryKey] > b[primaryKey]) return 1;
    if (a[primaryKey] < b[primaryKey]) return -1;

    if (a[secondaryKey] > b[secondaryKey]) return 1;
    if (a[secondaryKey] < b[secondaryKey]) return -1;

    return 0;
};
