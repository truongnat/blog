import { DEFAULT_SITE_URL } from "../consts";

export function getInternalLink(path?: string) {
    const p = path ? path?.startsWith('/') ? path : `/${path}` : '/'
    return `${DEFAULT_SITE_URL}${p}`
}