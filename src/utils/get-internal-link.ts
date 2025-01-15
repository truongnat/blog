import { DEFAULT_SITE_URL } from "../consts";

export default function getInternalLink(path?: string) {
    return `${DEFAULT_SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}