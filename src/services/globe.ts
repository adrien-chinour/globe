const DOUBLE_PI = Math.PI * 2

const DEFAULT_ROTATE_SPEED = 0.002
const TARGET_ROTATE_SPEED = 0.08

export class GpsLocation {
    latitude: number = 0
    longitude: number = 0
}

export class GlobeLocation {
    phi: number = 0
    theta: number = 0

    /**
     * Create GlobeLocation form GpsLocation
     *
     * This convert plan coordinates (latitude,longitude) to spherical coordinates (theta,phi)
     * @see https://en.wikipedia.org/wiki/Spherical_coordinate_system
     */
    public static fromGpsLocation(location: GpsLocation): GlobeLocation {
        return {
            phi: Math.PI - ((location.longitude * Math.PI) / 180 - Math.PI / 2),
            theta: (location.latitude * Math.PI) / 180
        }
    }
}

/**
 * Object-oriented representation of Globe
 * Use for state handling of WebGL globe canvas
 */
export default class GlobeState {
    /**
     * Current horizontal axis (longitude) angle
     */
    private phi: number = 0

    /**
     * Current vertical axis (latitude) angle
     */
    private theta: number = 0

    private target: GlobeLocation | null = null;

    constructor(initialPhi: number, initialTheta: number) {
        this.phi = initialPhi
        this.theta = initialTheta
    }

    public free(mouvement: {x: number, y: number}): GlobeLocation {



        return this.getCurrentLocation();
    }

    public move(): GlobeLocation {
        /**
         * By default, if no target is set globe will turn on horizontal axis
         */
        if (this.target === null) {
            this.phi -= DEFAULT_ROTATE_SPEED

            return this.getCurrentLocation()
        }

        /**
         * If target is set, globe will go to it on shortest direction ; phi can be negative or positive
         */
        const distancePositive = (this.target.phi - this.phi + DOUBLE_PI) % DOUBLE_PI
        const distanceNegative = (this.phi - this.target.phi + DOUBLE_PI) % DOUBLE_PI

        if (distanceNegative > distancePositive) {
            this.phi += distancePositive * TARGET_ROTATE_SPEED
        } else {
            this.phi -= distanceNegative * TARGET_ROTATE_SPEED
        }

        this.theta = this.theta * (1 - TARGET_ROTATE_SPEED) + this.target.theta * TARGET_ROTATE_SPEED

        return this.getCurrentLocation()
    }

    public setTargetLocation(location: GlobeLocation | null): void {
        this.target = location
    }

    public getCurrentLocation(): GlobeLocation {
        return {
            phi: this.phi,
            theta: this.theta,
        }
    }
}
