import React from 'react';
import {renderWithProviders} from '../tests-utils/renderWithProviders';
import {PrivateOnlyPageWrapper} from '../../components/PrivateOnlyPageWrapper';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Mock, vi} from 'vitest';

vi.mock('react-firebase-hooks/auth');

describe('Anonymous Only Page Wrapper element', () => {
  it('render with loading', async () => {
    (useAuthState as Mock).mockReturnValueOnce([{ uid: 'user123' }, false]);
    renderWithProviders(<PrivateOnlyPageWrapper/>)
  });

  it('render without loading', () => {
    (useAuthState as Mock).mockReturnValueOnce([{ uid: 'user123' }, true]);
    renderWithProviders(<PrivateOnlyPageWrapper/>)
  });
});

