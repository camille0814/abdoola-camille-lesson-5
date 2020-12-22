while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 12) {
        light.clear()
    } else if (input.lightLevel() >= 6) {
        light.setAll(light.rgb(0, 255, 0))
    } else {
        light.setAll(light.rgb(255, 255, 0))
    }
    
}
