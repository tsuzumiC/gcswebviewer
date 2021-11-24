import React from "react";
import { TSkill } from "../../characterType";

const makeSkill = (data: TSkill, indent = 0): JSX.Element => {
  return (
    <>
      <div
        className={`desc${
          indent ? " indent" + indent : ""
        } satisfied@SATISFIED`}
      >
        {data.name}
        <div className="list_note satisfied@SATISFIED"></div>
        <div className="list_note satisfied@SATISFIED">{data.notes}</div>
      </div>
      <div className="sl satisfied@SATISFIED">{data.calc?.level}</div>
      <div className="rsl satisfied@SATISFIED">{data.calc?.rsl}</div>
      <div className="pts satisfied@SATISFIED">{data.points}</div>
      <div className="ref satisfied@SATISFIED">{data.reference}</div>
      {data.children?.map((x) => makeSkill(x, indent + 1))}
    </>
  );
};

interface ISkillsProps {
  skills?: TSkill[];
}

export const Skills: React.FC<ISkillsProps> = (props) => {
  const { skills } = props;
  return (
    <div id="skills">
      <div className="desc header">Skills</div>
      <div className="sl header">SL</div>
      <div className="rsl header">RSL</div>
      <div className="pts header">Pts</div>
      <div className="ref header">
        <i className="fas fa-bookmark"></i>
      </div>
      {skills?.map((x) => makeSkill(x))}
    </div>
  );
};
