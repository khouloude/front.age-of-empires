export interface Civilization {
  id: number;
  name: string;
  expansion: string;
  army_type: string;
  unique_unit: string[];
  unique_tech: string[];
  team_bonus: string;
  civilization_bonus: string[];
}

export interface Unit {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  created_in: string;
  cost: {
    Food: number;
    Gold: number;
  };
  build_time: number;
  reload_time: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  attack: number;
  armor: number;
  attack_bonus: [string];
}

export interface Structure {
  id: number;
  name: string;
  expansion: string;
  age: string;
  cost: {
    Wood: string;
  };
  build_time: number;
  hit_points: number;
  line_of_sight: number;
  armor: string;
  special: [string];
}

export interface Technology {
  id: 58;
  name: string;
  expansion: string;
  age: string;
  develops_in: string;
  cost: {
    Food: string;
    Wood: string;
  };
  build_time: number;
  applies_to: [string];
  description: string;
}
