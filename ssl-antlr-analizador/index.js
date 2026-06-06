import RepetirLexer from "./generated/RepetirLexer.js";
import RepetirParser from "./generated/RepetirParser.js";
import { CustomRepetirVisitor } from "./CustomRepetirVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";

try {
    const input = fs.readFileSync("input.txt", "utf8");

    let inputStream = CharStreams.fromString(input);
    let lexer = new RepetirLexer(inputStream);

    console.log("\nTABLA DE TOKENS");
    console.log("----------------");

    let token = lexer.nextToken();

    while (token.type !== antlr4.Token.EOF) {
        console.log(`Token ${token.type}\t=>\t${token.text}`);
        token = lexer.nextToken();
    }

    lexer.reset();

    let tokenStream = new CommonTokenStream(lexer);
    let parser = new RepetirParser(tokenStream);

    let tree = parser.programa();

    if (parser.syntaxErrorsCount > 0) {
        console.error("Se encontraron errores de sintaxis.");
    } else {
        console.log("\nEntrada válida.");

        console.log("\nÁRBOL DE DERIVACIÓN");
        console.log("-------------------");
        console.log(tree.toStringTree(parser.ruleNames));

        console.log("\nEJECUCIÓN");
        console.log("---------");

        const visitor = new CustomRepetirVisitor();
        visitor.visit(tree);
    }

} catch (err) {
    console.error(err);
}