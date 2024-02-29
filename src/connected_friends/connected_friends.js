/**
 *  the enqueued array is used to make the algorithm more efficient by making sure that any given user is explored
 *  only once. If a similar problem comes up, you can adapt this algorithm to track information other than enqueued. 
 * For example, you might track the number of nodes between two users, 
 * or track which user is following the most people.
 */
//  search for a path from any given user to any other user.

const Queue = require("../lib/queue");

const connected = (graph, startUser, endUser) => {
  const users = Object.keys(graph);

  if (users.length === 0) {
    return false;
  }

  if (startUser === endUser) {
    return true;
  }

  const discovered = new Queue();

  discovered.enqueue(startUser);
  const enqueued = [startUser];

  while (discovered.first) {
    const user = discovered.dequeue();

    const following = graph[user];

    for (const followedUser of following) {
      if (followedUser === endUser) {
        return true;
      }

      if (!enqueued.includes(followedUser)) {
        enqueued.push(followedUser);
        discovered.enqueue(followedUser);
      }
    }
  }

  return false;
};

module.exports = connected;

/**
 * If graph is empty (has no keys), return false.

If startUser is equal to endUser, return true.
Initialize a new array, enqueued, that contains startUser.
Initialize a new empty queue named discovered.
Enqueue startUser.
While discovered isn't empty, do the following:
Dequeue a value from discovered and name it user.
For each friend followedUser in graph[user], do the following:
If followedUser is equal to endUser, return true.
If enqueued doesn't include followedUser, do the following:
Add followedUser to enqueued.
Enqueue friend to discovered.
Return false.
 */