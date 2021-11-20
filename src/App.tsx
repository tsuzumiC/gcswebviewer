import "./App.scss";

import React, { useState } from "react";

import Sheet from "./components/sheet/Sheet";

import jsonData from "./assets/Alicia.json";
import { Character, EAttributeId, Attribute } from "./components/characterType";

interface IImportAttributes extends Omit<Attribute, "attr_id"> {
  attr_id: string;
}
interface IImportType extends Omit<Character, "attributes"> {
  attributes: IImportAttributes[];
}

const App: React.FC = (props) => {
  let data = jsonData as IImportType;
  data = {
    ...data,
    attributes: data.attributes.map((x) => ({
      ...x,
      attr_id: EAttributeId[x.attr_id as keyof typeof EAttributeId],
    })),
  };

  const [character, setCharacter] = useState<Character>(data as Character);

  if (character === undefined) return <div>No sheet</div>;

  return <Sheet character={character} />;
};

export default App;
