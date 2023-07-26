import { REST, Routes } from 'discord.js'
import { async, fg } from 'fast-glob'
const updateSlashCommands = async (commands) => {
    const rest = new REST({ version: 10 }).setToken(process.env.TOKEN)
    const result = await rest.put(
        Routes.applicationGuildCommand(
            process.env.API,
            '983609869951172659',
        ),
        {
            body:commands,
        },
    )
    console.log(result)
}

export const loadCommands = async () => {
    const commands = []
    const files = await fg('./src/commands/**/index.js')
    for (const file of files) {
        const cmd = await import(file)
        console.log(cmd.command)
        commands.push(cmd.command)
    }
    await updateSlashCommands(commands)
}   