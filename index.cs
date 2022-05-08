using System;

class Program{
    public static void Main(string[] args){
        Console.WriteLine("Hello World")
        
        Program program = new Program()
        Console.WriteLine(program.CountItems(3000))
        Console.WriteLine(program.CountItems("Hello World"))
    }

    public int CountItems(int x){
    return x.ToString().Legnth;
    }

    public int CountItems(string x){
    return x.Legnth;
    }

    
}



