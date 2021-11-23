import React from "react";
import {
  TAttribute,
  EAttributeId,
  TEncumbrance,
  THitLocation,
} from "../../characterType";
import {
  basicSwing,
  basicThrust,
  encumbranceLoad,
  fpThresholds,
  hpThresholds,
} from "./Utility";

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

const makeAttribute = (data: TAttribute) => {
  return (
    <>
      <div className="points">{`[${data.calc.points}]`}</div>
      <div className="field">{data.calc.value}</div>
      <div className="label">{AttributeLabel[data.attr_id]}</div>
    </>
  );
};

const makeHPPool = (data: TAttribute) => {
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

const makeFPPool = (data: TAttribute) => {
  const { value, toolTip } = fpThresholds(
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

const makeLocations = (data: THitLocation) => {
  return (
    <>
      <div className="roll">{data.calc.roll_range}</div>
      <div className="where">{data.table_name}</div>
      <div className="penalty">{data.hit_penalty}</div>
      <div className="dr">{data.calc.dr}</div>
    </>
  );
};

const makeEncumbrance = (data: TEncumbrance) => {
  const load = Math.round(data.bl * encumbranceLoad[data.level]);
  const move = Math.round(data.bm * (1 - 0.2 * data.level));
  const dodge = data.dodge - data.level;
  return (
    <>
      <div className={`encmarker${data.current ? " current" : ""}`}></div>
      <div
        className={`enc${data.current ? " current" : ""} enc${data.level}`}
      ></div>
      <div className={`load${data.current ? " current" : ""}`}>{load}</div>
      <div className={`move${data.current ? " current" : ""}`}>{move}</div>
      <div className={`dodge${data.current ? " current" : ""}`}>{dodge}</div>
    </>
  );
};

interface IAttributesProps {
  attributes: TAttribute[];
}

export const Attributes: React.FC<IAttributesProps> = (props) => {
  const { attributes: attr_list } = props;

  const attributes = attr_list.reduce((prev, curr) => {
    return { ...prev, [curr.attr_id]: curr };
  }, {} as { [key in EAttributeId]: TAttribute });

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
        <div className="fieldblock5">
          {makeHPPool(attributes.hp)}
          {makeFPPool(attributes.fp)}
        </div>
      </div>
    </div>
  );
};

interface ILocationProps {
  locations: THitLocation[];
}

export const Location: React.FC<ILocationProps> = (props) => {
  const { locations } = props;
  return (
    <div id="location">
      <div className="header">Hit Location</div>
      <div className="roll header">Roll</div>
      <div className="where header">Where</div>
      <div className="penalty header">Penalty</div>
      <div className="dr header">DR</div>
      {locations.map((x) => makeLocations(x))}
    </div>
  );
};

export const Encumbrance: React.FC<IAttributesProps> = (props) => {
  const { attributes: attr_list } = props;

  const attributes = attr_list.reduce((prev, curr) => {
    return { ...prev, [curr.attr_id]: curr };
  }, {} as { [key in EAttributeId]: TAttribute });
  const bl = Math.round(
    (attributes.st.calc.value * attributes.st.calc.value) / 5
  );
  const bm = attributes.basic_move.calc.value;
  const dodge = attributes.basic_speed.calc.value + 3;

  return (
    <div id="enc-col">
      <div id="encumbrance">
        <div className="header">Encumbrance, Move &amp; Dodge</div>
        <div className="encmarkerh header"></div>
        <div className="ench header">Level</div>
        <div className="loadh header">Max Load</div>
        <div className="moveh header">Move</div>
        <div className="dodgeh header">Dodge</div>
        {makeEncumbrance({ level: 0, bl, bm, dodge })}
        {makeEncumbrance({ level: 1, bl, bm, dodge })}
        {makeEncumbrance({ level: 2, bl, bm, dodge })}
        {makeEncumbrance({ level: 3, bl, bm, dodge })}
        {makeEncumbrance({ level: 4, bl, bm, dodge })}
      </div>
      <div id="lifting">
        <div className="header">Lifting &amp; Moving Things</div>
        <div className="lift">{bl}</div>
        <div className="liftdesc">Basic Lift</div>
        <div className="lift">{bl * 2}</div>
        <div className="liftdesc">One-Handed Lift</div>
        <div className="lift">{bl * 8}</div>
        <div className="liftdesc">Two-Handed Lift</div>
        <div className="lift">{bl * 12}</div>
        <div className="liftdesc">Shove &amp; Knock Over</div>
        <div className="lift">{bl * 24}</div>
        <div className="liftdesc">Running Shove &amp; Knock Over</div>
        <div className="lift">{bl * 15}</div>
        <div className="liftdesc">Carry on Back</div>
        <div className="lift">{bl * 50}</div>
        <div className="liftdesc">Shift Slightly</div>
      </div>
    </div>
  );
};
