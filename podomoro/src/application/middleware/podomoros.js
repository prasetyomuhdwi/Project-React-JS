import {
  loadPodomorosFailure,
  loadPodomorosSuccess,
  LOAD_PODOMOROS,
  PUT_PODOMORO,
  setPodomoros,
} from "../actions/podomoros";
import * as uiActions from "../actions/ui";

const loadPodomorosFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === LOAD_PODOMOROS) {
      try {
        dispatch(uiActions.setLoading(true));
        const podomoros = await api.podomoros.getAll();

        dispatch(loadPodomorosSuccess(podomoros));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadPodomorosFailure(error));
      }
    }
  };

const putPodomorosFlow =
  () =>
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type === PUT_PODOMORO) {
      const oldPodomorosClone = getState().podomoros.allPodomoros.map(
        (podomoro) => ({
          ...podomoro,
        })
      );

      const newPodomoro = action.payload;

      const index = oldPodomorosClone.findIndex(
        (podomoro) => podomoro.id === newPodomoro.id
      );

      oldPodomorosClone[index] = newPodomoro;

      dispatch(setPodomoros(oldPodomorosClone));
    }

    next(action);
  };

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [loadPodomorosFlow, putPodomorosFlow];
