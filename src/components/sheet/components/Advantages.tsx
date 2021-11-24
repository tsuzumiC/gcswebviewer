import React from "react";
import { TAdvantage, TModifier } from "../../characterType";

const makeAdvantage = (data: TAdvantage, indent = 0): JSX.Element => {
  const activeModifiers = data.modifiers
    ?.map((x) => (x.disabled === undefined ? x : undefined))
    .filter((x) => x) as TModifier[];
  return (
    <>
      <div
        className={`desc${
          indent ? " indent" + indent : ""
        } satisfied@SATISFIED`}
      >
        {data.name}
        <div className="list_note satisfied@SATISFIED">
          {activeModifiers &&
            activeModifiers.map((x, index) => {
              const result = [makeModifier(x)];

              if (
                activeModifiers.length > 1 &&
                index < activeModifiers.length - 1
              ) {
                result.push(<>; </>);
              }
              return result;
            })}
        </div>
        <div className="list_note satisfied@SATISFIED">{data.userdesc}</div>
      </div>
      <div className="pts satisfied@SATISFIED">{data.calc?.points}</div>
      <div className="ref satisfied@SATISFIED">{data.reference}</div>
      {data.children?.map((x) => makeAdvantage(x, indent + 1))}
    </>
  );
};

const makeModifier = (data: TModifier) => {
  return (
    <>
      {data.name}
      {data.notes ? " (" + data.notes + ")" : ""}
    </>
  );
};

interface IAdvantagesProps {
  advantages?: TAdvantage[];
}

export const Advantages: React.FC<IAdvantagesProps> = (props) => {
  const { advantages } = props;
  return (
    <div id="advantages">
      <div className="desc header">
        Advantages, Disadvantages, Perks &amp; Quirks
      </div>
      <div className="pts header">Pts</div>
      <div className="ref header">
        <i className="fas fa-bookmark"></i>
      </div>
      {advantages?.map((x) => makeAdvantage(x))}
    </div>
  );
};
