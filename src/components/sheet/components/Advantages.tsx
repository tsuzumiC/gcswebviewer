import React from "react";

export const Advantages: React.FC = (props) => {
  return (
    <div id="advantages">
      <div className="desc header">
        Advantages, Disadvantages, Perks &amp; Quirks
      </div>
      <div className="pts header">Pts</div>
      <div className="ref header">
        <i className="fas fa-bookmark"></i>
      </div>
      @ADVANTAGES_LOOP_START
      <div className="desc indent@DEPTHx1 satisfied@SATISFIED">
        @DESCRIPTION_PRIMARY
        <div className="list_note satisfied@SATISFIED">
          @DESCRIPTION_MODIFIER_NOTES
        </div>
        <div className="list_note satisfied@SATISFIED">@DESCRIPTION_NOTES</div>
      </div>
      <div className="pts satisfied@SATISFIED">@POINTS</div>
      <div className="ref satisfied@SATISFIED">@REF</div>
      @ADVANTAGES_LOOP_END
    </div>
  );
};
