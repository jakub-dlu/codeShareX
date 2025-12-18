export const languageTemplates: Record<string, string> = {
javascript: `function greet(name) {
  console.log("Hello, " + name + "!");
}

//some comment
greet("World");`,
  
typescript: `function greet(name: string): void {
  console.log("Hello, " + name + "!");
}

//some comment
greet("World");`,
  
python: `def greet(name):
    print(f"Hello, {name}!")

# some comment
greet("World")`,
  
java: `public class Main {
  public static void main(String[] args)
  {
    System.out.println("Hello, World!");
  }
  
  // some comment
}`,
  
"c++": `#include <iostream>
using namespace std;
  
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
  
go: `package main
import "fmt"
  
func main() {
    fmt.Println("Hello, World!")
}`,
  
ruby: `def greet(name)
    puts "Hello, #{name}!"
  end
  
  greet("World")`,
  
html: `<!-- HTML - startup -->
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`,
};