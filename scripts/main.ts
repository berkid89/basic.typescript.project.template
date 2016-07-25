/// <reference path="../typings/globals/jquery/index.d.ts" />

export class Greeter {
    public Text: string;

    public constructor(text: string){
        this.Text = text;

        $('#test').text(this.Text);
    }
}