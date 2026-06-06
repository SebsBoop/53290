grammar Repetir;

programa
    : instruccion+ EOF
    ;

instruccion
    : repeticion
    ;

repeticion
    : 'repetir' '{' sentencia+ '}' 'hasta' condicion ';'
    ;

sentencia
    : salida+
    | terminar
    ;

salida
    : 'imprimir' '(' CADENA ')' ';'
    ;

terminar
    : 'salir' ';'
    ;

condicion
    : 'verdadero'
    | 'falso'
    ;

CADENA
    : '"' (~["\r\n])* '"'
    ;

WS
    : [ \t\r\n]+ -> skip
    ;