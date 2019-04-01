export interface Follower {
  name: Name;
  location: Location;
  picture: Picture;
}

export interface Name {
  first: string;
  last: string;
}

export interface Location {
  city: string;
  state: string;
}

export interface Picture {
  large: string;
}
