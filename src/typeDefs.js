const {gql} = require('apollo-server-express');

const typeDefs = gql`

    type Character {
        id: String,
        name: String,
        status: String,
        species: String,
        type: String,
        gender: String,
        origin: Location,
        location: Location,
        image: String,
        episode: [String],
        created: String 
    }

    type Episode {
        id: String,
        name: String,
        air_date: String,
        episode: String,
        characters: [Character],
        created: String,
    }

    type Location {
        id: String,
        name: String,
        type: String,
        dimension: String,
        residents: [Character],
        created: String,
    }

    type Query {
        characters(page: Int): [Character]
        character(id: String): Character

        locations(page: Int): [Location]
        location(id: String): Location

        episodes(page: Int): [Episode]
        episode(id: String): Episode
    }

    input CharacterInput {
        name: String, 
        status: String, 
        species: String, 
        type: String, 
        gender: String, 
        origin: String, 
        location: String, 
        image: String, 
        episode: [String], 
        created: String
    }

    type Mutation {
        createCharacter(character: CharacterInput): Character

        deleteCharacter(id: String): String

        updateCharacter(id: String, character: CharacterInput): Character
    }
`

module.exports = {typeDefs}