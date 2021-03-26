import checkPropTypes from "check-prop-types";

// Wrapper is Enzyme shallow wrapper
// Setting up boilerplate that takes wrapper and spits out the full line
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
