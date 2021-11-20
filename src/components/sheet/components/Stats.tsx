import React from "react";
import { Attribute, EAttributeId } from "../../characterType";
import { basicSwing, basicThrust, hpThresholds } from "./Utility";

export const AttributeLabel: { [key: EAttributeId | string]: string } = {
  st: "Strength (ST)",
  dx: "Dexterity (DX)",
  iq: "Intelligence (IQ)",
  ht: "Health (HT)",
  will: "Will",
  fright_check: "Fright Check",
  per: "Perception (Per)",
  vision: "Vision",
  hearing: "Hearing",
  taste_smell: "Taste & Smell",
  touch: "Touch",
  basic_speed: "Basic Speed",
  basic_move: "Basic Move",
  fp: "FP",
  hp: "HP",
};

const makeAttribute = (data: Attribute) => {
  return (
    <>
      <div className="points">{`[${data.calc.points}]`}</div>
      <div className="field">{data.calc.value}</div>
      <div className="label">{AttributeLabel[data.attr_id]}</div>
    </>
  );
};

const makeHPPool = (data: Attribute) => {
  const { value, toolTip } = hpThresholds(
    data.calc.current ?? data.calc.value,
    data.calc.value
  );
  return (
    <>
      <div className="points">{`[${data.calc.points}]`}</div>
      <div className="field">{data.calc.current}</div>
      <div className="label">of</div>
      <div className="field">{data.calc.value}</div>
      <div className="label" title={toolTip}>{`[${value}]`}</div>
    </>
  );
};

interface IAttributesProps {
  attributes: Attribute[];
}

export const Attributes: React.FC<IAttributesProps> = (props) => {
  const { attributes: attr_list } = props;

  const attributes = attr_list.reduce((prev, curr) => {
    return { ...prev, [curr.attr_id]: curr };
  }, {} as { [key in EAttributeId]: Attribute });

  return (
    <div id="attr-col">
      <div id="attr-row">
        <div id="primary-attr">
          <div className="header">Primary Attributes</div>
          <div className="fieldblock3">
            {makeAttribute(attributes.st)}
            {makeAttribute(attributes.dx)}
            {makeAttribute(attributes.iq)}
            {makeAttribute(attributes.ht)}
            <hr />
            <div className="points"></div>
            <div className="field noedit">
              {basicThrust(attributes.st.calc.value)}
            </div>
            <div className="label">Basic Thrust</div>
            <div className="points"></div>
            <div className="field noedit">
              {basicSwing(attributes.st.calc.value)}
            </div>
            <div className="label">Basic Swing</div>
          </div>
        </div>
        <div id="secondary-attr">
          <div className="header">Secondary Attributes</div>
          <div className="fieldblock3">
            {makeAttribute(attributes.will)}
            {makeAttribute(attributes.fright_check)}
            {makeAttribute(attributes.per)}
            {makeAttribute(attributes.vision)}
            {makeAttribute(attributes.hearing)}
            {makeAttribute(attributes.taste_smell)}
            {makeAttribute(attributes.touch)}
            {makeAttribute(attributes.basic_speed)}
            {makeAttribute(attributes.basic_move)}
          </div>
        </div>
      </div>
      <div id="pools">
        <div className="header">Point Pools</div>
        <div className="fieldblock5">{makeHPPool(attributes.hp)}</div>
      </div>
    </div>
  );
};

export const Location: React.FC = (props) => {
  return (
    <div id="location">
      <div className="header">Hit Location</div>
      <div className="roll header">Roll</div>
      <div className="where header">Where</div>
      <div className="penalty header">Penalty</div>
      <div className="dr header">DR</div>
      @LOOP_START
      <div className="roll">@ROLL</div>
      <div className="where">@WHERE</div>
      <div className="penalty">@PENALTY</div>
      <div className="dr">@DR</div>
      @LOOP_END
    </div>
  );
};

export const Encumbrance: React.FC = (props) => {
  return (
    <div id="enc-col">
      <div id="encumbrance">
        <div className="header">Encumbrance, Move &amp; Dodge</div>
        <div className="encmarkerh header"></div>
        <div className="ench header">Level</div>
        <div className="loadh header">Max Load</div>
        <div className="moveh header">Move</div>
        <div className="dodgeh header">Dodge</div>
        @LOOP_START
        <div className="encmarker @CURRENT_MARKER"></div>
        <div className="enc @CURRENT_MARKER enc@LEVEL_ONLY"></div>
        <div className="load @CURRENT_MARKER">@MAX_LOAD</div>
        <div className="move @CURRENT_MARKER">@MOVE</div>
        <div className="dodge @CURRENT_MARKER">@DODGE</div>
        @LOOP_END
      </div>
      <div id="lifting">
        <div className="header">Lifting &amp; Moving Things</div>
        <div className="lift">@BASIC_LIFT</div>
        <div className="liftdesc">Basic Lift</div>
        <div className="lift">@ONE_HANDED_LIFT</div>
        <div className="liftdesc">One-Handed Lift</div>
        <div className="lift">@TWO_HANDED_LIFT</div>
        <div className="liftdesc">Two-Handed Lift</div>
        <div className="lift">@SHOVE</div>
        <div className="liftdesc">Shove &amp; Knock Over</div>
        <div className="lift">@RUNNING_SHOVE</div>
        <div className="liftdesc">Running Shove &amp; Knock Over</div>
        <div className="lift">@CARRY_ON_BACK</div>
        <div className="liftdesc">Carry on Back</div>
        <div className="lift">@SHIFT_SLIGHTLY</div>
        <div className="liftdesc">Shift Slightly</div>
      </div>
    </div>
  );
};
