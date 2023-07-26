import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('原神')
    .setDescription('啟動原神')

export const action = async(ctx) => {
    ctx.reply('啟動!')
}
