import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions(
  {
    formSubmitAttempt: ["payload", "withAuth"],
    formSubmitSuccess: ["payload"],
    formSubmitError: ["payload", "error"],
    formUpdateAttempt: ["payload", "target", "withAuth"],
    addSupervisors: ["payload"],
    removeSupervisors: ["payload"],
  },
  {
    prefix: "@@famunera/",
  }
);

export const ManagerTypes = Types;
export default Creators;

