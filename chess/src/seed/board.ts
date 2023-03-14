interface IPiece {
  id: string;
  name: string;
  subname: string;
}

interface IPieceColor {
  id: string;
  name: string;
}

export const SeedPieceColors: IPieceColor[] = [
  {
    id: 'BLACK',
    name: 'Black'
  },
  {
    id: 'WHITE',
    name: 'White'
  }
];

export const SeedPiece: IPiece[] = [
  {
    id: 'K',
    name: 'King',
    subname: 'Rey'
  },
  {
    id: 'Q',
    name: 'Queen',
    subname: 'Reina'
  },
  {
    id: 'R',
    name: 'Rook',
    subname: 'Torre'
  },
  {
    id: 'B',
    name: 'Bishop',
    subname: 'Alfil'
  },
  {
    id: 'KN',
    name: 'Knight',
    subname: 'Caballo'
  },
  {
    id: 'P',
    name: 'Pawn',
    subname: 'Peon'
  }
];
