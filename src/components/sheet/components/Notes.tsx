import React from "react";

export const Notes: React.FC = (props) => {
  return (
    <div id="notes">
      <div className="desc header">Notes</div>
      <div className="ref header">
        <i className="fas fa-bookmark"></i>
      </div>
      <div></div>
      @NOTES_LOOP_START
      <div className="desc indent@DEPTHx1">@NOTE</div>
      <div className="ref">@REF</div>
      <div></div>
      @NOTES_LOOP_END
    </div>
  );
};
