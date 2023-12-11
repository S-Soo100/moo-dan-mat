import { client } from "./sanity";

export async function getPowders() {
  return client
    .fetch(`*[_type == "powder"]`)
    .catch()
    .then((powder) => ({ ...powder }));
}
