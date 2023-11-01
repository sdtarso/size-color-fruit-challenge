export const camelToKebab = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

export const printObject = (obj: Object) => JSON.stringify(obj, null, 2);

export const isObject = (item: any) =>
  item && typeof item === "object" && !Array.isArray(item);

export const deepMerge = (target: any, ...sources: any): any => {
  // Create a copy of the target.
  const merged = Object.assign({}, target);

  // If there are no sources left, return.
  if (!sources.length) return merged;

  // Remove the last object from the sources.
  const source = sources.pop();

  // Iterate through the object.
  for (const key in source) {
    if (isObject(source[key])) {
      // Rrecursively merge if the props its a obj.
      merged[key] = deepMerge(merged[key] || {}, source[key]);
    } else if (Array.isArray(source[key])) {
      // Merge if its an array and remove duplicates.
      merged[key] = [...new Set((merged[key] || []).concat(source[key]))];
    } else if (typeof source[key] === "number") {
      // Sum if its a number.
      merged[key] = (merged[key] || 0) + source[key];
    } else {
      // Override by default
      merged[key] = source[key];
    }
  }

  // Recursively call deepMerge with the updated merged object and remaining sources.
  return deepMerge(merged, ...sources);
};
