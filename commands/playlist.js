const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("fritação e workout"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/0kVGuty6KTamaSLE4c5kks?si=06c35c3c5a34451e")
    }
}