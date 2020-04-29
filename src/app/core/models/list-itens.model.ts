export class ListItens {
    title: string;
    description: string;
    values: Array<{ value: string, isChecked: boolean }>;

    constructor() {
        this.values = [];
    }
}
