// Simulating async tasks using setTimeout
function fetchUser(userId, callback) {
  setTimeout(() => {
    console.log("✔ Fetched user data");
    callback({ id: userId, name: "Alice" });
  }, 1000);
}

function fetchPosts(user, callback) {
  setTimeout(() => {
    console.log(`✔ Fetched posts for ${user.name}`);
    callback(["Post 1", "Post 2", "Post 3"]);
  }, 1000);
}

function fetchComments(post, callback) {
  setTimeout(() => {
    console.log(`✔ Fetched comments for ${post}`);
    callback(["Comment A", "Comment B"]);
  }, 1000);
}

// ------------------------------
// ❌ CALLBACK HELL
// ------------------------------
console.log("Starting...");

fetchUser(1, (user) => {
  // Callback 1
  fetchPosts(user, (posts) => {
    // Callback 2 (nested)
    fetchComments(posts[0], (comments) => {
      // Callback 3 (deeply nested)
      console.log("Final Result:");
      console.log({ user, posts, comments });
    });
  });
});

/*
WHY THIS IS CALLBACK HELL?
---------------------------
- Each async result depends on the previous one
- Functions get nested deeper and deeper
- Hard to read, harder to debug
- Pyramid-shaped structure => "Pyramid of Doom"
*/



//Promisified COde

// Convert functions to return Promises instead of using callbacks
function fetchUserP(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✔ (P) Fetched user data");
      resolve({ id: userId, name: "Alice" });
    }, 1000);
  });
}

function fetchPostsP(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✔ (P) Fetched posts for ${user.name}`);
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

function fetchCommentsP(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✔ (P) Fetched comments for ${post}`);
      resolve(["Comment A", "Comment B"]);
    }, 1000);
  });
}

// --------------------------------
// ✅ FIXED: Promise chaining
// --------------------------------
console.log("Starting Promises...");

fetchUserP(1)
  .then((user) => fetchPostsP(user))
  .then((posts) => fetchCommentsP(posts[0]))
  .then((comments) => {
    console.log("Final Result (Promises):");
    console.log(comments);
  });


//Asynce/Await example code

async function loadData() {
  console.log("Starting async/await...");

  const user = await fetchUserP(1);
  const posts = await fetchPostsP(user);
  const comments = await fetchCommentsP(posts[0]);

  console.log("Final Result (async/await):");
  console.log({ user, posts, comments });
}

loadData();


//Async/ Await with try/catch

async function loadDataWithErrorHandling() {
  try {
    console.log("Starting async/await with error handling...");

    const user = await fetchUserP(1);
    const posts = await fetchPostsP(user);
    const comments = await fetchCommentsP(posts[0]);

    console.log("Final Result (async/await with error handling):");
    console.log({ user, posts, comments });
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

loadDataWithErrorHandling();