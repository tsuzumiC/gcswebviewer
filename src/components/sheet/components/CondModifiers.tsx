import React from "react";

export const CondModifiers: React.FC = (props) => {
  return (
    <div id="conditional_modifiers">
      <div className="modifier header">Modifier</div>
      <div className="situation header">Condition</div>
      <div></div>
      @CONDITIONAL_MODIFIERS_LOOP_START
      <div className="modifier">@MODIFIER</div>
      <div className="situation">@SITUATION</div>
      <div></div>
      @CONDITIONAL_MODIFIERS_LOOP_END
    </div>
  );
};
