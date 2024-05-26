import { useLocation } from 'react-router-dom';

function useSearchParams() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    
    const getParam = (key: string, defaultValue: string | null = null): string | null => {
        return searchParams.get(key) || defaultValue;
    };

    return { getParam, searchParams };
}

export default useSearchParams;
