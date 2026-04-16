/**
 * Component routing system
 * CustomId structure:
 * type:system:userId:extraData
 */
function handleInteraction(interaction, client) {
    const [type, system, userId] = interaction.customId.split(':')

    // security: only the owner can use it
    if (userId && interaction.user.id !== userId) {
        return interaction.reply({ content: 'Not your interaction', ephemeral: true })
    }

    switch (type) {
        case 'button':
            return client.buttons.get(system)?.execute(interaction)

        case 'menu':
            return client.menus.get(system)?.execute(interaction)

        case 'modal':
            return client.modals.get(system)?.execute(interaction)
    }
}
