input.onGesture(Gesture.LogoUp, function () {
    蛇.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    蛇.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    蛇.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    蛇.change(LedSpriteProperty.X, 1)
})
let 蛇: game.LedSprite = null
蛇 = game.createSprite(2, 2)
let 點心 = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (蛇.isTouching(點心)) {
        game.addScore(1)
        點心.delete()
        basic.pause(100)
        點心 = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (game.score() == 10) {
        game.gameOver()
        music.playMelody("C D E F G A B C5 ", 500)
    }
})
