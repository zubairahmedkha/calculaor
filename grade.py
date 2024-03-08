def grade_system(score):
  if score >= 90:
    return 'A'
  elif score >= 80:
    return 'B'
  elif score >= 70:
    return 'C'
  elif score >= 60:
    return 'D'
  else:
    return 'F'

score = int(input('Enter your score: '))
print('Your grade is:', grade_system(score))
