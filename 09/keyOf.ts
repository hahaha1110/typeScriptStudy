interface Ratings {
  audience: number;
  critics: number;
}

function getRating(ratings: Ratings, key: keyof Ratings): number {
  return ratings[key];
}

const ratings: Ratings = { audience: 66, critics: 44 };
getRating(ratings, "audience");
// getRating(ratings, "not valid");
