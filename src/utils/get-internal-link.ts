import { DEFAULT_SITE_URL } from "../consts";

export function getInternalLink(path?: string) {
    return  path ?  '/': path;
}