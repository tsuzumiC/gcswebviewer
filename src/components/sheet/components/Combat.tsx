import React from "react";
import { TWeapon } from "../../characterType";

const makeMelee = (data: TWeapon, indent = 0) => {
  return (
    <>
      <div className="desc">
        @DESCRIPTION_PRIMARY
        <div className="list_note">@DESCRIPTION_NOTES</div>
      </div>
      <div className="usage">@USAGE</div>
      <div className="level">@LEVEL</div>
      <div className="parry">@PARRY</div>
      <div className="block">@BLOCK</div>
      <div className="damage">@DAMAGE</div>
      <div className="reach">@REACH</div>
      <div className="st">@STRENGTH</div>
      <div></div>
    </>
  );
};

interface IMeleeProps {}

export const Melee: React.FC<IMeleeProps> = (props) => {
  return (
    <div id="melee">
      <div className="desc header">Melee Weapons</div>
      <div className="usage header">Usage</div>
      <div className="level header">Lvl</div>
      <div className="parry header">Parry</div>
      <div className="block header">Block</div>
      <div className="damage header">Damage</div>
      <div className="reach header">Reach</div>
      <div className="st header">ST</div>
      <div></div>
    </div>
  );
};

const makeRanged = (data: TWeapon, indent = 0) => {
  return (
    <>
      <div className="desc">
        @DESCRIPTION_PRIMARY
        <div className="list_note">@DESCRIPTION_NOTES</div>
      </div>
      <div className="usage">@USAGE</div>
      <div className="level">@LEVEL</div>
      <div className="acc">@ACCURACY</div>
      <div className="damage">@DAMAGE</div>
      <div className="range">@RANGE</div>
      <div className="rof">@ROF</div>
      <div className="shots">@SHOTS</div>
      <div className="bulk">@BULK</div>
      <div className="rcl">@RECOIL</div>
      <div className="st">@STRENGTH</div>
    </>
  );
};
interface IRangedProps {}

export const Ranged: React.FC<IRangedProps> = (props) => {
  return (
    <div id="ranged">
      <div className="desc header">Ranged Weapons</div>
      <div className="usage header">Usage</div>
      <div className="level header">Lvl</div>
      <div className="acc header">Acc</div>
      <div className="damage header">Damage</div>
      <div className="range header">Range</div>
      <div className="rof header">RoF</div>
      <div className="shots header">Shots</div>
      <div className="bulk header">Bulk</div>
      <div className="rcl header">Rcl</div>
      <div className="st header">ST</div>
    </div>
  );
};
