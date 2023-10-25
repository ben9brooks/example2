//constructor, like book.js
//  properties - model, color, number of cameras
//  method(s)

class Phone {
    constructor(
        model,
        color,
        frontCameras,
        backCameras,
        batteryLevel,
        status
    ) {
        this.model = model;
        this.color = color;
        this.cameras = {
            front: frontCameras,
            back: backCameras
        };
        this.batteryLevel = batteryLevel;
        this.status = status;
    }
    
    changeStatus(newStatus) {
        this.status = newStatus;
    }
}

export default Phone;