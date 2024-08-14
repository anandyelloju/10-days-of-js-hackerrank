// Count Objects

function getCount(objects) {
    return objects.reduce((count, obj) => obj.x === obj.y ? count + 1 : count, 0);
}