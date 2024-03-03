# Suport Script Bedrock

## This simple library adds additional functions to complete add-on development for Minecraft Bedrock Edition.

### The `scoreboard` function adds changes and returns to a specific scoreboard.
```js
//exemplo.js
world.getAllPlayers().forEach((player) => {
    if (player.hasTag('remove')) {
        scoreboard(player,'test',{return: 'remove', value: 1})
    } else if (player.hasTag('add')) {
        scoreboard(player,'test',{return: 'add', value: 1})
    } else if (player.hasTag('set')) {
        scoreboard(player,'test',{return: 'set', value: 1})
    } else if (player.hasTag('returnNumber')) {
        const scoreNumber = scoreboard(player,'test',{return: 'returnNumber'});
        player.sendMessage(`Scoreboard test: ${scoreNumber}`)
    }   else if (player.hasTag('returnNumber')) {
        const score = scoreboard(player,'test',{return: 'return'});
    }
})
```
### `actionbar` is a simple function that simplifies the use of onScreen.
```js
//exemple.js
world.getAllPlayers().forEach((player) => {
    let rawMessage = {
        translate: "accessibility.list.or.two",
        with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
    };
    actionbar(player,rawMessage);
})
world.afterEvents.playerJoin.subscribe((event) => {
    actionbar(player,'Hello World!')
})
```
### The `debug` function can be used to show your debug with array
```js
//exemple.js
debug([`${player.nameTag}`])
```
### The `getItem` function will return the object of the item that is in the last slot.
