export interface Cities {
  id: string;
  cityRegionCountry: string;
}

export interface AutocompleResponse {
  Key: string;
  LocalizedName: string;
  Country: { LocalizedName: String; ID: String };
  AdministrativeArea: { LocalizedName: String; ID: String };
}
