export interface IScorecardEntry {
  id: string;
  name: string;
  military: number;
  coins: number;
  debt: number;
  wonder: number;
  civic: number;
  gears: number;
  compasses: number;
  tablets: number;
  wildcards: number;
  commerce: number;
  guilds: number;
  leaders: number;
  cities: number;
  babel: number;
  projects: number;
}

export interface IScorecardResult {
  id: string;
  name: string;
  military: number;
  money: number;
  debt: number;
  wonder: number;
  civic: number;
  science: number;
  commerce: number;
  guilds: number;
  leaders: number;
  cities: number;
  babel: number;
  projects: number;
  total: number;
}
