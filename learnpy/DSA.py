# def is_alphanumeric(char):
#     code = ord(char)

#     # numeric (0-9)
#     if not (48 <= code <= 57) and \
#        not (65 <= code <= 90) and \
#        not (97 <= code <= 122):
#         return False
#     return True

# def char_count(s):
#     result = {}

#     for char in s:
#         if is_alphanumeric(char):
#             char = char.lower()
#             result[char] = result.get(char, 0) + 1

#     return result

# print(char_count("Anurag @ Gupta"))



def valid_anagram(first, second):
    if len(first) != len(second):
        return False
    lookup= {}
    for letter in first:
        letter = letter.lower()
        lookup[letter] = lookup.get(letter, 0) + 1
    for letter in second:
        letter = letter.lower()
        if lookup.get(letter, 0) == 0:
            return False
        lookup[letter] -= 1
    return  True
print(valid_anagram('Anurag', 'garunA'))
    