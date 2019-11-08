import React, { useCallback } from "react";
import Scorecard, { IScorecardField } from "../components/scorecard";
import { useSelector, useDispatch } from "react-redux";
import { IApplicationState } from "../state/ducks";
import { getEntries } from "../state/ducks/scorecard/selectors";
import { editEntry } from "../state/ducks/scorecard/actions";

type Props = {
  fields: IScorecardField[];
};

const ScorecardContainer: React.FC<Props> = ownProps => {
  const dispatch = useDispatch();

  const stateToProps = useSelector((state: IApplicationState) => ({
    entries: getEntries(state)
  }));

  const dispatchToProps = {
    onChangeEntry: useCallback(
      (id, key, value) => dispatch(editEntry({ id, key, value })),
      [dispatch]
    )
  };

  return <Scorecard {...ownProps} {...stateToProps} {...dispatchToProps} />;
};

export default ScorecardContainer;
