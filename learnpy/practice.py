# # Adding two number
# a = int(input("enter"))
# b = int(input("enter"))
# c = a +b
# print(c)


##Square Root 
# num1 = int(input("Enter a number"))
# sr = num1**(1/2)
# print(sr)

# import math
# num = int(input("Enter a number"))
# sr = math.sqrt(num)
# print(sr)

##Calculate area of triangle
# h = float(input("enter"))
# b = float(input("enter"))
# area = (0.5)*b*h
# print(area)



##Swap Tow Variable ( 3 methods to swap a number)
# a = 10
# b = 20
# b = b - a
# a = a + b
# print("a is",a,"b is",b)

# a = 10
# b = 20
# temp = a
# a = b
# b =temp
# print(a,b)

# a = 10
# b = 20
# a,b = b,a
# print("a is",a,"b is",b)

##Convert km to miles
# km = float(input("enter a value in kms: "))
# miles = (0.621371)*km
# print(km, "kms will be", miles, "miles")


# #check if a number is postive, negative  or zero
# num = 0
# if num > 0:
#     print("Postive")
# elif num == 0:
#     print("Equal to zero")
# else:
#     print("Negative")
    
    
# # Odd Even
# num = 13
# if num % 2 == 0:
#     print("Number is even")
# else:
#     print("Odd number")

# num = float(input("Enter number"))
# if num % 2 == 0:
#     print("Number is even")
# else:
#     print("Odd number")


#Check Leap Year
year = int(input("enter a year: "))
if(year % 400 == 0) and (year % 100 == 0):
    print(year,"is a leap year")
elif(year % 4 == 0)and(year % 100 != 0):
    print(year, "is a leap year")
else:
    print(year,"not a leap year")