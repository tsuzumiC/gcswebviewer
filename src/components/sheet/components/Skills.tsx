import React from "react";

export const Skills: React.FC = (props) => {
  return (
    <div id="skills">
      <div className="desc header">Skills</div>
      <div className="sl header">SL</div>
      <div className="rsl header">RSL</div>
      <div className="pts header">Pts</div>
      <div className="ref header">
        <i className="fas fa-bookmark"></i>
      </div>
      @SKILLS_LOOP_START
      <div className="desc indent@DEPTHx1 satisfied@SATISFIED">
        @DESCRIPTION_PRIMARY
        <div className="list_note satisfied@SATISFIED">
          @DESCRIPTION_MODIFIER_NOTES
        </div>
        <div className="list_note satisfied@SATISFIED">@DESCRIPTION_NOTES</div>
      </div>
      <div className="sl satisfied@SATISFIED">@SL</div>
      <div className="rsl satisfied@SATISFIED">@RSL</div>
      <div className="pts satisfied@SATISFIED">@POINTS</div>
      <div className="ref satisfied@SATISFIED">@REF</div>
      @SKILLS_LOOP_END
    </div>
  );
};
