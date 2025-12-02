function getContentType(resp: Response): string {
    const contentType = resp.headers.get('Content-Type');
    if (!contentType) {
        return "";
    }
    return contentType;
}

// don't touch below this line

export { getContentType };
