# import random


# def quick_sort(arr):
#     if len(arr) <= 1:
#         return arr
#     else:
#         pivot = arr[0]
#         less_than_pivot = [x for x in arr[1:] if x <= pivot]
#         greater_than_pivot = [x for x in arr[1:] if x > pivot]
#         return quick_sort(less_than_pivot) + [pivot] + quick_sort(greater_than_pivot)


# random_numbers = [random.randint(1, 100) for _ in range(10)]

# print("원본 배열:", random_numbers)
# sorted_numbers = quick_sort(random_numbers)
# print("정렬된 배열:", sorted_numbers)

# def quick_sort(arr):
#     if len(arr) <= 1:
#         return arr

#     pivot = arr[len(arr) // 2]
#     left = [x for x in arr if x < pivot]
#     middle = [x for x in arr if x == pivot]
#     right = [x for x in arr if x > pivot]

#     return quick_sort(left) + middle + quick_sort(right)

# if __name__ == "__main__":
#     arr = [3, 6, 8, 10, 1, 2, 1]
#     sorted_arr = quick_sort(arr)
#     print(sorted_arr)

# org = "You are so Great!!!"

# print("원본 문장 : ", org)

# encoded_sentence = ""
# for char in org:
#     ascii_code = ord(char)
#     encoded_code = ascii_code + 8
#     encoded_sentence += chr(encoded_code)

# print("암호 문장 : ", encoded_sentence)

# decoded_sentence = ""
# for char in encoded_sentence:
#     encoded_code = ord(char)
#     decoded_code = encoded_code - 8
#     decoded_sentence += chr(decoded_code)

# print("해석 문장 : ", decoded_sentence)

# import random

# def generate_lotto_numbers():
#     lotto_numbers = random.sample(range(1, 46), 6)
#     lotto_numbers.sort()
#     return lotto_numbers

# if __name__ == "__main__":
#     lotto_numbers = generate_lotto_numbers()
#     print("로또 번호:", lotto_numbers)

# import random

# my_numbers = []

# user_input = input("내 로또 번호를 입력하세요 (1부터 45 사이의 숫자, 쉼표로 구분하여 입력): ")
# input_numbers = user_input.split(',')

# for num_str in input_numbers:
#     try:
#         num = int(num_str.strip())
#         if 1 <= num <= 45 and num not in my_numbers:
#             my_numbers.append(num)
#         else:
#             print("올바른 범위의 숫자를 입력하거나 중복된 숫자를 피하세요.")
#     except ValueError:
#         print("올바른 숫자를 입력하세요.")

# winning_numbers = random.sample(range(1, 46), 6)

# matching_numbers = set(my_numbers).intersection(winning_numbers)
# matching_count = len(matching_numbers)

# if matching_count == 6:
#     result = "1등"
# elif matching_count == 5:
#     if 45 in my_numbers:
#         result = "2등"
#     else:
#         result = "3등"
# elif matching_count == 4:
#     result = "4등"
# elif matching_count == 3:
#     result = "5등"
# else:
#     result = "꽝"

# print("내 번호:", my_numbers)
# print("당첨 번호:", winning_numbers)
# print("일치하는 번호 개수:", matching_count)
# print("결과:", result)

import random

money = 10000

Su = money // 10000

lset = []

for su in range(Su):
    l = set()
    while len(l) < 6:
        l = 1 | (r.radint(1, 45))

        l = sorted(1)
        print("%3d %.24s" % su + 1, 1)

ol = set()


blodo = [[a, 0] for a in range(7)]

ds = 1

for i in lset:
    cnt = 0
    for b in range(6):
        if i(b) in ol:
            cnt += 1

if cnt:
    print("%3d %.24s %d등 당첨" % (ds, i, 7 - cnt))

blodo[cnt][i] += 1
ds += 1
