import { Player } from "./player";
import { Team } from "./team";

export class Match{
    matchId!:number;
    homeTeam!:Team;
    homeTeamFormation!:string;
    // homeTeamInitalSquad!:Player[]
    // homeTeamSubstitutions!:Player[];
    awayTeam!:Team;
    awayTeamFormation!:string;
    // awayTeamInitalSquad!:Player[]
    // awayTeamSubstitutions!:Player[];
    // startDate!:Date;
    // endDate!:Date;
}
