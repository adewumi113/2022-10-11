//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F */
const abbrevName = name =>
  name
    .split` `   //use split() method to split the array into two elements
    .map(part => part[0].toUpperCase()) //use map to select the first letter of each element
    .join('.') //join the two selection together by using join() method, include . to show . between the two letters.

    
