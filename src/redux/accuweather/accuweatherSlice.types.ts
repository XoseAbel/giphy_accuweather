export interface AccuweatherSlice {
  loading: boolean;
  error: string | null;
  id: string;
  selectedCity: string;
  language: string;
  headline: string;
  data: DataAccuweather[];
  favouriteList: string[];
}

export interface DataAccuweather {
  Date: string;
  Day: {
    Icon: number;
    IconPhrase: string;
  };
  Night: {
    Icon: number;
    IconPhrase: string;
  };
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
}
