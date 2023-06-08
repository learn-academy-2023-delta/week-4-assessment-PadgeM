# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def even_or_odd(number)
  if number % 2 == 0
    "#{number} is even"
  else
    "#{number} is odd"
  end
end


result1 = even_or_odd(reposts1)
puts result1  # Output: '7 is odd'


result2 = even_or_odd(reposts2)
puts result2  # Output: '42 is even'


result3 = even_or_odd(reposts3)
puts result3  # Output: '221 is odd'




# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels(string)
  string.delete('aeiouAEIOU')
end


result1 = remove_vowels(beatles_album1)
puts result1  # Output: 'Rbbr Sl'


result2 = remove_vowels(beatles_album2)
puts result2  # Output: 'Sgt Pppr'


result3 = remove_vowels(beatles_album3)
puts result3  # Output: 'bby Rd'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def palindrome?(string)
  normalized_string = string.downcase
  reversed_string = normalized_string.reverse
  if normalized_string == reversed_string
    "#{string} is a palindrome"
  else
    "#{string} is not a palindrome"
  end
end



result1 = palindrome?(palindrome_test_case1)
puts result1  # Output: 'Racecar is a palindrome'


result2 = palindrome?(palindrome_test_case2)
puts result2  # Output: 'LEARN is not a palindrome'


result3 = palindrome?(palindrome_test_case3)
puts result3  # Output: 'Rotator is a palindrome'
