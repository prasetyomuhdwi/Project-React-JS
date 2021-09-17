import { loadPodomorosSuccess, LOAD_PODOMOROS } from "../actions/podomoros";
import podomoroMiddleware from "./podomoros";

describe("podomoro middleware", () => {
  describe("load podomoro flow", () => {
    const [loadPodomorosFlow] = podomoroMiddleware;

    const dummyPodomoro = {
      userId: "1",
      userName: "Danny",
      id: "1",
      podomoro: 25,
      short: 5,
      long: 30,
    };
    const api = {
      podomoro: {
        getAll: jest
          .fn()
          .mockImplementationOnce(
            () => new Promise((resolve) => resolve([dummyPodomoro]))
          ),
      },
    };
    const dispatch = jest.fn();
    const next = jest.fn();
    const action = {
      type: LOAD_PODOMOROS,
    };

    it("passes action to next middleware", async () => {
      await loadPodomorosFlow({ api })({ dispatch })(next)(action);

      expect(next).toHaveBeenCalledWith(action);
    });

    it("calls api.podomoro.getAll at least once", async () => {
      await loadPodomorosFlow({ api })({ dispatch })(next)(action);

      expect(api.podomoro.getAll).toHaveBeenCalled();
    });

    it("calls api.podomoro.getAll at least once", async () => {
      await loadPodomorosFlow({ api })({ dispatch })(next)(action);

      expect(dispatch).toHaveBeenCalledWith(
        loadPodomorosSuccess([dummyPodomoro])
      );
    });
  });
});
