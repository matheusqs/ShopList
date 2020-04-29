export class ListItens {
    uuid?: string;
    title: string;
    description: string;
    values: Array<{ value: string, isChecked: boolean }>;

    constructor() {
        this.values = [];
    }
}
