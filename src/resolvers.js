const Character = require('./models/character');
const Location = require('./models/location');
const Episode = require('./models/episode');
const mongoose = require('mongoose');
const resolvers = {
    Query: {
        characters: async (_, args) => {
            const characterList = await Character.find().skip(args.page).limit(20).exec();
            return characterList;
        },
        character: async (_, args) => {
            let character = await Character.findById(args.id);
            if (null != character) {
                let location = await Location.findById(character.location);
                let origin = await Location.findById(character.origin)
                character.location.name = location.name;
                character.origin.name = origin.name;
            }
            return character
        },

        locations: async (_, args) => {
            const locationsList = await Location.find().skip(args.page).limit(20).exec();
            return locationsList;
        },
        location: async (_, args) => {
            let location = await Location.findById(args.id);
            return location
        },

        episodes: async (_, args) => {
            const episodeList = await Episode.find().skip(args.page).limit(20).exec();
            return episodeList;
        },
        episode: async (_, args) => {
            let episode = await Episode.findById(args.id);
            return episode
        }
    },

    Mutation: {
        createCharacter: async (_, args) => {
            const {name, status, species, type, gender, origin, location, image, episode, created} = args.character;

            const id = new mongoose.Types.ObjectId();

            const newCharacter = new Character({
                name: name, 
                status: status, 
                species: species, 
                type: type, 
                gender: gender, 
                image: image, 
                episode: episode,
                origin: origin,
                location: location,
                created: created,
                _id: id
            });
            await newCharacter.save();
            return newCharacter
        },

        deleteCharacter: async (_, args) => {
            let character = await Character.findByIdAndDelete(args.id);
            return "Personaje eliminado"
        },

        updateCharacter: async (_, args) => {
            let {id, character} = args;
            let characterUpdated = await Character.findByIdAndUpdate(id, {$set: character}, {new: true});
            return characterUpdated
        }


    }
}

module.exports = {resolvers};