import React from "react";
import { TReaction } from "../../characterType";

const makeReaction = (data: TReaction) => {
  return (
    <>
      <div className="modifier">{data.modifier}</div>
      <div className="situation">{data.reaction}</div>
      <div></div>
    </>
  );
};
interface IReactionsProps {
  reactions?: TReaction[];
}

export const Reactions: React.FC<IReactionsProps> = (props) => {
  const { reactions } = props;
  return (
    <div id="reactions">
      <div className="modifier header">Modifier</div>
      <div className="situation header">Reaction</div>
      <div></div>
      {reactions?.map((x) => makeReaction(x))}
    </div>
  );
};
