import Link from "next/link";

export interface TileInterface {
  name: string;
  score: 1 | 2 | 3 | 5 | 8 | 13;
  time: number;
}

interface TileProps extends TileInterface {}

export const Tile = ({ name, score, time }: TileProps) => (
  <Link
    href="/size-fruit-color"
    className="rounded-lg p-2 border flex flex-col justify-center text-white text-center bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
  >
    <h3 className="text-xl font-medium ">{name}</h3>
    <p>
      Score: <b>{score}</b>
    </p>
    <p>
      Time spent: <b>{time}h</b>
    </p>
  </Link>
);
