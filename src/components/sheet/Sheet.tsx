import "./Sheet.scss";

import React from "react";
import { Character } from "../characterType";
import {
  Description,
  Identity,
  Miscellaneous,
  Points,
  Portrait,
} from "./components/Personal";

import { Advantages } from "./components/Advantages";
import { Attributes, Encumbrance, Location } from "./components/Stats";
import { CondModifiers } from "./components/CondModifiers";
import { Equipment, OtherEquipment } from "./components/Equimpment";
import { Melee, Ranged } from "./components/Combat";
import { Reactions } from "./components/Reactions";
import { Skills } from "./components/Skills";
import { Spells } from "./components/Spells";
import { Notes } from "./components/Notes";

type TShowField = {
  personal: boolean;
  stats: boolean;
  reactions: boolean;
  condModifiers: boolean;
  melee: boolean;
};

interface IProps {
  character: Character;
}

const Sheet: React.FC<IProps> = (props) => {
  const { character } = props;
  const { profile } = character;

  const templateAreas = ["'personal personal'", "'stats stats'"];
  character.settings.block_layout.forEach((x) => {
    templateAreas.push(`'${x}'`);
  });

  const gridTemplateAreas = [
    "'personal personal'",
    "'stats stats'",
    ...character.settings.block_layout.map((x) =>
      x.includes(" ") ? `'${x}'` : `'${x} ${x}'`
    ),
  ].join(" ");
  console.log(gridTemplateAreas);

  return (
    <>
      <div
        id="sheet"
        style={{
          gridTemplateAreas: gridTemplateAreas,
        }}
      >
        <div id="personal">
          <Portrait portrait={profile.portrait} />
          <Identity
            name={profile.name}
            title={profile.title}
            organization={profile.organization}
          />
          <Miscellaneous
            created={character.created_date}
            modified={character.modified_date}
            player={profile.player_name}
          />
          <Description
            gender={profile.gender}
            age={profile.age}
            birthday={profile.birthday}
            religion={profile.religion}
            height={profile.height}
            weight={profile.weight}
            size={profile.size ?? "+0"}
            tech={profile.tech_level}
            hair={profile.hair}
            eyes={profile.eyes}
            skin={profile.skin}
            handed={profile.handedness}
          />
          <Points total_points={character.total_points} />
        </div>

        <div id="stats">
          <Attributes attributes={character.attributes} />
          <Location />
          <Encumbrance />
        </div>

        <Reactions />

        {/* <CondModifiers /> */}

        <Melee />
        <Ranged />
        <Advantages />
        <Skills />
        {/* <Spells /> */}
        <Equipment />
        <OtherEquipment />
        <Notes />
      </div>
      <div id="footer">
        GCS is copyrighted ©1998-2021 by Richard A. Wilkes • All rights reserved
        •<a href="https://gurpscharactersheet.com">gurpscharactersheet.com</a>
      </div>
    </>
  );
};

export default Sheet;

/* 
export const x: React.FC = (props) => {
    return (
      
    );
  }; 
*/
