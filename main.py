def on_on_chat():
    shapes.circle(LIGHT_GRAY_GLAZED_TERRACOTTA,
        pos(10, 0, 0),
        5,
        Axis.X,
        ShapeOperation.REPLACE)
    shapes.circle(NOTE_BLOCK,
        pos(-10, 0, 0),
        5,
        Axis.X,
        ShapeOperation.REPLACE)
player.on_chat("1", on_on_chat)

def on_on_chat2():
    for index in range(13):
        agent.set_slot(3)
        agent.move(UP, 1)
        for index2 in range(10):
            agent.set_slot(3)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
    agent.move(UP, 1)
    for index3 in range(6):
        agent.set_slot(3)
        agent.place(DOWN)
        agent.move(FORWARD, 2)
    agent.teleport_to_player()
player.on_chat("up", on_on_chat2)

def on_on_chat3():
    for index4 in range(4):
        for index5 in range(2):
            agent.destroy(DOWN)
            agent.move(DOWN, 1)
        for index6 in range(20):
            agent.destroy(FORWARD)
            agent.destroy(DOWN)
            agent.set_slot(1)
            agent.place(DOWN)
            agent.destroy(UP)
            agent.set_slot(2)
            agent.place(UP)
            agent.move(FORWARD, 2)
        agent.turn(LEFT_TURN)
player.on_chat("tuneel", on_on_chat3)

def on_on_chat4():
    blocks.replace(AIR, ICE, pos(0, 0, -5), pos(0, 0, -11))
player.on_chat("ice", on_on_chat4)

def on_on_chat5():
    shapes.circle(LIME_SHULKER_BOX,
        pos(0, 0, 10),
        5,
        Axis.Z,
        ShapeOperation.REPLACE)
    shapes.circle(SEA_LANTERN,
        pos(0, 0, -10),
        5,
        Axis.Z,
        ShapeOperation.REPLACE)
player.on_chat("2", on_on_chat5)

def on_on_chat6():
    shapes.circle(POWDER_SNOW,
        pos(0, 10, 0),
        5,
        Axis.Y,
        ShapeOperation.REPLACE)
    shapes.circle(ENCHANTMENT_TABLE,
        pos(0, -10, 0),
        5,
        Axis.Y,
        ShapeOperation.REPLACE)
player.on_chat("3", on_on_chat6)

def on_on_chat7():
    agent.teleport_to_player()
player.on_chat("a", on_on_chat7)

def on_on_chat8():
    player.teleport(pos(0, 0, 0))
player.on_chat("start", on_on_chat8)

def on_on_chat9():
    blocks.print("w з", SHROOMLIGHT, pos(-5, 0, 0), WEST)
    blocks.print("E В", BOOKSHELF, pos(5, 0, 0), EAST)
    blocks.print("N с", ICE, pos(0, 0, -5), NORTH)
    blocks.print("S ю", CARVED_PUMPKIN, pos(0, 0, 5), SOUTH)
player.on_chat("compas", on_on_chat9)

def on_on_chat10():
    shapes.sphere(IRON_ORE, pos(15, 0, 0), 5, ShapeOperation.REPLACE)
    shapes.sphere(PLANKS_ACACIA, pos(15, 10, 0), 5, ShapeOperation.REPLACE)
    shapes.sphere(SMOOTH_SANDSTONE, pos(15, 20, 0), 5, ShapeOperation.REPLACE)
    shapes.sphere(LIME_WOOL, pos(15, 30, 0), 5, ShapeOperation.REPLACE)
player.on_chat("more", on_on_chat10)

def on_on_chat11():
    gameplay.set_game_mode(SURVIVAL, mobs.target(LOCAL_PLAYER))
player.on_chat("s", on_on_chat11)

def on_on_chat12():
    gameplay.set_game_mode(CREATIVE, mobs.target(LOCAL_PLAYER))
player.on_chat("c", on_on_chat12)
