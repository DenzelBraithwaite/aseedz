/*
This serves as a save file with all of the settings about the current game.
1 is required to play, all other models/classes live inside a world.
*/
import Seed from './seed';

type WorldDay = 'Unoni'; 'Twodi'; 'Tredi'; 'Quadi'; 'penti'; 'hexi';
type WorldMonth = 'New' | 'Waning Crescent' | 'Tredi Quarter' | 'Waning Gibbous' | 'Full' | 'Waxing Gibbous' | 'Uno Quarter' | 'Waxing Crescent';
interface WorldOptions {
  worldName?: string; // Name of world / save file / planet
  maxActions?: number; // Max actions player has each day.
  remainingActions?: number; // Remaining daily actions, refreshes daily.
  dayCount?: number; // num of days since game started.
  currentDay?: WorldDay; // Hexi the 6th day is the weekend
  currentDayIndex?: number; // e.g. Unoni = 1, not 0 indexed
  currentWeek?: number; // e.g. 2 for second week of year
  currentMonth?: WorldMonth; // append 'moon' to all month names
  currentMonthIndex?: number; // e.g. 3 for third month of year
  currentYear?: string; // e.g. year of the farmer, something where each year something changes e.g. farming is enhanced.
  currentYearIndex?: number; // e.g. year 1 or year 2024
  currentSeason?: string; // e.g. winter
  plantedSeeds?: Seed[] // List of curently planted seeds on planet.
  unlockedSeeds?: Seed[] // List of all unlocked / available seeds.

  // Player
  playerName?: string; // Player's chosen name
  playerLevel?: number; // Player's current level
  playerExp?: number; // Player's current level of exp (max 100)
  playerInventory?: Seed[]; // All inventory will be instances of children of the Seed class.
}

// By using all of these as constructors, I can easily rebuild a save file.
export default class World {
  public worldName: string = 'World';
  public maxActions: number = 1;
  public remainingActions: number = 1; 
  public dayCount: number = 0; 
  public currentDay: WorldDay = 'Unoni';
  public currentDayIndex: number = 1; 
  public currentWeek: number = 1; 
  public currentMonth: WorldMonth = 'New';
  public currentMonthIndex: number = 1;
  public currentYear: string = 'Year of the Farmer'; 
  public currentYearIndex: number = 1; 
  public currentSeason: string = 'Spring';
  public plantedSeeds: Seed[] = [];
  public unlockedSeeds: Seed[] = [];
  public playerName: string = 'Player';
  public playerLevel: number = 1;
  public playerExp: number = 0;
  public playerInventory: Seed[] = [];

  // Because 0 is valid, I use ?? instead of ||.
  constructor(options: WorldOptions) {
    this.worldName = options.worldName ?? this.worldName;
    this.maxActions = options.maxActions ?? this.maxActions;
    this.remainingActions = options.remainingActions ?? this.remainingActions;
    this.dayCount = options.dayCount ?? this.dayCount;
    this.currentDay = options.currentDay ?? this.currentDay;
    this.currentDayIndex = options.currentDayIndex ?? this.currentDayIndex;
    this.currentWeek = options.currentWeek ?? this.currentWeek;
    this.currentMonth = options.currentMonth ?? this.currentMonth;
    this.currentMonthIndex = options.currentMonthIndex ?? this.currentMonthIndex;
    this.currentYear = options.currentYear ?? this.currentYear;
    this.currentYearIndex = options.currentYearIndex ?? this.currentYearIndex;
    this.currentSeason = options.currentSeason ?? this.currentSeason;
    this.plantedSeeds = options.plantedSeeds ?? this.plantedSeeds;
    this.unlockedSeeds = options.unlockedSeeds ?? this.unlockedSeeds;
    this.playerName = options.playerName ?? this.playerName;
    this.playerLevel = options.playerLevel ?? this.playerLevel;
    this.playerExp = options.playerExp ?? this.playerExp;
    this.playerInventory = options.playerInventory ?? this.playerInventory;
  }

  startGame(): void {
    console.log('Game is starting!');
  }

  newDay(): void {
    this.remainingActions = this.maxActions;
    this.harvestSeeds();

    // TODO: Begin flow of "what would you like to do" as long as points remaining.
    // TODO: 
    // TODO: 
    // TODO: 

  }

  plantSeed(seed: Seed): void {
    this.remainingActions -= 1;

    // TODO: plant seed logic
  }

  harvestSeeds(): void {
    // TODO: adds all harvested seeds to inventory

    // TODO: Makes toast (in future will be long vertical scrollable list, toast closed with x only) of all seeds grown.
  }

  hasActionsRemaining(): boolean {
    return this.remainingActions > 0;
  }
}