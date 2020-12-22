while True:
    print("Light Level:" + input.light_level())
    if input.light_level() > 6:
        light.clear()
    elif input.light_level() < 6:
        light.set_all(light.rgb(0, 255, 0))
    else:
        light.set_all(light.rgb(255, 255, 0))
    