export type TAttributeDef = {
  id: string;
  type: string;
  name: string;
  full_name: string;
  attribute_base: number | string;
  cost_per_point: number;
  cost_adj_percent_per_sm: number;
  thresholds?: {
    state: string;
    explanation: string;
    multiplier: number;
    divisor: number;
    addition: number;
    ops: string[];
  }[];
};

export type TAttribute = {
  attr_id: EAttributeId;
  adj: number;
  calc: {
    value: number;
    points: number;
    current?: number;
  };
};

export enum EAttributeId {
  st = "st",
  dx = "dx",
  iq = "iq",
  ht = "ht",
  will = "will",
  fright_check = "fright_check",
  per = "per",
  vision = "vision",
  hearing = "hearing",
  taste_smell = "taste_smell",
  touch = "touch",
  basic_speed = "basic_speed",
  basic_move = "basic_move",
  fp = "fp",
  hp = "hp",
}

export type THitLocation = {
  id: string;
  choice_name: string;
  table_name: string;
  slots: number;
  hit_penalty: number;
  dr_bonus: number;
  description: string;
  calc: {
    roll_range: string;
    dr: number;
  };
};

export type TEncumbrance = {
  level: number;
  bl: number;
  bm: number;
  dodge: number;
  current?: boolean;
};

export type TAdvantage = {
  type: string;
  id: string;
  name: string;
  userdesc?: string;
  open?: boolean;
  physical?: boolean;
  mental?: boolean;
  exotic?: boolean;
  social?: boolean;
  supernatural?: boolean;
  base_points?: number;
  levels?: string;
  points_per_level?: number;
  weapons?: {
    type: string;
    damage?: {
      type?: string;
      st?: string;
      base?: string;
    };
    usage?: string;
    reach?: string;
    parry?: string;
    block?: string;
    calc?: {
      level?: number;
      parry?: string;
      block?: string;
      damage?: string;
    };
    defaults: TSkillDefault[];
  }[];
  modifiers?: TModifier[];
  children?: TAdvantage[];

  reference?: string;
  calc: {
    points: number;
  };
  categories?: string[];
};

export type TModifier = {
  type: string;
  id: string;
  name: string;
  disabled?: boolean;
  reference?: string;
  cost_type: string;
  cost: number;
  affects?: string;
  notes?: string;
  features?: TFeature[];
};

export type TSkill = {
  type: string;
  id: string;
  name: string;
  reference?: string;
  specialization?: string;
  tech_level?: string;
  difficulty?: string;
  points: number;
  defaulted_from?: TSkillDefault;
  calc: {
    level: number;
    rsl: string;
  };
  prereqs?: TPreReq;
  defaults?: TSkillDefault[];
  notes?: string;
  features?: TFeature[];
  limit?: number;
  default?: TSkillDefault;
  categories?: string[];
};

export type TEquipment = {
  type: string;
  id: string;
  equipped?: boolean;
  quantity?: number;
  description?: string;
  tech_level?: string;
  value?: string;
  weight?: string;
  reference?: string;
  features?: TFeature[];
  categories?: string[];
};

export type TSkillDefault = {
  type: string;
  name?: string;
  specialization?: string;
  modifier?: number;
  level?: number;
  adjusted_level?: number;
  points?: number;
};

export type TFeature = {
  type: string;
  amount: number;
  per_level?: boolean;
  situation?: string;
  selection_type?: string;
  name?: TCompare;
  level?: TCompare;
  attribute?: string;
  location?: string;
};

export type TCompare = { compare?: string; qualifier?: number | string };

export type TPreReq = {
  type: string;
  all?: boolean;
  has?: boolean;
  name?: TCompare;
  when_tl?: TCompare;
  notes?: TCompare;
  prereqs?: TPreReq[];
};

export type TDisplayOptions =
  | "not_shown"
  | "tooltip"
  | "inline"
  | "inline_and_tooltip";

export type TCharacter = {
  type: string;
  version: number;
  id: string;
  settings: {
    default_length_units: string;
    default_weight_units: string;
    user_description_display: string;
    modifiers_display: string;
    notes_display: string;
    skill_level_adj_display: string;
    use_multiplicative_modifiers: boolean;
    use_modifying_dice_plus_adds: boolean;
    damage_progression: string;
    use_simple_metric_conversions: boolean;
    show_college_in_sheet_spells: boolean;
    show_difficulty: boolean;
    show_advantage_modifier_adj: boolean;
    show_equipment_modifier_adj: boolean;
    show_spell_adj: boolean;
    use_title_in_footer: boolean;
    page: {
      paper_size: string;
      top_margin: string;
      left_margin: string;
      bottom_margin: string;
      right_margin: string;
      orientation: string;
    };
    block_layout: string[];
    attributes: TAttributeDef[];

    hit_locations: {
      id: string;
      name: string;
      roll: string;
      locations: THitLocation[];
    };
  };
  created_date: string;
  modified_date: string;
  profile: {
    name?: string;
    age?: string;
    eyes?: string;
    hair?: string;
    skin?: string;
    handedness?: string;
    height?: string;
    weight?: string;
    gender?: string;
    tech_level?: string;
    portrait?: string;
    organization?: string;
    title?: string;
    player_name?: string;
    birthday?: string;
    religion?: string;
    size?: string;
  };
  attributes: TAttribute[];
  total_points: number;
  advantages: TAdvantage[];

  skills: TSkill[];

  equipment: TEquipment[];
};
