const genres = [
  { id: 'gen01', name: 'Action' },
  { id: 'gen02', name: 'Adventure' },
  { id: 'gen03', name: 'Animation' },
  { id: 'gen04', name: 'Biography' },
  { id: 'gen05', name: 'Comedy' },
  { id: 'gen06', name: 'Crime' },
  { id: 'gen07', name: 'Documentary' },
  { id: 'gen08', name: 'Drama' },
  { id: 'gen09', name: 'Family' },
  { id: 'gen10', name: 'Fantasy' },
  { id: 'gen11', name: 'Film-Noir' },
  { id: 'gen12', name: 'History' },
  { id: 'gen13', name: 'Horror' },
  { id: 'gen14', name: 'Music' },
  { id: 'gen15', name: 'Musical' },
  { id: 'gen16', name: 'Mystery' },
  { id: 'gen17', name: 'Romance' },
  { id: 'gen18', name: 'Sci-Fi' },
  { id: 'gen19', name: 'Short' },
  { id: 'gen20', name: 'Sport' },
  { id: 'gen21', name: 'Thriller' },
  { id: 'gen22', name: 'War' },
  { id: 'gen23', name: 'Western' },
];

const actors = [
  { id: 'act01', name: 'Tim Robbins' },
  { id: 'act02', name: 'Morgan Freeman' },
  { id: 'act03', name: 'Bob Gunton' },
  { id: 'act04', name: 'Mark Wahlberg' },
  { id: 'act05', name: 'Johnny Depp' },
  { id: 'act06', name: 'Orlando Bloom' },
  { id: 'act07', name: 'Keira Knightley' },
  { id: 'act08', name: 'Geoffrey Rush' },
  { id: 'act09', name: 'Jack Davenport' },
  { id: 'act10', name: 'Jonathan Pryce' },
  { id: 'act11', name: 'Lee Arenberg' },
  { id: 'act12', name: 'Bill Nighy' },
  { id: 'act13', name: 'Sandra Bullock' },
  { id: 'act14', name: 'Cate Blanchett' },
  { id: 'act15', name: 'Anne Hathaway' },
  { id: 'act16', name: 'Helena Bonham Carter' },
  { id: 'act17', name: 'Meryl Streep' },
  { id: 'act18', name: 'Tom Hanks' },
  { id: 'act19', name: 'Robin Wright' },
  { id: 'act20', name: 'Gary Sinise' },
  { id: 'act21', name: 'Reese Witherspoon' },
  { id: 'act22', name: 'Amy Adams' },
  { id: 'act23', name: 'Maggie Gyllenhaal' },
  { id: 'act24', name: 'Helen Mirren' },
  { id: 'act25', name: 'Julianne Moore' },
  { id: 'act26', name: 'Nicole Kidman' },
  { id: 'act27', name: 'Emma Stone' },
  { id: 'act28', name: 'Jennifer Aniston' },
  { id: 'act29', name: 'Scarlett Johansson' },
  { id: 'act30', name: 'Charlize Theron' },
];

const movies = [
  {
    id: 'mov01',
    title: 'The Shawshank Redemption',
    year: 1994,
    plot: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    actors: [
      actors[0],
      actors[1],
      actors[2]
    ],
    genres: [genres[5], genres[7]],
  },
  {
    id: "mov02",
    title: "John Wick: Chapter 4",
    year: 2023,
    plot: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    actors: [
      actors[3],
      actors[4],
      actors[5]
    ],
    genres: [genres[5], genres[7]],
  }
];

module.exports = {
  genres,
  actors,
  movies
}