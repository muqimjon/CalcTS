interface IStack<T> {
    size(): number;
    push(item: T): void;
    pop(): T | undefined;
    isEmpty(): boolean
}

class Stack<T> implements IStack<T> {
    #collect: Array<T> | undefined;
    #size: number = 0;
    
    size(): number{
        return this.#size;
    }
    
    push(item: T):void {
        this.#collect?.push(item);
        this.#size++;
    }
    
    pop(): T | undefined {
        if(this.#size = 0)
            return;

        this.#size--;
        return this.#collect?.pop();
    }
    
    isEmpty(): boolean {
        return this.#size === 0;
    }
}

const add = (a: number, b: number): number => a + b;
const sub = (a: number, b: number): number => a - b;
const mul = (a: number, b: number): number => a * b;
const div = (a: number, b: number): number => {
    if(b != 0)
        return a / b;

    console.log("Nolga bo'lishga urunilmoqda!");
    return NaN;
}


function evaluateExpression(expression: string): number | null {
    try {
      return eval(expression);
    } catch (error) {
      console.error("Invalid expression");
      return null;
    }
  }
  
  // Misol: "6 + 9 + 2 * 4 + 9" ifodasini hisoblash
  const expression = "6 + 9 + 2 * 4 + 9";
  const result = evaluateExpression(expression);
  if (result !== null) {
    console.log(`Natija: ${result}`);
  }
  