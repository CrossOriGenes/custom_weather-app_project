import { useCallback, useState } from "react";

const useRequest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(null);


    const sendRequest = useCallback(async (request, getData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(request.url, {
                method: request.method ? request.method : 'GET',
                body: request.body ? JSON.stringify(request.body) : null,
                headers: request.headers ? request.headers : {}
            });

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            getData(data);

        }
        catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        isError,
        sendRequest
    };
};

export default useRequest;