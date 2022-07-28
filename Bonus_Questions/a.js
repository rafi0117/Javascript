// true == "true" //--> false

// true >= "false"//--> false

// true <= "true"//--> false

// true == "false"//--> false

// true <= "false"//--> false

// false >= "true"//--> false

// false <= "false"//--> false

// false == "true"//--> false

// false == "false"//--> false

// false < "true"//--> false

// true > "true"//--> false

// true < "true"//--> false

//If the two operands are not of the same type, JavaScript converts 
//the operands then applies strict comparison. If either operand is a number or a boolean, 
//the operands are converted to numbers if possible; else if either operand is a string, the other 
//operand is converted to a string if possible.