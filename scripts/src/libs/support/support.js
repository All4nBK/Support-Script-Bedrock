import {Entity, EntityEquippableComponent, EquipmentSlot, Player, world} from '@minecraft/server';

/**
 * @typedef {Object} Type
 * @property {'return'|'returnNumber'|'add'|'set'|'remove'} Type.return
 * @property {number} Type.value
 */
/**
 * 
 * @param {Entity} entity 
 * @param {Object} scoreboard 
 * @param {Type} type 
 */
export function scoreboard(entity,scoreboard,type) {
    const objective = world.scoreboard.getObjective(scoreboard);
    let result;
    switch (type.return) {
        case 'return':
            result = objective;
            break;
        case 'returnNumber':
            result = objective.getScore(entity);
            break;
        case 'add':
            result = objective.addScore(entity, type.value);
            break;
        case 'set':
            result = objective.setScore(entity, type.value);
            break;
        case 'remove':
            result = objective.addScore(entity, -type.value);
            break;
    }
    return result;
};

/**
 * 
 * @param {Player} player 
 * @param {object|string} message 
 */
export function actionbar(player,message) {
    player.onScreenDisplay.setActionBar(message)
}

/**
 * 
 * @param {Array} message 
 */
export function debug(message){
    message.forEach((msg) => {
        world.sendMessage(`${msg};`)
    })
}

/**
 * @typedef {Object} Slot
 * @property {'mainhand'|'offhand'|'helmet'|'chestplace'|'leggings'|'boots'} Slot.slot
 */
/**
 * @param {Player} player
 * @param {Slot} slot
 */
export function getItem(player,slot){
    let result;
    /**
     * @type {EntityEquippableComponent}
     */
    const componet = player.getComponent('minecraft:equippable');
    switch (slot.slot) {
        case 'mainhand':
            const mainhand = componet.getEquipment(EquipmentSlot.Mainhand);
            if (mainhand ?? false) {
                result = mainhand;
            }
            break
        case 'offhand':
            const offhand = componet.getEquipment(EquipmentSlot.Offhand);
            if (offhand ?? false) {
                result = offhand;
            }
            break
        case 'helmet':
            const helmet = componet.getEquipment(EquipmentSlot.Head);
            if (helmet ?? false) {
                result = helmet;
            }
            break
        case 'chestplace':
            const chestplace = componet.getEquipment(EquipmentSlot.Chest);
            if (chestplace ?? false) {
                result = chestplace;
            }
            break
        case 'leggings':
            const leggings = componet.getEquipment(EquipmentSlot.Legs);
            if (leggings ?? false) {
                result = leggings;
            }
            break
        case 'boots':
            const boots = componet.getEquipment(EquipmentSlot.Feet);
            if (boots ?? false) {
                result = boots;
            }
            break
    }
    
}
