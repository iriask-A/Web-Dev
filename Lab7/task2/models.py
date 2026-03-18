class Animal:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    def voice(self):
        return "The animal is making noises..."
    def move(self):
        return "The animal is moving."
    def __str__(self):
        return f"{self.name} is {self.age} years old and {self.weight} kg"
class Cat(Animal):
    def __init__(self, name, age, weight, color):
        super().__init__(name,age,weight)
        self.color = color
    def Color_cat(self, color):
        return "Color is "+ color
    def voice(self):
        return "Meow..."
    def move(self):
        return "The cat is moving."
class Dog(Animal):
    def __init__(self, name, age, weight, specie):
        super().__init__(name,age,weight)
        self.specie = specie
    def voice(self):
        return "Bark Bark..."
    def move(self):
        return "The dog is moving."
    def specie_type(self, specie):
        return f"The dog species type is {specie}"
