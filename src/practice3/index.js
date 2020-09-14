import { region } from "../practice1";

export const getPoetry = async () => {
  let result;
  await fetch("https://v1.jinrishici.com/all.json")
    .then(resp => resp.json())
    .then(data => result = [data.origin, data.author, data.content])
    .catch(err => console.log(err));
  return result;
}
