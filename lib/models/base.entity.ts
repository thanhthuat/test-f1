export class BaseEntity {
  id: any = 0;
  createdAt = '';
  updatedAt = '';

  get isNew() {
    return isNaN(Number(this.id)) || this.id === 0;
  }
}

export enum BooleanNumber {
  No,
  Yes,
}
