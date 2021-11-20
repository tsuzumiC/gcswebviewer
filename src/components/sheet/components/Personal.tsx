import React from "react";

interface IPortrait {
  portrait?: string;
}

export const Portrait: React.FC<IPortrait> = (props) => {
  return (
    <div id="portrait">
      <div className="header">Portrait</div>
      <div
        className="portrait"
        style={{
          backgroundImage: `url(data:image/png;base64,${props.portrait})`,
        }}
      />
    </div>
  );
};

interface IIdentity {
  name?: string;
  title?: string;
  organization?: string;
}

export const Identity: React.FC<IIdentity> = (props) => {
  return (
    <div id="identity">
      <div className="header">Identity</div>
      <div className="fieldblock">
        <div className="label">Name:</div>
        <div className="field">{props.name}</div>
        <div className="label">Title:</div>
        <div className="field">{props.title}</div>
        <div className="label">Organization:</div>
        <div className="field">{props.organization}</div>
      </div>
    </div>
  );
};

interface IMiscellaneous {
  created?: string;
  modified?: string;
  player?: string;
}

export const Miscellaneous: React.FC<IMiscellaneous> = (props) => {
  return (
    <div id="miscellaneous">
      <div className="header">Miscellaneous</div>
      <div className="fieldblock">
        <div className="label">Created:</div>
        <div className="field">{props.created}</div>
        <div className="label">Modified:</div>
        <div className="field">{props.modified}</div>
        <div className="label">Player:</div>
        <div className="field">{props.player}</div>
      </div>
    </div>
  );
};

interface IDescription {
  gender?: string;
  age?: string;
  birthday?: string;
  religion?: string;

  height?: string;
  weight?: string;
  size?: string;
  tech?: string;

  hair?: string;
  eyes?: string;
  skin?: string;
  handed?: string;
}

export const Description: React.FC<IDescription> = (props) => {
  return (
    <div id="description">
      <div className="header">Description</div>
      <div className="fieldblock">
        <div className="label">Gender:</div>
        <div className="field">{props.gender}</div>
        <div className="label">Age:</div>
        <div className="field">{props.age}</div>
        <div className="label">Birthday:</div>
        <div className="field">{props.birthday}</div>
        <div className="label">Religion:</div>
        <div className="field">{props.religion}</div>
      </div>
      <div className="fieldblock">
        <div className="label">Height:</div>
        <div className="field">{props.height}</div>
        <div className="label">Weight:</div>
        <div className="field">{props.weight}</div>
        <div className="label">Size:</div>
        <div className="field">{props.size}</div>
        <div className="label">TL:</div>
        <div className="field">{props.tech}</div>
      </div>
      <div className="fieldblock">
        <div className="label">Hair:</div>
        <div className="field">{props.hair}</div>
        <div className="label">Eyes:</div>
        <div className="field">{props.eyes}</div>
        <div className="label">Skin:</div>
        <div className="field">{props.skin}</div>
        <div className="label">Hand:</div>
        <div className="field">{props.handed}</div>
      </div>
    </div>
  );
};

interface IPoints {
  total_points?: number;
}

export const Points: React.FC<IPoints> = (props) => {
  return (
    <div id="points">
      <div className="header">{props.total_points} Points</div>
      <div className="fieldblock">
        <div className="field">@UNSPENT_POINTS</div>
        <div className="label">Unspent</div>
        <div className="field noedit">@RACE_POINTS</div>
        <div className="label">Race</div>
        <div className="field noedit">@ATTRIBUTE_POINTS</div>
        <div className="label">Attributes</div>
        <div className="field noedit">@ADVANTAGE_POINTS</div>
        <div className="label">Advantages</div>
        <div className="field noedit">@DISADVANTAGE_POINTS</div>
        <div className="label">Disadvantages</div>
        <div className="field noedit">@QUIRK_POINTS</div>
        <div className="label">Quirks</div>
        <div className="field noedit">@SKILL_POINTS</div>
        <div className="label">Skills</div>
        <div className="field noedit">@SPELL_POINTS</div>
        <div className="label">Spells</div>
      </div>
    </div>
  );
};
