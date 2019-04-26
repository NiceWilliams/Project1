export class ReimbursementType {
    typeId: number; // primary key
    type: string; // not null, unique

  constructor(typeId: number, type = '') {
    this.typeId = typeId;
    this.type = type;
  }
  }