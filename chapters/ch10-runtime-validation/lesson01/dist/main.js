export function validateIssue(data) {
    console.log(`type id ${typeof (data.id)}, type title:${typeof (data.title)}`);
    if (!data || typeof data !== 'object')
        if (!data.id) { // id doesn't exist (undefined)
            throw new Error("ID doesn't exist");
        }
    if (!data.title) { // title doesn't exist (undefined)
        throw new Error("Title doesn't exist");
    }
    if (typeof data.id !== 'string') { // id isn't a string
        throw new Error("ID must be a string");
    }
    if (typeof data.title !== 'string') { // title isn't a string
        throw new Error("Title must be a string");
    }
    return data;
}
