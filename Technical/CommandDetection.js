/**
 * Command detection system
 * Supports:
 * - Dynamic prefix per server
 * - Fallback prefix
 * - Bot mention (@bot command)
 */
async function handleMessage(message, client, prefix) {
    const prefixes = [prefix, 'I!'].filter(Boolean)

    // detect mention as prefix
    const mentionRegex = new RegExp(`^<@!?${client.user.id}>\\s+`)

    const used =
        prefixes.find(p => message.content.startsWith(p)) ||
        message.content.match(mentionRegex)?.[0]

    // if no valid prefix → not a command
    if (!used) return false

    const args = message.content
        .slice(used.length) // remove prefix or mention
        .trim()
        .split(/ +/)

    const commandName = args.shift()?.toLowerCase()

    // dynamic command resolution (name + aliases)
    const command =
        client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.alias?.includes(commandName))

    if (!command) return false

    await command.execute(message, args, client)

    return true
}
