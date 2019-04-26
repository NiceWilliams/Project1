export class ReimbursementStatus {
    statusId: number; // primary key
    status: string; // not null, unique
  
  constructor(statusId: number, status = '') {
    this.statusId = statusId;
    this.status = status;
  }
  }