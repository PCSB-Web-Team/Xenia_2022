import { websiteRegex } from "./regex";

export default function parseURL(text) {
    return text.match(websiteRegex)
}