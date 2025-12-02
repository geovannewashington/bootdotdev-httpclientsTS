"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentType = getContentType;
function getContentType(resp) {
    var contentType = resp.headers.get('Content-Type');
    if (!contentType) {
        return "";
    }
    return contentType;
}
