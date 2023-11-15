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
        status,
        dateAcquired
    ) {
        this.model = model;
        this.color = color;
        this.cameras = {
            front: frontCameras,
            back: backCameras
        };
        this.batteryLevel = batteryLevel;
        this.status = status;
        this.dateAcquired = dateAcquired;
    }
    
    changeStatus(newStatus) {
        this.status = newStatus;
    }
    phoneAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired;
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
    }
}

export default Phone;