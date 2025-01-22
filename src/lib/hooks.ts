'use client';

import { useEffect, useState } from 'react';

export function useIsClient() {
    const [isClient, setClient] = useState(false);

    useEffect(() => {
        setClient(true);
    }, []);

    return isClient;
}

export function usePlatform(): [string?, string?] {
    const isClient = useIsClient();

    if (isClient) {
        const userAgent = window.navigator.userAgent;
        let os;
        if (
            window.navigator.userAgent.toLocaleLowerCase().includes('iphone os')
        )
            os = 'IOS';
        else if (
            window.navigator.userAgent.toLocaleLowerCase().includes('windows')
        )
            os = 'Windows';
        else if (window.navigator.userAgent.toLocaleLowerCase().includes('mac'))
            os = 'MacOS';
        else if (
            window.navigator.userAgent.toLocaleLowerCase().includes('linux')
        )
            os = 'Linux';
        else os = 'Android';
        return [os, userAgent];
    }
    return [undefined, undefined];
}
