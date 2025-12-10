import type React from "react";

export type childrenProps = {
  children: React.ReactNode;
};

export type CityFeatureType = {
  type: "Feature";
  properties: {
    datasource: {
      sourcename: string;
      attribution: string;
      license: string;
      url: string;
    };
    other_names?: {
      [key: string]: string;
    };
    population: string;

    country: string;
    country_code: string;
    state: string;
    county: string;
    city: string;
    iso3166_2: string;
    iso3166_2_sublevel: string;
    lon: number;
    lat: number;
    state_code: string;
    result_type: string;
    county_code: string;
    NUTS_3: string;
    formatted: string;
    address_line1: string;
    address_line2: string;
    category: string;
    timezone: {
      name: string;
      offset_STD: string;
      offset_STD_seconds: number;
      offset_DST: string;
      offset_DST_seconds: number;
      abbreviation_STD: string;
      abbreviation_DST: string;
      offset_from_utc: string;
    };
    plus_code: string;
    plus_code_short: string;
    rank: {
      importance: number;
      popularity: number;
      confidence: number;
      confidence_city_level: number;
      match_type: string;
    };
    place_id: string;
  };
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  bbox: [number, number, number, number];
};
