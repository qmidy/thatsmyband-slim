import { Player } from '../datamodel/player';
import { Track } from '../datamodel/track';
import { Release } from '../datamodel/release';
import { Schedule } from '../datamodel/schedule';

export class Band {
	Id: string;
	Name: string;
	Cohesion: number;

	Players: Player[];

	Tracks: Track[];

	Releases: Release[];

	Schedule: Schedule;
}