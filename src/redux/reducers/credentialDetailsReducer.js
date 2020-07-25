import initialState from "./initialState";

export default function credentialReducer(
  state = initialState.credentialDetails,
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
