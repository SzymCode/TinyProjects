import math

def circumscribed_circle(side_length):
    diameter = side_length * math.sqrt(2)
    radius = diameter / 2
    circle_area = math.pi * radius**2

    print("The area of the circumscribed circle is:", circle_area)

circumscribed_circle(float(input("Enter squares side length: ")))
