import { writable } from "svelte/store";

// export const data = writable([]);

const itemName = "data"
const retrieved = localStorage.getItem(itemName)
const parsed = JSON.parse(retrieved)
export const data = writable(parsed === null ? [] : parsed)

data.subscribe(value =>
  localStorage.setItem(itemName, JSON.stringify(value))
)