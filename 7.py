# 7. Calculate the sum of even numbers greater than 10 and less than 30
sum=0
for i in range(10,31):
    if i%2==0:
        sum+=i

print(sum)

# OR
sum2=0
for i in range(10,31):
    if i%2!=0:
        continue
    sum+=i