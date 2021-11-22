import "./App.scss";

import React, { useState } from "react";

import Sheet from "./components/sheet/Sheet";

import { Character, EAttributeId, Attribute } from "./components/characterType";

interface IImportAttributes extends Omit<Attribute, "attr_id"> {
  attr_id: string;
}
interface IImportType extends Omit<Character, "attributes"> {
  attributes: IImportAttributes[];
}

const App: React.FC = (props) => {
  const [character, setCharacter] = useState<Character>();

  const handleSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      let data: IImportType = JSON.parse(await files[0].text());

      if (data !== undefined) {
        data = {
          ...data,
          attributes: data.attributes.map((x) => ({
            ...x,
            attr_id: EAttributeId[x.attr_id as keyof typeof EAttributeId],
          })),
        };
      }
      setCharacter(data as Character);
    }
  };

  return (
    <>
      <input
        id="selectFile"
        type="file"
        accept=".gcs"
        onChange={handleSelect}
      ></input>
      {character ? <Sheet character={character} /> : <div>No sheet</div>}
    </>
  );
};

export default App;
