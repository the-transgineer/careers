export function idLookUp(id, objectList) {
  let output;
  objectList.forEach(object => {
    if (object.id === id) {
      output = object
    }
  });
  return output ? output : {};
}