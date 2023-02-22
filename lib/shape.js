import fs from 'fs'

class Shape {
    constructor(polygon, text){
        this.polygon = polygon
        this.text = text
    }
    render(){
        return `<svg version="1.1" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">${this.polygon}${this.text}</svg>`
    }
    saveLogo(){
        var content = this.render()
        var file = `./examples/logo-${Date.now()}.svg`
        fs.writeFile(file, content, err => {
            if (err) {
              console.error(err);
            }
        });
        console.log(`\nGenerated your logo - ${file}\n`);
    }
}



export class Circle extends Shape {
    constructor(shape_color, text_color, text_val){
        var polygon = `<circle cx="150" cy="100" r="80" fill="${shape_color}" />`
        var text = `<text x="50%" y ="50%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="${text_color}">${text_val}</text>`
        super(polygon, text)
    }
}

export class Square extends Shape{
    constructor(shape_color, text_color, text_val){
        var polygon = `<rect x="75" y="25" width="150" height="150" fill="${shape_color}" />`
        var text = `<text x="50%" y ="50%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="${text_color}">${text_val}</text>`
        super(polygon, text)
    }
}

export class Triangle extends Shape {
    constructor(shape_color, text_color, text_val){
        var polygon = `<polygon points="150 0, 275 200, 25 200" fill="${shape_color}"/>`
        var text = `<text x="50%" y ="60%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="${text_color}">${text_val}</text>`
        super(polygon, text)
    }
}
