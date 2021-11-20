import React from "react";

export const Reactions: React.FC = (props) => {
  return (
    <div id="reactions">
      <div className="modifier header">Modifier</div>
      <div className="situation header">Reaction</div>
      <div></div>
      @REACTION_LOOP_START
      <div className="modifier">@MODIFIER</div>
      <div className="situation">@SITUATION</div>
      <div></div>
      @REACTION_LOOP_END
    </div>
  );
};
