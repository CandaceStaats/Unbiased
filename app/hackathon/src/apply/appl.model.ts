export interface Appl {
    id: string;
    name: string;
    email: string;
    encryInfo: string;
    status: ApplStatus;
}

export enum ApplStatus{
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}