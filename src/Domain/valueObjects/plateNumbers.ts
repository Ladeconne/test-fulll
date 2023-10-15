export class PlateNumber {
    value: string;

    constructor(value) {
        // You can add validation logic for plate numbers here
        if (typeof value !== 'string' || value.length === 0) {
            throw new Error('Invalid plate number');
        }

        this.value = value;
    }

}