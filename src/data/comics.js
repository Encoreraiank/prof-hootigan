export const comicSeries = {
  id: "catastrophe-club",
  title: "Catastrophe Club",
  subtitle: "Small Tails, Big Adventures.",
  tagline: "The Daily Grind of Being Feline",
  description: "Follow the heartwarming and chaotic escapades of two cat companions navigating everyday struggles, rejection factories, and cozy coffee moments together.",
  cover: "./assets/banners/home-hero.png",
  seasons: [
    {
      seasonNumber: 1,
      title: "Season 1",
      theme: "The Daily Grind of Being Feline",
      episodesCount: 3
    }
  ]
};

export const comics = [
  {
    id: "ep-01",
    season: 1,
    episodeNumber: 1,
    episodeCode: "EP 01",
    title: "A Rough Day",
    shortDescription: "Some days just feel heavier than usual... until a friend shows up with coffee and a kind reminder.",
    cover: "./assets/comics/catastrophe-club/ep-01/cover.png",
    strip: "./assets/comics/catastrophe-club/ep-01/strip.png",
    releaseDate: "September 2026",
    readingTime: "1 min",
    likes: 342,
    stickyNote: "Rough days are part of the story. You're doing better than you think. ♡",
    characters: ["Black Cat", "Cream Cat"]
  },
  {
    id: "ep-02",
    season: 1,
    episodeNumber: 2,
    episodeCode: "EP 02",
    title: "The Rejection Factory",
    shortDescription: "Where do all the rejection emails actually go? Deep inside the mechanized factory, our duo mounts a laser-powered rescue.",
    cover: "./assets/comics/catastrophe-club/ep-02/cover.png",
    strip: "./assets/comics/catastrophe-club/ep-02/strip.png",
    releaseDate: "September 2026",
    readingTime: "1 min",
    likes: 418,
    stickyNote: "Different Ideas. Brighter Days. ♡",
    characters: ["Black Cat", "Cream Cat", "Rejection Bot"]
  },
  {
    id: "ep-03",
    season: 1,
    episodeNumber: 3,
    episodeCode: "EP 03",
    title: "The Brighter Tomorrow",
    shortDescription: "What happens when you press the big mysterious green button? Rebooting the system turns rejections into brand new opportunities!",
    cover: "./assets/comics/catastrophe-club/ep-03/cover.png",
    strip: "./assets/comics/catastrophe-club/ep-03/strip.png",
    releaseDate: "September 2026",
    readingTime: "1 min",
    likes: 529,
    stickyNote: "Teamwork always wins! On to more adventures. ♡",
    characters: ["Black Cat", "Cream Cat", "Friendly Bot"]
  }
];
