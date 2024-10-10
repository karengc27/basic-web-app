export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrewid")) {
    return (
      "we can't give u that info lol"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "ka"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x+y).toString();
  }

  const findLargest = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (findLargest) {
    const x: number = parseInt(findLargest[1]);
    const y: number = parseInt(findLargest[2]);
    const z: number = parseInt(findLargest[3]);

    return Math.max(x, y, z).toString();
  }

  return "";
}
