export const isAuthenticated = () => {
    console.log('authenticated dispatching');
    return {
        type: 'AUTHENTICATED'
    }
}