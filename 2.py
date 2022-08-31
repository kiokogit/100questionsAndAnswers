# 2. Print the odd numbers less than 100
print([x for x in range(101) if x%2!=0])
# OR
for i in range(0,101):
    if i%2!=0:
        print(i) 