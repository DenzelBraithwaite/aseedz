interface WorldOptions {
  remainingActions?: number; // Remaining daily actions, refreshes daily.
  dayCount?: number; // num of days since game started.
  currentDay?: 'Unoni' | 'Twodi' | 'Tredi' | 'Quadi' | 'penti' | 'hexi'; // Hexi the 6th day is the weekend
  currentDayIndex?: number; // e.g. Unoni = 1, not 0 indexed
  currentWeek?: number; // e.g. 2 for second week of year
  currentMonth?: 'New' | 'Waning Crescent' | 'Tredi Quarter' | 'Waning Gibbous' | 'Full' | 'Waxing Gibbous' | 'Uno Quarter' | 'Waxing Crescent'; // append 'moon' to all month names
  currentMonthIndex?: number; // e.g. 3 for third month of year
  currentYear?: string; // e.g. year of the farmer, something where each year something changes e.g. farming is enhanced.
  currentYearIndex?: number; // e.g. year 1 or year 2024
  currentSeason?: string; // e.g. winter
}

// By using all of these as constructors, I can easily rebuild a save file.
export default class World {
  public remainingActions: number = 1; 
  public dayCount: number = 0; 
  public currentDay: string = 'Unoni';
  public currentDayIndex: number = 1; 
  public currentWeek: number = 1; 
  public currentMonth: string = 'New';
  public currentMonthIndex: number = 1;
  public currentYear: string = 'Year of the Farmer'; 
  public currentYearIndex: number = 1; 
  public currentSeason: string = 'Spring';

  // Because 0 is valid, I use ?? instead of ||.
  constructor(options: WorldOptions = {}) {
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
  }
}