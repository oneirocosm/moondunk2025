export default class Gpio {
    pin: number;
    type: string;
    status: number; 
    constructor(pin: number, type: string) {
        this.pin = pin;
        this.type = type;
        this.status = 0;
    }

    writeSync(status: number) {
        console.log(`Debug only.  This is only simulating pin control: Pin ${this.pin} is being set from ${this.status} to ${status}`);
        this.status = status;
    }
}
