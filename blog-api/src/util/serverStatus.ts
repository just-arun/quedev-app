export const HttpStatus = (status?: string): number => {
    switch (status) {
        case "ok":
            return 200
        case "NotFound":
            return 404
        case "ValidationError":
            return 400
        case "ServerError":
            return 500
        default:
            return 500
    }
}