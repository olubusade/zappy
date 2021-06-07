export interface AuthResponse {
    user: {
        id: number,
        name: string,
        email: string,
        mobile: string,
        access_token: string,
        expires_in: number
    }
}