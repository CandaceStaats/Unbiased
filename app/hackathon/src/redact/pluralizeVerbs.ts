export function pluralize_verbs(s: string): string {
    var re = /\bs?he\b\s+(.+?)\b/gi;
    let match;
    while ((match = re.exec(s)) !== null) {
        let split = match[0].split(/\b/gi);
        let replace = split[0] + split[1] + pluralize_verb(split[2]);
        s = s.replace(match[0], replace);
    }
    return s;
}
function pluralize_verb(verb: string): string {
    if (verb.endsWith('ies')) {
        return verb.substring(0, verb.length - 3) + 'y';
    }
    for (let suffix of VERB_ES_SUFFIXES) {
        if (verb.endsWith(suffix)) {
            return verb.substring(0, verb.length - 2);
        }
    }
    if (verb.endsWith('s')) {
        return verb.substring(0, verb.length - 1);
    }
    return verb;
}

export const VERB_ES_SUFFIXES = ['ses', 'zes', 'xes', 'ches', 'shes'];