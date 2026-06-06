import RepetirVisitor from "./generated/RepetirVisitor.js";

export class CustomRepetirVisitor extends RepetirVisitor {

    visitPrograma(ctx) {
        return this.visitChildren(ctx);
    }

    visitRepeticion(ctx) {
        console.log("Se encontró una repetición");
        return this.visitChildren(ctx);
    }

    visitSalida(ctx) {
        const texto = ctx.CADENA().getText();

        console.log(
            texto.substring(1, texto.length - 1)
        );

        return null;
    }
}