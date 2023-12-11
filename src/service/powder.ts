import { client } from "./sanity";

export async function getPowders() {
  return (
    client
      .fetch(`*[_type == "powder"]`)
      // 초기 객체 타입 명시, 받으면 어떤 형태로 받아오는지 명시 필요
      .catch()
      .then((powder) => ({...powder}));
  );
}
