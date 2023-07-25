import { SlashCommandBuilder } from 'discord.js'
export default{
    command: new SlashCommandBuilder()
        .setName('原神')
        .setdescription('啟動原神'),
    action: async(ctx) => {
        ctx.reply('啟動!')
    }
}
