import { getPosts, getTitles } from "./data-wrangling";

const testPosts = [
  {
    userId: 4,
    id: 38,
    title: "explicabo et eos deleniti nostrum ab id repellendus",
    body:
      "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
  },
  {
    userId: 4,
    id: 39,
    title: "eos dolorem iste accusantium est eaque quam",
    body:
      "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
  },
  {
    userId: 4,
    id: 40,
    title: "enim quo cumque",
    body:
      "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam"
  }
];

const titles = [
  "explicabo et eos deleniti nostrum ab id repellendus",
  "eos dolorem iste accusantium est eaque quam",
  "enim quo cumque"
];

describe("User Posts", () => {
  test("Return all posts by a specific user", () => {
    expect(getPosts(4)).toEqual(testPosts);
  });

  test("Return only titles of posts by UserId 4", () => {
    expect(getTitles(4)).toEqual(titles);
  });
});
