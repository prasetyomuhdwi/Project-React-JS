export const LOAD_PODOMOROS = "[podomoro] load";
export const LOAD_PODOMOROS_SUCCESS = "[podomoro] load success";
export const LOAD_PODOMOROS_FAILURE = "[podomoro] load failure";
export const SET_PODOMOROS = "[podomoro] set";
export const PUT_PODOMORO = "[podomoro] put";

export const loadPodomoro = {
  type: LOAD_PODOMOROS,
};

export const loadPodomorosSuccess = (podomoros) => ({
  type: LOAD_PODOMOROS_SUCCESS,
  payload: podomoros,
});

export const loadPodomorosFailure = (error) => ({
  type: LOAD_PODOMOROS_FAILURE,
  payload: error,
});

export const setPodomoros = (podomoros) => ({
  type: SET_PODOMOROS,
  payload: podomoros,
});

export const putPodomoro = (podomoro) => ({
  type: PUT_PODOMORO,
  payload: podomoro,
});
