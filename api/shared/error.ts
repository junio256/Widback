export default function handleError (status: number, message: string) {
    return {
        status: status,
        body: message,
    };
};