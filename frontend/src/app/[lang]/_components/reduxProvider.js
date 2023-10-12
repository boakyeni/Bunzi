'use client';

import { Provider } from 'react-redux';
import reduxStore from '@/redux/store';

export function ReduxProvider({ children }) {
    return (
        <Provider store={reduxStore}>
            {children}
        </Provider>
    );
}
