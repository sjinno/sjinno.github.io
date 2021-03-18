+++
title = "Bash"
date = 2020-12-03
+++

```bash
# 1. Print output into terminal
echo "Hello, world\!"


# 2. Take user input
read input ; echo "You typed $input."


# 3. Take user input in the same line
echo "Type something: \c" ; read input ; echo "You typed $input."
# or
echo -n "Type something: " ; read input ; echo "You typed $input."


# 4. If statement
echo -n "Enter a number: " ; read num
if [ $num -eq 100 ]
then
    echo "true"
else
    echo "false"
fi

# -gt: greater than
# -lt: less than
# -eq: equal to
# -ge: greater than or equal to
# -le: less than or equal to
# -ne: not equal to


# 5. While loop
count=1
target=10
while [ $count -ne $target ]
do
    echo "$count is still less than $target."
    ((count++))
done
echo "Now finally $count is equal to $target."


# 6. For loop
for num in {1..10}
do
    echo "$num"
done

# The following will output `1 11 21 31 41 51 61 71 81 91`.
for num in {1..100..10}
do
    echo -n "$num "
done


# 7. Date
date                             # Output: Thu Mar 18 10:56:29 AM PDT 2021
date +%H:%M:%S                   # Output: 10:57:14
date +"%dth %B, %Y"              # Output: 18th March, 2021
date --date='15 days'            # Output: Fri Apr  2 11:00:14 AM PDT 2021
date --date='15 days ago'        # Output: Wed Mar  3 10:00:22 AM PST 2021
date --date='5 hours 20 minutes' # Output: Thu Mar 18 04:21:33 PM PDT 2021
date -d "2021-04-01" +"%A"       # Output: Thursday

timediff() {
    START=`date -d $1 +%s`
    END=`date -d $2 +%s`
    ((diff=$END-$START))
    ((days=$diff/(60*60*24)))
    echo "The time escaped = $days days."
}

# The following should output `The time escaped = 282 days`.
timediff "2021-03-18" "2021-12-25"


# 8. Calendar
cal
#      March 2021
# Su Mo Tu We Th Fr Sa
#     1  2  3  4  5  6
#  7  8  9 10 11 12 13
# 14 15 16 17 18 19 20
# 21 22 23 24 25 26 27
# 28 29 30 31

# For more info, run `man cal`.


# 9. Operators
&&  # AND op
||  # OR op
...
```

[More bash programming stuff.](https://linuxhint.com/category/bash-programming/)
