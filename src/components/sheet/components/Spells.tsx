import React from "react";

export const Spells: React.FC = (props) => {
  return (
    <div id="spells">
      <div className="desc header">Spells</div>
      <div className="cls header">className</div>
      <div className="college header">College</div>
      <div className="mana header">Cost</div>
      <div className="mana_maintain header">Maintain</div>
      <div className="time header">Time</div>
      <div className="duration header">Duration</div>
      <div className="sl header">SL</div>
      <div className="rsl header">RSL</div>
      <div className="pts header">Pts</div>
      <div className="ref header">
        <i className="fas fa-bookmark"></i>
      </div>
      @SPELLS_LOOP_START
      <div className="desc indent@DEPTHx1 satisfied@SATISFIED">
        @DESCRIPTION_PRIMARY
        <div className="list_note satisfied@SATISFIED">
          @DESCRIPTION_MODIFIER_NOTES
        </div>
        <div className="list_note satisfied@SATISFIED">@DESCRIPTION_NOTES</div>
      </div>
      <div className="cls satisfied@SATISFIED">@className</div>
      <div className="college satisfied@SATISFIED">@COLLEGE</div>
      <div className="mana satisfied@SATISFIED">@MANA_CAST</div>
      <div className="mana_maintain satisfied@SATISFIED">@MANA_MAINTAIN</div>
      <div className="time satisfied@SATISFIED">@TIME_CAST</div>
      <div className="duration satisfied@SATISFIED">@DURATION</div>
      <div className="sl satisfied@SATISFIED">@SL</div>
      <div className="rsl satisfied@SATISFIED">@RSL</div>
      <div className="pts satisfied@SATISFIED">@POINTS</div>
      <div className="ref satisfied@SATISFIED">@REF</div>
      @SPELLS_LOOP_END
    </div>
  );
};
