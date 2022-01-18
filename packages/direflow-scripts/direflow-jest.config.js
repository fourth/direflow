const { createContext } = require('react');

// eslint-disable-next-line no-undef
jest.mock('../@fourth/direflow-component', () => ({
  Styled: (props) => {
    return props.children;
  },
  EventContext: createContext(() => {}),
}));
