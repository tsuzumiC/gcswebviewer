import React from "react";

export const Equipment: React.FC = (props) => {
  return (
    <div id="equipment">
      <div className="equipped header">
        <i className="fas fa-check-circle"></i>
      </div>
      <div className="qty header">
        <i className="fab fa-slack-hash"></i>
      </div>
      <div className="desc header">
        Equipment (@CARRIED_WEIGHT; @CARRIED_VALUE)
      </div>
      <div className="uses header">Uses</div>
      <div className="cost header">$</div>
      <div className="weight header">
        <i className="fas fa-weight-hanging"></i>
      </div>
      <div className="sum_cost header">∑ $</div>
      <div className="sum_weight header">
        ∑ <i className="fas fa-weight-hanging"></i>
      </div>
      <div className="ref header">
        <i className="fas fa-bookmark"></i>
      </div>
      @EQUIPMENT_LOOP_START
      <div className="equipped satisfied@SATISFIED">@EQUIPPED_FA</div>
      <div className="qty satisfied@SATISFIED">@QTY</div>
      <div className="desc indent@DEPTHx1 satisfied@SATISFIED">
        @DESCRIPTION_PRIMARY
        <div className="list_note satisfied@SATISFIED">
          @DESCRIPTION_MODIFIER_NOTES
        </div>
        <div className="list_note satisfied@SATISFIED">@DESCRIPTION_NOTES</div>
      </div>
      <div className="uses satisfied@SATISFIED">@USES</div>
      <div className="cost satisfied@SATISFIED">@COST</div>
      <div className="weight satisfied@SATISFIED">@WEIGHT</div>
      <div className="sum_cost satisfied@SATISFIED">@COST_SUMMARY</div>
      <div className="sum_weight satisfied@SATISFIED">@WEIGHT_SUMMARY</div>
      <div className="ref satisfied@SATISFIED">@REF</div>
      @EQUIPMENT_LOOP_END
    </div>
  );
};

export const OtherEquipment: React.FC = (props) => {
  return (
    <div id="other_equipment">
      <div className="qty header">
        <i className="fab fa-slack-hash"></i>
      </div>
      <div className="desc header">
        Other Equipment (@OTHER_EQUIPMENT_VALUE)
      </div>
      <div className="uses header">Uses</div>
      <div className="cost header">$</div>
      <div className="weight header">
        <i className="fas fa-weight-hanging"></i>
      </div>
      <div className="sum_cost header">∑ $</div>
      <div className="sum_weight header">
        ∑ <i className="fas fa-weight-hanging"></i>
      </div>
      <div className="ref header">
        <i className="fas fa-bookmark"></i>
      </div>
      <div></div>
      @OTHER_EQUIPMENT_LOOP_START
      <div className="qty satisfied@SATISFIED">@QTY</div>
      <div className="desc indent@DEPTHx1 satisfied@SATISFIED">
        @DESCRIPTION_PRIMARY
        <div className="list_note satisfied@SATISFIED">
          @DESCRIPTION_MODIFIER_NOTES
        </div>
        <div className="list_note satisfied@SATISFIED">@DESCRIPTION_NOTES</div>
      </div>
      <div className="uses satisfied@SATISFIED">@USES</div>
      <div className="cost satisfied@SATISFIED">@COST</div>
      <div className="weight satisfied@SATISFIED">@WEIGHT</div>
      <div className="sum_cost satisfied@SATISFIED">@COST_SUMMARY</div>
      <div className="sum_weight satisfied@SATISFIED">@WEIGHT_SUMMARY</div>
      <div className="ref satisfied@SATISFIED">@REF</div>
      <div></div>
      @OTHER_EQUIPMENT_LOOP_END
    </div>
  );
};
