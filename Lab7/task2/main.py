from models import Cat,Dog
def main():
    Murka = Cat("Murka",2,7,"white")
    Barsik = Dog("Barsik",7,21,"poodle")
    li = [Murka,Barsik]
    for item in li:
        print(item)
        print(item.voice())
        print(item.move())
        if isinstance(item, Dog):
            print(item.specie_type("Poodle"))
        elif isinstance(item, Cat):
            print(item.Color_cat("White"))

        print("---------------")
if __name__ == "__main__":
    main()