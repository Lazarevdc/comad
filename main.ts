player.onChat("1", function () {
    shapes.circle(
    LIGHT_GRAY_GLAZED_TERRACOTTA,
    pos(10, 0, 0),
    5,
    Axis.X,
    ShapeOperation.Replace
    )
    shapes.circle(
    NOTE_BLOCK,
    pos(-10, 0, 0),
    5,
    Axis.X,
    ShapeOperation.Replace
    )
})
player.onChat("up", function () {
    for (let index = 0; index < 13; index++) {
        agent.setSlot(3)
        agent.move(UP, 1)
        for (let index = 0; index < 10; index++) {
            agent.setSlot(3)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
    }
    agent.move(UP, 1)
    for (let index = 0; index < 6; index++) {
        agent.setSlot(3)
        agent.place(DOWN)
        agent.move(FORWARD, 2)
    }
    agent.teleportToPlayer()
})
player.onChat("tuneel", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            agent.destroy(DOWN)
            agent.move(DOWN, 1)
        }
        for (let index = 0; index < 20; index++) {
            agent.destroy(FORWARD)
            agent.destroy(DOWN)
            agent.setSlot(1)
            agent.place(DOWN)
            agent.destroy(UP)
            agent.setSlot(2)
            agent.place(UP)
            agent.move(FORWARD, 2)
        }
        agent.turn(LEFT_TURN)
    }
})
player.onTravelled(SWIM_WATER, function () {
    mobs.applyEffect(WATER_BREATHING, mobs.target(LOCAL_PLAYER), 30, 1)
})
player.onChat("e", function () {
    mobs.clearEffect(mobs.target(LOCAL_PLAYER))
})
player.onChat("2", function () {
    shapes.circle(
    LIME_SHULKER_BOX,
    pos(0, 0, 10),
    5,
    Axis.Z,
    ShapeOperation.Replace
    )
    shapes.circle(
    SEA_LANTERN,
    pos(0, 0, -10),
    5,
    Axis.Z,
    ShapeOperation.Replace
    )
})
player.onItemInteracted(GOLD_INGOT, function () {
    mobs.applyEffect(SLOWNESS, mobs.target(LOCAL_PLAYER), 20, 1)
})
player.onChat("3", function () {
    shapes.circle(
    POWDER_SNOW,
    pos(0, 10, 0),
    5,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    ENCHANTMENT_TABLE,
    pos(0, -10, 0),
    5,
    Axis.Y,
    ShapeOperation.Replace
    )
})
player.onChat("a", function () {
    agent.teleportToPlayer()
})
player.onChat("compas", function () {
    blocks.print(
    "w з",
    SHROOMLIGHT,
    pos(-5, 0, 0),
    WEST
    )
    blocks.print(
    "E В",
    BOOKSHELF,
    pos(5, 0, 0),
    EAST
    )
    blocks.print(
    "N с",
    ICE,
    pos(0, 0, -5),
    NORTH
    )
    blocks.print(
    "S ю",
    CARVED_PUMPKIN,
    pos(0, 0, 5),
    SOUTH
    )
})
player.onChat("more", function () {
    shapes.sphere(
    IRON_ORE,
    pos(15, 0, 0),
    5,
    ShapeOperation.Replace
    )
    shapes.sphere(
    PLANKS_ACACIA,
    pos(15, 10, 0),
    5,
    ShapeOperation.Replace
    )
    shapes.sphere(
    SMOOTH_SANDSTONE,
    pos(15, 20, 0),
    5,
    ShapeOperation.Replace
    )
    shapes.sphere(
    LIME_WOOL,
    pos(15, 30, 0),
    5,
    ShapeOperation.Replace
    )
})
player.onItemInteracted(APPLE, function () {
    mobs.applyEffect(SPEED, mobs.target(ALL_PLAYERS), 10, 1)
})
player.onChat("s", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("c", function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
