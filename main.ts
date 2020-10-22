let height = 0
let short_person = 0
let medium_person = 0
let tall_person = 0
let total = 0
let average = 0
let dice_number = 0
let team_green = 0
let team_blue = 0
let team_red = 0
let numbers = 0
let pairs = 0
let number_even = 0
let number_odd = 0
let angle = 0
let obtuse = 0
let x = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 30; index++) {
        height = randint(1, 100)
        basic.showNumber(height)
        if (height <= 150) {
            basic.showNumber(height)
            basic.showString("short person ")
            short_person += 1
        } else if (height >= 151 && height <= 170) {
            basic.showNumber(height)
            basic.showString("medium height ")
            medium_person += 1
        } else {
            basic.showNumber(height)
            basic.showString("tall person")
            tall_person += 1
        }
        basic.showNumber(short_person)
        basic.showString("short persons ")
        basic.showNumber(medium_person)
        basic.showString("medium persons ")
        basic.showNumber(tall_person)
        basic.showString("tall persons")
        total += height
        average = total / 30
        basic.showNumber(average)
    }
})
input.onButtonPressed(Button.A, function () {
    dice_number = randint(1, 6)
    basic.showNumber(dice_number)
    if (dice_number == 1 || dice_number == 3) {
        basic.showString("team green ")
        team_green += 1
    } else if (dice_number == 2 || dice_number == 5) {
        basic.showString("team blue")
        team_blue += 1
    } else {
        basic.showString("team red ")
        team_red += 1
    }
    basic.showNumber(team_green)
    basic.showString("team green ")
    basic.showNumber(team_blue)
    basic.showString("team blue ")
    basic.showNumber(team_red)
    basic.showString("team red  ")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        numbers = randint(1, 100)
        basic.showNumber(numbers)
        pairs = numbers % 2
        if (pairs <= 0) {
            basic.showString("even!")
            number_even += 1
        } else {
            basic.showString("odd!")
            number_odd += 1
        }
    }
    basic.showNumber(number_even)
    basic.showString("even")
    basic.showNumber(number_odd)
    basic.showString("odd")
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 10; index++) {
        angle = randint(0, 180)
        if (angle < 90) {
            basic.showString("acute")
        } else if (angle == 90) {
            basic.showString("straight ")
        } else if (angle > 90) {
            basic.showString("obtuse ")
            obtuse += 1
        }
    }
    basic.showString("obtuse")
    basic.showNumber(obtuse)
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P2)) {
        x = randint(0, 5)
        y = randint(0, 5)
        led.plot(x, y)
        basic.pause(300)
        if (x == y) {
            music.playMelody("E B C5 A B G A F ", 222)
        } else {
            music.playTone(392, music.beat(BeatFraction.Double))
        }
        led.unplot(x, y)
    }
})
