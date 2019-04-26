export class Reimbursement {
    reimbursementId: number; // primary key
    author: number;  // foreign key -> User, not null
    amount: number;  // not null
    datesubmitted: number; // not null
    dateresolved: number;
    description: string; // not null
    resolver: number; // foreign key -> User
    status: number; // foreign ey -> ReimbursementStatus, not null
    type: number; // foreign key -> ReimbursementType

  constructor(reimbursementId: 0, author: 0, 
    amount: 0, dateSubmitted: 0, 
    dateResolved: 0, description: '', resolver: 0, status: 0, type: 0) {
    this.reimbursementId = reimbursementId;
    this.author = author;
    this.amount = amount;
    this.datesubmitted = dateSubmitted;
    this.dateresolved = dateResolved;
    this.description = description;
    this.resolver = resolver;
    this.status = status;
    this.type = type;
  
  }
  }