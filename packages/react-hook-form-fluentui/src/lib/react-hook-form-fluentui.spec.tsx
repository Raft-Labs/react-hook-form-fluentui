import { render } from '@testing-library/react';

import ReactHookFormFluentui from './react-hook-form-fluentui';

describe('ReactHookFormFluentui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactHookFormFluentui />);
    expect(baseElement).toBeTruthy();
  });
});
