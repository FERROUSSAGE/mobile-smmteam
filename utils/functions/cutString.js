export function cutString(string, limit){

    if(string === undefined || string.trim().length === 0) return;
    else if(!isNaN(string)) return;

    return (string.length > limit) ? string.trim().slice(0, limit) + "..." : string.trim();
}