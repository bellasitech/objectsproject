const characters = [
    { name: "Melanie", media: "Regretevator", species: "Tv Head", gender: "Girl", pronouns: "She/they", age: "Young adult", isOC: false },
    { name: "Battat", media: "Deltarune", species: "Die", gender: "Guy", pronouns: "He/him", "Adult", isOC: false },
    { name: "Scag", media: "Regretevator", species: "Computer", gender: "Girl", pronouns: "She/they", age: "Adult", isOC: false },
    { name: "Kris", media: "Deltarune", species: "Human", gender: "Non-binary", pronouns: "They/them", age: "Teen", isOC: false  },
    { name: "Gambit", media: "X-men", species: "Mutant", gender: "Guy", pronouns: "He/him", age:"Adult", isOC: false },
    { name: "Adachi Rei", media: "Vocal Synth", species: "Robot", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: false },
    { name: "Vyren", media: "Astrolina", species: "Alien", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: true },
    { name: "Valarie Lin", media: "Demon and Alien", species: "Human", gender: "Girl", pronouns: "She/any", age:"Young adult", isOC: true },
    { name: "Leo", media: "Astrolina", species: "Alien", gender: "Guy", pronouns: "He/him", age:"Adult", isOC: true },
    { name: "Vyren", media: "Astrolina", species: "Alien", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: true },
    { name: "Gumi Megpoid", media: "Vocal Synth", species: "Human", gender: "Girl", pronouns: "She/her", age:"Adult", isOC: false },
    { name: "Tenna", media: "Deltarune", species: "Tv Head", gender: "Guy", pronouns: "He/him", age: "Adult", isOC: false },
    { name: "Rogue", media: "X-men", species: "Mutant", gender: "Girl", pronouns: "She/her", age: "Adult", isOC: false },
    { name: "Forest", media: "Astrolina", species: "Human", gender: "Guy", pronouns: "He/him", age: "Adult", isOC: true },
    { name: "Kasane Teto", media: "Vocal Synth", species: "Chimera", gender: "Girl", pronouns: "She/they", age: "Adult", isOC: false },
    { name: "Prototype", media: "Regretevator", species: "Robot", gender: "Non-binary", pronouns: "He/they", age: "Young adult", isOC: false },
    { name: "Queen", media: "Deltarune", species: "Robot", gender: "Girl", pronouns: "She/her", age: "Adult", isOC: false },
    { name: "Alice", media: "Astrolina", species: "Human", gender: "Girl", pronouns: "She/her", age: "Adult", isOC: true },
    { name: "Infected", media: "Regretevator", species: "Human", gender: "Guy", pronouns: "He/any", age: "Young adult", isOC: false },
    { name: "Kagamine Rin", media: "Vocal Synth", species: "Human", gender: "Girl", pronouns: "She/her", age: "Young adult", isOC: false },
]

const CertainMedia = characters.filter(function(mediaa){
    return characters.media === mediaa;
});

co