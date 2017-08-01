export default class Piece {
    constructor(owner, name) {
        this.owner = owner;
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get classes() {
        return [];
    }

    render() {
        throw "NotImplemented";
    }
}

class BlackWhiteChessPiece extends Piece {
    constructor(owner, name, filename) {
        super(owner, name);
        this.filename = filename;
    }

    render() {
        let color = false;
        if (this.owner.number == 1) color = "white";
        if (this.owner.number == 2) color = "black";
        if (!color) throw "InvalidOwnerNumber";
        return "./images/chess/" + this.filename.replace("%color%", color);
    }
}

export class Pawn extends BlackWhiteChessPiece {
    constructor(owner) {
        super(owner, "Pawn", "chess_piece_2_%color%_pawn.png");
    }
}