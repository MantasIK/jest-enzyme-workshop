// Wrapper is Enzyme shallow wrapper
// Setting up boilerplate that takes wrapper and spits out the full line
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);
