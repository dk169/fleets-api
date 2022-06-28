import { Ship } from './ship.dto';

export class Record {
  position: {
    coordinates: number[];
    extensions: string[];
    type: string;
  };
  ship: Ship;
}
