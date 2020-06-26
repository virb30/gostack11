import { renderHook, act } from '@testing-library/react-hooks';

import { render } from '@testing-library/react';
import { useToast, ToastProvider } from '../../hooks/toast';

describe('Toast hook', () => {
  it('should be able to add toast', async () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    act(() => {
      result.current.addToast({
        title: 'Test',
        description: 'Testing toast',
        type: 'error',
      });
    });
  });
});
