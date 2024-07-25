export type Coordinate = {x: number, y: number}

export class PointingState {
    private initialCoordinate : Coordinate|null = null
    private mouvementCoordinate : Coordinate|null = null

    private pointed : boolean = false;

    public startMovement(coordinate: Coordinate) {
        this.pointed = true;
        this.initialCoordinate = coordinate;
        this.mouvementCoordinate = null;
    }

    public stopMovement() {
        this.pointed = false;
        this.initialCoordinate = null;
        this.mouvementCoordinate = null;
    }

    public updateMovement(coordinate: Coordinate): Coordinate|null {
        if (!this.pointed || this.initialCoordinate === null) {
            return null
        }

        return {
            x: coordinate.x - this.initialCoordinate.x,
            y: coordinate.y - this.initialCoordinate.y
        }
    }
}
